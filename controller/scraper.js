var cheerio = require("cheerio");
var request = require("request");
// var Article = require("")

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/scrapedData');

var db = require("../models");


var scrape = function () {
  console.log("\n***********************************\n" +
            "Grabbing every thread name and link\n" +
            "from reddit's webdev board:" +
            "\n***********************************\n");
  request("https://www.reddit.com/r/webdev", function(error, response, html) {
    var $ = cheerio.load(html);


    $("p.title").each(function(i, element) {
      var result = {};
      var title = $(element).text();
      var link = $(element).children().attr("href");

      //creates object that gets pushed into the results array
      result.title = $(this)
        .children("a")
        .text();
      result.link = $(this)
        .children("a")
        .attr("href");

      db.Article.create(result)
        .then(function(dbArticle) {
          // View the added result in the console
          //console.log(dbArticle);

        })
        .catch(function(err) {
          // If an error occurred, send it to the client
          return res.json(err);
        });
    });
    //console.log("from scraper!!!" + results);
  });
  //console.log("from scraper" + results);
};


//console.log(resultsObject);
module.exports = {
  scrape
};