const PizzaShop = require('./pizza-shop')
const DrinkMachine = require('./drink-machine.js')

const pizzaShop = new PizzaShop()
const drinkMachine = new DrinkMachine()

pizzaShop.on('order',(size, topping)=>{
    console.log(`Order Received! Backing a ${size} pizza with ${topping}`)
    drinkMachine.serveDrink(size)

})
pizzaShop.order("large",'mushrooms')
pizzaShop.displayOrderNumber()