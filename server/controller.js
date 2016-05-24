module.exports = {
  start: {
    get: function (req, res) {
      //respond with time of server
      res.send({
        data: Date.now()
      });
    }, // a function which handles a get request to start suggestion rounds
    post: function (req, res) {
    } // a function which handles posting a message to the database
  }
};

