let mysql = require("mysql");

var connection;
if(process.env.JAWSDB_URL){
	//Heroku deployment
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	local host
	connection = mysql.createConnection({
	port: 3000,
    host:"	yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",  
    user:"hlac0x4javf0fjle",  
    password:"y80a1f295zuj2p09",  
	database: "kho6h3yx8cgzexgn"  
});
// };

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;


