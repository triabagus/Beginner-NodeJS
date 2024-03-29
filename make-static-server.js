var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    // read file
    fs.readFile(filename, function (err, data) {
        if (err) {
            // send to error 
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            return res.end("404 Not Found<br><a href='/index.html'>Back to Home</a>");
        }

        // send with file statis
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        return res.end();
    });
}).listen(8000);

console.log('Server Web Statis running on http://localhost:8000');