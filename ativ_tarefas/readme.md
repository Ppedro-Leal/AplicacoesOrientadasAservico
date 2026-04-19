# 📌 API de Tarefas - Express + PostgreSQL

## 📖 Descrição

Este projeto consiste no desenvolvimento de uma **API RESTful para gerenciamento de tarefas**, construída com **Node.js**, **Express** e **PostgreSQL (NeonDB)**.

A API permite realizar operações completas de **CRUD (Create, Read, Update, Delete)** sobre tarefas, seguindo uma arquitetura em camadas para melhor organização e escalabilidade.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- PostgreSQL (NeonDB)
- Sequelize (ORM)
- UUID
- Vercel (Deploy)

---

## 📂 Estrutura do Projeto

```txt
/ativ_tarefas
│
├── api/
│   ├── controllers/
│   │   └── tarefaController.js
│   ├── models/
│   │   ├── index.js
│   │   └── tarefa.js
│   ├── routes/
│   │   └── tarefa.js
│   ├── services/
│   │   └── tarefaService.js
│   └── index.js
│
├── .env
├── .env.sample
├── package.json
├── vercel.json
└── README.md
```

---

## 🧠 Arquitetura

A aplicação segue o padrão de separação em camadas:

- **Routes** → define as rotas da API  
- **Controllers** → lida com requisições e respostas HTTP  
- **Services** → contém regras de negócio  
- **Models** → define a estrutura dos dados (Sequelize)  

---

## 🔗 Endpoints da API

### 📌 Criar tarefa
**POST** `/tarefas`

```json
{
  "descricao": "Estudar Express",
  "concluida": false
}
```

**Resposta:**
- 201 Created
- 400 Bad Request (se descrição não for enviada)

---

### 📌 Listar tarefas
**GET** `/tarefas`

**Resposta:**
- 200 OK

---

### 📌 Buscar tarefa por ID
**GET** `/tarefas/:objectId`

**Resposta:**
- 200 OK
- 400 Bad Request (ID inválido)
- 404 Not Found

---

### 📌 Atualizar tarefa
**PUT** `/tarefas/:objectId`

```json
{
  "descricao": "Atualizar tarefa",
  "concluida": true
}
```

**Resposta:**
- 200 OK
- 400 Bad Request (ID inválido)
- 404 Not Found

---

### 📌 Deletar tarefa
**DELETE** `/tarefas/:objectId`

**Resposta:**
- 204 No Content
- 400 Bad Request (ID inválido)
- 404 Not Found

---

## ⚙️ Configuração do Ambiente

### 1. Clonar o projeto

```bash
git clone https://github.com/Ppedro-Leal/AplicacoesOrientadasAservico
cd ativ_tarefas
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` baseado no `.env.sample`:

```env
DATABASE_URL=postgresql://usuario:senha@host:porta/database
PORT=3000
```

---

## ▶️ Executando o Projeto

### Ambiente local

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3000
```

---

## ☁️ Deploy na Vercel

A aplicação está configurada para rodar como **Serverless Function** na Vercel.

### Configuração (`vercel.json`)

```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "api/index.js"
    }
  ]
}
```

---

## 🧪 Testes

Os testes podem ser realizados utilizando ferramentas como:

- Postman
- Insomnia

### Exemplos de testes:

- Criar tarefa válida
- Criar tarefa sem descrição (erro 400)
- Buscar tarefa inexistente (404)
- Atualizar tarefa
- Deletar tarefa

---