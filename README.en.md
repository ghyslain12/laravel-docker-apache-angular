

# CRUD Docker Laravel Angular

Simple CRUD with API Laravel 10, front-end Angular 19, MySQL and phpMyAdmin under Docker.

## Prerequisite
- Docker
- Docker Compose

## Install

- Build of the project :
```bash  
git clone https://github.com/ghyslain12/laravel-docker-apache-angular.gitsudo chmod -R 777 laravel-docker-apache-angular/cd laravel-docker-apache-angulardocker-compose up --build -ddocker exec -it laravel_app sh -c "composer install"
```  


## Docker usage

- Mount container :
```bash  
docker-compose up
```  
- Unmount container :
```bash  
docker-compose down
```  

## Features
- Back-end: Laravel Api JWT
- Front-end: Angular & JWT login / signup
- Testing
- Swagger
- Docker Apache Mysql

## Services
- Angular (front-end): http://localhost:4200
- Laravel (API): http://localhost:8741/api


## API [utilisateur, client, material, ticket, sale...]

Api Swagger: http://localhost:8741/api/documentation

### Create a user
![POST](https://img.shields.io/badge/POST-%23ff9800?style=flat-square&logo=git&logoColor=white)  **`/utilisateur`** Add a new user in the system.

### List all users
![GET](https://img.shields.io/badge/GET-%2300c853?style=flat-square&logo=git&logoColor=white)  **`/utilisateur`** Get the list of all users.

### Get a user
![GET](https://img.shields.io/badge/GET-%2300c853?style=flat-square&logo=git&logoColor=white)  **`/utilisateur/{id}`** Get the detail of a user by his id.

### Update a user
![PUT](https://img.shields.io/badge/PUT-%23009688?style=flat-square&logo=git&logoColor=white)  **`/utilisateur/{id}`** Update the informations of a existing user.

### Delete a user
![DELETE](https://img.shields.io/badge/DELETE-%23f44336?style=flat-square&logo=git&logoColor=white)  **`/utilisateur/{id}`** Delete a specific user by his id.


## JWT

### Get a token
![POST](https://img.shields.io/badge/POST-%23ff9800?style=flat-square&logo=git&logoColor=white)  **`/login`** Authenticate a user and returns a token.

- Enable (.env): JWT_ENABLE=true
- Disable (.env): JWT_ENABLE=false

## Preview

![appercu crud](ressources/preview-angular.png)

![appercu crud](ressources/login.png)

![appercu crud](ressources/swagger.png)

![appercu crud](ressources/jwt_ok.png)

![appercu crud](ressources/jwt_nok.png)