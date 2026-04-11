/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.


/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */

// get user input

//let age = prompt("Enter your age:");
let age = 27;
age = Number(age);

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    let yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} years to drive.`);
}

// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.

let myAge = 30; 
let yourAge = 25;
//let yourAge = prompt("Enter your age:");
// yourAge = Number(yourAge);

if (yourAge > myAge) {
    let ageDifference = yourAge - myAge;
    console.log(`You are ${ageDifference} years older than me.`);
} else if (yourAge < myAge) {
    let ageDifference = myAge - yourAge;
    console.log(`I am ${ageDifference} years older than you.`);
} else {
    console.log("We are the same age.");
}  


