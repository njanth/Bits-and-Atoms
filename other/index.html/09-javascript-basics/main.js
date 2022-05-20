
   // Alert

// Console log
// https://javascript.info/debugging-chrome#logging
console.log("Hello");
console.log(2);

// Variables
// https://javascript.info/variable
const name = "PJ";
var bird = "mocking bird";
let tree = "birch";

const amountOfTrees = 10;

let isItRaining = false;
isItRaining = true;



// Comparisons
// https://javascript.info/comparison
const minimum = 10;
const maximum = 100;
const isItTrue = minimum == maximum;
console.log("isItTrue", isItTrue)

const isItSunny = false
const comparison = isItSunny == 0;

console.log("comparison", comparison);



// Conditional branching: if
// https://javascript.info/ifelse

console.log ("regen")

if (!isItSunny) {
    console.log("no it is not sunny");
}
if (minimum< maximum) {
    console.log("minimum is indeed smaller, minimum, maximum")
}

const sunny = true;
const rainy = false;
const cloudy = true;

if (sunny || rainy || cloudy) {
    console.log("regen");
}

if (sunny && cloudy){
    console.log("is it either sunny or cloudy")
}

if (sunny && !rainy){
    console.log("it sunny but not raining")
}

// Logical operators: || and && and !(NOT)
// https://javascript.info/logical-operators

// Loops: while and for
// https://javascript.info/while-for



// Objects
// https://javascript.info/object

// Arrays
// https://javascript.info/array

// Defining functions
// function multiplyByTwo(number) {
//   return number * 2;
// }

// Accessing the DOM
// https://javascript.info/searching-elements-dom

// const item = document.querySelector('[data-js="item"]');
// console.log("item.innerHTML: ", item.innerHTML);