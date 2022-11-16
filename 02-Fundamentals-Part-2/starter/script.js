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
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1992);

// //Function expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1992);

// console.log(age1, age2);
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

//Iteration loop

// console.log("Lifting weights repetition 1 🤳");
// console.log("Lifting weights repetition 2 🤳");
// console.log("Lifting weights repetition 3 🤳");

// for loop keeps running, while condition (middle) is true

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🤳`);
// }

// const types = [];

// for (let i = 0; i < jonasArray.length; i++) {
//   //Filling types array
//   // types[i] = typeof jonasArray[i];

//   types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// continue and break

// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue; // doesn't go to the next steps, just start new iteration!!!!!
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break; // exit all the loop !!!!
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is voting`);
// }

// const population = [231, 17, 46, 15];
// const percentages2 = [];

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// for (let i = 0; i < population.length; i++) {
//   percentages2[i] = percentageOfWorld1(population[i]);
// }

// console.log(percentages2);

//BACKWARDS

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// for (let i = jonasArray.length; i >= 0; i--) {
//   console.log(jonasArray[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`------ Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(
//       `EXERCISE ${exercise}------ Lifting weights repetition ${rep} 🤳`
//     );
//   }
// }

// WHILE LOOP!

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`------ Lifting weights repetition ${rep} 🤳`);
// }

// let rep = 1;

// // when we dont know, how many times loop should be executed, for instance roll the dice still the score would be 6.
// while (rep <= 10) {
//   console.log(`------ Lifting weights repetition ${rep} 🤳`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`Your rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Is end");
// }

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let list = 0; list < listOfNeighbours.length; list++) {
//   console.log(listOfNeighbours[list]);
//   for (let country = 0; country < listOfNeighbours[list].length; country++) {
//     console.log(listOfNeighbours[list][country]);
//   }
// }

// const population = [231, 17, 46, 15];
// const percentages2 = [];

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// let i = 0;

// while (i < population.length) {
//   percentages2[i] = percentageOfWorld1(population[i]);
//   i++;
// }

// console.log(percentages2);

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(bill) {
  let tip;
  let total;
  if (bill >= 30 && bill <= 100) {
    tip = bill * 0.15;
    total = bill + tip;
    tips.push(tip);
    totals.push(total);
  } else {
    tip = bill * 0.2;
    total = bill + tip;
    tips.push(tip);
    totals.push(total);
  }
}

for (let i = 0; i < bills.length; i++) {
  calcTip(bills[i]);
}

console.log(tips);
console.log(totals);

const numbers = [100, 200, 50, 50];

const calcAvg = function (avgArrayCalc) {
  let sum = 0;
  for (let i = 0; i < avgArrayCalc.length; i++) {
    sum += avgArrayCalc[i];
  }
  let avg = sum / avgArrayCalc.length;
  return avg;
};

console.log(calcAvg(numbers));
