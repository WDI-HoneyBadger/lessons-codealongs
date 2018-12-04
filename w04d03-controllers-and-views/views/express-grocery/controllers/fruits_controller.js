var express = require('express');
var router = express.Router()

var fruits = require('../modules/fruits');

router.get('/', function(request,response){
  //gives me an array of the keys for an object
  var fruitNames = Object.keys(fruits);
  var fruitList = fruitNames.join(', ');
  response.send(`These are our fruits: ${fruitList}`)
  // still needs to be set up
})

router.get('/:fruit', function (request, response) {
  var fruitName = request.params.fruit;
  var fruit = fruits[fruitName];
  var mustacheVariables = {
    name: fruitName,
    price: fruit.price
  }

  response.render('./fruits/show', mustacheVariables);
})

module.exports = router;