//#region Arrow functions

// const pizzas = [
//     {
//         name: 'Pepperoni',
//         toppings: ['pepperoni']
//     }
// ];

// const mappedPizzas = pizzas.map((pizza) => {
// return pizza.name.toUpperCase();
// });

// console.log(mappedPizzas)

// const pizza = {
//     name: 'Blazzing Ingerno',
//     getName: function(){
//         setTimeout(() => {
//             console.log(this);
//         }, 100);
//     },
//     getName2: () => {
//         return pizza.name;
//     }
// };

// console.log(pizza.getName());

//#endregion

//#region Default Functions parameters

// function multiplay(a: number, b : number = 25) : number{
//     return a*b;
// }

// console.log(multiplay(5));
// console.log(multiplay(5, 35));

//#endregion

//#region Object literal improvements

// const pizza = {
//     name: 'Pepperoni',
//     price: 15,
//     getName() {
//         return this.name;
//     }
// };

// console.log(pizza.getName());

// const toppings = ['pepperoni'];

// const order = { pizza, toppings };

// console.log(order);

//#endregion

//#region Rest Parameters

// function sumAll(message: string, ...arr: number[]){
//     console.log(arguments, message);
//     return arr.reduce((prev, next) => prev + next);
// };

// const sum = sumAll('Sum=', 1,3,4,5,6,8);

// console.log(sum);

//#endregion

//#region Array Spread Operator

// const toppings = ['bacon', 'chilli'];

// const newToppings = ['pepperoni'];

// const allToppings = [...toppings, ...newToppings];

// console.log(allToppings);

//#endregion

//#region Destructuting Arrays and Objects

// const pizza = {
//     name: 'Pepperoni',
//     toppings: ['pepperoni'],
// };

// function order({name: pizzaName, toppings: pizzaToppings} : any){
//     console.log(pizzaName, pizzaToppings);
// }

// order(pizza);

//#endregion

//#region Number Type

// const pizzaCost : number = 10;
// const pizzaToppings: number = 2;

// function calculatePrice(cost : number, toppings: number) : number {
//     return cost + 1.5 * toppings;
// }

// const cost : number = calculatePrice(pizzaCost, pizzaToppings);

// console.log(`Piza costs: ${cost}`);

//#endregion

//#region String Type

// const coupon: string = 'pizza25';

// function normalizeCoupon(code: string) : string {
//     return code.toUpperCase();
// }

// const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

// console.log(couponMessage);

//#endregion

//#region Boolean Type

// const pizzas: number = 2;

// function offerDiscount(orders: number) : boolean {
//     return orders >= 3
// }

// if(offerDiscount(pizzas)){
//     console.log(`You are entitled to a discount!`);
// }
// else{
//     console.log(`Order more that 3 pizzas for a discount!`);
// }

//#endregion