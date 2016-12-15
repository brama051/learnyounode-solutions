var http = require('http')
var url = require('url')

var server = http.createServer((request, response) => {
	var date = new Date(url.parse(request.url, true).query.iso)

	var pathName = url.parse(request.url, true).pathname
	
	var prep = new Object();

	switch (pathName) {
		case '/api/parsetime':
			prep = {
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds()
			}
			break;
		case '/api/unixtime':
			prep = {
				unixtime: Math.round(date.getTime()) 
			}
			break;
		default:
			break;
	}


	response.writeHead(200, {'Content-Type': 'application/json'})
	response.write(JSON.stringify(prep))
	response.end();

	
})

server.listen(process.argv[2])