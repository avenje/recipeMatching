var express = require("express");
var router = express.Router();
var recipe = require("../models/recipe.js");
var app = express();

router.get("/", function(req, res) {
  if(req.user){
    res.redirect('/recipes');
  } else {
    res.render('login');
  }
});

router.get('/recipes', function(req,res) {
  if(!req.user){
    res.redirect('/');
  } else {
    recipe.all(function(data) {
      var hbsObject = {
        stock: data
      };
      res.render('index', {stock : data, user: req.user});
      console.log(hbsObject);
    });
  }
});

router.post("/createspice", function(req, res) {
  recipe.create([
    "item_name", "spice"
  ], [
    req.body.name, 1
  ], function(result) {
    res.redirect('/');
  });
});

router.post("/createfridge", function(req, res) {
  recipe.create([
    "item_name", "fridge"
  ], [
    req.body.name, 1
  ], function(result) {
    res.redirect('/');
  });
});

router.post("/createpantry", function(req, res) {
  recipe.create([
    "item_name", "pantry"
  ], [
    req.body.name, 1
  ], function(result) {
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
      res.redirect('/');       
  });
});

router.delete('/delete/:id', function(req, res){
  recipe.delete([req.params.id], function(){
    res.redirect('/');
  });
});

module.exports = router;