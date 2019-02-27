const pizzas = [
    {
        name: 'Pepperoni',
        toppings: ['pepperoni']
    }
];

const mappedPizzas = pizzas.map((pizza) => {
return pizza.name.toUpperCase();
});

console.log(mappedPizzas)

const pizza = {
    name: 'Blazzing Ingerno',
    getName: function(){
        setTimeout(() => {
            console.log(this);
        }, 100);
    },
    getName2: () => {
        return pizza.name;
    }
};

console.log(pizza.getName());