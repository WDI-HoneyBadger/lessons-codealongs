var express = require('express');
var app = express();
var port = 3000;

// mustache config
var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
  var mustacheVariables = {
    yesOrNo: true,
    userAttendance: false
  }
  res.render('./index', mustacheVariables);
})

app.listen(port, function () {
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
})