var fs = require('fs');
var bufarray = fs.readFileSync(process.argv[2]);
var str = bufarray.toString();
var line = str.split('\n');
console.log(line.length - 1);