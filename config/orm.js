// Import the MySQL connection object
var connection = require ('./connection.js');

// helper function to generate MySQL syntax
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

// helper function for generate MySQL syntax
function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		arr.push(key + "=" + ob[key]);
	}

	return arr.toString();
}

// orm object
var orm = {
	// return table entries
	selectAll: function(tableInput, cb) {
		// query string to return all rows from table
		var queryString = "SELECT * FROM " + tableInput + ";";

		// do the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// callback for results
			cb(result);
		});
	},

	//insert a single table entry
	insertOne: function(table, cols, vals, cb) {
		// query string to insert into a row 
		var queryString = "INSERT INTO " + table;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ") ";

		// do the database entry
		connection.query(queryString, vals, function(err, result) {
			if (err) {
				throw err;
			}

			// callback for results
			cb(result);
		});
	},

	// updates a single data entry
	updateOne: function(table, objColVals, condition, cb) {
		// query to update 
		var queryString = "UPDATE " + table;

		queryString += " SET ";
		queryString += objToSql(objColVals);
		queryString += " WHERE ";
		queryString += condition;

		// do the database query
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}

			// call back for results
			cb(result);
		});
	}
};

// export orm object to use for other modules
module.exports = orm;