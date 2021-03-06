/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const main = document.querySelector(".maincontent");

const content = `
  <article class="backpack" id="everyday">
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
  </article>
`;

main.innerHTML = content;

document.querySelector("img").hasAttribute("src");

document.querySelector("img").getAttribute("src");

document
  .querySelector("img")
  .setAttribute("alt", "backpack black and white image");

document.querySelector("img").setAttribute("title", "This shouldn't be here.");

console.log(document.querySelector("img").getAttribute("title"));

document.querySelector("img").removeAttribute("title");

console.log(document.querySelector("img").getAttribute("alt"));

document.querySelector("h1").className;

document.querySelector("h1").className = "new-class";

console.log(
  `List classes: ${document.querySelector("ul li:first-of-type").classList}`
);

document.querySelector("ul li:first-of-type").classList.add("new-class");

console.log(
  `New class added: ${document.querySelector("ul li:first-of-type").classList}`
);

document.querySelector("ul li:first-of-type").classList.remove("new-class");

console.log(
  `Remove class: ${document.querySelector("ul li:first-of-type").classList}`
);

document.querySelector("ul li:first-of-type").classList.toggle("new-class");

console.log(
  `New class toggle: ${document.querySelector("ul li:first-of-type").classList}`
);

document.querySelector("ul li:first-of-type").classList.toggle("new-class");

document
  .querySelector("ul li:first-of-type")
  .classList.replace("packprop", "new-class");

console.log(
  `Replace class: ${document.querySelector("ul li:first-of-type").classList}`
);
