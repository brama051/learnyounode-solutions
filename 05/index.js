var fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function (err, list){
	for (var i = 0; i < list.length; i++){
		//console.log(i + " " + list[i])
		var file = list[i].split('.');
		if(file[file.length - 1] === ext && list[i].indexOf('.' + ext) !== -1){
			console.log(list[i])
		}
	}
});