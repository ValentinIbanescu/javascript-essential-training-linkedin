/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  description:
    "A green kids backpack designed to make the lid look like the face of a frog",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output

const content = `
<h1 class="backpack__name">${frogpack.name}</h1>
<ul class="backpack__features">
<li class="packprop backpack__volume">Volume:<span> ${
  frogpack.volume
}l</span></li>
<li class="packprop backpack__color">Color:<span> ${frogpack.color}</span></li>
<li class="packprop backpack__pockets">Number of pockets:<span> ${
  frogpack.pocketNum
}</span></li>
<li class="packprop backpack__strap">Left strap length:<span> ${
  frogpack.strapLength.left
} inches</span></li>
<li class="packprop backpack__strap">Right strap length:<span> ${
  frogpack.strapLength.right
} inches</span></li>
<li class="feature backpack__lid">Lid status:<span> ${
  frogpack.lidOpen ? "open" : "closed"
}</span></li>
</ul>
`;

const addFigure = (object) => {
  let newFig = document.createElement("figure");
  let newImg = document.createElement("img");
  newImg.setAttribute("src", object.image);
  newImg.setAttribute("alt", object.name);
  let newCaption = document.createElement("figcaption");
  newCaption.innerText = object.description;
  newFig.append(newImg, newCaption);
  return newFig;
};

const newBag = (object) => {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = content;
  newArticle.prepend(addFigure(object));
  return newArticle;
};
// const newArticle = function (newName, newVolume, newColor) {
//   document.createElement("article");
//   return (newArticle.innerHTML = newBag(newName, newVolume, newColor));
// };

document.querySelector("main").appendChild(newBag(frogpack));
document.querySelector("figure").classList.add("backpack__image");
document.querySelector("main").classList.add("maincontent");
document.querySelector("article").classList.add("backpack");
