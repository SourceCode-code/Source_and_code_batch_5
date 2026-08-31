// assignment.js

// JavaScript Number Data Type - Assignment

// Simple Questions:

// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x)); //7
// Hint: It will round to the nearest integer. write in comment

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
console.log(typeof gravity);
// Hint: Use typeof to determine the data type.

// Medium Questions:

// 3. Generate a random number between 1 and 10 (inclusive) and print it. (51 -100)
// Hint: Use Math.random() and Math.floor() to generate random numbers.

let randomvaluee =Math.floor(Math.random()*(10)+10)
console.log(randomvaluee);



// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
// Hint: Rounds up to the nearest integer.
 // Hint: Rounds down to the nearest integer.


console.log(Math.ceil(num));//6
console.log(Math.floor(num));//5

// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
let diceroll1 = Math.floor(Math.random()*6)+1;
let diceroll2 = Math.floor(Math.random()*6)+1;
console.log(diceroll1,diceroll2);





// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 
// Result will be in between 5 to 14
// reason is Math.random creates random numbers from 0 to the in given ranges. 
// we have privided the range in between the 0 to 10, and applied math.floor 
// to keep it at lowest integer.
//Thats why 0 is mutliplied by 10 it will be 0, and we have added incremental value that is 5, hence range will start from 5, 
// and the largest number in this equation will be 9.99 it will be floored to 9, then 9+5 = 14,
// hence we will get results in between 5 to 14.





// Hint: Understand how the number is being generated and what range it falls in.

//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.

console.log(Math.floor(Math.random()*6+1));


// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.

let randomvaluer = Math.floor(Math.random()*(9.3-5.5)+5.5)
console.log(randomvaluer)


// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;
console.log(number.toFixed(2));


// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.
let numb_1 = 22
console.log(Math.round(numb_1/5)*5);
