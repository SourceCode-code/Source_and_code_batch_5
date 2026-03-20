// assignment.js

// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x)); 
// Hint: It will round to the nearest integer. write in comment
//Ans--> 7

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
// Hint: Use typeof to determine the data type.
console.log(typeof gravity)

// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it. (51 -100)
// Hint: Use Math.random() and Math.floor() to generate random numbers.
let randomNum= Math.floor(Math.random()*10)+1
console.log(randomNum)

// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
 // Hint: Rounds down to the nearest integer.
console.log(Math.ceil(num)) //round up and give O/P as 6
console.log(Math.floor(num)) // round down and give O/P as 5

// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
 let rollDice1= Math.floor(Math.random()*6)+1
 let rollDice2= Math.floor(Math.random()*6)+1
 let total= rollDice1+rollDice2
 console.log("Roll Dice",total)
 console.log(rollDice1 , rollDice2)
 

// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random(); //generate a random number between 0 and 0.9999
console.log(Math.floor(randomVal * 10) + 5); //0.99*10-->9.99 & add 5 so it will 14.99 
//math.floor will round down a number to nearest integer this becomes 14 
//so it will generate a random number between 5 to 14 

// write the output and reason in commnets 
// Hint: Understand how the number is being generated and what range it falls in.

//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
//console.log(randomBetween(10, 20));
//Math.floor(Math.random() * (max - min + 1)) + min //inclusively
//Math.floor(Math.random() * (max - min - 1)) + min //exclusively

console.log(Math.floor(Math.random()*(20-10+1))+10)

// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
console.log(Math.random()*(9.3-5.5)+5.5)

// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;
console.log(number.toFixed(2))

// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30. 
let num2=32
let return1=Math.round(num2/5)*5
console.log(return1)

//Generate a random aadhar number
//generate random OTP number
//generate random mobile number
//generate random password (letters, number and symbols)