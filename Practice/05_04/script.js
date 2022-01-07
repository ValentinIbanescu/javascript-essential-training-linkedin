/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
const heading = document.querySelector(".siteheader");

const descClass = "site-description";

const content = `
<div class="site-title">BackpackPacker</div>
<div class="${descClass}"><h2>All backpack packing, all the time.</h2><h6>Special Edition</h6></div>
`;

heading.innerHTML = content;

document.querySelectorAll("h1").forEach((item) => (item.style.color = "red"));

// Class after pseudo-element
console.log(
  getComputedStyle(
    document.querySelector(".siteheader"),
    ":after"
  ).getPropertyValue("content")
);

// First of type element
document.querySelector("button:first-of-type").style.boxShadow =
  "0.3em 0.3em 1em rgba(25, 225, 255, 0.7)";

// Nested last child
document.querySelector(".rightLength button:last-child").style.boxShadow =
  "0.3em 0.3em 1em rgba(225, 25, 25, 0.7)";

// Nested nth-child
document.querySelector("#pack02 li:nth-child(5) span").style.color = "blue";

// Nested select more items
document
  .querySelectorAll("#pack01 li:nth-child(odd)")
  .forEach((item) => (item.style.color = "red"));

// Access an element injected through a variable
document.querySelector(".site-description > h6").style.color = "green";

// Nested elements
document.querySelector("footer a").style.textDecoration = "none";
