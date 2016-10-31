var fs = require('fs');
var data = 'some file data';

fs.writeFile(__dirname + '/writeFile.txt', data, function(error){
	if(error){
		return console.error(error.message);
	}
});