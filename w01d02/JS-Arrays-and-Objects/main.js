/* var myNums = [0, 1, 2, 3, 4, 5];  //these are my favorite numbers
var myStrings = ['taco', 'dog', 'ninja', 'motorcycle'];
var myBools = [true, false, false]; // look at these fun booleans
// var myArr = ['taco', 8, false, 'pizza', -8.67]; 

var myVar = myArr[3]

console.log(myVar);
console.log(myArr.length) */

var myCar = {
  name: 'Poseidon',
  color: 'seafoam',
  driver: true,
  wheels: 4,
  passengers: [
    {
      name: 'david',
      age: 45
    }, {
      name: 'jimmy',
      age: 12
    }, {
      name: 'sultan',
      age: 88
    }
  ]
};

var sultansAge = myCar.passengers[2].age;
var sultansName = myCar.passengers[2].name;
var jimmysName = myCar.passengers[1].name;

console.log(jimmysName);

var david = myCar.passengers[0];

var myCarName = myCar.name;
var myCarColor = myCar.color;
var myCarWheels = myCar.wheels

myCar.wheels = 3;
// console.log(myCar);


// what does this evaluate to?
// myCar.wheels = myCar.wheels - 1;

// first myCar.wheels is evaluated.  This evaluates to 4, which is then:
// myCar.wheels = 4 - 1;

// second, 4 - 1 is evaluated to 3
// myCar.wheels = 3;


