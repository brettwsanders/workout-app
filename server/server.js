var express = require('express');
var data = require('./data');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

var fileName = './data.json';
var nextId = getNextId(data);

function getNextId (data) {
  return Number(data[data.length - 1]['id']) + 1;
};

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/../client'));

app.get('/workouts', function (req, res) {
  res.json(data);
});

app.post('/workouts/new', function (req, res) {
  console.log('data.length is ', data.length);
  var workout = req.body;
  workout.id = nextId;
  nextId++;
  data.push(workout);

  fs.writeFile(fileName, JSON.stringify(data, null, 4), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + fileName);
        res.send("New workout saved");
      }
  });
});

app.delete('/workouts/delete/:id', function (req, res) {
  var targetId = req.params.id;
  var newData = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i]["id"] !== Number(targetId)) {
      newData.push(data[i]);
    }
  }
  console.log(newData);

  fs.writeFile(fileName, JSON.stringify(newData, null, 4), function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Workout deleted.');
      res.send(newData);
    }
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});