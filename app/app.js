const http = require("http");
const port = 3000;
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'practica8-softwareavanzado'
});
const requestListener = function(req, res) {
    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
        if (error) throw error;
        res.writeHead(200);
        res.end('The solution is: ', results[0].solution);
    });

    connection.end();
};

const server = http.createServer(requestListener);
server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});