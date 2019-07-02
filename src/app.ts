const pizza = {
    name: "Pizza name",
    price: 13,
    getName() {
        return this.name;
    }
};

console.log(pizza.getName());

const topping = ["pepperoni"];

function createOrder(pizza, topping) {
    return {pizza, topping};
}

console.log(createOrder(pizza, topping));