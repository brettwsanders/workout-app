var express = require('express');
var data = require('./data');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var fileName = './data.json';
var nextId = data.length;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/../client'));

app.get('/workouts', function (req, res) {
  res.json(data);
});

app.post('/workouts/new', function (req, res) {
  var workout = req.body;
  workout.id = nextId;
  nextId++;
  data.push(workout);
  console.log(data);

  fs.writeFile(fileName, JSON.stringify(data, null, 4), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + fileName);
        res.send("New workout saved");
      }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});