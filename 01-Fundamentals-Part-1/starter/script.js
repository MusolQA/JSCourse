// VALUES & VARIABLES

// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// let firstName = "Matilda";
// let jonasMatilda = "JM";
// let newFunction = 27;
// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";
// let job1 = "Programmer";
// let job2 = "Teacher";
// console.log(myFirstJob, myCurrentJob);

// //TASK1
// let country = "Poland";
// let continent = "Europe";

// console.log(country);
// console.log(continent);

// Data types

/*
7 primitive data types: 

Numbers,
String,
Boolean
Undefined,
Null 
Symbol - unique value and cannot be changed
BigInit - more than Number
*/

// DATA TYPES

/*
let jsIsFun = true;
console.log(jsIsFun);

// console.log(typeof true);
console.log(typeof jsIsFun);
// console.log(typeof 34);
// console.log(typeof "string");

jsIsFun = "YES!";
console.log(typeof jsIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);

//TASK

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);

*/

// LET, CONST, VAR

// be default always use const
// let = BLOCK SCOPED
// var = FUNCTION SCOPED
// do not use var

/*
let age = 30;
age = 31;
const birthYear = 1992;
//birthYear = 1990;

var job = "programmer";
job = "teacher";
console.log(job);

*/

//OPERATORS

/*
//Math operators
const now = 2037;
const ageJonas = now - 1992;
const ageSarah = now - 2018;
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Surname";

console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x+10 = 25
x *= 4; // x = x*4 = 25*4 = 100
x++; // x=x+1 = 101
x--; // x = x-1 = 100

// Comparison operators

console.log(ageJonas > ageSarah);
console.log(ageJonas < ageSarah);
console.log(ageJonas === ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

// OPERATOR PRECEDENCE

/*
const now = 2037;
const ageJonas = now - 1992;
const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018);
// console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // x=10, y=10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// STRINGS AND TEMPLATE LITERALS

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const currentYear = 2037;
const jonas =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " years old " +
  job +
  "!";

console.log(jonas);

const jonasNew = `I'm ${firstName} a ${
  currentYear - birthYear
} years old ${job}!`;
console.log(jonasNew);

console.log(`Some
New Line
Text`);

*/

//TAKING DECISIONS IF/ELSE

// const age = 15;

// if (age >= 19) {
//   console.log("Can start driving license");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
// }

// const birthYear = 2021;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// CODING CHELLANGE 2

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 200;
// const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI;

// // if (markHigherBMI) {
// //   console.log(`Mark's BMI is higher then Mark's`);
// // } else {
// //   console.log(`John's BMI is higher then Mark's`);
// // }

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher then John's BMI (${johnBMI})`);
// } else {
//   console.log(
//     `John's BMI (${johnBMI.toFixed(
//       1
//     )}) is higher then Mark's BMI (${markBMI.toFixed(1)})`
//   );
// }

// TYPE CONVERSION / COERCION

// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas")); //NaN = not a number (INVALID NUMBER!)
// console.log(String(23));

// //type coercion
// console.log("I am " + 23 + " years old"); // Converted to strings (+)
// console.log("23" - "10" - 3); // Converted to Numbers -)
// console.log("23" + "10" + 3); // Converted to String  +)
// console.log("23" * "2"); // converted to Number
// console.log("23" / "2"); // converted to Number

// let n = "1" + 1; // 11
// n = n - 1; // 11-1 = 10
// console.log(n); // 10 ?

//FALSY / TRUTHY

// 5 falsy: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100; // falsy
// if (money) {
//   console.log("Don't spend it all.😂");
// } else {
//   console.log("You should get a job");
// }

// let height = 0; // falsy undefined
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is undefined");
// }

// EQUALITY OPERATORS

// const age = "18";

// if (age === 18) console.log("EXACTLY 18 YEARS OLD! (strict)");

// if (age == 18) console.log("EXACTLY 18 YEARS OLD! (loose)");

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);

// if (favorite === 23) {
//   // number to number
//   console.log("Cool! 23 is an amazing number!");
// } else if (favorite === 7) {
//   console.log("7 is also cool number!");
// } else {
//   console.log("number is not 23 or 7");
// }

// if (favorite !== 23) {
//   console.log("Why not 23");
// }

//BOOLEAN LOGIC

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Sarah is able to drive");
// // } else {
// //   console.log("Someone else should drive...");
// // }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive...");
// }

// TASKS

// const country = "Portugal";
// const continent = "Europe";
// let population = 5;
// const isIsland = false;
// let language = "english";
// const description = `${country} is in ${continent} and its ${population} milion people speak portuguese`;

// population > 33
//   ? console.log("Portugal's population is above average")
//   : console.log("Portugal's population is below average");

// if (language === "english" && population < 50 && !isIsland) {
//   console.log("Sarah could live in Portugal");
// }

// if (population > 33) {
//   console.log(`${country} population is above the average`);
// } else {
//   console.log(`${country} is ${33 - population} milion below the average`);
// }

// console.log("9" - "5"); // Number 4
// console.log("19" - "13" + "17"); // String'617'
// console.log("19" - "13" + 17); // Number 23
// console.log("123" < 57); // false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // String 1143

// const numNeighbors = Number(
//   prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbors === 1) {
//   console.log("Only 1 border");
// } else if (numNeighbors > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// CODING CHELLANGE 3

// REQUIRED

// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;

// if (dolphinsAverage === koalasAverage) {
//   console.log("Its Draw!");
// } else if (dolphinsAverage > koalasAverage) {
//   console.log("Dolphins are winner!");
// } else {
//   console.log("Koalas are winner!");
// }

// BONUS1

// const dolphinsAverage = (55 + 150 + 150) / 3;
// const koalasAverage = (55 + 150 + 150) / 3;

// console.log(dolphinsAverage);
// console.log(koalasAverage);

// if (
//   dolphinsAverage === koalasAverage &&
//   dolphinsAverage >= 100 &&
//   koalasAverage >= 100
// ) {
//   console.log("Its Draw!");
// } else if (dolphinsAverage > koalasAverage && dolphinsAverage > 100) {
//   console.log("Dolphins are winner!");
// } else if (koalasAverage > dolphinsAverage && koalasAverage > 100) {
//   console.log("Koalas are winner!");
// } else {
//   console.log("No result!");
// }

// SWITCH

// const day = "thursday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure.");
//     console.log(`Its ${day}. Go to coding meetup.`);
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     console.log(`Its ${day}. Go to coding meetup.`);
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");

//   case "saturday":
//   case "sunday":
//     console.log("Weekend, drink");
//     break;
//   default:
//     console.log("Not a valid data");
// }

// if (day === "monday") {
//   console.log("Plan course structure.");
//   console.log(`Its ${day}. Go to coding meetup.`);
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
//   console.log(`Its ${day}. Go to coding meetup.`);
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Weekend, drink");
// } else {
//   console.log("Not a valid data");
// }

// const language = "polish";

// switch (language) {
//   case "mandarin":
//   case "chinese":
//     console.log("'MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers'");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("'5th most spoken language'");
//     break;
//   default:
//     console.log("'Great language too :D");
// }

// expression statement

// expression = create a value\
// statement = doesn't create value

// the conditional ternary operation

// const age = 29;
// // age >= 18
// //   ? console.log("i like to drink wine 🍷")
// //   : console.log("i like to drink water 💦");

// // const drink = age >= 18 ? "wine 🍷" : "water 💦";
// // console.log(drink);

// // let drink2;

// // if (age >= 18) {
// //   drink2 = "wine";
// // } else {
// //   drink2 = "water";
// // }

// // console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💦"}`);

// # CODING CHALLENGE

// const billValue = 275;

// // billValue >= 50 && billValue <= 300
// //   ? console.log(
// //       `The bill was ${billValue}, the tip was ${
// //         billValue * 0.15
// //       }, the total value ${billValue + billValue * 0.15}`
// //     )
// //   : console.log(
// //       `The bill was ${billValue}, the tip was ${
// //         billValue * 0.2
// //       }, the total value ${billValue + billValue * 0.2}`
// //     );

// const tip =
//   billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
// console.log(
//   `The bill was ${billValue}, the tip was ${tip}, the total value ${
//     billValue + tip
//   }`
// );
