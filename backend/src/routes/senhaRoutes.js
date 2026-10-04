// Importa o Express.
const express = require("express");

// Importa o controller responsável pelas senhas.
const senhaController = require("../controllers/senhaController");

// Cria o roteador.
const router = express.Router();

// Cria a rota responsável pela emissão de senhas.
router.post("/", senhaController.emitirSenha);

// Exporta o roteador.
module.exports = router;