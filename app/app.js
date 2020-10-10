const express = require('express')
var mysql = require('mysql');
const fetch = require('node-fetch');
const app = express()
const port = 80;
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345',
    database: 'practica8-softwareavanzado'
});
connection.connect();
app.get('/', async(req, res) => {
    connection.query("Select * from animales", function(err, result, fields) {
        if (err) {
            res.status(200).json({
                result: err
            });
        } else {
            res.status(200).json({
                result
            });
        }
    });
    connection.query(`INSERT INTO animales VALUES('Fecha', '${new Date()}');`)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});