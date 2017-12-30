let mysql = require("mysql");

// //-------- use the following if working locally ------------------------
// var connection;
// // if(process.env.JAWSDB_URL){
// // 	//Heroku deployment
// // 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// // } else {
// //local host
// connection = mysql.createConnection({
// 	// port: 3000,
// 	host: "localhost",  // ysp9sse09kl0tzxj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
// 	user: "root",  // r7uqo4x5nh5x7jxu
// 	password: "mysqlpass",  // vk3a68yw21xrrogu
// 	database: "recipes_db"  // database: "q49pd4euc6n0yq5i"
// });
// // };
// //-----------------------------------------------------------------------


//------ use the following if working if deploying to heroku ----------
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
//-----------------------------------------------------------------------

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});



module.exports = connection;