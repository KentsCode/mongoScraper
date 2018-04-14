var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cheerio = require("cheerio");
var request = require("request");

var db = require("./models");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/scrapedData";
mongoose.connect(MONGODB_URI);

// This makes sure that any errors are logged if mongodb runs into an issue
// db.on("error", function(error) {
//   console.log("Database Error:", error);
// });



app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});
  
var routes = require("./controller/orm.js");
app.use(routes);

