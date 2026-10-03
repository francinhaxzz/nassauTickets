// Importa a versão Promise do pacote mysql2.
const mysql = require("mysql2/promise");

// Cria um pool de conexões com o banco de dados.
const pool = mysql.createPool({

    // Endereço do servidor MySQL.
    host: process.env.DB_HOST,

    // Porta utilizada pelo MySQL.
    port: process.env.DB_PORT,

    // Usuário utilizado para acessar o banco.
    user: process.env.DB_USER,

    // Senha do usuário do banco.
    password: process.env.DB_PASSWORD,

    // Nome do banco utilizado pela aplicação.
    database: process.env.DB_NAME,

    // Aguarda uma conexão ficar disponível caso todas estejam ocupadas.
    waitForConnections: true,

    // Define a quantidade máxima de conexões simultâneas.
    connectionLimit: 10,

    // Não limita a quantidade de requisições aguardando conexão.
    queueLimit: 0
});

// Exporta o pool para utilização em outros arquivos.
module.exports = pool;