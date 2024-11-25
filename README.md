# Visão Geral

Esse sistema consiste em API para uma aplicação de lista de tarefas (To-Do-List). Ele possui endpoints que permitem criar, listar, buscar por título e atualizar o status de uma tarefa. Foi desenvolvido usando Node.js e Typescript, mais especificamente usando o framework Fastify.

# Funcionalidades

### Endpoints 

1. Criar Tarefa

- Descrição: Criar uma nova tarefa com o status inicial como `false` indicando que ela ainda não foi completada
- Endpoint: `POST /criatarefa`
- Body:
    ```json
    {
    	"titulo" : "Estudar"
    }
    ```
- Resposta:
    ```json
    {
    	"id": "674473dc2d26652981660a20",
    	"titulo": "Estudar",
    	"status": false
    }
    ```

2. Listar Tarefas

- Listar todas as tarefas cadastradas
- Endpoint: `GET /tarefas`
- Resposta:
    ```json
    [
	    {
    		"id": "674473dc2d26652981660a20",
    		"titulo": "Estudar",
    		"status": false
	    }
    ]
    ```

3. Buscar Tarefa por Título

- Descrição: Retorna a tarefa cujo título corresponda ao parâmetro fornecido
- Endpoint: `GET /tarefas/:titulo`
- Parâmetros:
    - `:titulo`: O título da tarefa a ser buscada
- Resposta:
    ```json
    {
	"id": "674473dc2d26652981660a20",
	"titulo": "Estudar",
	"status": false
    }
    ```

4. Atualizar Status da Tarefa (Protegido)

- Descrição: Atualiza o status de uma tarefa para `true`
- Endpoint: `PATCH /tarefas/:id/status`
- Parâmetros
    - `:id`: O ID da tarefa
- Cabeçalho:
    ```http
    Authorization: Bearer TOKEN_JWT
    ```
- Resposta:
    ```json
    {
	"id": "67447ca12d26652981660a21",
	"titulo": "Correr",
	"status": true
    }
    ```

5. Login

- Descrição: Gera um token JWT para autenticação
- Endpoint: `POST /login`
- Body:
    ```json
    {
    "username": "admin",
    "password": "123456"
    }
    ```
- Resposta:
    ```json
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }
    ```

### Decisões de Projeto

##### Motivação do Uso de JWT

- JWT é uma solução para autenticação leve e escalável, já que não requer a necessidade do uso de nenhum servidor, além de ser de fácil implementação
- Cada token carrega informações sobre o usuário, permitindo verifcações rápidas

##### Uso de Fastify

- Fastify foi escolhido devido ao bom desempenho, a extensibilidade que permite fazer grande parte do projeto apenas utilizando a mesma e a facilidade de implementação

### Execução do Projeto

1. Instale as Dependências
    ```bash
    npm install
    ```

2. Configure o Banco de Dados
    - Atualize o `.env` para conectar com seu banco Mongo DB
    - Configure o `schema.prisma`, certificando que o provider está configurado como `mongodb`
    - Com o banco configurado, inicialize o Prisma:
        ```
        npx prisma db push
        ```
    - Gere o Cliente Prisma para que ele possa ser usado no código:
        ```
        npx prisma generate
        ```

3. Inicie o Servidor
    - Depois que o Prisma estiver configurado e funcionando com o MongoDB, inicie o servidor do projeto:
        ```
        npm run dev
        ```

    