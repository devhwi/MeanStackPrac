var fs = require('fs');
var data = 'some file data';

fs.writeFile(__dirname + '/writeFile.txt', data, {
	//flag: 'wx'
	flag: 'a'
}, function(error){
	if(error){
		return console.error(error.message);
	}
});