How to build CRUD rest API using Node.js, Express, Postgres

## Install postgres database
You can install DB user docker or simply download and install.

## Create a user and password
```
create user express with encrypted password 'postgres';
```

## Create database inside postgres
```
create database express_js owner express;
```

## Now its time to setup this project
You can simply reach to `package.json` path and run below command -
```
npm run install
```

## Start express server
Start the express server using below command -
```
npm run dev
```

## Use postman collection for API
Import this collection in postman and execute the API there
```
./postman/Express_Postgres_CRUD.postman_collection.json
```