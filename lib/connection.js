var mongoose = require('mongoose');
var dbUrl = 'mongodb://zziller03:paper0817@ds011790.mlab.com:11790/hwi-mongo';

mongoose.connect(dbUrl);

//Ctrl + C -> exit process
process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('Mongoose default connecion disconnected');
		process.exit(0);
	});
});

require('../models/employee');
require('../models/team');