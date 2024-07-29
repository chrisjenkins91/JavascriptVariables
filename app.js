//
var hello = "world";
var num = 7;
var bool = true;
var undef = undefined;
var none = null;


// console.log(5);

// console.log(hello);

// console.log("world");

console.log(num);

//* Changed variable information here!
num = 29;

console.log(num);


//?MATH VARIABLES

var foo;

console.log(foo)

foo = 19;

console.log(foo + 4);

//? Concatenation

var textOne = 'Hello';

console.log(textOne + ' ' + 'World' + ' Dude')


//!Temperature Converter

//ToDo      Farenheit = Celcius * 9/5 + 32;
//CONSOLE.LOG(ANSWER);

var celcius = 30;

var farenheit = celcius * 9/5 + 32;

console.log(farenheit);

//!Age Calculator
//Subtract the birth year from the current year to get the age.
//* Console.log(answer)

let birthYear = 1991;
let currentYear = 2024;

let myAge = currentYear - birthYear;

console.log(myAge);

//Bool Variable
//let
//const
//escape the character
//wrap with opposite quote
//addition "+"
//subtraction "-"
//division "/"
//multiplication "*"
//increment "++"
//decrement "--"
//modulus "%"


//const == IMMUTABLE 
//CANNOT CHANGE INFORMATION TO const;
const bar = 'You cannot change me';


console.log(bar);

//let = its accessible based on his scope;
let bar2 = 'You can change me!'

bar2 = 10;

console.log(bar2);

//Dealing with quotes in strings
let stringQuote = "You aren't special";
console.log(stringQuote)

//escaping the quote
let escapeQuote = 'you aren\'t special'
console.log(escapeQuote);

//increments and decrements
let num3 = 0;
console.log(num3);
num3++;
console.log(num3)
num3--;
console.log(num3)

//setting multi-variables
let baz, baz2, baz3;

baz3 = 8;
console.log("I'm Baz3! " + baz3)

//Template Literals
console.log(`Hello Baz2 ${baz3}`)

//TODO PERSONAL GREETING
//? Input the user's name.
//*console out a peronalized greeting message.

// let userName = ' Chris'
// let greeting = 'Thank you for joining us today'
// console.log(greeting + userName)

let userName = 'Chris';
console.log(`Thank you for joing us today ${userName}`)



//TODO Tip Calculator
//? Input the user's bill amount and the tip percetage. 
//* Calculate the tip amount and console the total bill.

var billAmount;
var tipPercentage;

billAmount = 124.55;
tipPercentage = 0.25;
var tipAmount = billAmount * tipPercentage;

var answer = billAmount + tipAmount;
//.toFixed(#) = amount of decimal places
console.log(answer.toFixed(2) + "$")


//TODO Age Calculator in days
//? Ask the user to input their age in years.
//* Multiply the age in years by 365.
//sonsole the total days

let yearsOld = 33;
let totalDays = yearsOld * 365;

console.log(totalDays)