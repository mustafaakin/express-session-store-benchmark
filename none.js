var express = require("express");
var app = express();

app.configure(function(){
	app.use(express.cookieParser());
});

app.get("/", function(req,res){
	res.send("No: 1");
});

app.listen(5000);