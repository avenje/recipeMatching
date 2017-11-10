
var orm = require('../config/orm.js');

var recipe = {
  all: function(cb) {
    orm.all("stock", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("stock", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.update("stock", objColVals, condition, function(res) {
      cb(res);
    });
  },

  return: function(objColVals, condition, cb) {
    orm.update("stock", objColVals, condition, function(res) {
      cb(res);
    });
  },
  
  delete: function(condition, cb) {
    orm.delete("stock", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = recipe;