var fs = require('fs');

fs.open('newfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('File saved');
});

/**
 * Flag 
 * 
r buka file untuk dibaca.Jika file tidak ada maka akan terjadi error.

r + buka file untuk dibaca dan ditulis.Apabila file tidak ada maka akan terjadi error.

rs buka file untuk dibaca dalam mode synchronous.

rs + buka file untuk dibaca dan ditulis dalam mode synchronous.

w buka file euntuk ditulis.

wx sama seperti w, tapi akan error jika sudah ada filenya.

w + buka file untuk ditulis dan dibaca.

wx + sama seperti w + tapi akan error jika sudah ada 
filenya.

a buka file untuk diisi.

ax sama seperti a tapi akan error jika sudah ada filenya.

a + buka file untuk diisi.

ax + sama seperti a + tapi akan error jika sudah ada 
filenya.

*/