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

router.get('/:asdfasdfasd', function (request, response) {
  var fruitName = request.params.asdfasdfasd;
  console.log(request.params)
  // console.log(fruitName);
  var fruit = fruits[fruitName];
  // var fruit = fruits['lime']
  // var fruit = fruits.lime.price
  var mustacheVariables = {
    name: fruitName,
    price: fruit.price,
    animal: 'fox'
  }

  response.render('./fruits/show', mustacheVariables);
})

module.exports = router;