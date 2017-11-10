const express = require('express');
const router = express.Router();
const recipe = require('../models/recipe.js');
const passport = require('passport');
const app = express();

router.get("/", function(req, res) {
  recipe.all(function(data) {
    var hbsObject = {
      recipe: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get('/recipes', function(req,res) {
	recipe.all(function(data){
          console.log();
		res.render('recipe', {recipes : data, user: req.user});
	});
});

router.post("/createspice", function(req, res) {
  recipe.create([
    "item_name", "spice"
  ], [
    req.body.name, 1
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect('/');
  });
});

router.post("/createfridge", function(req, res) {
  recipe.create([
    "item_name", "fridge"
  ], [
    req.body.name, 1
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect('/');
  });
});

router.post("/createpantry", function(req, res) {
  recipe.create([
    "item_name", "pantry"
  ], [
    req.body.name, 1
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect('/');
  });
});

router.put("/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  recipe.update({
    'include': 1
  }, condition, function(result) {

      
      res.redirect('/');
       
  });
});

router.put("/return/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  recipe.update({
    'include': 0
  }, condition, function(result) {

      // res.status(200).end();
      res.redirect('/');
       
  });
});

router.delete("/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  recipe.delete(condition, function(result) {
    
      res.redirect('/');
       
  });
});

module.exports = router;
