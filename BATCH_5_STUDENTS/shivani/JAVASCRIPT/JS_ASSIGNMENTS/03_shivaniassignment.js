// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));
// 7



// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
console.log(typeof gravity)
// type of veriable = number



// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it. (51 -100)
// Hint: Use Math.random() and Math.floor() to generate random numbers.
let randomNum = Math.floor(Math.random() * 10) + 1
console.log(randomNum)



// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
// Hint: Rounds down to the nearest integer.

console.log(Math.ceil(num)) //output=6
console.log(Math.floor(num)) //output =5




// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
const dice1 = Math.floor(Math.random() * 6) + 1
const dice2 = Math.floor(Math.random() * 6) + 1
//console.log(dice1)
//console.log(dice2)
console.log(dice1 + dice2)

// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 
//0-0.99 
//0-0.99*10 = 0-9.9
//0-9.9 + 5 =5-14.9
//5-14
//output will be between 5-14 beacause Math.floor will round down the number to the nearest integer.so output will be between 5-14  




// Hint: Understand how the number is being generated and what range it falls in.

//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
console.log(randomBetween(10, 20));
//here we use the formula Math.floor(Math.random()*(max-min+1))+ min to generate random number between 10 to 20
console.log(Math.floor(Math.random() * (20 - 10 + 1)) + 10)




// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
//here we use the formula Math.random()*(max-min)+min to generate random float number between 5.5 to 9.3
console.log(Math.random() * (9.3 - 5.5) + 5.5)



/*
or we can also sovle it by
let floatrandom = Math.random()*(9.3-5.5)+5.5
console.log(floatrandom)

console.log(floatrandom.toFixed(2)) // to round the number to 2 decimal places
*/





// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;
console.log(number.toFixed(2)) // to round the number 2 decimal places




// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.

let num1 = 22
console.log(Math.round(num / 5) * 5) // here we divide the number by 5 and then round it to the nearerest integer and then multipy it by 5 to get the 20

num1 = 28
console.log(Math.round(num / 5) * 5) // to get the 30

num1 = 32
console.log(Math.round(num / 5) * 5) // to get the 30   

    