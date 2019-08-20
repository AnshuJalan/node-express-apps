const express = require("express");

var app = express();

app.get('/', function(request, response){
    response.send("<h1>First ever server response!</h1>");
});

app.get('/about', function(req, res){
    res.send("Hi!, I am Anshu Jalan.");
});
app.listen(3000);