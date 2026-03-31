//Practice - 21.03.2026

let weight = "29.49"

console.log(Math.floor(weight))

console.log(Math.ceil(weight))

console.log(Math.round(weight))

// num.toFixed() --> It convert the decimail values in the provided notaion

let AvailableBal = 10.54984962263

console.log(AvailableBal.toFixed(2))

//Math.random() --> Generate random number 0 to 0.999999

console.log(Math.random())

let Random100 = Math.random()*100
console.log(Random100)

console.log(Math.floor(Math.random()*100))

// 1. What will be the output of the following code?
let x = 7.2;
console.log(Math.round(x));
//Result - 7

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
let gravity = 9.81;
console.log(typeof gravity)
//Result - number

// 3. Generate a random number between 1 and 10 (inclusive) and print it. (51 -100)

// Random Number 0 to 10
let ObtainedMarks = Math.random()*100
console.log(Math.floor(Math.random()*10)+1)

// Random number 51 to 100
let TotalMarks = Math.random()*100
console.log(Math.floor(Math.random()*50)+51)

// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
let num = 5.7;
console.log(Math.ceil(num))
console.log(Math.floor(num))
/*Output - 
6
5*/

// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.

const dice1 = Math.floor(Math.random()*6)+1
const dice2 = Math.floor(Math.random()*6)+1

console.log(dice1,dice2)
console.log(dice1+dice2)

// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
//Output - it displays the random values between 0 to 15 as we have added +5

//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
//console.log(randomBetween(10, 20));
// Math.floor(Math.random()* (max-min+1))+min  --> inculsively 
// Math.floor(Math.random()* (max-min-1))+min  --> exclusive 

console.log(Math.floor(Math.random()*(20-10-1))+10)


// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.

let floatrandom= Math.random()*(9.3-5.5)+5.5

console.log(floatrandom.toFixed(1))


// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;

console.log(number.toFixed(2))

// 10. Write a program that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given should return 30, 32 should return 30.

let numb_1 = 22
console.log(Math.round(numb_1/5)*5)

