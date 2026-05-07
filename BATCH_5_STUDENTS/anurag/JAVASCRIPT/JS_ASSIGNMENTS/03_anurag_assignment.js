//1. what will be the output of following code
console.log("answer of question 1")
let x = 7.2;
console.log(Math.round(x))
// output will be 7 because math.round rounds to the nearest integer

// 2. write code to check the type of variable gravity = 9.81 using typeof operator

console.log("answer of question 2")
let gravity = 9.81
console.log(typeof gravity)
// output will be number because gravity is a number data type

// 3. generate a random number between 1 and 10 (inclusive) and print it
console.log("answer of question 3")
let randomNum = Math.floor(Math.random() * 10) + 1
console.log(randomNum)  

// 4. what is the output of rounding the number 5.7 using math.ceil() and math.floor()
console.log("answer of question 4")
let num = 5.7
console.log(Math.ceil(num)) // output will be 6 because math.ceil rounds up to the nearest integer
console.log(Math.floor(num)) // output will be 5 because math.floor rounds down to the nearest integer

// 5. write program rollDice that simulates rolling two dice and returns their combined result
console.log("answer of question 5")
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

console.log(dice1);
console.log(dice2);
console.log(dice1 + dice2);


// 6. what will be the result of following code? explain why
console.log("answer of question 6")
let randomVal = Math.random()
console.log(Math.floor(randomVal * 10) + 5)
// output will be a random number between 5 and 14 because math.random generates a random number between 0 and 1, when we multiply it by 10 we get a number between 0 and 10, when we add 5 we get a number between 5 and 15, and when we use math.floor we round it down to the nearest integer so the final output will be between 5 and 14

// 7. generate randomBetween(10, 20) should generate a number between 10 and 20
console.log("answer of question 7")
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(randomBetween(10, 20)) // output will be a random number between 10 and 20

// 8. generate a random number between 5.5-9.3
console.log("answer of question 8")
Math.random() * (9.3 - 5.5) + 5.5 // output will be a random float between 5.5 and 9.3

// 9. given a number x = 1234.56789, write code to round this number to 2 decimal places that is x=1234.57

console.log("answer of question 9")
let number = 1234.56789
console.log(number.toFixed(2)) // output will be 1234.57 because toFixed rounds the number to the specified number of decimal places

// 10. write a program that rounds any given number to the nearest multiple of 5
console.log("answer of question 10")