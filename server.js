/**
 * Function import library HTTP from node_modules 
 */
var http = require('http');

/**
 * Make object server
 */
var server = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html' // response header
    });
    /**
     * // untuk JSON
    response.writeHead(200, {'Content-Type': 'application/json'});

    // untuk PDF
    response.writeHead(200, {'Content-Type': 'application/pdf'});

    // untuk XML
    response.writeHead(200, {'Content-Type': 'application/xml'});

     */
    res.write('Hello <b>World</b>');
    res.end();
    // res.end("Hi, Welcome to Node Js");
}).listen(8000);

/**
 * Port Server
 */

// server.listen(8000);
console.log("server running on https://localhost:8000");