/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);
console.log(collection.length);
console.log(collection[1]);

collection[2] = 7;
collection[collection.length] = ["new", 12];
collection[99] = "far away";
console.log(collection);
