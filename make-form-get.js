var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);

    if (q.pathname == "/search/" && req.method === "GET") {
        // get parameter from URL
        var keyword = q.query.keyword;

        if (keyword) {
            // get data from form with metode GET
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write('<h3>Search Result</h3>');
            res.write('<a>Anda mencari <b>' + keyword + '</b></p>');
            res.write('Mohon maaf, data tidak ada<br>');
            res.end("<a href='/search/'>Back to Search</a>");
        } else {
            // see form serach
            fs.readFile('search.html', (err, data) => {
                if (err) {
                    // send error page
                    res.writeHead(404, {
                        'Content-Type': 'text/html'
                    });
                    return res.end("404 Not Found");
                }

                //send form search.html
                res.writeHead(200, {
                    'Content-Type': 'text/html'
                });
                res.write(data);
                return res.end();
            });
        }
    }
}).listen(8000);

console.log("Server search form ,running on http:8000");