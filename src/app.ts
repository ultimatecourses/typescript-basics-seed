const pizzas = [{ name: "Pepperoni", toppings: ["pepperoni"] }];

const mappedPizzas = pizzas.map(pizza => {
  return pizza.name.toUpperCase();
});

console.log(mappedPizzas);
