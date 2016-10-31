var http = require('http');

http.createServer(function (req, res){
	//url : parsing parameter
	var _url;

	req.method = req.method.toUpperCase();
	console.log(req.method + ' ' + req.url);
	
	if(req.method !== 'GET'){
		res.writeHead(501, {
			'Content-Type': 'text/plain'
		});
		return res.end(req.method + ' is not implemented by this server.');
	}

	if(_url = /^\/employees$/i.exec(req.url)){
		//return list
		res.writeHead(200);
		return res.end('employee list');
	} else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)){
		//search by id included route
		res.writeHead(200);
		return res.end('a single employee');
	} else {
		//transfer static file
		res.writeHead(200);
		res.end('static file maybe');
	}

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');