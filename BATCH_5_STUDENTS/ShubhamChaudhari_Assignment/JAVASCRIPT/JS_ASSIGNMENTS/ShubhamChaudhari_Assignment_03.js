// 1. What will be the output of the following code? 
let x = 7.2;
console.log(Math.round(x));

//Output of this is 7

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.

let gravity = 9.81;
console.log(typeof(gravity))//Output is number


// 3. Generate a random number between 1 and 10 (inclusive) and print it. (51 -100)

let randomNum=Math.random();

console.log(Math.floor((randomNum)*10+1));

let num = 5.7;
console.log(Math.ceil(num))//output is 6
console.log(Math.floor(num))//output is 5

// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.

let dice1=Math.random()*6+1;
let dice2=Math.random()*6+1;

console.log(Math.floor(dice1+dice2))

// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);//Output 12

//randome value generated the between 0-1 then 
//multiply by 10 it will convert 0 to 9.9999
//Math.floor rounds down the number between 0 to 9
//+5 add the number which generated betwwn 0 to 9 

//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.

console.log(Math.floor(Math.random()*10)+10);


// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.

console.log(Math.random() * (9.3 - 5.5) + 5.5);


// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;
console.log(number.toFixed(2))




// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.
let num1=19;
console.log( Math.round(num1 / 5) * 5);//Divide output is 3.8 roundof function convert is  4 and then 4*5 =20

let num2=16;
console.log( Math.round(num2 / 5) * 5);