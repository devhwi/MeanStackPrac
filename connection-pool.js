var mysql = require('mysql');
var pool  = mysql.createPool({
	host: 'localhost',
	user: 'username',
	password: 'secret',
	database: 'dbname',
	connectionLimit: 20,
	queueLimit: 100,
	waitForConnections: true
});

pool.getConnection(function(error, connection) {
	if (error) {
		return console.error(error.message);
	}

	console.log('successfully obtained connection');
});