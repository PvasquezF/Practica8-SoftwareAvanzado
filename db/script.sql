ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY '12345';
FLUSH PRIVILEGES;

use `practica8-softwareavanzado`;
CREATE TABLE animales(
    nombre varchar(250),
    foto varchar(250)
);

INSERT INTO animales VALUES('Gato', 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg');
INSERT INTO animales VALUES('Perro', 'https://www.hola.com/imagenes/estar-bien/20190820147813/razas-perros-pequenos-parecen-grandes/0-711-550/razas-perro-pequenos-grandes-a.jpg?filter=ds75');
