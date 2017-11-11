let mysql = require("mysql");


var connection;
if(process.env.JAWSDB_URL){
	//Heroku deployment
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
//local host
connection = mysql.createConnection({
	// port: 3000,
	host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",  
	user: "r2xbiyfdzmcsv522", 
	password: "gdvmdms8nwu9l7bo",  
	database: "q7ivks83mpervhrg"  
});
};

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});



module.exports = connection;