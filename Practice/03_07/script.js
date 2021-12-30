/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const myCar = {
  name: "Volvo XC60",
  brand: "Volvo",
  numOfSeats: 5,
  color: "black",
  engineCapacity: 1900,
  medicalBox: {
    color: "red",
    noOfDressings: 20,
    expired: false,
    "plasters-for-wounds": 10,
  },
};

console.log("My car object:", myCar);
console.log("My car brand is:", myCar.brand);
console.log("My car color is:", myCar["color"]);
console.log("My cars' medical box expired:", myCar.medicalBox.expired);

myCar.medicalBox.expired = true;

console.log("My cars' medical box expired:", myCar.medicalBox.expired);

console.log(
  "My car medical box has platers:",
  myCar.medicalBox["plasters-for-wounds"]
);
