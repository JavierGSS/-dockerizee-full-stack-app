var express = require('express');
var app     = express();
var colors = require("colors");

app.get('/', function(req,res){
    console.log(new Date().toLocaleString());
	console.log("App up & running".blue)
	res.send(new Date().toLocaleString());
});

var port = 3000;
app.listen(port,function(){
	console.log('Listening on port:' + port);
});