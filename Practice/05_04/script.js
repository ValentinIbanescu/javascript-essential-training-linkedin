/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

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
