var mysql = require('mysql');
//connection method 1
var connection = mysql.createConnection('mysql://user:secret@localhost:3306/dbname');

//connection method 2
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'user',
	password: 'secret',
	database: 'dbname'
});

connection.connect(function(error){
	if(error){
		return console.error(error.message);
	}

	console.log('successfully connected!');
});