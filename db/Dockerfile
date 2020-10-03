From mysql:latest
COPY script.sql /docker-entrypoint-initdb.d
COPY command.sh /docker-entrypoint-initdb.d
RUN ./docker-entrypoint-initdb.d/command.sh
EXPOSE 3306