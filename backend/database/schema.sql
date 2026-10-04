-- 1. Cria o banco de dados do projeto
CREATE DATABASE IF NOT EXISTS nassau_tickets;

-- 2. Avisa ao MySQL que vamos usar este banco
USE nassau_tickets;

-- 3. Cria a tabela onde as senhas serão guardadas
CREATE TABLE IF NOT EXISTS senha (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(20) NOT NULL,
    tipo VARCHAR(5) NOT NULL,
    estado VARCHAR(20) NOT NULL,
    data_hora_emissao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);