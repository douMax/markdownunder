

var express = require('express');
var app = express();

// set the view engine as ejs
app.set('view engine', 'ejs');


// public folder for assets
app.use(express.static(__dirname + '/public'));

// route

app.get('/', function(req, res){
  
  res.render('pad');
  
});

// listen on port 8000 for localhost or the port defined for heroku
var port = process.env.PORT || 8000;
app.listen(port);



