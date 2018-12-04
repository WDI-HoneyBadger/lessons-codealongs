var express = require('express');
var router = express.Router();

var vegetables = require('../modules/vegetables');

router.get('/', function(request, response){
  var vegetableNames = Object.keys(vegetables);
  var vegetableList = vegetableNames.join(', ');
  response.send(`Our vegetables: ${vegetableList}`);
})

router.get('/:vegetable', function(request, response){
  var vegetableName = request.params.vegetable;
  var vegetable = vegetables[vegetableName];
  response.send(`${vegetableName} is ${vegetable.description} and costs ${vegetable.price}`)
})

module.exports = router;