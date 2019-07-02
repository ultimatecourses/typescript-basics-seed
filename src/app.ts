const pizza = [{
    name : "Pepperoni",
    toppings : ["pepperoni"]
}]

const mappedPizza = pizza.map((pizza) =>  pizza.name);

console.log(mappedPizza);

const table = {
    name: 'Table 1',
    getName: () => table.name
}

console.log(table.getName());

function multiply(a, b) {
    return a * b;
}

console.log(multiply(34,2));