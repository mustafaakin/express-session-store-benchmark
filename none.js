var express = require("express");
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser());

app.get("/", function(req,res){
	res.send("No: 1");
});

app.listen(5000);
