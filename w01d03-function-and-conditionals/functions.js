var movie = 'Saving Private Ryan';
var year = 1998;

var movie2 = 'Insterstellar';
var year2 = 2014;

var movie3 = 'Toy Story';
var year3 = 1997;

var printMovie = function(inputMov, inputYear) {
  console.log(`${inputMov} was released in ${inputYear}`);
}

// printMovie('Mulan', 2002);

var multiplyByTwo = function(num) {
  console.log(num * 2);
}

// multiplyByTwo(4);

// the area of a square function will take any width and multiply it by any length, and return the result

var width = 3;
var length = 4;

var areaOfARectangle = function(inputWidth, inputLength) {
  console.log(inputWidth * inputLength);
}

/* areaOfARectangle(2, 4);
areaOfARectangle(3, 3);
areaOfARectangle(width, length); */

var areaOfASquare = function(sideLength) {
  console.log(sideLength * sideLength);
}

// areaOfASquare(3);
// areaOfASquare(5);

// YOUR TASK:

/* 
1.  Write a function that returns the distance around a square that takes a parameter 'squareSide'
    ** for example, distanceAround(4) returns 16, distanceAround(3) returns 12, 
    distanceAround(573) returns 2292 **
2.  Write another function that returns the distance around a rectangle which takes 2 parameters:
    rectangleLength and rectangleWidth.
    ** for example, rectangleDistanceAround(4, 3) returns 14, rectangleDistanceAround(10, 3) returns 26**
Bonus:  Write a function that takes in a parameter called "num", and returns a random number 
    between 0 and num.  Look up documentation for Math.random
    ** for example randomNum(6) might return 2.63362 one time, or it might return 0.88271 another time,
       but never lower than 0, never higher than 6.**
*/

// number 1:
var squareDistance = function(squareSide) {
  console.log(squareSide * 4);
}
// squareDistance(6);

//number 2:
var rectangleDistance = function(rectangleLength, rectangleWidth) {
  console.log((rectangleLength + rectangleWidth)*2)
}
// rectangleDistance(3, 5);

// number 3 (bonus):

var randomNum = function(num) {
  console.log(Math.random() * num);
}

// randomNum(8);

var chair = {
  legs: 4,
  cushions: true,
  color: 'plumb',
  size: 'medium'
}

var table = {
  legs: 3,
  cushions: false,
  color: 'red',
  size: 'large'
}

var movie = {
  title: 'pocohontas',
  year: 1992,
  type: 'animated'
}

furnitureColor(chair);
furnitureColor(table);

// var furnitureColor = function(furniture) {
//   console.log(`the color of your furniture is ${furniture.color}`)
// }
function furnitureColor(furniture) {
  console.log(`the color of your furniture is ${furniture.color}`)
}

