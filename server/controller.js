var rooms = {};

module.exports = {
  start: {
    get: function (req, res) {
      // console.log('This is the IP address of req:', req.socket.remoteAddress);
      //respond with time of server
      res.send({
        data: Date.now()
      });
    }, // a function which handles a get request to start suggestion rounds

    post: function (req, res) {
      console.log('holy shit the POST worked!');
      // console.log(req.connection);
      var room = req.body.room;
      if(!rooms[room]){
        rooms[room] =[req.ip];
      } else {
        rooms[room].push(req.ip);
      }
      // console.log(rooms);
      // console.log(res);
      res.send({data:'THE POST! ITS WORKING'});
    } // a function which handles posting a message to the database
  }
};

