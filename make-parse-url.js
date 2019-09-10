var url = require('url');
var adress = 'https://www.triabagus.site/2019/08/laboratorium-css-and-js.html?halaman=13';
var q = url.parse(adress, true);

// value parse URL
console.log("protocol: " + q.protocol);
console.log("hostname: " + q.host);
console.log("pathname: " + q.pathname);
console.log("params: " + q.search);

var queryData = q.query; // get query string to object
console.log(queryData);