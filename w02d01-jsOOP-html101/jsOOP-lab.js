/* 
Part 1:  the Car

make a variable called "car" that is an object with the following properties:
1. key value pairs for name (a string), a model (a string), yearsOld (number),
  currentSpeed (a number, default value 0).
2. a method called "accelerate" - it increases the speed of the car by 10, and
  logs the current speed.
3. a method called "decelerate" - that decreases the speed of the car by 10
4. a method called "stop" - it calls the "decelerate method" until the value of
  current speed is 0.
*/

var car = {
  name: 'Posiedon',
  model: 'ford escort',
  yearsOld: 25,
  currentSpeed: 0,
  accelerate: function() {
    this.currentSpeed += 10;
    console.log('accelerated to ', this.currentSpeed);
  },
  decelerate: function() {
    this.currentSpeed -= 10;
    console.log('decelerated to ', this.currentSpeed);
  },
  stop: function() {
    while(this.currentSpeed > 0) {
      this.decelerate();
    }
  },
  ageCarTo100: function(){
    while(this.yearsOld < 100) {
      this.yearsOld++;
      console.log('age updated to ', this.yearsOld);
    }
  }
}

// console.log('initial speed ', car.currentSpeed);
// car.accelerate();
// car.accelerate();
// car.accelerate();
// car.accelerate();
// car.stop();
// console.log('final speed ', car.currentSpeed);

// car.ageCarTo100();

/* 
Part 2:  the Monkey
1. name, age key value pairs.  Also, should have a "bananasEaten" (a number default 0),
  , a "foodsEaten" that is an empty array.
2. sayName method that prints the name of the monkey.
3. birthday method that increases the monkey age by one and prints the new age.
4. eatBanana method that adds one to the "bananasEaten" value
5. eatFood(food), which adds the food to the "foodsEaten" array, and if that food is
  a banana will call the eatBanana method.
*/

var monkey = {
  name: 'Lenny',
  age: 12,
  bananasEaten: 0,
  foodsEaten: [],
  sayName: function() {
    console.log(`hi everyone, my name is ${this.name}`);
  },
  birthday: function() {
    console.log("it's a birthday!");
    this.age++;
  },
  eatBanana: function() {
    this.bananasEaten++;
    console.log('eating banana.  Banana count: ', this.bananasEaten);
  },
  eatFood: function(food) {
    console.log('the monkey ate a ', food);
    this.foodsEaten.push(food);
    if(food.toLowerCase() === 'banana') {
      this.eatBanana();
    }
  }
}

/* monkey.sayName();
console.log('initial age is ', monkey.age);
monkey.birthday();
console.log('age after the birthday ', monkey.age);
 */
monkey.eatFood('taco');
monkey.eatFood('ice cubes');
monkey.eatFood('apple');
monkey.eatFood('banana');
monkey.eatFood('BANANA');
console.log(monkey.foodsEaten);
