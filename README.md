# API Consultório

API REST para gestão de um consultório de fisioterapia: cadastro de pacientes, fisioterapeutas e recepcionistas, além do agendamento de consultas.

Construída em **Node.js + TypeScript**, com **Express 5**, **Prisma ORM** sobre **PostgreSQL**, validação de entrada com **Zod** e documentação interativa via **Swagger UI**.

---

## Sumário

- [Stack](#stack)
- [Arquitetura](#arquitetura)
- [Modelo de dados](#modelo-de-dados)
- [Como executar](#como-executar)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Endpoints](#endpoints)
- [Validação e tratamento de erros](#validação-e-tratamento-de-erros)
- [Documentação interativa](#documentação-interativa)
- [Limitações conhecidas e roadmap](#limitações-conhecidas-e-roadmap)

---

## Stack

| Camada | Tecnologia |
| --- | --- |
| Runtime | Node.js |
| Linguagem | TypeScript 5 |
| Framework HTTP | Express 5 |
| ORM | Prisma 6 |
| Banco de dados | PostgreSQL |
| Validação | Zod 4 |
| Hash de senha | bcryptjs |
| Documentação | swagger-jsdoc + swagger-ui-express |
| Dev server | nodemon + ts-node |

---

## Arquitetura

O projeto segue uma separação em camadas, com responsabilidade única por arquivo:

```
Request
   │
   ▼
routes/          → definição das rotas + anotações Swagger (JSDoc)
   │
   ▼
middleware/      → validação de body, params e query com Zod
   │
   ▼
controllers/     → tradução HTTP (status codes, mapeamento de erros)
   │
   ▼
services/        → regras de negócio e acesso a dados
   │
   ▼
database/prisma  → instância única do PrismaClient
```

Estrutura de diretórios:

```
api-clinica/
├── prisma/
│   ├── migrations/           # histórico de migrations versionadas
│   └── schema.prisma         # modelo de dados
├── src/
│   ├── controllers/          # camada HTTP
│   ├── services/             # regras de negócio
│   ├── routes/               # rotas + documentação Swagger
│   ├── middleware/           # validação de entrada
│   ├── schemas/              # schemas Zod e tipos inferidos
│   ├── database/             # cliente Prisma
│   ├── generated/prisma/     # client gerado pelo Prisma (artefato de build)
│   ├── swagger.ts            # configuração do OpenAPI
│   └── index.ts              # bootstrap da aplicação
└── tsconfig.json
```

---

## Modelo de dados

Quatro entidades, mapeadas para tabelas em snake/plural no PostgreSQL:

| Modelo | Tabela | Campos relevantes |
| --- | --- | --- |
| `Recepcionista` | `recepcionistas` | `nome`, `email` (único), `senha` (hash), `telefone?` |
| `Paciente` | `pacientes` | `nome`, `email` (único), `cpf` (único), `telefone?`, `dataNascimento` |
| `Fisioterapeuta` | `fisioterapeutas` | `nome`, `email` (único), `senha`, `cpf` (único), `crm` (único), `especialidade` |
| `Consulta` | `consultas` | `dataHora`, `motivo?`, `pacienteId`, `fisioterapeutaId` |

Relacionamentos:

- `Paciente 1 ── N Consulta`
- `Fisioterapeuta 1 ── N Consulta`

Todas as entidades possuem `createdAt` e `updatedAt` gerenciados automaticamente.

---

## Como executar

### Pré-requisitos

- Node.js 18 ou superior
- PostgreSQL em execução (local ou remoto)

### Passo a passo

```bash
# 1. Clonar e entrar no diretório da API
git clone <url-do-repositorio>
cd API-consultorio/api-clinica

# 2. Instalar dependências
npm install

# 3. Configurar as variáveis de ambiente
#    Crie um arquivo .env conforme a seção abaixo

# 4. Gerar o Prisma Client
npx prisma generate

# 5. Aplicar as migrations no banco
npx prisma migrate dev

# 6. Subir a aplicação em modo desenvolvimento
npm run dev
```

A API ficará disponível em `http://localhost:3333` (ou na porta definida em `PORT`).

---

## Variáveis de ambiente

Crie um arquivo `.env` dentro de `api-clinica/`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/consultorio?schema=public"
PORT=3333
```

| Variável | Obrigatória | Descrição |
| --- | --- | --- |
| `DATABASE_URL` | Sim | String de conexão do PostgreSQL usada pelo Prisma |
| `PORT` | Não | Porta HTTP do servidor (padrão: `3000`) |

> O `.env` contém credenciais e **não deve ser versionado**. Veja [Limitações conhecidas](#limitações-conhecidas-e-roadmap).

---

## Scripts disponíveis

Executados a partir de `api-clinica/`:

| Script | Comando | Descrição |
| --- | --- | --- |
| `npm run dev` | `nodemon src/index.ts` | Sobe o servidor com recarga automática |
| `npm run build` | `tsc` | Compila o TypeScript para `dist/` |
| `npm start` | `node dist/index.js` | Executa a build de produção |

Comandos Prisma úteis:

```bash
npx prisma generate           # regenera o client após alterar o schema
npx prisma migrate dev        # cria e aplica uma nova migration
npx prisma studio             # abre a interface visual do banco
```

---

## Endpoints

Base URL: `http://localhost:3333`

### Autenticação

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/login` | Autentica um recepcionista a partir de `email` e `senha` |

### Recepcionistas

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/recepcionistas` | Cria um recepcionista (senha armazenada com hash bcrypt) |
| `GET` | `/recepcionistas` | Lista todos os recepcionistas |
| `GET` | `/recepcionistas/:id` | Busca por ID |
| `PUT` | `/recepcionistas/:id` | Atualiza os dados |
| `DELETE` | `/recepcionistas/:id` | Remove o registro |

As respostas dessa entidade **nunca expõem o campo `senha`**.

### Pacientes

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/pacientes` | Cria um paciente |
| `GET` | `/pacientes` | Lista todos os pacientes |
| `GET` | `/pacientes/:id` | Busca por ID |
| `PUT` | `/pacientes/:id` | Atualiza os dados |
| `DELETE` | `/pacientes/:id` | Remove o registro |

### Fisioterapeutas

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/fisioterapeutas` | Cria um fisioterapeuta |
| `GET` | `/fisioterapeutas` | Lista todos os fisioterapeutas |
| `GET` | `/fisioterapeutas/:id` | Busca por ID |
| `PUT` | `/fisioterapeutas/:id` | Atualiza os dados |
| `DELETE` | `/fisioterapeutas/:id` | Remove o registro |

### Consultas

| Método | Rota | Descrição |
| --- | --- | --- |
| `POST` | `/consultas` | Agenda uma consulta (valida a existência de paciente e fisioterapeuta) |
| `GET` | `/consultas` | Lista as consultas com dados resumidos de paciente e fisioterapeuta |
| `GET` | `/consultas/:id` | Retorna a consulta com os relacionamentos completos |
| `PUT` | `/consultas/:id` | Atualiza a consulta |
| `DELETE` | `/consultas/:id` | Cancela/remove a consulta |

### Exemplos

Criar um paciente:

```bash
curl -X POST http://localhost:3333/pacientes \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Maria Silva",
    "email": "maria.silva@email.com",
    "cpf": "12345678901",
    "telefone": "11987654321",
    "dataNascimento": "1990-05-14"
  }'
```

Agendar uma consulta:

```bash
curl -X POST http://localhost:3333/consultas \
  -H "Content-Type: application/json" \
  -d '{
    "dataHora": "2026-09-01T14:30:00.000Z",
    "pacienteId": 1,
    "fisioterapeutaId": 1,
    "motivo": "Avaliação inicial - dor lombar"
  }'
```

---

## Validação e tratamento de erros

Toda entrada passa por middlewares Zod (`validateBody`, `validateParams`, `validateQuery`) antes de chegar ao controller. As principais regras:

- **CPF**: exatamente 11 dígitos numéricos
- **Email**: formato válido e único no banco
- **Senha**: entre 6 e 20 caracteres
- **Telefone**: mínimo de 11 dígitos
- **`dataNascimento`**: data válida e obrigatoriamente no passado
- **`dataHora` da consulta**: data válida e obrigatoriamente no futuro
- **Parâmetros de rota (`:id`)**: inteiro positivo

Erros de validação retornam `400` com o detalhamento por campo:

```json
{
  "message": "Dados de entrada inválidos",
  "errors": [
    { "campo": "cpf", "mensagem": "CPF deve ter exatamente 11 dígitos" },
    { "campo": "email", "mensagem": "Email deve ter um formato válido" }
  ]
}
```

Códigos de status utilizados:

| Status | Situação |
| --- | --- |
| `200` | Operação concluída (leitura, atualização, remoção) |
| `201` | Recurso criado |
| `400` | Entrada inválida ou regra de negócio violada |
| `404` | Recurso não encontrado (mapeado do erro Prisma `P2025`) |
| `409` | Conflito de dado único, como email duplicado (`P2002`) |
| `500` | Erro interno |

---

## Documentação interativa

Com o servidor em execução, a especificação OpenAPI 3.0 fica disponível em:

```
http://localhost:3333/api-docs
```

A documentação é gerada a partir das anotações JSDoc nos arquivos de `src/routes/`, o que mantém a especificação próxima da implementação.

---

## Limitações conhecidas e roadmap

Pontos identificados no estado atual do código, em ordem de prioridade:

- **Login não valida o hash da senha.** `recepcionistaService.getByLogin` compara a senha em texto puro diretamente com o valor armazenado no banco, que é um hash bcrypt — a autenticação nunca terá sucesso. A correção é buscar pelo email e usar `bcrypt.compare`.
- **Ausência de JWT/sessão.** O login não emite token e nenhuma rota é protegida; todos os endpoints são públicos.
- **Criação de fisioterapeuta inconsistente com o schema.** O `createFisioterapeutaSchema` aceita `telefone` (campo inexistente no modelo Prisma) e não exige `senha` (campo obrigatório no modelo). Alinhar schema Zod e `schema.prisma`.
- **Senha do fisioterapeuta sem hash.** Diferente do recepcionista, o `fisioterapeutaService` persiste os dados sem aplicar bcrypt e retorna o registro completo nas consultas.
- **Repositório sem `.gitignore`.** `node_modules/`, `dist/` e o arquivo `.env` estão versionados. Recomenda-se adicionar um `.gitignore`, remover esses caminhos do índice (`git rm -r --cached`) e **rotacionar as credenciais expostas** em `DATABASE_URL`.
- **Sem testes automatizados.** Não há suíte de testes configurada.
- **Sem verificação de conflito de agenda.** Nada impede o agendamento de duas consultas para o mesmo fisioterapeuta no mesmo horário.

---

## Licença

ISC.
