/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Car from "./Car.js";

const myFavouriteBackpack = new Backpack(
  "Knomo",
  27,
  "navy blue",
  4,
  32,
  32,
  false
);

console.log(myFavouriteBackpack);

// const myCar = {
//   name: "Volvo XC60",
//   brand: "Volvo",
//   numOfSeats: 5,
//   color: "black",
//   enginePower: 400,
//   engineStatus: "stopped",
//   chargingStatus: "40%",
//   medicalBox: {
//     color: "red",
//     noOfDressings: 20,
//     expired: false,
//     "plasters-for-wounds": 10,
//   },
//   startEngine: function (newStatus) {
//     this.engineStatus = newStatus;
//   },
//   rechargeBattery: function (charged) {
//     this.chargingStatus += charged;
//   },
// };

const myCar = new Car(
  "Volvo XC40 Electric",
  "Volvo",
  5,
  "black",
  400,
  "stopped",
  "40%",
  {
    color: "red",
    noOfDressings: 20,
    expired: false,
    "plasters-for-wounds": 10,
  }
);

console.log(myCar);

myCar.rechargeBattery("50%");

console.log(myCar);

window.myFavouriteBackpack = myFavouriteBackpack;
window.myCar = myCar;
