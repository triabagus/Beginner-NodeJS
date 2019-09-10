var fs = require('fs');

// create a file named newfile.txt
fs.appendFile('newfile.txt', 'Hi on Node Js', function (err) {
    if (err) throw err;
    console.log('File saved');
});