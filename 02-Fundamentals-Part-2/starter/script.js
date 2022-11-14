"use strict";

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");
// const interface = "Audio";

// FUNCTIONS - reusable block of code

// function logger() {
//   console.log("My name is Jonas");
// }

// //calling, running, invoking function
// // logger();
// // logger();
// // logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples, and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleAndOrangeJuice = fruitProcessor(2, 4);
// console.log(fruitProcessor(2, 4));

//Function declarations and expressions

//Generic function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1992);

//Function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1992);

console.log(age1, age2);
//TASKS

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} milion population and it's capital city is ${capitalCity}`;
// }

// console.log(describeCountry("Poland", 36, "Warsaw"));
// console.log(describeCountry("Germany", 45, "Berlin"));
// console.log(describeCountry("Portugal", 12, "Lisboa"));

//DECLARATION
// function percentageOfWorld1(population) {
//   return `China has ${population} milion people, so its about ${
//     (population / 7900) * 100
//   } of th world population`;
// }
// const firstPercent = percentageOfWorld1(1441);
// const secondPercent = percentageOfWorld1(26);
// const thirdPercent = percentageOfWorld1(500);

// console.log(firstPercent, secondPercent, thirdPercent);

// const percentageOfWorld2 = function (population) {
//   return `China has ${population} milion people, so its about ${
//     (population / 7900) * 100
//   } of th world population`;
// };

// EXPRESSION

// const percentageOfWorld2 = function (population) {
//   return `China has ${population} milion people, so its about ${
//     (population / 7900) * 100
//   } of th world population`;
// };

// const firstPercent = percentageOfWorld2(1441);
// const secondPercent = percentageOfWorld2(26);
// const thirdPercent = percentageOfWorld2(500);

// console.log(firstPercent, secondPercent, thirdPercent);
