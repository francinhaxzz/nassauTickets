# nassauTickets

Sistema Web para Controle de Atendimento desenvolvido como projeto acadêmico da UNINASSAU.

O **nassauTickets** tem como objetivo organizar e controlar o atendimento de um Laboratório de Análises Clínicas por meio da emissão, gerenciamento e chamada de senhas.

> **Status do projeto:** Em desenvolvimento — Primeira fase.

---

## Objetivo

Desenvolver uma aplicação Web capaz de auxiliar no controle do fluxo de atendimento de um laboratório, contemplando a emissão de senhas, gerenciamento de filas, chamadas nos guichês e acompanhamento dos atendimentos.

O projeto também tem como objetivo aplicar conhecimentos relacionados a:

- Desenvolvimento Web;
- React;
- Node.js e Express;
- Banco de dados MySQL;
- APIs REST;
- Git e GitHub;
- Modelagem de sistemas;
- Documentação de software;
- Trabalho colaborativo e versionamento.

---

## Membros

| Nome | Matrícula | Papel |
|---|---|---|
| Mateus França Toledo | 01800414 | Scrum Master |
| Ygor Lopes de Queiroz | 01802997 | Documentador |
| Victor Emanuel dos Santos Brito | 01807084 | Desenvolvedor |
| Pedro Henrique de Oliveira Gomes | 01810750 | Testador |

---

## Tecnologias

### Frontend

- React
- JavaScript
- HTML
- CSS

### Backend

- Node.js 22 LTS
- Express

### Banco de Dados

- MySQL 8.0
- mysql2

### Desenvolvimento e Versionamento

- Git
- GitHub
- Visual Studio Code

---

## Visão Geral do Sistema

O nassauTickets foi projetado para trabalhar com três agentes principais:

### AS — Agente Sistema

Responsável pelas operações automáticas do sistema, comunicação com o banco de dados, emissão e gerenciamento das senhas e atualização das informações apresentadas aos usuários.

### AA — Agente Atendente

Responsável por chamar clientes, iniciar atendimentos e finalizar os serviços realizados nos guichês.

### AC — Agente Cliente

Responsável por solicitar uma senha por meio do sistema e aguardar sua chamada para atendimento.

---

## Tipos de Senha

O sistema utiliza três tipos de senha:

| Tipo | Descrição |
|---|---|
| `SP` | Senha Prioritária |
| `SG` | Senha Geral |
| `SE` | Senha para retirada de Exames |

A numeração das senhas deverá seguir o padrão:

```text
YYMMDD-PPSQ
```

Onde:

- `YY` — ano da emissão;
- `MM` — mês da emissão;
- `DD` — dia da emissão;
- `PP` — tipo da senha;
- `SQ` — sequência de três dígitos, reiniciada diariamente por tipo.

Exemplo:

```text
261004-SP001
```

---

## Regras de Atendimento

A ordem de priorização definida para o sistema é:

```text
SP → SE/SG → SP → SE/SG
```

As principais regras previstas são:

- SP possui maior prioridade;
- SG possui menor prioridade;
- SE possui tratamento operacional especial;
- qualquer guichê poderá atender qualquer tipo de senha;
- uma senha poderá ser chamada novamente;
- após duas chamadas sem comparecimento, a senha poderá ser considerada como não comparecimento;
- o expediente previsto é das 7h às 17h;
- atendimentos iniciados antes do encerramento do expediente deverão ser concluídos;
- senhas restantes na fila ao final do expediente deverão ser descartadas.

---

## Máquina de Estados

As senhas deverão seguir a máquina de estados definida na especificação:

```text
EMITIDA
   ↓
AGUARDANDO
   ↓
CHAMADA
   ↓
CHAMADA_NOVAMENTE
   ↓
EM_ATENDIMENTO
   ↓
ATENDIDA
```

Também será possível chegar ao estado:

```text
NÃO_COMPARECEU
```

quando o cliente não comparecer após as chamadas previstas.

---

## Painel de Chamadas

O painel deverá apresentar as **5 últimas senhas chamadas**, juntamente com as informações necessárias para direcionar o cliente ao respectivo guichê.

A próxima senha da fila não deverá ser exibida antecipadamente.

---

## Relatórios

O sistema deverá contemplar relatórios diários e mensais contendo informações como:

- quantidade de senhas emitidas;
- quantidade de senhas atendidas;
- senhas emitidas por tipo;
- senhas atendidas por tipo;
- informações detalhadas dos atendimentos;
- tempo médio de atendimento;
- informações de auditoria.

---

## Arquitetura

O projeto está organizado utilizando uma arquitetura Web dividida em três partes principais:

```text
┌──────────────────────┐
│       Frontend       │
│        React         │
└──────────┬───────────┘
           │
           │ API REST / JSON
           ▼
┌──────────────────────┐
│       Backend        │
│ Node.js + Express    │
└──────────┬───────────┘
           │
           │ mysql2
           ▼
┌──────────────────────┐
│   Banco de Dados     │
│      MySQL 8.0       │
└──────────────────────┘
```

---

## Estrutura do Projeto

```text
nassauTickets/
├── backend/
│   ├── database/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middlewares/
│       ├── repositories/
│       ├── routes/
│       └── services/
│
├── docs/
│   ├── branding/
│   ├── mer/
│   ├── mockups/
│   ├── models/
│   │   └── uml/
│   └── requirements/
│
├── frontend/
│
├── .gitignore
├── LICENSE
└── README.md
```

A pasta `docs/` concentra os artefatos de documentação, incluindo requisitos, modelos, diagramas UML, MER e mockups.

---

## Branches

O projeto utiliza principalmente as branches:

### `main`

Branch destinada às versões integradas e estáveis do projeto.

### `dev`

Branch principal de desenvolvimento.

As funcionalidades são desenvolvidas e versionadas antes de serem posteriormente integradas à `main`.

Também poderão ser utilizadas branches auxiliares para desenvolvimento isolado de funcionalidades, que posteriormente serão integradas à `dev`.

Fluxo geral:

```text
feature/*
     │
     ▼
    dev
     │
     ▼
   main
```

---

## Backend

O backend está sendo desenvolvido utilizando **Node.js 22 LTS com Express**.

O código encontra-se em:

```text
backend/
```

### Instalação das dependências

Entre no diretório:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

### Executando em desenvolvimento

```bash
npm run dev
```

### Executando normalmente

```bash
npm start
```

Por padrão, a API utiliza a porta definida na variável de ambiente `PORT`.

---

## Configuração do Backend

As informações sensíveis e específicas de cada ambiente não são versionadas no GitHub.

Crie um arquivo:

```text
backend/.env
```

utilizando como referência o arquivo:

```text
backend/.env.example
```

Exemplo de configuração:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=nassau_tickets
```

> O arquivo `.env` não deve ser enviado ao repositório.

---

## Banco de Dados

O projeto utiliza **MySQL 8.0**.

Os scripts relacionados à criação e configuração do banco de dados são mantidos em:

```text
backend/database/
```

O banco utilizado pela aplicação é:

```text
nassau_tickets
```

---

## Frontend

O frontend será desenvolvido utilizando **React** e permanecerá integralmente dentro do diretório:

```text
frontend/
```

A implementação do frontend faz parte da evolução do projeto e será integrada às APIs disponibilizadas pelo backend.

---

## Documentação

A documentação do projeto está disponível em:

```text
docs/
```

Ela contempla artefatos relacionados a:

- requisitos funcionais;
- requisitos não funcionais;
- regras de negócio;
- casos de uso;
- diagramas UML;
- Modelo Entidade-Relacionamento (MER);
- mockups;
- aspectos de segurança;
- disponibilidade;
- auditoria;
- desempenho;
- concorrência;
- LGPD;
- acessibilidade.

---

## Status de Desenvolvimento

O projeto encontra-se em desenvolvimento.

Nesta primeira fase foram priorizados:

- criação e organização do repositório;
- definição da equipe e dos papéis;
- estruturação das branches;
- documentação inicial;
- levantamento de requisitos;
- modelagem do sistema;
- estrutura inicial do backend;
- estrutura do banco de dados;
- início da implementação das APIs.

As demais funcionalidades serão implementadas progressivamente nas próximas etapas do projeto.

---

## Licença

Este projeto utiliza a licença **MIT**.

Consulte o arquivo [LICENSE](LICENSE) para mais informações.