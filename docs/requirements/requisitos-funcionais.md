# Requisitos Funcionais

Os Requisitos Funcionais (RF) descrevem as funcionalidades que deverão ser disponibilizadas pelo sistema nassauTickets.

## Emissão e gerenciamento de senhas

### RF01 — Emitir senha

O sistema deverá permitir que o cliente emita uma senha por meio do totem.

### RF02 — Selecionar tipo de senha

O sistema deverá permitir a emissão dos seguintes tipos de senha:

- SP — Senha Prioritária;
- SG — Senha Geral;
- SE — Senha para Retirada de Exames.

### RF03 — Gerar número da senha

O sistema deverá gerar automaticamente o número identificador da senha seguindo o padrão definido pelas regras de negócio.

### RF04 — Inserir senha na fila

Após sua emissão, o sistema deverá inserir a senha na fila de atendimento correspondente.

## Atendimento

### RF05 — Chamar próxima senha

O sistema deverá permitir que o atendente solicite a chamada da próxima senha disponível.

### RF06 — Aplicar prioridade na chamada

O sistema deverá selecionar automaticamente a próxima senha de acordo com as regras de priorização do atendimento.

### RF07 — Iniciar atendimento

O sistema deverá permitir que o atendente registre o início do atendimento da senha chamada.

### RF08 — Finalizar atendimento

O sistema deverá permitir que o atendente finalize um atendimento iniciado.

### RF09 — Chamar senha novamente

O sistema deverá permitir que o atendente realize uma segunda chamada da senha quando necessário.

### RF10 — Registrar não comparecimento

O sistema deverá permitir que uma senha seja registrada como `NÃO_COMPARECEU` quando o cliente não comparecer após as chamadas previstas.

## Painel

### RF11 — Exibir chamadas no painel

O sistema deverá apresentar no painel as senhas chamadas e seus respectivos guichês.

### RF12 — Exibir últimas chamadas

O painel deverá apresentar as cinco últimas senhas chamadas.

### RF13 — Reproduzir áudio da chamada

O sistema deverá reproduzir áudio durante a chamada, informando a prioridade, a senha e o guichê.

### RF14 — Reproduzir última chamada

Ao utilizar a funcionalidade "Chamar Novamente", o sistema deverá repetir o áudio e utilizar a indicação "Última chamada".

## Login e usuários

### RF15 — Realizar login

O sistema deverá possuir login para o agente atendente.

### RF16 — Identificar gestor

O sistema deverá permitir que um atendente possua perfil adicional de gestor.

### RF17 — Acessar cadastros e relatórios

O atendente com perfil de gestor deverá possuir acesso às funcionalidades de cadastros e relatórios.

### RF18 — Permitir utilização anônima do totem

O cliente deverá conseguir utilizar o totem para emissão da senha sem realizar login.

## Relatórios

### RF19 — Gerar relatório diário

O sistema deverá permitir a geração de relatório diário dos atendimentos.

### RF20 — Gerar relatório mensal

O sistema deverá permitir a geração de relatório mensal dos atendimentos.

### RF21 — Informar quantidade de senhas emitidas

Os relatórios deverão apresentar o quantitativo geral de senhas emitidas.

### RF22 — Informar quantidade de senhas atendidas

Os relatórios deverão apresentar o quantitativo geral de senhas atendidas.

### RF23 — Informar senhas por prioridade

Os relatórios deverão apresentar:

- quantidade de senhas emitidas por prioridade;
- quantidade de senhas atendidas por prioridade.

### RF24 — Gerar relatório detalhado

O sistema deverá disponibilizar relatório detalhado das senhas contendo, quando aplicável:

- número da senha;
- tipo da senha;
- data e hora da emissão;
- data e hora do atendimento;
- guichê responsável.

### RF25 — Calcular tempo médio de atendimento

O sistema deverá calcular e apresentar o tempo médio de atendimento.

### RF26 — Gerar relatório de auditoria

O sistema deverá gerar relatório de auditoria contendo:

- atendente;
- guichê;
- senha;
- horário da primeira chamada;
- horário da segunda chamada, quando houver;
- horário de início do atendimento;
- horário de finalização.