console.log('Hey TypeScript!');



//----Arrow functions-----

const colors = ['blue', 'white', 'red'];

const lettersNmb = colors.map(function (color) {
    return color.length;
})
const lettersNmb1 = colors.map(color => color.length);
console.log(lettersNmb);
console.log(lettersNmb1);


//-------------------------


const person = {
    fName: 'John',
    age: 19
}

const education: number[] = [4, 5, 5];

function calcEduYears(person, education){
    return {person, education};
}
console.log(calcEduYears(person, education));
//const personEducation = {person, education};

//console.log(personEducation);

function sumAll(message, ...arr){
    return arr.reduce((prev, next) => prev + next);
}

const sum = sumAll('hey', 1,2,3);
console.log(sum);



/* const test = 'Konstanta';

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
const pizza = {
    name: 'Margherita'
}
const toppings = ['cheese'];
//const order = Object.assign({}, pizza, {toppings});
const spreadOrder = {...pizza, toppings};

console.log(spreadOrder);

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

*/

//-------------------------------------------LESSON 4 ------------------------------------------------
//Aliases
type Size = 'small' | 'medium' | 'large';
type CallBack = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectSize: CallBack = (x) => {
    pizzaSize = x;
};

selectSize('small');

//-------------------------------------------LESSON 5 ------------------------------------------------
