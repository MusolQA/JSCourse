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

//ARROW FUNCTIONS

// const calcAge3 = (birthYear) => 2037 - birthYear;
// console.log(calcAge3(1992));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirementAge = 65 - age;
//   //return retirementAge;
//   return `${firstName} retires in ${retirementAge}`;
// };

// console.log(yearsUntilRetirement(1992, "Paul"));

//FUNCTION CALLING OTHER FUNCTION

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} apples, and ${orangePieces} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirementAge = 65 - age;
//   if (retirementAge > 0) {
//     console.log(`${firstName} retires in ${retirementAge}`);
//     return retirementAge;
//   } else {
//     console.log(`${firstName} is already retired`);
//     return -1;
//   }

//   //return `${firstName} retires in ${retirementAge}`;
// };

// console.log(yearsUntilRetirement(1992, "Paul"));
// console.log(yearsUntilRetirement(1950, "Mike"));

//ARRAYS

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// friends.push("Jay"); // function to add element to the last position of array

// friends.unshift("Pawel"); // add element to the first place
// console.log(friends);

// const popped = friends.pop(); // remove the last element of array
// console.log(popped);
// console.log(friends);

// friends.shift(); // remove first element of array

// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven")); // array includes the value [true/false value]
// console.log(friends.includes(23)); // array includes the value [true/false value]

// if (friends.includes("Kamila")) {
//   console.log(`You have friend Peter`);
// }

//const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends);

// console.log(friends[0], friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// // console.log(friends);

// //friends = ["Bob", "Alice"]; /// not allowed!!

// const firstName = "Joans";
// const jonas = [firstName, "Schmidt", 2037 - 1992, "teacher", friends];
// console.log(jonas);
// console.log(jonas.length);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// console.log(describeCountry("Germany", 45, "Berlin"));
// console.log(describeCountry("Portugal", 12, "Lisboa"));

//DECLARATION
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
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

// const percentageOfWorld3 = (population) =>
//   `China has ${population} milion people, so its about ${
//     (population / 7900) * 100
//   } of th world population`;

// console.log(percentageOfWorld3(230));

// const describePopulation = (country, population) => {
//   const percentage = percentageOfWorld1(population);
//   return `${country} has ${population} ${
//     population === 1 ? "milion" : "milions"
//   } people, what is about ${percentage} of the world!`;
// };

// console.log(describePopulation("China", 1441));
// console.log(describePopulation("China", 1));
// console.log(describePopulation("Poland", 36));

// const firstDolphinsScore = 85;
// const secondDolphinsScore = 54;
// const thirdDolphinsScore = 41;
// 23;
// const firstKoalasScore = 23;
// const secondKoalasScore = 34;
// const thirdKoalasScore = 27;

// const calcAverage = (firstScore, secondScore, thirdScore) =>
//   (firstScore + secondScore + thirdScore) / 3;

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     return `Dolphins win (${avgDolphins}) vs (${avgKoalas})`;
//   } else if (avgKoalas >= avgDolphins * 2) {
//     return `Koalas win (${avgKoalas}) vs (${avgDolphins})`;
//   } else return `No any team win!`;
// };

// const dolphinsAvg = calcAverage(
//   firstDolphinsScore,
//   secondDolphinsScore,
//   thirdDolphinsScore
// );

// const koalasAvg = calcAverage(
//   firstKoalasScore,
//   secondKoalasScore,
//   thirdKoalasScore
// );

// const winner = checkWinner(dolphinsAvg, koalasAvg);

// console.log(winner);

// const groszeNaZlotowki = (liczbaZdjec, cenaZdjecia) =>
//   `${liczbaZdjec} w cenie ${cenaZdjecia} gr to : ${
//     liczbaZdjec * cenaZdjecia
//   } gr to ${(liczbaZdjec * cenaZdjecia) / 100} złotych`;

// console.log(groszeNaZlotowki(150, 43));

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const populations = [12, 5, 1243, 2];

// console.log(populations.length === 5);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// const neighbours = ["Portugal", "Czech", "Slovakia"];

// neighbours.push("Utopia");

// console.log(neighbours);

// neighbours.pop();

// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log(`Probably not a central Europe country!`);
// }

// neighbours[neighbours.indexOf("Czech")] = "Czech Republic";
// console.log(neighbours);

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills);
console.log(tips);
console.log(total);
