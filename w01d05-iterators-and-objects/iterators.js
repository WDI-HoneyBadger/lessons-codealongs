
















// var pizzaToppings = [
//   'pepperoni',
//   'cheese',
//   'sardines',
//   'mushrooms',
//   'pineapples',
//   'soap',
//   'sausage'
// ];

/* FOREACH LOOPS */
/* pizzaToppings.forEach(function(topping){
  if(topping[0] == 's') {
    console.log(topping);
  }
})

// the same thing in for loop form: 
for (var i = 0; i < pizzaToppings.length; i++){
  if(pizzaToppings[i][0] == 's') {
    console.log(pizzaToppings[i])
  }
}

//the same thing using a separate function:
function stringStartsWithS(word) {
  if(word[0] == 's') {
    console.log(word);
  }
}

pizzaToppings.forEach(stringStartsWithS);
 */

/* **************************** MAP ********************* */

var pizzaToppings = [
  'pepperoni',
  'cheese',
  'sardines',
  'mushrooms',
  'pineapples',
  'soap',
  'sausage'
];

var pizzaToppingsCaps = pizzaToppings.map(function(topping){
  return topping.toUpperCase();
})

// console.log('first one', pizzaToppingsCaps);

// this is the same as:
var pizzaToppingsCaps = [];
for (var i = 0; i < pizzaToppings.length; i++) {
  var uppcaseTopping = pizzaToppings[i].toUpperCase();
  pizzaToppingsCaps.push(uppcaseTopping);
}

// or you can even make a version of map that uses a forEach:
var pizzaToppingsCaps = [];
pizzaToppings.forEach(function(topping){
  var upperCaseTopping = topping.toUpperCase();
  pizzaToppingsCaps.push(upperCaseTopping);
})

// console.log('second one', pizzaToppingsCaps);

// this is the same as:
function upperCaseWord(word) {
  return word.toUpperCase();
}

var pizzaToppingsCaps = pizzaToppings.map(upperCaseWord);

// console.log('third one', pizzaToppingsCaps);

// Map example 2:

var moneyInDollars = [1, 4, 2, 5, 20];

// you can do it like this:
function dollarsInQuarters(dollars) {
  return dollars * 4;
}
var convertedToQuarters = moneyInDollars.map(dollarsInQuarters);
// console.log('first one', convertedToQuarters);


// or you can also do it like this:
var convertedToQuarters = moneyInDollars.map(function(dollars) {
  return dollars * 4;
});

// console.log('second one', convertedToQuarters);

 

/* ********************* FILTER ********************* */


var pizzaToppings = [
  'pepperoni',
  'cheese',
  'sardines',
  'mushrooms',
  'pineapples',
  'soap',
  'sausage'
];

// best practice:
var sPizzaToppings = pizzaToppings.filter(function(topping) {
  return topping[0] === 's';
});

// learner's way:
var sPizzaToppings2 = pizzaToppings.filter(function(topping) {
  var sTopping;
  if (topping[0] === 's') {
    sTopping = topping
  }

  return sTopping;
})

// console.log(sPizzaToppings);
// console.log(sPizzaToppings2);

var bettyCakes = [
	'strawberry',
	'banana',
	'sparkle berry',
	'chocolate',
	'confetti',
	'angel cake',
	'vanilla'
]

var neopolitanFlavors = bettyCakes.filter(function(flavor) {
  return (flavor == 'strawberry' || flavor == 'chocolate' || flavor == 'vanilla') ;
})

// console.log(neopolitanFlavors);

/* ******************** REDUCE ***************************** */

var numArr = [0, 1, 2, 3];

var sum = numArr.reduce(function(accum, current) {
  return accum + current;
}, 10);

// console.log(sum);

// recreating reduce as a for loop:
var accum = 10;
for(var i = 0; i < numArr.length; i++){
  accum += numArr[i];
}
// console.log(accum);

/* flattening arrays of array */

var twoDimensionalArray = [
  [0, 1], 
  [2, 3], 
  [4, 5]
]

var flattenedVersion = [0, 1, 2, 3, 4, 5];

var concattedArr = [0, 1].concat([2, 3])

/* similar to 'my' + ' string' */
// console.log(concattedArr);

var flattened = twoDimensionalArray.reduce(function(accum, current) {
  return accum.concat(current);
}, []);

// console.log(flattened);

var prices = [10, 22.50, 4.65, 12.99, 17.80];

