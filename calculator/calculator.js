var express = require("express");
var app = express();
var bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({extended: true}));

app.post('/', function(req, res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);

    var result = n1 + n2;

    res.send("Result of the calculation is: " + result);
});

app.post('/bmiCalculator', function(req, res){
    var h = Number(req.body.height);
    var w = Number(req.body.weight);

    var bmi = (w / (h * h));
    res.send("Your BMI is: " + bmi.toFixed(1));
});

app.get('/bmiCalculator', function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000);