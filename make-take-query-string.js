var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var queryUrl = url.parse(request.url, true).query;
    var text = 'Key Word: ' + queryUrl.keyword;
    response.end(text);
}).listen(8000);

console.log('Server Make Take Query String on http;//localhost:8000');

// http://localhost:8000/search?keyword=helloWorld