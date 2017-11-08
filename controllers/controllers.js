var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
var methodOverride = require('method-override');
var recipe = require('../models/recipe.js');

router.get('/', function(req,res) {
     res.redirect('/recipes');
});

router.get('/recipes', function(req,res) {
	recipe.all(function(data){
          console.log();
		res.render('index', {recipes : data});
	});
});

router.post('/recipes/create', function(req,res) {
	recipe.create(['ingredient_name', 'myFridge'], [req.body.name, 0], function(data){
		res.redirect('/recipes');
	});
});

router.put('/recipes/update/:id', function(req,res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	recipe.update({'myFridge' : 1}, condition, function(data){
		res.redirect('/recipes');
	});
});

module.exports = router;