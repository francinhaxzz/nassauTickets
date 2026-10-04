// Importa o Express.
const express = require("express");

// Importa a conexão com o banco de dados.
const pool = require("../config/database");

// Cria um roteador do Express.
const router = express.Router();

// Cria a rota responsável por listar os guichês.
router.get("/", async (req, res) => {

    try {

        // Executa uma consulta no banco de dados.
        const [guiches] = await pool.query(
            "SELECT id, numero, ativo FROM guiche ORDER BY numero"
        );

        // Retorna os guichês encontrados no formato JSON.
        res.json(guiches);

    } catch (erro) {

        // Exibe o erro no terminal para auxiliar durante o desenvolvimento.
        console.error("Erro ao buscar guichês:", erro);

        // Retorna erro HTTP 500 para o cliente.
        res.status(500).json({
            mensagem: "Erro interno ao buscar guichês."
        });
    }
});

// Exporta o roteador.
module.exports = router;