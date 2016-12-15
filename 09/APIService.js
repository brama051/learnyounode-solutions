var http = require('http');

class APIService {
	getData(endpoint) {
		var deferred = Promise.defer()
		
		http.get(endpoint, function(response){
			var complete = ''; 
			response.on('data', function(data){
				complete += data.toString();
			})

			response.on('end', () => {
				deferred.resolve(complete);
			})
		})

		return deferred.promise
	}
}


module.exports = new APIService