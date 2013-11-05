var express = require("express");
var app = express();

app.use( express.cookieParser());
app.use( express.session( {secret: "hello"} ));

app.get("/", function(req,res){
	if ( req.session && req.session.no){
		req.session.no = req.session.no + 1;
	} else {
		req.session.no = 1;
	}
	res.send("No: " + req.session.no);
});

app.listen(5000);