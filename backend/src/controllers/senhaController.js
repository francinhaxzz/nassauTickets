// Importa a conexão com o banco de dados.
const pool = require("../config/database");

// Função responsável pela emissão de uma nova senha.
async function emitirSenha(req, res) {

    // Obtém o tipo de senha enviado pelo cliente.
    const { tipo } = req.body;

    // Define os tipos de senha permitidos pelo sistema.
    const tiposPermitidos = ["SP", "SG", "SE"];

    // Verifica se o tipo informado é válido.
    if (!tiposPermitidos.includes(tipo)) {

        // Retorna erro HTTP 400 caso o tipo seja inválido.
        return res.status(400).json({
            mensagem: "Tipo de senha inválido. Utilize SP, SG ou SE."
        });
    }

    // Variável que armazenará a conexão utilizada na transação.
    let connection;

    try {

        // Obtém uma conexão do pool.
        connection = await pool.getConnection();

        // Inicia uma transação no banco.
        await connection.beginTransaction();

        // Obtém a data atual diretamente do MySQL.
        const [dataResultado] = await connection.query(
            "SELECT DATE_FORMAT(CURDATE(), '%y%m%d') AS data_codigo"
        );

        // Armazena a data no formato YYMMDD.
        const dataCodigo = dataResultado[0].data_codigo;

        // Busca a maior sequência utilizada hoje para o tipo solicitado.
        const [resultadoSequencia] = await connection.query(
            `
            SELECT COALESCE(
                MAX(CAST(RIGHT(numero, 3) AS UNSIGNED)),
                0
            ) AS ultima_sequencia
            FROM senha
            WHERE tipo = ?
              AND DATE(data_hora_emissao) = CURDATE()
            FOR UPDATE
            `,
            [tipo]
        );

        // Calcula a próxima sequência.
        const proximaSequencia =
            resultadoSequencia[0].ultima_sequencia + 1;

        // Impede ultrapassar os três dígitos previstos no padrão.
        if (proximaSequencia > 999) {

            // Desfaz a transação.
            await connection.rollback();

            // Retorna erro ao cliente.
            return res.status(409).json({
                mensagem: "Limite diário de senhas deste tipo atingido."
            });
        }

        // Completa a sequência com zeros à esquerda.
        const sequenciaFormatada = String(
            proximaSequencia
        ).padStart(3, "0");

        // Monta o número final da senha.
        const numeroSenha =
            `${dataCodigo}-${tipo}${sequenciaFormatada}`;

        // Insere a nova senha no banco.
        const [resultado] = await connection.query(
            `
            INSERT INTO senha (
                numero,
                tipo,
                estado
            )
            VALUES (?, ?, 'AGUARDANDO')
            `,
            [numeroSenha, tipo]
        );

        // Confirma a transação.
        await connection.commit();

        // Retorna a senha criada.
        return res.status(201).json({
            id: resultado.insertId,
            numero: numeroSenha,
            tipo: tipo,
            estado: "AGUARDANDO"
        });

    } catch (erro) {

        // Desfaz a transação caso ela tenha sido iniciada.
        if (connection) {
            await connection.rollback();
        }

        // Exibe o erro no terminal.
        console.error("Erro ao emitir senha:", erro);

        // Retorna erro HTTP 500.
        return res.status(500).json({
            mensagem: "Erro interno ao emitir senha."
        });

    } finally {

        // Devolve a conexão ao pool.
        if (connection) {
            connection.release();
        }
    }
}

// Exporta a função para utilização nas rotas.
module.exports = {
    emitirSenha
};