var fs = require('fs');

fs.rename('newfile.txt', 'rename-file.txt', function (err) {
    if (err) throw err;
    console.log('File renamed');
});