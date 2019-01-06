class Foo {
  constructor(name) {
    this.name = name;
    this.sayName = this.sayName.bind(this);
  }
  sayName(){
    console.log(`hi my name is ${this.name}`);
  }
}

const zaa = new Foo('hi');
const yaa = new Foo('yaa');
const bar = zaa.sayName
console.log(bar());
// console.log(zaa);
// console.log(pizz);

