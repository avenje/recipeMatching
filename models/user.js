
var orm = require('../config/orm.js');

var User = {
	all: function (cb) {
		orm.all('users', cb);
	},
	findOne: function(condition, cb) {
		orm.query('users', condition, function(users) {
			if (users.length) {
				cb(users[0]);
			} else {
				cb(null);
			}
		});
	},
	findById: function(id, cb) {
		orm.query('users', {id: id}, function(users) {
			if (users.length) {
				cb(users[0]);
			} else {
				cb(null);
			}
		});
	},
    create: function (cols, vals, cb) {
		orm.create('users', cols, vals, cb);
	},
    delete: function (condition, cb) {
		orm.delete('users', condition, cb);
	}
};

module.exports = User;