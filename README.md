# Práctica # 8: Contenedores: conceptos, Docker, docker compose
## Nombre: 
201503611 - Pavel Alexander Vásquez
## Instrucciones: 
* Crear al menos dos contenedores en Docker Compose que involucren:
    1. Un servidor web
    2. Una base de datos 
* El servidor web debe hacer alguna consulta a la base (lenguaje libre) y presentar información en el puerto 80 del host.
* El Docker Compose debe poder darle los datos a la base en algún archivo que la base importe al iniciar y luego sea lo que presente.
* Entrega en repositorio y video de demostración (2 minutos máximo).

## Como utilizar
Utilizar el comando para correr nuestro archivo yaml
```
docker-compose up -d --build
```

### Acceder a pagina
Esta pagina nos devuelve los elementos de nuestra tabla en la base de datos.
```
http://35.202.209.170/db
```


## Estructura 
    -- app
        ---- app.js
        ---- Dockerfile
        ---- package-lock.json
        ---- package.json
    -- db
        ---- Dockerfile
        ---- script.sql
    -- .gitignore
    -- docker-compose.yaml
    -- README.md

## Herramientas
* Nodejs
* Docker
* Mysql

## Contacto
Correo: alexanderpavelv32@gmail.com