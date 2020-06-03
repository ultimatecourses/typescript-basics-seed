console.log('Hey TypeScript!');
import {mergeArrays, mergeObjects, sum} from './lesson';

const sortedNumbers = mergeArrays([1, 3, 5, 7, 9])
const [firstNumber] = sortedNumbers;
console.log('First number: ' + firstNumber);
console.log(sortedNumbers);
const personInfo = mergeObjects({street: 'Green', city: 'NY'});

console.log(personInfo);
const {name, street} = personInfo;
console.log(street);

const sumAll = sum(1, 2, 1, 4, 1, 7, 3);
console.log(sumAll);

//console.log(sum());
/*
function sumAll(message, ...arr){
    return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('hey', 1,2,3);
console.log(sum);


const pizzas = [
    {name: 'Pepperoni', toppings: ['pepperoni']}
];

const mapPizzas = pizzas.map (pizza => pizza.name.toUpperCase());
console.log(mapPizzas);

const pizza = {
    name: 'Blabla',
    getName: function(){
        console.log(this.name);
    },
};
console.log(pizza.getName());


const pizza = {
    name: 'Pepperoni',
    price: 15,
    getName() {
        return this.name;
    }

}
console.log(pizza.getName());

const toppings = ['pepperoni'];
/*const order = {pizza, toppings}; console.log(order); */

/*function createOrder(pizza:any, toppings:any) {
    return { pizza, toppings };
}
console.log(createOrder(pizza,toppings));

//----------------------------------------------------------------------------
function sumAll(message:any, ...arr:any) {
    console.log(message);
   return arr.reduce((prev:any, next:any) => prev + next);
}

const sum = sumAll('Hello dear!',1,2,3,4,5,6,7,8,9,10);

console.log(sum);

//-----------------------------------------------------------------------
const toppings = ['chilly', 'bacon'];
const newToppings = ['pepperoni'];
const allToppings = [...newToppings, ...toppings];

console.log(allToppings); */

//--------------------------------------------------------------------------


//---------------------------------------------------------------------------
/*
const pizza = {
    name: 'Pepperoni',
    toppings: ['pepperoni']
};
function order({name: pizzaName, toppings: pizzaToppings}){
    //console.log(pizzaName, pizzaToppings);
    return {pizzaName, pizzaToppings};
}

const { pizzaName } = order(pizza);
const toppings = ['bacon', 'chilly', 'pepperoni'];
const [a, b, c] = toppings;

function logToppings([a, b, c]:any){
    console.log(a,b,c);
}

logToppings(toppings);


*/
//-------------------------------------------LESSON 3 ------------------------------------------------
/*
//-------------NUMBER
const pizzaCost: number = 10;
const toppings: number = 155;

function calculatePizzaPrice(cost: number, toppings: number):number {
    return cost + 1.5 * toppings;
}

const cost: number = calculatePizzaPrice(pizzaCost, toppings);
console.log('Pizza price is:' + cost);
*/

//---------- STRING
/*
const coupon: string = 'pizza25';
function normalizeCoupon(code: string){
    return code.toUpperCase();
}
const couponMessage: string = 'Your final coupon is: ' + normalizeCoupon(coupon);

console.log(couponMessage);
*/
/*
//---------- BOOLEAN
const pizza: number = 2;
function offerDiscount(order: number):boolean {
    return order > 3;
}
if (offerDiscount(pizza)){
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

//--------UNION

let pizzaSize: string = 'small';
console.log('Pizza size:' + pizzaSize);

function selectSize(size: 'small' | 'medium' | 'large') {
    pizzaSize = size;
}
selectSize('medium');
console.log('Pizza size:' + pizzaSize);

//-------FUNCTION
let sumOrder: Function;
sumOrder = (price: number, quantity: number): number => {
    return price * quantity;
}
const sum = sumOrder(15, 8);

console.log('Your order costs: ' + sum);
*/
/*
//------------Functions and optional argument
let sumOrder: (price: number, quantity?: number) => number;
    sumOrder = (x, y= 1) => x * y;

const sum = sumOrder(25);

console.log('Your order costs: ' + sum);

//------OBJECT TYPE
let pizza: {name: string, price: number, getName(): string} = {
    name: 'Plain Old Pepperoni',
    price: 15,
    getName(): string {
        return pizza.name;
    }
}

console.log('The pizza is called: ' + pizza.getName());

let pizza1: [string, number, boolean];
pizza1 = ['Margarita', 25, true];

console.log(pizza1);


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
const street: string = 'Green street';
const psc: number = 10000;
const town: string = 'NY';
const adress = { street, psc, town };
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
//Aliases
type Size = 'small' | 'medium' | 'large';
type CallBack = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectSize: CallBack = (x) => {
    pizzaSize = x;
};

selectSize('small'); */

//-------------------------------------------LESSON 5 ------------------------------------------------
