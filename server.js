let express = require("express");
let methodOverride = require("method-override");
let bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;
var exphbs = require("express-handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");
app.use(express.static("public"));

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");

var routes = require("./controllers/controllers.js");
app.use("/", routes);

app.listen(PORT);

