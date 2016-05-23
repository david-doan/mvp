var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../client'));

console.log('MVP listening on port 8000');
app.listen(8000);

module.exports = app;
