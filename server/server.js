var express = require('express');

//Router
var router = require('./routes.js');

//Middleware
var bodyParser = require('body-parser');

var app = express();

//Parsing
app.use(bodyParser.json());

//Set up Routes
app.use('/', router);

//Static Files
app.use(express.static(__dirname + '/../client'));



console.log('MVP listening on port 8000');
app.listen(8000);

module.exports = app;
