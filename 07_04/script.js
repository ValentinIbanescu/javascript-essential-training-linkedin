//  * Challenge: Build and modify an array
//  * - Build an array with 8 items
const phone = {
  name: "iPone 12",
  brand: "Apple",
  capacity: 128,
};

const ARRAY_LENGTH = 10;
let nums = Array.from(Array(ARRAY_LENGTH)).map(() =>
  Math.floor(Math.random() * 100)
);

const deskArray = [
  "coffee can",
  phone,
  "hard disk",
  nums,
  7,
  "books",
  "notebook",
];

console.log(deskArray);
console.log(deskArray.length);

//  * - Remove the last item
deskArray.pop();
//  * - Add the last item as the first item on the array
deskArray.unshift(deskArray.pop());
//  * - Sort the items by alphabetical order
deskArray.sort();
//  * - Use the find() method to find a specific item in the array
console.log(deskArray.find((x) => x.length > 5));
//  * - Remove the item you found using the find method from the array.
deskArray.splice(deskArray.indexOf(deskArray.find((x) => x.length > 5)), 1);

console.log(deskArray);
console.log(deskArray.length);
