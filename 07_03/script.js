/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];

backpackContents.push("cat", "dog", 5);
backpackContents.unshift(1);
backpackContents.shift();
backpackContents.pop();

console.log(backpackContents);
console.log(backpackContents.length);
console.log(backpackContents.join(", "));

backpackContents.forEach((item) => {
  item = `<li>${item}</li>`;
  console.log(item);
});

let longItems = backpackContents.find((item) => {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);
