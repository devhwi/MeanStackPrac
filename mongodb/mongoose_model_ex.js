var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var db       = mongoose.connection;
var dbUrl    = 'mongodb://zziller03:password@ds011790.mlab.com:11790/hwi-mongo';
var TeamSchema = new Schema({
	name: {
		type: String,
		required: true
	}
});

var Team = mongoose.model('Team', TeamSchema);

db.on('error', function(){
	console.log('there was an error communicating with the database');
});

mongoose.connect(dbUrl, function (err){
	if(err){
		return console.log('there was a problem connecting to the database!' + err);
	}

	console.log('connected!');
	var team = new Team({
		name: 'Product Development'
	});

	team.save(function(error, data){
		if(error){
			console.log(error);
		}else{
			console.dir(data);
		}
		db.close();
		process.exit();
	});
});

var EmployeeSchema = new Schema({
	first: {
		type: String,
		required: true
	},
	last: {
		type: String,
		required: true
	},
	team: {
		type: Schema.Types.ObjectId,
		ref: 'Team'
	},
	image: {
		type: String,
		default: 'images/user.png'
	},
	address:{
		lines: {
			type: [String]
		},
		postal: {
			type: String
		}
	}
});