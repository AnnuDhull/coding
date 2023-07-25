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
  