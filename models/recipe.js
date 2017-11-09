
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
    delete: function (condition, cb) {
		orm.delete('recipes', condition, cb);
	}
};

module.exports = recipe;