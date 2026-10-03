# Requisitos Não Funcionais

Os Requisitos Não Funcionais (RNF) representam características, restrições técnicas e aspectos de qualidade que deverão ser considerados durante o desenvolvimento do nassauTickets.

## RNF01 — Frontend

O frontend da aplicação deverá ser desenvolvido utilizando React.

## RNF02 — Backend

O backend do projeto será desenvolvido utilizando Node.js 22 LTS com Express.

## RNF03 — Banco de Dados

O sistema utilizará MySQL 8.0 para persistência dos dados.

## RNF04 — API

A comunicação entre frontend e backend deverá ser realizada por meio de uma API REST, utilizando dados no formato JSON.

## RNF05 — Organização

O projeto deverá manter separação adequada entre frontend, backend e documentação.

## RNF06 — Versionamento

O projeto deverá utilizar Git e GitHub para controle de versão.

## RNF07 — Branches

O repositório deverá possuir, no mínimo, as branches:

- `main`;
- `dev`.

O desenvolvimento deverá ocorrer inicialmente na branch `dev` e posteriormente ser integrado à `main` por meio de merge.

## RNF08 — Segurança

O sistema deverá considerar aspectos de segurança durante seu desenvolvimento.

## RNF09 — Disponibilidade

O sistema deverá considerar mecanismos e comportamentos relacionados à disponibilidade da aplicação.

## RNF10 — Auditoria

As operações relacionadas aos atendimentos deverão possuir informações suficientes para possibilitar auditoria.

## RNF11 — Concorrência

O sistema deverá tratar situações em que dois ou mais atendentes solicitem a próxima senha praticamente ao mesmo tempo, evitando que a mesma senha seja atribuída simultaneamente a mais de um atendimento.

## RNF12 — Desempenho

O projeto deverá considerar formas de quantificar e acompanhar o desempenho dos atendimentos.

## RNF13 — LGPD

O desenvolvimento deverá considerar aspectos relacionados à Lei Geral de Proteção de Dados (LGPD).

## RNF14 — Acessibilidade

A aplicação deverá considerar aspectos de acessibilidade em sua interface.

## RNF15 — Tratamento de falhas

O frontend e o painel deverão possuir comportamento adequado diante de falhas de comunicação com o backend ou com o banco de dados.

## RNF16 — Reutilização

O frontend deverá possuir organização e reutilização adequada de componentes React.