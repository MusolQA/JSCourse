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

*/
// TASKS

// const country = "Poland";
// const continent = "Europe";
// let population = 36;
// const isIsland = false;
// let language = "Polish";
// const description =
//   "Portugal is in " + continent + " and its 11 milion people speak portuguese";

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);

// console.log(population / 2);
// console.log((population += 1));
// console.log(population > 6);
// console.log(population < 33);
// console.log(description);

//CODE CHALLENGES
//1.
// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
