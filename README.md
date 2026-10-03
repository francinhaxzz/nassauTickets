# Projeto nassauTickets

Sistema de Controlo de Atendimento para um Laboratório de Análises Clínicas[cite: 1, 3].

## 📋 Descrição
O **nassauTickets** é uma aplicação web desenvolvida para gerir o fluxo de atendimento de um laboratório[cite: 1, 3]. O sistema contempla a emissão de senhas através de um totem virtual, a gestão de filas por prioridades, a chamada e o atendimento por guichês, além da emissão de relatórios gerenciais e de auditoria[cite: 1, 4, 5, 6].

## 🎯 Objetivo
Consolidar os conhecimentos de desenvolvimento Web, organização de projetos, controlo de versões com Git/GitHub, documentação, React e integração de sistemas[cite: 1].

## 👥 Membros
| Nome | Matrícula | Papel |
| :--- | :--- | :--- |
| [Mateus França Toledo] | [01800414] | Scrum Master[cite: 2] |
| [Ygor Lopes de Queiroz] | [01802997] | Documentador[cite: 2] |
| [Victor Emanuel dos Santos Brito] | [0180784] | Desenvolvedor[cite: 2] |
| [Pedro Henrique de Oliveira Gomes] | [01810750] | Testador[cite: 2] |

## 🛠️ Tecnologias Utilizadas
* **Frontend:** React (com Vite)[cite: 6, 7, 8]
* **Backend:** Node.js (com Express)[cite: 6]
* **Base de Dados:** MySQL 8.0[cite: 6]
* **Controlo de Versões:** Git e GitHub (com as branches `main` e `dev`)

## 🏗️ Arquitetura e Visão Geral
O sistema funciona através de três agentes principais[cite: 3]:
1. **Agente Sistema (AS):** Comunica com a base de dados, emite senhas, atualiza o painel e gere as regras de negócio[cite: 3].
2. **Agente Atendente (AA):** Chama o próximo cliente, inicia e finaliza o atendimento no guichê[cite: 3].
3. **Agente Cliente (AC):** Emite a senha de forma anónima através do totem e aguarda a chamada no painel[cite: 3, 6].

## ⚙️ Regras de Atendimento
* **Tipos de Senha:** 
  * `SP`: Senha Prioritária (maior prioridade)[cite: 4]
  * `SE`: Senha para Retirada de Exames (atendimento operacional especial)[cite: 4]
  * `SG`: Senha Geral (menor prioridade)[cite: 4]
* **Regra de Priorização:** $[SP] \rightarrow [SE\vert{}SG] \rightarrow [SP] \rightarrow [SE\vert{}SG]$[cite: 4]
* **Formato da Senha:** `YYMMDD-PPSQ` (Ano, Mês, Dia, Tipo e Sequência diária)[cite: 4]

## 🚀 Como Instalar e Executar

### Pré-requisitos
* Node.js instalado (versão LTS recomendada)[cite: 6]
* Base de dados MySQL configurada[cite: 6]

### 1. Clonar o repositório
```bash
git clone [https://github.com/francinhaxzz/nassauTickets.git](https://github.com/francinhaxzz/nassauTickets.git)
cd nassauTickets
git checkout dev