const pizzaCounter : number = 2;

function offerDiscount(pizzaNumber : number) : boolean {
    return pizzaNumber > 3;
}

if(offerDiscount(pizzaCounter)) {
    console.log('You receive a discount.');
} else {
    console.log('Order more than 3 pizzas to receive a discount.');
}