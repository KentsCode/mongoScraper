var express = require("express");
var router = express.Router();
var app = express();
var bodyParser = require("body-parser");
var db = require("../models");

const scraper = require("./scraper.js");

router.get("/", function(req, res) {
    db.Article.find({})
        .then(function(dbArticle) {
        //console.log(dbArticle);
        res.render("articles", { item: dbArticle });
        })
    
    console.log("received!!!");
        //res.render("articles");
});

router.post("/submit", function(req, res) {
    db.scrapedArticles.create(req.body)
        .then(function(dbArticle) {
            //return db.Library.findOneAndUpdate({}, { $push: { books: dbBook._id } }, { new: true });
        })

});

router.get("/scrape", function(req,res) {
    scraper.scrape();
    //res.send(scraper.dbArticle);
    db.Article.find({})
        .then(function(dbArticle) {
        console.log(dbArticle);
        })
    res.render("articles"/*, {item: scraper.*/);
    //still not fully working.
    // res.send(scraper.result);
    // console.log(scraper.results);
});

router.get("/delete", function(req,res) {
    console.log(req);
    console.log("received Delete");
    //db.Article.remove({id: req.id});
})

module.exports = router;