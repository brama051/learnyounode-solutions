var fs = require('fs');

var file = fs.readFile(process.argv[2], function (err, data){
	console.log(String(data).split('\n').length - 1)
})