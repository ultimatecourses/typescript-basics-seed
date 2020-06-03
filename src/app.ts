console.log('Hey TypeScript!');
import {mergeArrays, mergeObjects, suma} from './lesson';

const sortedNumbers = mergeArrays([1, 3, 5, 7, 9])
const [firstNumber] = sortedNumbers;
console.log('First number: ' + firstNumber);
console.log(sortedNumbers);

const personInfo = mergeObjects({street: 'Green', city: 'NY'});
console.log(personInfo);
const {name, street} = personInfo;
console.log(name, street);

const sumAll = suma(1, 2, 1, 4, 1, 7, 3);
console.log(sumAll);



//Object and Array spread------------------------------------------------------------------
const favPizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni']
};
function myOrder({name: pizzaName, toppings: pizzaToppings}){
    console.log(pizzaName, pizzaToppings);
    return {pizzaName, pizzaToppings};
}
const { pizzaName } = myOrder(favPizza);                //object spread
console.log(pizzaName);


const toppings = ['bacon', 'chilly', 'pepperoni'];
const [a, b] = toppings;                                //array spread

function logToppings([a, b]:any){
    console.log(a,b);
}

logToppings(toppings);


//-------------------------------------------LESSON 3 ------------------------------------------------

//-------------NUMBER
const pizzaCost: number = 10;
const myToppings: number = 155;

function calculatePizzaPrice(cost: number, toppings: number):number {
    return cost + 1.5 * toppings;
}

const cost: number = calculatePizzaPrice(pizzaCost, myToppings);
console.log('Pizza price is:' + cost);


//---------- STRING

const coupon: string = 'pizza25';
function normalizeCoupon(code: string){
    return code.toUpperCase();
}
const couponMessage: string = 'Your final coupon is: ' + normalizeCoupon(coupon);

console.log(couponMessage);


//---------- BOOLEAN
const pizza2: number = 2;
function offerDiscount(order: number):boolean {
    return order > 3;
}
if (offerDiscount(pizza2)){
    console.log('You are entitled to a discount!');
}
else{
    console.log('Order more than 3 pizzas to have a discount.');
}

//-------- VOID

let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string):void {
    selectedTopping = topping;
}
selectTopping('cheese');

console.log(selectedTopping);


//--------NULL, UNDEFINED
let coupon1: string | undefined = 'ccc2020';
console.log(coupon);

function useCoupon(){
    coupon1 = undefined;
}

useCoupon();
console.log(coupon);



//--------UNION
let caffeineLevel: string | number = 'low';
function selectLevel(level: 'low' | 'high' | 0): void{
    caffeineLevel= level;
}
selectLevel(0);
console.log(`Coffeine level: ${caffeineLevel}`);


//-------FUNCTION
let sumOrder1: (price: number, quantity?: number) => number;
    sumOrder1 = (x, y = 1) => x * y;

const order = sumOrder1(25);

console.log('Your Order: ' + order + ' Kc');

//------OBJECT TYPE
let thePizza: {pName: string, price: number, getName(): string} = {
    pName: 'Plain Old Pepperoni',
    price: 15,
    getName(): string {
        return thePizza.pName;
    }
}
console.log('The pizza is called: ' + thePizza.getName());

let pizza1: [string, number, boolean];
pizza1 = ['Margarita', 25, true];

console.log(pizza1);

// -------ARRAY TYPE
const size: string[] = ['small', 'medium', 'large'];
let tmp: number[];
 tmp = [1, 2, 3];

//Generics --------
let size2: Array<string>; // for classes

//--------TUPLE TYPES FOR ARRAY - we have different types in an array

let newPizza: [string, number, boolean];
newPizza = ['Margarita', 20, true];    //order is important


//-------------------------------------------LESSON 2 REPEAT -----------------------------------------
//Arrow functions + default parameters------------------------------
const colors = ['blue', 'white', 'red'];
const lettersNmb = colors.map(function (color) {
    return color.length;
})
const lettersNmb1 = colors.map(color => color.length);
console.log(lettersNmb);
console.log(lettersNmb1);

let sum = (a,b = 1) => a + b;

let double = n => 2 * n;

let text = () => 'Your sum and double numbers are: ';
console.log(text() + sum(5,6) + ' ' + double(5));

function calcOrder(price = 1, quantity = 1){
    return price * quantity;
}
console.log('Final order price is: ' + calcOrder());

//Object literal improvements--------------------------------------
const newStreet: string = 'Green street';
const psc: number = 10000;
const town: string = 'NY';
const adress = { newStreet, psc, town };
console.log(adress);

const person = {
    fName: 'Jim',
    sName: 'White',
    age: 52
};
const education = [3, 5, 7, 5];
const personEducation = { person, education };
console.log(personEducation);

//Rest parameters ----------------------------------------------
function summAll(text, ...arr){
    return arr.reduce((prev, next) => {
        return  prev + next;
    })
};
console.log(summAll('Hey', 7, 7, 7, 7));

// Destructuring----------------------------------------------------
const pizza = {
    pBase: 'Thin Base',
    pName: 'Margherita',
    pToppings: ['cheese', 'tomato']
};
const type = 'vegetarian';
const newToping = ['meat'];

const pizzaWithType = {...pizza, type}; // Object Spread
console.log(pizzaWithType);

const {pToppings, pBase} = pizza;
console.log( pToppings, pBase);


//-------------------------------------------LESSON 4 ------------------------------------------------
//Aliases  - custom type
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let myPizzaSize: Size = 'small';

const selectNewSize: Callback = (x) =>{
    myPizzaSize = x;
}
selectNewSize('medium');
console.log(`My pizza size is ${myPizzaSize}`);



//-------------------------------------------LESSON 5 ------------------------------------------------
