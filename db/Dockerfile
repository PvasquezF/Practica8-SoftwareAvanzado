From mysql:latest
COPY script.sql /docker-entrypoint-initdb.d
COPY command.sh .
RUN sudo ./command.sh
EXPOSE 3306