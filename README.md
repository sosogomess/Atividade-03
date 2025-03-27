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
5. para aplicar as migrações:

```

 Comando npx prisma migrate dev --name init
 ```
6. Para iniciar o servidor:

```

npm run dev
```

### Métodos utilizados:
1. 

