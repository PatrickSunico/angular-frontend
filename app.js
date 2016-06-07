// Basic Mini API Server
var express = require('express');
var app = express();

var data = require('./data.js');

app.use(express.static(__dirname + '/public'));

app.get('/data', function(req,res){
  res.json(data);
});

app.listen(3000,function(){
  console.log("Server Started");
});
