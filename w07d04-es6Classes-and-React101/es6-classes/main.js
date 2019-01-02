class Animal {
  constructor(species, name, age) {
    this.species = species,
    this.name = name,
    this.age = age,
    this.needsFood = true;
    this.nameChangeLog = [name]
  }
  sayName() {
    return `hi my name is ${this.name}`;
  }
  changeName(newName) {
    this.name = newName;
    this.nameChangeLog.push(newName);
  }
  setLegs(legCount) {
    this.numberOfLegs = legCount;
  }
}

const snake = new Animal('snake', 'stuart', 8);
console.log(snake);
snake.changeName('stu');
console.log(snake);
// console.log(snake);


// const deer = new Animal('deer', 'Ghadeer', 15);


// console.log(deer);

// const snake2 = {
//   species: 'snake',
//   name: 'lenny',
//   sayName: function(){
//     return `hi my name is ${this.name}`;
//   }
// };

// console.log(snake2.sayName());
