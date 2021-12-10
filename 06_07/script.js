/**
 * Assignment vs comparison
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Relational_operators
 */

// let a = 5;
// let b = 4;
// let a = 5;
// let b = "5";
// let a = 5;
// let b = "5";
// let a = 5;
// let b = a + "2";
// let a = 5;
// let b = 5 - "1";
// let a = "Alfa";
// let b = "Beta";
// let a = 5;
// let b = 5 - null;
// let a = 5;
// let b = 5 - NaN;
// let a = 5;
// let b = 5 - undefined;
let a = 5;
let b = "5";

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);

if (a == b) {
  console.log(`Match! let a and let b are the same value.`);
} else {
  console.error(`No match: let a and let b are NOT same value.`);
}
