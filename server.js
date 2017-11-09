const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const passportSetup = require('./config/passport-setup');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const app = express();

app.use(cookieSession({
    maxAge:24 * 60 * 60 * 1000,
    keys:[keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

const routes = require("./controllers/controllers.js");
const authRoutes = require('./controllers/auth');
app.use("/", routes);
app.use('/auth', authRoutes);

app.listen(PORT);
