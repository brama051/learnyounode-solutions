var fs = require('fs');

var fileBuffer = fs.readFileSync(process.argv[2]);
console.log(String(fileBuffer).split('\n').length - 1 )
