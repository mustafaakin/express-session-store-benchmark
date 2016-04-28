var express = require("express");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var RedisStore = require('connect-redis')(session);

app.use(cookieParser());
app.use(session({
	store: new RedisStore({
		host: 'localhost',
		port: 6379,
		db: 2,
		}),
	secret: 'hello',
  resave: true,
  saveUninitialized: true
}));

app.get("/", function(req,res){
	if ( req.session && req.session.no){
		req.session.no = req.session.no + 1;
	} else {
		req.session.no = 1;
	}
	res.send("No: " + req.session.no);
});

app.listen(5000);
