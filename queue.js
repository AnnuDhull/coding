//insertion and deletion

class Queue {
    constructor() {
      this.items = [];
    }
  
    
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    printQueue() {
      let result = this.items.join(", ");
      console.log(result);
    }
  }
  
  const queue = new Queue();
  
  queue.enqueue(5);
  queue.enqueue(10);
  queue.enqueue(15);
  queue.printQueue(); 
  
  queue.dequeue();
  queue.printQueue(); 