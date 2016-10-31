var mysql = require('mysql');
var pool = mysql.createPool({
	host: 'localhost',
	user: 'user',
	password: 'secret',
	database: 'dbname'
});

pool.getConnection(function(error, connection){
	if (error){
		return console.error(error.message);
	}

	console.log('successfully obtained connection!');
	connection.close();
});