var APIService = require('./APIService.js');

var loadData = function() {
	var urls = new Array();
	var datas = new Array();

	for(var i = 2; i < 5; i++){
		urls.push(process.argv[i])
		//console.log(process.argv[i])
	}

	Promise.all([
		APIService.getData(urls[0]),
		APIService.getData(urls[1]),
		APIService.getData(urls[2])
	]).then((values) => {
		values.forEach( function(element, index) {
			console.log(element)
		})
	})
}

loadData()





