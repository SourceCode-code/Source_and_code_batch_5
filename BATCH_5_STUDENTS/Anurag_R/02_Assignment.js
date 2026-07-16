// assignment.js
/*
1.What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));
*/
//Answer : 7

/*
2.Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
Example:*/
let gravity = 9.81;
//Answer :
console.log("Datatype of let gravity = 9.81 :",typeof gravity) 

/* 3. Generate a random number between 1 and 10 (inclusive) and print it. (51 -100)
 Hint: Use Math.random() and Math.floor() to generate random numbers.
 */
console.log("Using Math.floor() and Math.random to print random values between 1 to 10")
console.log(Math.floor(Math.random()*9 + 1))
//Simple way
//Storing random method in variable
console.log("Random value between 1 to 10")
floatingRandomNumber = Math.random()
//Using it for printing values
console.log(Math.floor((floatingRandomNumber * 10) + 1))

// 4. What is the output of rounding the number 5.7 using Math.ceil() and Math.floor()? 
console.log("Output of let num = 5.7 Using Math.ceil() and Math.floor is :");
let num = 5.7
console.log("Using Math.ceil() : ", Math.ceil(num))
console.log("Using Math.floor() : ", Math.floor(num))
// Output of Math.ceil is 6
// Output of Math.floor is 5
// Hint: Rounds up to the nearest integer.
 // Hint: Rounds down to the nearest integer.


 // 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.
rollDice1 = Math.floor(Math.random()*6 + 1)
rollDice2 = Math.floor(Math.random()*6 + 1)
console.log("Rolling.......");
console.log("Dice1:",rollDice1 , "Dice2:",rollDice2);

// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 
//the output of above code is random numbers between 1 to 15 inclusively
//0 to 0.9 get multiplied by 10 so it becomes 0  to 9 and we add 5 later so it becomes 5 to 15 inclusively

//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
function randomBetween(min, max){
    return (Math.floor(Math.random()* (max - min + 1) + min));
}
console.log(randomBetween(10, 20));
// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.
randomFloat = (Math.random()*(9.3 - 5.5) + 5.5)
console.log(randomFloat)

// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;
console.log(number.toFixed(2))

// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.
let num1 = 43;
let roundnum = Math.round(num1/5) * 5;
console.log(roundnum);