/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const eloquent = new Book(
  "Eloquent JavaScript",
  "Marijn Haverbeke",
  "Coding",
  449,
  "new",
  "January 4, 2017 10:00:00 PST"
);

console.log(`I'm reading now "${eloquent.name}", by ${eloquent.author}`);
console.log("This book is", eloquent.bookAge(), "years old.");

const whatITalk = new Book(
  "What I Talk About When I Talk About Running",
  "Haruki Murakami",
  "Running",
  188,
  "used",
  "July 29, 2008 10:00:00 PST"
);

console.log(`I've enjoid "${whatITalk.name}", by ${whatITalk.author}`);
console.log("This book is", whatITalk.bookAge(), "years old.");

window.eloquent = eloquent;
window.whatITalk = whatITalk;
