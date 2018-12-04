var express = require('express');
var router = express.Router();

var customers = require('../modules/customers');

// index route that shows all of the customers
router.get('/', function(request, response) {
  var mustacheVariables = {
    customerList: customers
  }
  response.render('./customers/index', mustacheVariables);
})

// show route that shows a single customer

router.get('/:customer', function(request, response) {
  // still needs to be set up
})

module.exports = router;