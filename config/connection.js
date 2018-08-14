// pull dependencies
var mysql = require('mysql');

var connection;

	// local host db
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'virtue247297E3',
		database: 'burgers_db'
	});


// make the connection to MySQL
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL error connection: ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL Database as id:' + connection.threadId + '\n\n');
});

// export connection so orm can use
module.exports = connection;
