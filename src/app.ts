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

//#region Any Type

// let coupon : any;

// coupon = 25;
// coupon = '25';
// coupon = true;

//#endregion

//#region Implicit vs Explicit Types

// let implicitCoupon = 'pizza25';
// let explicitCoupon: string = 'pizza25';

//#endregion

//#region Void Type

// let selectedTopping: string = "pepperoni";

// function selectTopping(topping: string): void {
//   selectedTopping = topping;
// }

// selectTopping("bacon");

// console.log(selectedTopping);

//#endregion

//#region Never Type

// function orderError(error: string) {
//   throw new Error(error);

//   //This line will never occur
// }

// orderError("Something went wrong");

//#endregion

//#region Null, Undefined, Strict Null Checks

// let coupon: string | null | undefined = "pizza25";

// function removeCoupon(): void {
//   coupon = null;
// }

// console.log(coupon);
// removeCoupon();
// console.log(coupon);

//#endregion

//#region Union and Literal Types

// let pizzaSize: string = "small";

// function selectSize(size: "small" | "medium" | "large"): void {
//   pizzaSize = size;
// }

// selectSize("large");

// console.log(`Pizza size: ${pizzaSize}`);

//#endregion

//#region Function Types

// let sumOrder: (price: number, quantity: number) => number;

// sumOrder = (x, y) => x * y;

// const sum = sumOrder(25, 2);

// console.log(`Total sum: ${sum}`);

//#endregion

//#region  Functions and Optional Arguments

// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y) => {
//   if (y) return x * y;
//   else return x;
// };

// const sum = sumOrder(25);

// console.log(`Total sum: ${sum}`);

//#endregion

//#region  Functions and Default Parameters

// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y = 1) => {
//   return x * y;
// };

// const sum = sumOrder(25);

// console.log(`Total sum: ${sum}`);

//#endregion

//#region Object Types

// let pizza: {
//   name: string;
//   price: number;
//   getName(): string;
// };

// pizza = {
//   name: "Plain old pepperoni",
//   price: 20,
//   getName() {
//     return this.name;
//   }
// };

// console.log(pizza.getName());

//#endregion

//#region Array Types and Generics

// let sizes: string[] = ["small", "medium", "large"];

// console.log(sizes);

// let toppings: Array<string>;
// toppings = ["pepperoni", "tomato", "bacon"];

// console.log(toppings);

//#endregion

//#region Tuple Types for Arrays

// let pizza: [string, number, boolean];

// pizza = ["Pepperoni", 20, true];

// console.log(pizza);

//#endregion

//#region Type Alias

// type Size = "small" | "medium" | "large";
// type Callback = (size: Size) => void;

// let pizzaSize: Size = "small";

// const selectSize: Callback = (x) => {
//   pizzaSize = x;
// };

// selectSize(pizzaSize);

//#endregion

//#region Type Assertions

// type Pizza = {
//   name: string;
//   topping: number;
// };

// const pizza: Pizza = {
//   name: "Blazing Inferno",
//   topping: 5
// };

// const serialized = JSON.stringify(pizza);

// function getNameFromJSON(obj: string): string {
//   return (JSON.parse(obj) as Pizza).name;
// }

// const pizzaName: string = getNameFromJSON(serialized);

// console.log(pizzaName);

//#endregion
