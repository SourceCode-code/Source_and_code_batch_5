// assignment.js

// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));
// Hint: It will round to the nearest integer. write in comment
//ANS : 7


// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
// Hint: Use typeof to determine the data type.
//ANS : Number


// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it. (51 -100)
// Hint: Use Math.random() and Math.floor() to generate random numbers.
let randomNu = Math.floor(Math.random()*(100-51)+51);
console.log(randomNu);


// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
 // Hint: Rounds down to the nearest integer.
//ANS : floor - 5 and ceil - 6

// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
let minValue = 1
let maxValue = 6
let D1 = Math.floor(Math.random()*(maxValue-minValue)+minValue+1); //to include max limit
let D2 = Math.floor(Math.random()*(maxValue-minValue)+minValue+1); //to include max limit
console.log(D1 + D2);


// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 
// Hint: Understand how the number is being generated and what range it falls in.
// ANS : random valuues between 0 to 14


//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
maxValue = 20;
minValue = 10;
console.log(Math.floor(Math.random()*(maxValue-minValue)+minValue+1)); // include both valus
console.log(Math.floor(Math.random()*(maxValue-minValue)+minValue));  // include min value but exclude max value

// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
maxValue = 9.3;
minValue = 5.5;
console.log(Math.floor(Math.random()*(maxValue*10-minValue*10)+minValue*10+1)/10);



// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;
console.log(number.toFixed(2));


// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.
let num1 = 27;
console.log(Math.round(num1/5)*5);