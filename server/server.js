var express = require('express');
var data = require('./data');
var app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/workouts', function (req, res) {
  res.json(data);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});