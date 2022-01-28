/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

let entireGrid = document.querySelector(".grid");
console.log(entireGrid);
entireGrid.addEventListener("mouseenter", (event) => {
  console.log(event);
  entireGrid.classList.add("highlight");
});

entireGrid.addEventListener("mouseleave", (event) => {
  console.log(event);
  entireGrid.classList.remove("highlight");
});

let randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hexColor}`;
};
console.log(randColor());

let cellsGrid = document.querySelectorAll(".cell");
console.log(cellsGrid);

for (const oneCell of cellsGrid) {
  oneCell.addEventListener("mouseenter", (event) => {
    console.log(event);
    oneCell.style.backgroundColor = randColor();
  });
}

for (const oneCell of cellsGrid) {
  oneCell.addEventListener("click", (event) => {
    console.log(event);
    oneCell.style.backgroundColor = "white";
  });
}
const fullPage = document.querySelector("body");
fullPage.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "b" || event.key === "B") {
    fullPage.style.backgroundColor = "black";
  } else {
    fullPage.style.backgroundColor = "white";
  }
});
