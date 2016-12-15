var http = require('http')

var server = http.createServer((request, response) => {
	var message = '';
	request.on('data', (data) => {
		if(request.method === 'POST'){
			//console.log(data)
			message += data.toString().toUpperCase()
			response.write(data.toString().toUpperCase())
		}
	})

	request.on('end', () => {
		console.log(message)
		response.end()
	})

})

server.listen(process.argv[2])