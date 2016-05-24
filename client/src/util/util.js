var requestHandler = (options, callback) => {
  // TODO
  var urlStr = 'http://localhost:8000' + options.endpoint;
  $.ajax({
    url: urlStr,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log('YAY GET REQUEST');
      console.log(data);
      callback(data.data);
    },
    error: function (data) {
      console.error('FAILED GET REQUEST WHHHY', data);
    }
  });
};

window.requestHandler = requestHandler;
