var requestHandler = (options, callback) => {
  // TODO
  var urlStr = 'http://localhost:8000' + options.endpoint;
  $.ajax({
    url: urlStr,
    type: options.method,
    contentType: 'application/json',
    data: JSON.stringify(options.data),
    success: function (data) {
      console.log('YAY GET REQUEST');
      console.log(data);
      callback(data);
    },
    error: function (data) {
      console.error('FAILED GET REQUEST WHHHY', data);
    }
  });
};

window.requestHandler = requestHandler;
