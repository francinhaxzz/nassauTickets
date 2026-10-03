# Modelo de Dados — nassauTickets

Este documento apresenta a proposta inicial de modelagem dos dados utilizados pelo sistema nassauTickets.

O modelo poderá sofrer alterações durante o desenvolvimento conforme novos requisitos técnicos sejam identificados.

## Entidades

### Usuário

Representa os atendentes que possuem acesso autenticado ao sistema.

| Campo | Descrição |
| --- | --- |
| id | Identificador do usuário |
| nome | Nome do usuário |
| login | Login utilizado para autenticação |
| senha | Credencial de autenticação |
| gestor | Indica se o atendente possui perfil adicional de gestor |
| ativo | Indica se o usuário está ativo |

---

### Guichê

Representa os guichês disponíveis para realização dos atendimentos.

| Campo | Descrição |
| --- | --- |
| id | Identificador do guichê |
| numero | Número do guichê |
| ativo | Indica se o guichê está disponível |

---

### Senha

Representa uma senha emitida pelo sistema.

| Campo | Descrição |
| --- | --- |
| id | Identificador interno |
| numero | Número completo da senha |
| tipo | Tipo da senha: SP, SG ou SE |
| estado | Estado atual da senha |
| data_hora_emissao | Data e horário em que a senha foi emitida |

Os estados previstos são:

- EMITIDA;
- AGUARDANDO;
- CHAMADA;
- CHAMADA_NOVAMENTE;
- EM_ATENDIMENTO;
- ATENDIDA;
- NÃO_COMPARECEU.

---

### Atendimento

Representa o atendimento realizado para uma senha.

| Campo | Descrição |
| --- | --- |
| id | Identificador do atendimento |
| senha_id | Senha relacionada ao atendimento |
| usuario_id | Atendente responsável |
| guiche_id | Guichê responsável |
| data_hora_inicio | Data e horário do início |
| data_hora_fim | Data e horário da finalização |

---

### Chamada

Representa cada chamada realizada para uma senha.

| Campo | Descrição |
| --- | --- |
| id | Identificador da chamada |
| senha_id | Senha chamada |
| usuario_id | Atendente responsável pela chamada |
| guiche_id | Guichê utilizado |
| numero_chamada | Indica se é a primeira ou segunda chamada |
| data_hora | Data e horário da chamada |

## Relacionamentos

### Usuário e Atendimento

Um usuário poderá realizar vários atendimentos.

```text
USUARIO 1 ─────── N ATENDIMENTO
```

### Guichê e Atendimento

Um guichê poderá possuir vários atendimentos ao longo do tempo.

```text
GUICHE 1 ─────── N ATENDIMENTO
```

### Senha e Atendimento

Uma senha poderá estar relacionada a um atendimento.

```text
SENHA 1 ─────── 0..1 ATENDIMENTO
```

O atendimento poderá não existir quando a senha não for atendida.

### Senha e Chamada

Uma senha poderá possuir chamadas associadas.

```text
SENHA 1 ─────── N CHAMADA
```

De acordo com as regras atuais do sistema, uma senha poderá ser chamada no máximo duas vezes.

### Usuário e Chamada

Um usuário poderá realizar várias chamadas.

```text
USUARIO 1 ─────── N CHAMADA
```

### Guichê e Chamada

Um guichê poderá estar associado a várias chamadas ao longo do expediente.

```text
GUICHE 1 ─────── N CHAMADA
```