var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    switch (request.url) {
        case '/about':
            response.write('This is a URL : ' + request.url);
            break;
        case '/profile':
            response.write('This is a URL : ' + request.url);
            break;
        case '/product':
            response.write('This is a URL : ' + request.url);
            break;
        default:
            response.write('404 : Page Not Found');
    }
    response.end();
}).listen(8000);

console.log('Server make request run on http://localhost:8000');