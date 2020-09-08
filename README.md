Esse README não é um README de verdade e sim apenas uma cola para os comandos do docker.

Projeto aprendendo um pouco sobre node.js 🐱‍🏍🐱‍🏍🐱‍🏍🐱‍👤🐱‍👤
## ---- POSTGRES

```docker
docker run --name postgres -e POSTGRES_USER=dxss -e POSTGRES_PASSWORD=minhasenha -e POSTGRES_DB=heroes -p 5432:5432 -d postgres
```

```docker
docker ps --listagem de processos
docker exec -it postgres /bin/bash --comando para entrar no processo chamado postgres e poder executar dentro do container comandos que eu quiser
```

```docker
--comando para client do postgres
docker run --name adminer -p 8080:8080 --link postgres -d adminer
```

## ---- MONGODB

```docker
docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo:4
```

```docker
--comando para client do mongodb
docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient
```

```docker
docker exec -it mongodb mongo --host localhost -u admin -p admin --authenticationDatabase admin --eval "db.getSiblingDB('herois').createUser({user: 'davizera', pwd: 'senhadodavizera', roles: [{role: 'readWrite', db: 'heroes'}]})"
```

## ---- TODOS COMANDOS PARA RODAR DE UMA VEZ

docker run --name postgres -e POSTGRES_USER=dxss -e POSTGRES_PASSWORD=minhasenha -e POSTGRES_DB=heroes -p 5432:5432 -d postgres; docker run --name adminer -p 8080:8080 --link postgres -d adminer; docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin -d mongo:4 ;docker run --name mongoclient -p 3000:3000 --link mongodb:mongodb -d mongoclient/mongoclient
