/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

// List classes
document.querySelector("#pack01 img").classList;
// Add two new classes
document.querySelector("#pack01 img").classList.add("rotated");
document.querySelector("#pack01 img").classList.add("border");
// Remove one class
document.querySelector("#pack01 img").classList.remove("border");
// List attributes
document.querySelector("#pack01 img").attributes;
// Check attribute
document.querySelector("#pack01 img").hasAttribute("alt");
// Set attribute
document
  .querySelector("#pack01 img")
  .setAttribute("alt", "backpack image grey");
// Get data attribute
document
  .querySelector("#pack01 ul li.backpack__strap")
  .getAttribute("data-side");
// Change attribute
document
  .querySelector("#pack01 ul li.backpack__strap")
  .setAttribute("data-side", "left-up");
// Set style
document.querySelector("#pack01 h1").style.color = "red";
// List style properties
document.querySelector("#pack01 h1").style;
