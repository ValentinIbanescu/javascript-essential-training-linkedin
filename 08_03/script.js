/**
 * A standard function
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

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

const bluePack = {
  name: "Blue Pack",
  color: "blue",
  volume: 20,
  pocketNum: 4,
};

main.prepend(addPack(bluePack));
