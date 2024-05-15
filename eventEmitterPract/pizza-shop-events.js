const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size, topping);
  }

  displayOderNumber() {
    console.log(`Current oder number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
