var http = require('http');

http.createServer(function (req, res){
	//url : parsing parameter
	var _url;

	req.method = req.method.toUpperCase();
	console.log(req.method + ' ' + req.url);
	res.end('The current time is ' + Date.now())
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');