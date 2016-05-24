module.exports = {
  start: {
    get: function (req, res) {
      //respond with time of server
      res.send({
        data: Date.now()
      });
    }, // a function which handles a get request to start suggestion rounds
    post: function (req, res) {
      console.log('holy shit the POST worked!');
      res.send({data:'THE POST! ITS WORKING'});
    } // a function which handles posting a message to the database
  }
};

