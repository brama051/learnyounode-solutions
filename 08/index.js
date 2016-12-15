var http = require('http');
var bl = require('bl');

var url = process.argv[2];
var all = 0;
var responses = new Array();

http.get(url, function(response){
	response.pipe(bl(function(err, data){
		all += data.toString().length
		responses.push(data.toString())
	}))
	response.on('end', function(){
		console.log(all);
		responses.forEach( function(element, index) {
			console.log(element)
		});
	});
})