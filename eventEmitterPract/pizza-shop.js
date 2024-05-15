class PizzaShop {
    constructor() {
        this.orderNumber = 0
    }

    order(){
        this.orderNumber++
    }

    displayOderNumber(){
        console.log(`Current oder number: ${this.orderNumber}`)
    }
}

module.exports = PizzaShop;