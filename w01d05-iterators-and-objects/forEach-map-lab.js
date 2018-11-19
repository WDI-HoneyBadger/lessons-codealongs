var yeOldeCakeShoppe = {
	name: 'Hostess',
	product: 'baked goods',
	established: 1930,
	pastries: [
		'ding dongs',
		'vanilla zingers',
		'blueberry muffin minis',
		'twinkies',
		'ring dings'
	]
}

// problem 1:
/* yeOldeCakeShoppe.pastries.forEach(function(pastry) {
  console.log(`${pastry} are no longer being produced`);
})

var bettyCakes = [
	'strawberry',
	'banana',
	'sparkle berry',
	'chocolate',
	'confetti',
	'angel cake',
	'vanilla'
]

excitingBettyCakes = [
  'STRAWBERRY!',
  'BANANA!',
  'SPARKLE BERRY!',
  // ...
]

var excitingBettyCakes = bettyCakes.map(function(cake) {
  var loudCake = cake.toUpperCase() + '!';
  return loudCake;
});

//another good solution: 
function excitedWord(word) {
  return word.toUpperCase() + '!';
}

// this will print every element in the array modified by the function
bettyCakes.forEach(function(cake){
  console.log(excitedWord(cake))
});

/* this will print out an array where every element is 
modified by the function */
// console.log(bettyCakes.map(excitedWord));

/* var yourPayments = [
	220,
	350,
	300,
	280,
	500
]

var payRaise = yourPayments.map(doublePay);

function doublePay(paycheck) {
  return paycheck * 2;
}

console.log(payRaise);
 */

 /* Bonus exploration: Alright now we're ready to elevate Betty Crocker to the next level. 
 She wants to create a new neopolitan cake. Using map, create a new array that contains 
 only the ingredients for neopolitan icecream. You should have some success here 
 but will definitely have some problems too. What problems did you encounter and why? */

//  var bettyCakes = [
// 	'strawberry',
// 	'banana',
// 	'sparkle berry',
// 	'chocolate',
// 	'confetti',
// 	'angel cake',
// 	'vanilla'
// ]

// /* result should look like:
// var neopolitan = ['strawberry', 'chocolate', 'vanilla'];
// */

// var neopolitan = bettyCakes.map(function(flavor){
//   if (flavor == 'strawberry') {
//     return 'strawberry';
//   } else if (flavor == 'chocolate') {
//     return 'chocolate';
//   } else if (flavor == 'vanilla') {
//     return 'vanilla'
//   }
// })

// var neopolitan2 = [];

// bettyCakes.forEach(function(flavor){
//   if (flavor == 'strawberry') {
//     neopolitan2.push(flavor);
//   } else if (flavor == 'chocolate') {
//     neopolitan2.push(flavor);
//   } else if (flavor == 'vanilla') {
//     neopolitan2.push(flavor);
//   }
// })

// console.log(neopolitan);
// console.log(neopolitan2);


/* FILTER */




