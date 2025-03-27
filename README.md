# Instruções de instalação, uso e documentação da API

## Instalação

1. Criação de um repositório com Template.
2. Git Clone "Url do repositório."
3. Instalei as dependências com :

```
 npm install.
```

4. Criei o arquivo .env e adicionei:

```
DATABASE_URL="file:./prisma/dev.db
```

5. para aplicar as migrações comando:

```
 npx prisma migrate dev --name init
```

6. Para iniciar o servidor:

```

npm run dev
```

### Métodos utilizados:

#### 1. **GET /**

Retorna todas as anotações cadastradas.

**Exemplo de Resposta:**

```json
[
  {
    "id": 1,
    "titulo": "Minha primeira anotação",
    "conteudo": "Conteúdo da anotação",
    "criadaEm": "2025-03-27T12:00:00.000Z",
    "atualizadaEm": "2025-03-27T12:00:00.000Z"
  }
]
```

#### 2. **GET /:id**

Retorna uma anotação específica com base no ID fornecido.

**Parâmetros:**

- `id` (obrigatório): ID da anotação a ser buscada.

**Exemplo de Resposta:**

```json
{
  "id": 1,
  "titulo": "Minha primeira anotação",
  "conteudo": "Conteúdo da anotação",
  "favorita": true,
  "cor": "Azul",
  "criadaEm": "2025-03-27T12:00:00.000Z",
  "atualizadaEm": "2025-03-27T12:00:00.000Z"
}
```

**Erro de Resposta (caso o ID não seja encontrado):**

```json
{
  "erro": "Anotação não encontrada!"
}
```

#### 3. **POST /**

Cria uma nova anotação.

**Corpo da Requisição:**

```json
{
  "titulo": "Listar Maquiagem",
  "conteudo": "Rimel, Gloss, Corretivo, blush",
  "favorita": true,
  "cor": "Rosa"
}
```

**Exemplo de código**

```json
{
  "id": 2,
  "titulo": "Listar Maquiagem",
  "conteudo": "Rimel, Gloss, Corretivo, blush",
  "favorita": false,
  "cor": "Rosa",
  "criadaEm": "2025-03-27T18:42:24.789Z",
  "atualizadaEm": "2025-03-27T18:42:24.789Z"
}
```

#### 4. **PUT /:id**

Atualiza uma anotação existente.

**Parâmetros:**

- `id` (obrigatório): ID da anotação a ser atualizada.

**Corpo da Requisição:**

```json
{
  "titulo": "Listar Maquiagem",
  "conteudo": "Rimel, Gloss",
  "favorita": true,
  "cor": "Amarelo"
}
```

**Exemplo de Resposta:**

```json
{
  "id": 2,
  "titulo": "Listar Maquiagem",
  "conteudo": "Rimel, Gloss",
  "favorita": true,
  "cor": "Amarelo",
  "criadaEm": "2025-03-27T18:42:24.789Z",
  "atualizadaEm": "2025-03-27T19:08:06.576Z"
}
```

#### 5. **DELETE /:id**

Remove uma anotação existente.

**Parâmetros:**

- `id` (obrigatório): ID da anotação a ser deletada.

**Exemplo de Resposta:**

```json
{
  "mensagem": "Anotação deletada com sucesso"
}
```
