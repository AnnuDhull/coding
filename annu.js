// -----------------constructor  method------------------------


class Car {
    constructor(color, model) {
      this.color = color;
      this.model = model;
    }
  
    displayInfo() {
      console.log(`Car color: ${this.color}`);
      console.log(`Car Model: ${this.model}`);
    }
  }
  
  
  const car1 = new Car("Black", "verna");
  const car2 = new Car("White", "fortuner");
  
  
  console.log(" first Car");
  car1.displayInfo();
  
  console.log("\n Second car:");
  car2.displayInfo();
  
// -----------------static method----------------------------------------------------------------------------

class Operations {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  }
  
  const result1 = Operations.add(15, 20); 
  console.log(result1); 
  
  const result2 = Operations.subtract(20, 10);
  console.log(result2); 

//   -------------------------Instance method------------------------------------------------------

class Family {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  }
  
  const obj1 = new Family('ANNU DHULL');
  const obj2 = new Family('SUNITA MALIK');
  
  obj1.sayHello(); 
  obj2.sayHello(); 


//  -----------------------Prototype method-------------------------------------------------------


function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
  };
  
  const person1 = new Person('Annu', 23);
  const person2 = new Person('Dhruv', 19);
  
  
  person1.greet(); 
  person2.greet(); 