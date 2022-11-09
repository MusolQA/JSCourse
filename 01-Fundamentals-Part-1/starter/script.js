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

const markMass = 95;
const markHeight = 1.88;
const johnMass = 200;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

// if (markHigherBMI) {
//   console.log(`Mark's BMI is higher then Mark's`);
// } else {
//   console.log(`John's BMI is higher then Mark's`);
// }

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher then John's BMI (${johnBMI})`);
} else {
  console.log(
    `John's BMI (${johnBMI.toFixed(
      1
    )}) is higher then Mark's BMI (${markBMI.toFixed(1)})`
  );
}

// TASKS

// const country = "Portugal";
// const continent = "Europe";
// let population = 5;
// const isIsland = false;
// let language = "Polish";
// const description = `${country} is in ${continent} and its ${population} milion people speak portuguese`;

// if (population > 33) {
//   console.log(`${country} population is above the average`);
// } else {
//   console.log(`${country} is ${33 - population} milion below the average`);
// }
