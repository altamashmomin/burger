// import ORM to use functions to interact with database
var orm = require('../config/orm.js');

// burger object
var burger = {
  // Select all burger table entries
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  // variable columns and rows are an array
  insertOne: function(cols, vals, cb) {
    orm.insertOne('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  // objColVals specifies columns as object keys with associated values
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// export database functions to controller
module.exports = burger;
