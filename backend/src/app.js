// Importa o framework Express.
const express = require("express");

// Importa o pacote dotenv.
const dotenv = require("dotenv");

// Carrega as variáveis de ambiente.
dotenv.config();

// Cria a aplicação Express.
const app = express();

// Define a porta do servidor.
// Caso nenhuma porta seja informada, utiliza a porta 3000.
const PORT = process.env.PORT || 3000;

// Permite que o servidor receba informações no formato JSON.
app.use(express.json());

// Cria uma rota GET na raiz da API.
app.get("/", (req, res) => {

    // Retorna uma resposta no formato JSON.
    res.json({
        mensagem: "API nassauTickets funcionando!"
    });
});

// Inicia o servidor.
app.listen(PORT, () => {

    // Exibe no terminal a porta utilizada pelo servidor.
    console.log(`Servidor nassauTickets rodando na porta ${PORT}`);
});