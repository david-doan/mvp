var express = require('express');
var http = require('http');
var socket = require('socket.io');

//Router
var router = require('./routes.js');

//Middleware
var bodyParser = require('body-parser');

var app = express();
var server = http.Server(app);
var io = socket(server);

//Parsing
app.use(bodyParser.json());

//Set up Routes
app.use('/', router);

//Static Files
app.use(express.static(__dirname + '/../client'));

// Closure vars for Scoket IO stuff
var count = 0;
var totalSugg = [];

//Socket IO stuff
io.on('connection', (socket) => {
  socket.emit('news',{hello:'world'});
  
  var room;
  socket.on('roomChange', (data) => {
    socket.join('poop');
    room = data;
    console.log(io.sockets.adapter.rooms['poop'].length, "<<< many conections to 'poop'");
  });

  socket.on('start', () => {
    io.to('poop').emit('begin', 'START');
  });
  
  socket.on('other event', (data) => {
    console.log(data, '<<< data from client');
  });

  socket.on('endSugg', (data) => {
    console.log(data, '<<< suggList');
    count++;
    totalSugg = totalSugg.concat(data);

  });


});



console.log('MVP listening on port 8000');
server.listen(8000);

module.exports = app;
