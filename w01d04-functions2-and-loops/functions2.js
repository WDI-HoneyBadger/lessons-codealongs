var animal1 = 'beavers';  // length is 7
var animal2 = 'potoo';
var animal3 = 'honey badger';
var animal4 = 'narwhals';


function lengthOfWord(word) {
  return word.length;
}

var animal1Length = lengthOfWord(animal1);
// console.log('*****', animal1Length);  //this works

function lengthOfWordPlusTwo(wordLength) {
  return wordLength + 2;
}

/* console.log(lengthOfWordPlusTwo(7));
console.log(lengthOfWordPlusTwo(animal1.length));
console.log(lengthOfWordPlusTwo(lengthOfWord(animal1))); */

function one() {
  return 1;
}

function two() {
  return 2;
}

function three() {
  return 3;
}
function four() {
  return 4;
}

four();

function five() {
  return 5;
}

function sum(num1, num2) {
  return num1 + num2;
}

function timesTwo(myNum) {
  return myNum * 2;
}

// console.log(sum(one(), two()));
// console.log(sum(6, 7));  //return 13
// console.log(timesTwo(sum(one(), two())));


/* we took a break here for lunch */

var firstName = 'John';
var lastName = 'Dowd';
var age = 18;

function timesFivePlusTwo(num){
  var result = 0;
  console.log('on line 64 the value of result is', result);
  result = num * 5;
  console.log('on line 66 the value of result is', result);
  result = result + 2;
  console.log('the final result is', result);

  return result
}

timesFivePlusTwo(2);

// console.log('this is timesFivePlusTwo', timesFivePlusTwo(4));

// function sayName(fname, lname) {
//   var prefix = 'Dr.';
//   return `${prefix} ${fname} ${lname}`

//   function getFullName() {

//   }
// }

var globalVariable = "globalVariable";

function outerFunction() {
  var outsideVariable = "outerVariable";

  function innerFunction() {
    var innerVariable = "innerVariable";
  }
  
  innerFunction();
  console.log(innerVariable);
  console.log(outsideVariable);
  console.log(globalVariable);
}



// outerFunction();

// console.log(sayName(firstName, lastName));
// console.log(prefix);

// console.log(firstName);
// console.log(lastName);

function displayPerson(fname, lname) {
  var prefix = 'Dr.'

  function getFullName() {
    var suffix = 'M.D.'
    return `${prefix} ${fname} ${lname} ${suffix}`
  }

  return getFullName();
  // output Dr. John Dowd, MD.
}

// console.log(getFullName());
// console.log(displayPerson(firstName, lastName));



var friend1 = 'mac';
var friend1age = 42;


// write a functon, declare a variable, from outside that function console.log the value of that variable