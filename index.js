// import module moment
var moment = require("moment");
var salam = require("./make-module-salam");

// use nodule 
console.log(salam.salam());
console.log("Now: " + moment().format('D MMMM YYYY, h:mm:ss a'));