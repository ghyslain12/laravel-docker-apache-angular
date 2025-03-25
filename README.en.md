
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

## Services
- Angular (front-end): http://localhost:4200/
- Laravel (API): http://localhost:8741


## API
- User: http://localhost:8741/api/utilisateur
- Client: http://localhost:8741/api/client
- Material: http://localhost:8741/api/material
- Ticket: http://localhost:8741/api/ticket
- Sale: http://localhost:8741/api/sale


## Preview

![preview crud](preview-angular.png)
