//*****HOW TO EXECUTE THIS AT RUNTIME*****

var express = require("express");
var app     = express();
var path    = require("path");

app.get('/',function(req,res){
  //res.sendFile(path.join(__dirname+'/views/product.html'));
  res.sendFile(path.join(__dirname+'/build/product.html'));
});

app.use(express.static(__dirname + '/images'));

app.use(express.static(__dirname + '/chico'));

app.use(express.static(__dirname + '/scripts'));

app.use(express.static(__dirname + '/styles'));

app.use(express.static(__dirname + '/build'));

app.listen(3000, function(){
    console.log("Running at Port 3000...Press CTRL+C to stop.");
});