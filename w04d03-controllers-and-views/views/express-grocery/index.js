// Set up express
var express = require('express');
var mustache = require('mustache-express');
var app = express();
var port = 3000;

app.engine('html', mustache());
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

var fruitsController = require('./controllers/fruits_controller');
var vegetablesController = require('./controllers/vegetables_controller');
var customersController = require('./controllers/customers_controller');

app.get('/', function(request, response){
  response.send('This is my grocery store. I sell fruits and vegetables.')
})

app.use('/fruits', fruitsController);
app.use('/vegetables', vegetablesController);
app.use('/customers', customersController);

// Make your app listen
app.listen(port, function () {
  console.log(`App is listening on port ${port}`);
})