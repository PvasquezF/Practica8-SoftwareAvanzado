const express = require('express')
const app = express()
const port = 3000;
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'sa',
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
            res.status(200).json({
                result: error
            });
        } else {
            res.status(200).json({

                result: results[0].solution
            });
        }
    });
    connection.end();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});