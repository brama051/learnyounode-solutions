var myModule = require('./mymodule.js');

myModule(process.argv[2], process.argv[3], function(err, files){
	if(err)
		return console.error('There was an error:', err)

	files.forEach( function(element, index) {
		console.log(element)
	});
});