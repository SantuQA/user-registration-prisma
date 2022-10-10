<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description
This is a test project for  User auth (JWt and session based) , MongoDB atlas cluster, Prisma ORM, Docker Compose, File upload local storage, Specific module auth by user etc.

# REQUIREMENTS

-   Node.js
-   NPM
-   Docker
-   Express
-   Prisma

# TOOLS

-   Docker Desktop
-   VS Code
-   Git
-   Postman

# GETTING STARTED
Clone the repository, install the dependencies.
```bash
git clone the repository https://github.com/SantuQA/user-registration-prisma.git
$ cd <working-directory>   
$ npm install
```

## Connection String Mongodb Atlas.
Create a dot env file and paste this connection string.
```bash
DATABASE_URL=mongodb+srv://root:4DQACONNECT@cluster0.lerzlry.mongodb.net/test-project-prisma?retryWrites=true&w=majority
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
# DOCKER COMPOSE
```bash
$ docker compose  -f "docker-compose.yml" up -d --build dev                      //START DEV
$ docker compose -f "docker-compose.yml" down                               //STOP
$ docker ps 

## License

Nest is [MIT licensed](LICENSE).
