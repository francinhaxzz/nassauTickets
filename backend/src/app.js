// Importa o framework Express.
const express = require("express");

// Importa o pacote dotenv.
const dotenv = require("dotenv");

// Carrega as variáveis de ambiente.
dotenv.config();

// Importa as rotas relacionadas aos guichês.
const guicheRoutes = require("./routes/guicheRoutes");

// Importa as rotas relacionadas as senhas
const senhaRoutes = require("./routes/senhaRoutes");

// Cria a aplicação Express.
const app = express();

// Define a porta utilizada pelo servidor.
const PORT = process.env.PORT || 3000;

// Permite que a aplicação receba dados no formato JSON.
app.use(express.json());

// Cria uma rota simples para verificar se a API está funcionando.
app.get("/", (req, res) => {

    // Retorna uma resposta JSON.
    res.json({
        mensagem: "API nassauTickets funcionando!"
    });
});

// Define o endereço das rotas relacionadas aos guichês.
app.use("/api/guiches", guicheRoutes);

// Uso das rotas da senha
app.use("/api/senhas", senhaRoutes);

// Inicia o servidor.
app.listen(PORT, () => {

    // Exibe uma mensagem no terminal.
    console.log(`Servidor nassauTickets rodando na porta ${PORT}`);
});