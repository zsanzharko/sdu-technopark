# Sdu TechnoPark Website

## Get started
This repository present website to Sdu TechnoPark. In this website all people can visit and communicate.

Sdu TechnoPark developed on Spring Boot framework. 

Technologies:
- Java 17 (ver **17.0.4**)
- Intellij Idea Ultimate
- PostgresSql (ver **14.5**) 
- Docker

### Installation
User can develop on 2 variant: 
* in local computer
* on local **Docker**

In this project we use majorly PostgresSQL, but in config u can use MySql.

Firstly need to clone the project
``` shell
git clone https://github.com/zsanzharko/techno-park.git
 ```
If u don't use docker to up, u need to install PostgresSQL and setup him. 
after that u can use user and password and database connection url

### **How to setup Postgres with Docker**
``` shell
docker pull postgres
```
Next step u can take url username and password from docker Desktop on details container 


## Config application to work
After installation Database and clone project, u need config application to run, 
it will to depend what u will choose run. 

If u will run application on Intellij Idea, need add this data to arguments
```properties
--SPRING_PORTS="value"
--SPRING_DATASOURCE_URL="value"
--SPRING_DATASOURCE_USERNAME="value"
--SPRING_DATASOURCE_PASSWORD="value"
--SPRING_DATASOURCE_DRIVER="value"
--SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT="value"
--google_client_id="value"
--google_client_secret="value"
```
Please, enter ur config to run

If u will run application on Docker, use docker compose in this project. 
Create file and call `.env` after input this data
```dotenv
DOCKER_BACKEND_PORT=value

SPRING_DATASOURCE_URL=value
SPRING_DATASOURCE_USERNAME=value
SPRING_DATASOURCE_PASSWORD=value
SPRING_DATASOURCE_DRIVER=value
SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT=value
SPRING_JPA_HIBERNATE_DDL_AUTO=value
SPRING_PORT=value

GOOGLE_CLIENT_ID=value
GOOGLE_CLIENT_SECRET=value

POSTGRES_USER=value
POSTGRES_PASSWORD=value
POSTGRES_DB=value
POSTGRES_PORTS=value
POSTGRES_VOLUME_DATA=value
POSTGRES_VOLUME_SQL_SCRIPTS=value

SPRING_RESOURCE_VOLUME=value
```





























