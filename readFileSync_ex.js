var fs = require('fs');
var data;

try{
	data = fs.readFileSync(__filename);
	console.log(data);
} catch (error) {
	console.error(error.message);
}