var express = require('express');
var app = express();

//Route 1
app.get('/teams/:teamName/employees/:employeeId', function(req, res, nexr){
	console.log('teamName = ' + req.params.teamName);
	console.log('employeeId = ' + req.params.employeeId);
	res.send('path one');
});

//Route 2
app.get('/teams/:teamName/employees', function(req, res, next){
	console.log('setting content type');
	res.set('Content-Type', 'application/json');
	res.locals.data = 100;
	next();
}, function(req, res, next){
	console.log('teamName = ' + req.params.teamName);
	console.log(res.locals.data);
	res.send('path two');
});

//Route 3
app.get(/^\/groups\/(\w+)\/(\d+)$/, function(req, res, next){
	console.log('groupname = ' + req.params[0]);
	console.log('groupId = ' + req.params[1]);
	res.send('path three');
});

var server = app.listen(1337, function(){
	console.log('Server started on port 1337');
});