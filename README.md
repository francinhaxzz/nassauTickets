# 🎫 nassauTickets

Sistema de Controle de Atendimento para um Laboratório de Análises Clínicas.

## 📋 Descrição

O **nassauTickets** é um projeto de aplicação web para gerenciamento do fluxo de atendimento de um Laboratório de Análises Clínicas.

O sistema deverá permitir a emissão de senhas, organização das filas de atendimento por prioridade, chamada de clientes nos guichês, acompanhamento das chamadas por meio de um painel e geração de relatórios.

O projeto também tem como foco a aplicação de boas práticas de organização, documentação, versionamento e desenvolvimento de software.

## 🎯 Objetivo

Desenvolver um sistema web capaz de controlar o processo de atendimento de um laboratório, desde a emissão da senha até a finalização do atendimento.

Durante o desenvolvimento serão aplicados conhecimentos de:

- Desenvolvimento Web;
- React;
- APIs REST;
- Node.js;
- Banco de dados;
- Git e GitHub;
- Documentação de software;
- Organização e reutilização de componentes;
- Integração entre frontend, backend e banco de dados.

## 👥 Membros

| Nome | Matrícula | Papel |
| --- | --- | --- |
| Mateus França Toledo | 01800414 | Scrum Master |
| Ygor Lopes de Queiroz | 01802997 | Documentador |
| Victor Emanuel dos Santos Brito | 01807084 | Desenvolvedor |
| Pedro Henrique de Oliveira Gomes | 01810750 | Testador |

### Responsabilidades

- **Scrum Master:** responsável pela organização do repositório e coordenação das atividades relacionadas ao projeto.
- **Documentador:** responsável pela produção e organização da documentação.
- **Desenvolvedor:** responsável pela implementação e evolução do código.
- **Testador:** responsável pela verificação do funcionamento, identificação de problemas e validação das funcionalidades.

## 🛠️ Tecnologias

### Frontend

- React;
- Vite;
- JavaScript;
- HTML;
- CSS.

### Backend

- Node.js 22 LTS;
- Express.

### Banco de Dados

- MySQL 8.0.

### Versionamento

- Git;
- GitHub.

## 🏗️ Arquitetura e Visão Geral

O sistema trabalha com três agentes principais:

### AS — Agente Sistema

Responsável pelas ações internas do sistema, comunicação com o banco de dados e demais infraestruturas, emissão das senhas, atualização do painel e resposta aos comandos dos demais agentes.

### AA — Agente Atendente

Responsável por chamar o próximo cliente e realizar o atendimento no guichê.

### AC — Agente Cliente

Responsável por emitir sua senha por meio do totem e aguardar sua chamada no painel.

A arquitetura planejada para a aplicação é:

```text
Cliente / Atendente
        │
        ▼
     Frontend
   React + Vite
        │
        │ API REST
        ▼
      Backend
 Node.js + Express
        │
        ▼
      MySQL
```

## 🎟️ Tipos de Senha

O sistema deverá trabalhar com três tipos de senha:

| Código | Tipo |
| --- | --- |
| `SP` | Senha Prioritária |
| `SG` | Senha Geral |
| `SE` | Senha para Retirada de Exames |

## ⚙️ Regras de Atendimento

A regra geral de priorização será:

```text
SP → SE/SG → SP → SE/SG
```

As principais regras são:

- `SP` possui maior prioridade;
- `SG` possui menor prioridade;
- `SE` possui atendimento operacional especial e deverá ser chamada após uma `SP`, quando disponível;
- qualquer guichê poderá atender qualquer tipo de senha;
- caso uma das filas esteja vazia, o sistema deverá selecionar a próxima senha disponível respeitando as regras de prioridade;
- uma senha que não for atendida após duas chamadas deverá ser considerada como `NÃO_COMPARECEU`;
- aproximadamente 5% das senhas emitidas deverão ser consideradas como não atendidas, conforme a especificação do projeto;
- o expediente deverá ocorrer das **07:00 às 17:00**;
- atendimentos já iniciados deverão ser concluídos;
- ao final do expediente, senhas que ainda estiverem aguardando deverão ser descartadas.

## 🔢 Numeração das Senhas

As senhas deverão seguir o padrão:

```text
YYMMDD-PPSQ
```

Onde:

| Código | Significado |
| --- | --- |
| `YY` | Ano da emissão com dois dígitos |
| `MM` | Mês da emissão com dois dígitos |
| `DD` | Dia da emissão com dois dígitos |
| `PP` | Tipo da senha |
| `SQ` | Sequência da senha com três dígitos |

A sequência deverá ser reiniciada diariamente para cada tipo de senha.

Exemplo:

```text
261003-SP001
```

## 🔄 Estados das Senhas

Durante o atendimento, uma senha poderá passar pelos seguintes estados:

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

## 📺 Painel de Chamadas

O painel deverá apresentar as **5 últimas senhas chamadas**.

A próxima senha não deverá ser exibida antecipadamente.

O atendente deverá possuir as opções de:

- chamar uma nova senha;
- iniciar o atendimento;
- finalizar o atendimento;
- chamar novamente uma senha.

## 📊 Relatórios

O sistema deverá contemplar relatórios diários e mensais contendo:

- quantidade geral de senhas emitidas;
- quantidade geral de senhas atendidas;
- quantidade de senhas emitidas por prioridade;
- quantidade de senhas atendidas por prioridade;
- relatório detalhado das senhas;
- tempo médio de atendimento;
- relatório de auditoria.

## 📁 Estrutura do Projeto

```text
nassauTickets/
│
├── backend/
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

### Documentação

A pasta `docs/` será utilizada para armazenar os artefatos de documentação:

- `docs/branding/` — identidade visual;
- `docs/mer/` — Modelo Entidade-Relacionamento;
- `docs/mockups/` — mockups e protótipos;
- `docs/models/uml/` — diagramas UML;
- `docs/requirements/` — requisitos e regras de negócio.

## 🌿 Branches

O projeto utiliza duas branches principais:

### `main`

Destinada às versões estáveis do projeto.

### `dev`

Destinada ao desenvolvimento das funcionalidades.

O desenvolvimento deverá ocorrer inicialmente na branch `dev`.

Após a implementação e validação das funcionalidades, as alterações serão integradas à `main` por meio de merge.

```text
Desenvolvimento
      │
      ▼
     dev
      │
      │ merge
      ▼
     main
```

## 🚀 Instalação e Execução

> As instruções desta seção poderão ser atualizadas conforme o desenvolvimento do projeto.

### Pré-requisitos

Para executar o projeto será necessário possuir:

- Git;
- Node.js 22 LTS;
- npm;
- MySQL 8.0.

### 1. Clonar o repositório

```bash
git clone https://github.com/francinhaxzz/nassauTickets.git
```

### 2. Entrar no projeto

```bash
cd nassauTickets
```

### 3. Acessar a branch de desenvolvimento

```bash
git switch dev
```

### Frontend

Quando configurado, o frontend poderá ser executado a partir do diretório `frontend`:

```bash
cd frontend
npm install
npm run dev
```

### Backend

Quando configurado, o backend poderá ser executado a partir do diretório `backend`:

```bash
cd backend
npm install
npm run dev
```

## 🔐 Configuração

As informações de configuração do sistema, incluindo a conexão com o banco de dados, serão
