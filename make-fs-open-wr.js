var fs = require('fs');

fs.open('newfile2.txt', 'w+', function (err, file) {
    if (err) throw err;

    // content writer
    let content = "Hello Node Js";

    // write content to file
    fs.writeFile(file, content, (err) => {
        if (err) throw err;
        console.log('file saved');
    });

    // read file
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        console.log(data.toString('utf8'));
    });
});