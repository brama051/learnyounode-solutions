var http = require('http')
var fs = require('fs')


var port = process.argv[2]
var filePath = process.argv[3]

var server = http.createServer((req, res) => {
	src = fs.createReadStream(filePath)
	

	src.on('readable', () => {
	  var data = src.read()
	  if(data){
	  	res.write(data)
	  	//console.log(data);
	  }else{
	  	src.close()
	  }
	  //res.write(src.read())
	});
	src.on('end', () => {
	  res.end();
	  //console.log('end');

	});
	
})

server.listen(port)