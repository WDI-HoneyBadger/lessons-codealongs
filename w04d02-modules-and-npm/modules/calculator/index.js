var addingTool = require('./modules/adding-tool');
var subtractingTool = require('./modules/subtracting-tool');
var multiplicationTool = require('./modules/multiplication-tool');
var divisionTool = require('./modules/division-tool');

// bonuses:
var maxNum = require('./modules/maxNum');
var minNum = require('./modules/minNum');

console.log(addingTool.sumTwoValues(5, 7)); //returns 12
console.log(subtractingTool.subtractTwoValues(9, 3));  // returns 6
console.log(multiplicationTool.multiplyTwoValues(4, 5));  // returns 20
console.log(divisionTool.divideTwoValues(10, 2)); // returns 5

// bonuses:
console.log(maxNum.maxOfArray([522, 212, 800, 11, 39281, 2938])); // returns 39281
console.log(minNum.minOfArray([200, 133, 88, 1700, 666])); // returns 88

