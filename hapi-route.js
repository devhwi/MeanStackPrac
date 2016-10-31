var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
	method: 'GET',
	path: '/users',
	config: {
		handler: function (request, reply){
			var result = {};
			setTimeout(function() {
				result.users = [{
					first: 'Abraham',
					last: 'Lincoln'
				}, {
					first: 'Andrew',
					last: 'Johnson'
				}, {
					first: 'Ulysses'
					last: 'Grant'
				}];
				result.time = Date.now();

				return reply(result).header('X-Special-Header', 'MEAN Stack');
			}, 3000);
		}
	}
});

server.start();