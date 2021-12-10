/**
 * Arithmetic operators
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

let a = 5;
let b = 4;
let c = 3.2;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);
console.log(`let c: ${c} (${typeof c})`);

let resultModulo = a % c;
let resultExpo = a ** b;
// let resultDecrease = --a;
let resultAdd = ++a;
let resultIncrease = a++;

console.log("Result add: ", resultAdd);
//The Add operation takes place on the spot.
console.log(a);

console.log("Result: ", resultModulo);
console.log("Result: ", resultExpo);
// console.log("Result: ", resultDecrease);
console.log("Result increment: ", resultIncrease);
// Incrementing a number operation. The result is visible in the value of the number.
console.log(a);
