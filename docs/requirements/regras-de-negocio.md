# Regras de Negócio

As Regras de Negócio (RN) definem as condições e comportamentos que deverão ser respeitados pelo sistema nassauTickets.

## RN01 — Tipos de senha

O sistema deverá trabalhar com três tipos de senha:

- `SP` — Senha Prioritária;
- `SG` — Senha Geral;
- `SE` — Senha para Retirada de Exames.

## RN02 — Prioridade da senha SP

A senha `SP` possui a maior prioridade de atendimento.

## RN03 — Prioridade da senha SG

A senha `SG` possui a menor prioridade de atendimento.

## RN04 — Atendimento da senha SE

A senha `SE` possui atendimento operacional especial e deverá ser considerada após uma senha `SP`, quando disponível.

## RN05 — Ordem de atendimento

A priorização deverá seguir a sequência geral:

```text
SP → SE/SG → SP → SE/SG
```

## RN06 — Guichês

Qualquer guichê poderá atender qualquer tipo de senha.

## RN07 — Fila vazia

Caso uma fila esteja vazia, o sistema deverá decidir o próximo atendimento seguindo as regras de prioridade e considerando as senhas disponíveis.

## RN08 — Número máximo de chamadas

Uma senha poderá receber até duas chamadas antes de ser considerada como não atendida.

## RN09 — Não comparecimento

Caso o cliente não compareça após as chamadas previstas, a senha deverá assumir o estado:

```text
NÃO_COMPARECEU
```

## RN10 — Senhas não atendidas

Aproximadamente 5% das senhas emitidas deverão ser consideradas como não atendidas, conforme a especificação do projeto.

## RN11 — Horário de funcionamento

O expediente deverá ocorrer entre:

```text
07:00 → 17:00
```

## RN12 — Atendimento em andamento

Um atendimento iniciado deverá ser concluído e encerrado pelo atendente, mesmo quando ocorrer o encerramento do expediente.

## RN13 — Senhas restantes

Ao final do expediente, as senhas que permanecerem na fila deverão ser descartadas.

## RN14 — Formato da senha

A numeração deverá seguir o padrão:

```text
YYMMDD-PPSQ
```

Onde:

- `YY` representa o ano da emissão com dois dígitos;
- `MM` representa o mês com dois dígitos;
- `DD` representa o dia com dois dígitos;
- `PP` representa o tipo da senha com dois caracteres;
- `SQ` representa a sequência da senha por prioridade com três dígitos.

## RN15 — Reinício da sequência

A sequência numérica das senhas deverá ser reiniciada diariamente.

## RN16 — Painel

O painel deverá apresentar as cinco últimas senhas chamadas.

## RN17 — Próxima senha

A próxima senha ainda não chamada não deverá ser exibida antecipadamente no painel.

## RN18 — Estados

As senhas deverão contemplar a seguinte máquina de estados:

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

Também deverá existir a possibilidade de uma senha chegar ao estado:

```text
NÃO_COMPARECEU
```

## RN19 — Campos de senhas não atendidas

Para senhas não atendidas, os campos referentes ao atendimento deverão permanecer em branco.

## RN20 — Cliente

O cliente deverá interagir anonimamente com o sistema por meio do totem.

## RN21 — Gestor

O sistema deverá possuir um único atendente com perfil adicional de gestor, responsável pelos cadastros e relatórios.