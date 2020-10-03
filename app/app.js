const express = require('express')
var mysql = require('mysql');
const app = express()
const port = 80;
var connection = mysql.createConnection({
    host: '35.202.209.170',
    port: '3306',
    user: 'root',
    password: '12345',
    database: 'practica8-softwareavanzado'
});
connection.connect();
app.get('/', (req, res) => {
    res.status(200).json({
        result: 'hola'
    });
});

app.get('/db', (req, res) => {
    connection.query("Select 1+1 As solution", function(err, result, fields) {
        if (err) {
            res.status(200).json({
                result: 'hola'
            });
        } else {
            res.send(result);
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});