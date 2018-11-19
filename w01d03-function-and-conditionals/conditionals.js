/* var num = -1;

if (num > 0) {
  console.log('value is greater than 0');
} else {
  console.log('value is not greater than 0');
}
 */

//  console.log(typeof(true));
// console.log(5 === 5);
// console.log(typeof(5 > 0));

// if (!false && false ) {
//   console.log('this is true')
// } else {
//   console.log('this is false')
// }

var potentialDriver1 = { species: 'dog', age: 18 };
var potentialDriver2 = { species: 'human', age: 35 };
var potentialDriver3 = { species: 'human', age: 16 };

function canHaveLicense(driver) {
  if((driver.species == 'human') && (driver.age >= 18)) {
    console.log('you can drive')
  } else {
    console.log("you can't drive");
  }
}

// canHaveLicense(potentialDriver1);
// canHaveLicense(potentialDriver2);
// canHaveLicense(potentialDriver3);

/* 
create a function that takes in a single number as an input.  If the number is even, it outputs 
"the number is even".  If the number is odd, it outputs "the number is odd".  If a user passes in
anything other than a number, it outputs "enter a valid number".

modulus operator for javascript (%)
typeof()
*/

/* 
Moroj Solution:
var cheackNum= function(num){
  if (typeof(num) == 'number'){
      if (num % 2 === 0){
        console.log("The number is even");
      } else {
        console.log("The number is odd");
      }
  } else {
      console.log("Enter a valid number");
  }
}

cheackNum(20);
cheackNum(11);
cheackNum(true);
cheackNum('Moroj');
cheackNum(1); */

/* 
// Abdulrab solution:
function cheackNumber(num) {
  if(typeof(num) != 'number'){
    console.log("enter a valid number.")
  } else if ((num % 2) == 0){
    console.log("the number is even.")
  } else {
    console.log("the number is odd. ")
  }
}

cheackNumber(4);
 */