var fs = require('fs');

try{
	var data = fs.readFileSync('README.txt', 'utf8');

	console.log(data);
}catch (error){
	console.error(error);
}