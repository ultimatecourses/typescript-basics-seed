console.log('Hey TypeScript!');
import {mergeArrays, mergeObjects, suma} from './lesson';
import {testAnimal} from './interface-example';

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

testAnimal();



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
}
console.log(summAll('Hey', 7, 7, 7, 7));

// Destructuring----------------------------------------------------
const pizza = {
    pBase: 'Thin Base',
    pName: 'Margherita',
    pToppings: ['cheese', 'tomato']
};
const type = 'vegetarian';

const myArray: number[] = [ 1, 2, 3, 4 ];
const arr: number[] = [ 0, 1 ];
const newArray: number[] = [ ...arr, ...myArray]; //  Array Spread
console.log(`My new array:  ${newArray}`);

const [firstNmb] = newArray;            //Array Destructuring
console.log(firstNmb);

const pizzaWithType = {...pizza, type}; // Object Spread
console.log(pizzaWithType);

const {pToppings, pBase} = pizza;       //Object
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

//Assertions
type Animal = { name: string, age: number };

const animal: Animal = { name: 'Micky', age: 2 };
const toString = JSON.stringify(animal);

function getNameFromJSON(obj:string){
    return (JSON.parse(obj) as Animal);
}

getNameFromJSON(toString);
console.log(`Welcome ${getNameFromJSON(toString).name}`);


//-------------------------------------------LESSON 5-Interfaces ------------------------------------------------
interface Sizes {
    sizes: number[];
}

interface Pizza extends Sizes{      // extending interfaces
    name: string;
    toppings?: number;
    getAvailableSizes(): void;
    [key: number]: string          // index signature
}

let oPizza: Pizza;


function createPizza(name: string, sizes: number[]): Pizza {
    return {
        name,       //name: name;
        sizes,
        getAvailableSizes() {
            return this.sizes;
        },
    };
}


oPizza = createPizza('Margarita', [1, 2, 3]);
oPizza.toppings = 2;
console.log(oPizza);
oPizza[5] = 'new pizza';            //giving an index to a pizza

oPizza.name = 'Hawaii';

console.log(oPizza);

//--------------------------------------------LESSON 6 - CLASSES--------------------------------------------------

class Student{
    name: string;
    age: number;
    occupation: string[] = [];

    constructor(name: string, age: number, private faculty: string) {
        this.name = name;
        this.age = age;
    };

    addNewOc(occupation: string){
        this.occupation.push(occupation);
    }

    sortOccupations(){
        this.occupation.sort();
    }

}


abstract class Teacher {
    constructor(public teacherTitle: string, protected teacherName: string) {};
    set addNewTitle(title: string){
        this.teacherTitle = title;
    }
    get teachersTitle(){
        return this.teacherTitle;
    }
}

class Subject extends Teacher {
    constructor(readonly subjectName: string, teacherTitle: string, teacherName: string) {        //read-only parameter
        super(teacherTitle, teacherName);
    }

    public updateTeacher(teacherTitle: string, teacherName: string) {
        this.teacherName = teacherName;
        this.teacherTitle = teacherTitle;
    }
}

class StudyProgram{
    constructor(public name: string, public years: number, public level: string[]) {   };

    set studyLevel(level: string[]) {
        this.level = level;
    };
    get studyLevel() {
        return this.level;
    }
}


const student = new Student('Jim', 22, 'fim');
student.addNewOc( 'IM-3');
student.addNewOc('IM-2');
student.sortOccupations();
console.log(student);


//const teacher = new Teacher('Mgr.',  'Daniela Ponce');  -> abstract class
//console.log(teacher);

const subject = new Subject('TNPW1', 'Mgr.', 'Daniela Ponce');
console.log(subject);
subject.updateTeacher('Mgr.', 'Pikhart');
console.log(subject);

const studyProgram = new StudyProgram('IM', 3, ['bachelor', 'master']);
console.log(studyProgram);
console.log(studyProgram.studyLevel);                   //invoke get
studyProgram.studyLevel = ['master', 'doctor'];         //invoke set
console.log(studyProgram.studyLevel);


// Example movie

interface ActorsInterface{
    playingMovieActors: string[]; // getters-setters
}

abstract class Actors implements ActorsInterface{
    constructor(protected movieActors: string[]) {};

    set playingMovieActors(movieActors: string[]){
        this.movieActors = movieActors;
    }

    get playingMovieActors(){
        return this.movieActors;
    }
}

interface MovieInterface extends ActorsInterface{
    readonly mName: string;
    seasons: number;
    updateMovieActors(movieActors: string[]): void;
    addEvaluation(evaluations: number): void;

}

class Movie extends Actors{
    public evaluations: number[] = [];
    constructor(readonly mName, public seasons: number, movieActors: string[]){
        super(movieActors);
    }

    updateMovieActors(movieActors: string[]){
        this.movieActors = movieActors;
    }

    updateSeasonsNumber(seasons: number){
        this.seasons = seasons;
    }

    public addEvaluation(evaluations: number){
        this.evaluations.push(evaluations);
    }
}

const movie = new Movie('Mentalist', 5, ['Simon Baker','Robin Tunney']);
movie.evaluations = [7, 10, 9, 9]
movie.updateSeasonsNumber(7);
movie.addEvaluation(8);
console.log(movie);

