var http = require('http');
var fs = require('fs');
http.createServer(function (request, response) {

    // read file 
    fs.readFile('file-system.html', (err, data) => {
        if (err) throw err;

        // send response
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        response.write(data);
        response.end();
    });

}).listen(8000);

console.log("server module file system running on http://localhost:8000");