// assignment.js

// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));
// Hint: It will round to the nearest integer. write in comment

//Answer : 7


// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
// Hint: Use typeof to determine the data type.

console.log(typeof(gravity));


// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it. (51 -100)
// Hint: Use Math.random() and Math.floor() to generate random numbers.

let radnomNum = Math.floor(Math.random() * (10) ) + 1;
console.log(radnomNum);


// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
 // Hint: Rounds down to the nearest integer.

/* Answer : Math.ceil(num) will be 6
         Math.floor(num) will be 5 */ 


// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.

function rollDice()
{
    let dice1 = Math.round(Math.random() * (6)) + 1;
    let dice2 = Math.round(Math.random() * (6)) + 1;

    return [dice1, dice2]

}
console.log(rollDice());


// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 
// Hint: Understand how the number is being generated and what range it falls in.

/*
    Answer : Output will be a random number between 5 and 14. 
           : Math.random() will generate radom value in between 0.0 to 1.0, after multiplying with 10 will give range 0 to 10
           adding 5 to floor value will give range 5 to 14.
*/

//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.

function randomBetween(min, max)
{
    return Math.round(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(10, 20));


// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.

function randomFloat(min, max)
{
    return Math.random() * (max - min + 1) + min;
}
console.log(randomFloat(5.5, 9.3));



// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;

console.log(number.toFixed(2));



// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.

function roundToNearestMultiple5(num)
{
    return Math.round(num/5) * 5;
}
console.log(roundToNearestMultiple5(28));