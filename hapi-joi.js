var Hapi = require('hapi');
var joi = require('joi');
var server = new Hapi.Server();

server.route({
	method: 'GET',
	path: '/users',
	config: {
		handler: function(request, reply){
			reply(request.query);
		},
		validate: {
			query: joi.object().keys({
				page: joi.number().integer().min(1).max(10),
				number: joi.number().integer().min(1).max(5)
			})
		}
	}
});