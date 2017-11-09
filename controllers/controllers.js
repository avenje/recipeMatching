const express = require('express');
const router = express.Router();
const recipe = require('../models/recipe.js');
const passport = require('passport');

router.get('/', function(req,res) {
	console.log('user', req.user);
	if (req.user) {
		res.redirect('/recipes');
	}
    else {
		res.render('index');
	}
});

router.get('/recipes', function(req,res) {
	recipe.all(function(data){
          console.log();
		res.render('recipe', {recipes : data, user: req.user});
	});
});

router.post('/recipes/create', function(req, res) {
	recipe.create(['ingredient_name', 'myFridge'], [req.body.name, 0], function(data){
		res.redirect('/recipes');
	});
});

router.delete('/recipes/delete/:id', function(req,res) {
	recipe.delete({id: req.params.id}, function(data){
		res.redirect('/recipes');
	});
});

module.exports = router;
