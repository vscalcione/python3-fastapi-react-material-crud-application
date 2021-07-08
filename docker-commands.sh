#!/bin/bash

## command to create a container with MySQL instance
docker run --name mysqldb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=<db-name> -d -p 3306:3306 mysql:latest

## command to show all containers
docker container ls


