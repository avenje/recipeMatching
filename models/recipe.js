
var orm = require('../config/orm.js');

var recipe = {
	all: function (cb) {
		orm.all('recipes', function (res) {
			cb(res);
		});
	},

     create: function (cols, vals, cb) {
		orm.create('recipes', cols, vals, function (res) {
			cb(res);
		});
	},
     update: function (objColVals, condition, cb) {
		orm.update('recipes', objColVals, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = recipe;