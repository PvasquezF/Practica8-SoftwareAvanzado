const express = require('express')
var mysql = require('mysql');
const app = express()
const port = 80;
var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '12345',
    database: 'practica8-softwareavanzado'
});

app.get('/', (req, res) => {
    res.status(200).json({
        result: 'hola'
    });
});

app.get('/db', (req, res) => {
    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
        if (error) {
            connection.end();
            res.status(200).json({
                result: error
            });
        } else {
            connection.end();
            res.status(200).json({

                result: results[0].solution
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});