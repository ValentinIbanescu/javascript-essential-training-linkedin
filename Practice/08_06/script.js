/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */
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

// Arrow function
const lastColor = (tag, color) => {
  // const attribute = document.querySelector("iframe").getAttribute(`${attr}`);
  return (document.querySelector(`${tag}`).style.backgroundColor = `${color}`);
};

lastColor("main", "blue");
