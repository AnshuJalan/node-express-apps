

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

var itemList = [];
let workList = [];

app.get('/', function (req, res) {

   let currentDay = date();

    res.render('index', { listTitle: currentDay, items: itemList });
});

app.get('/work', function (req, res) {
    res.render('index', { listTitle: 'Work', items: workList });
});

app.post('/', function (req, res) {

    if (req.body.submit === "Work") {
        workList.push(req.body.todoItem);
        res.redirect('/work');
    }
    else {
        itemList.push(req.body.todoItem);
        res.redirect('/');
    }
});

app.get('/about', function(req, res){
    res.render('about');
});

app.listen(8080, function () {
    console.log("Server started on port: 8080");
});