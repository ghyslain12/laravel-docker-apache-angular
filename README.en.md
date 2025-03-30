
# CRUD Docker Laravel Angular

Simple CRUD with API Laravel 10, front-end Angular 19, MySQL and phpMyAdmin under Docker.

## Prerequisite
- Docker
- Docker Compose

## Install

- Build of the project :
```bash
git clone https://github.com/ghyslain12/laravel-docker-apache-angular.git
sudo chmod -R 777 laravel-docker-apache-angular/
cd laravel-docker-apache-angular
docker-compose up --build -d
docker exec -it laravel_app sh -c "composer install"
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
- Back-end: Api
- Front-end: Angular
- Testing
- Swagger

## Services
- Angular: http://localhost:4200/
- Laravel: http://localhost:8741


## API [utilisateur, client, material, ticket, sale]

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


## Preview

![appercu crud](ressources/preview-angular.png)
