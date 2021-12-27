/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";

const everydayPack = new Backpack(
  "pack01",
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

const itemContent = (backpackName) => {
  let content = `
    <figure class="backpack__image">
      <img src=${backpackName.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpackName.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpackName.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpackName.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpackName.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpackName.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpackName.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpackName.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpackName.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;
  return content;
};

console.log(backpackObjectArray);

const main = document.querySelector(".maincontent");

const backpacksArray = backpackObjectArray.map((backpack) => {
  let newArticle = document.createElement("article");
  newArticle.innerHTML = itemContent(backpack);
  return newArticle;
});

backpacksArray.forEach((backpack) => {
  main.append(backpack);
  backpack.classList.add("backpack");
  backpack.setAttribute("id", "everyday");
});

console.log(backpacksArray);
// const newArticle = document.createElement("article");
// newArticle.classList.add("backpack");
// newArticle.setAttribute("id", "everyday");
// newArticle.innerHTML = content;

// main.append(newArticle);
