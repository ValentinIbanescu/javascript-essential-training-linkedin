/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
//Appenf new article to the DOM
const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

const addPack = function (currentPack) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
    <h1>${currentPack.name}</h1>
    <ul>
      <li>Volume: ${currentPack.volume}</li>
      <li>Color: ${currentPack.color}</li>
      <li>Number of pockets: ${currentPack.pocketNum}</li>
    </ul>
  `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(addPack(greenPack));

// Function declaration
function changeColor(tag, color) {
  const element = document.querySelector(`${tag}`);
  element.style.backgroundColor = `${color}`;
}

changeColor("main", "green");

// Function expression
const newColor = function (tag, color) {
  // const attribute = document.querySelector("iframe").getAttribute(`${attr}`);
  document.querySelector(`${tag}`).style.backgroundColor = `${color}`;
};

newColor("main", "yellow");

// // Arrow function
const lastColor = (tag, color) => {
  // const attribute = document.querySelector("iframe").getAttribute(`${attr}`);
  return (document.querySelector(`${tag}`).style.backgroundColor = `${color}`);
};

lastColor("main", "blue");
