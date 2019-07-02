const pizza = {
    name: "Pizza name",
    topping: ["Pepperoni"]
}

function getPizza({topping: pizzaTopping, name: pizzaName}) {
    return  {pizzaName, pizzaTopping};
}

const pizzaExample = getPizza(pizza);

console.log(pizzaExample);

const countries = ["Italy", "France", "Romania"];
const [a, b, c] = countries;

console.log(a, b, c);