let x = 7.2;
console.log(Math.round(x))
//ans-the output will be 7 because it will take nearest value

// 2. Write code to check the type of the variable `gravity = 9.81` using the typeof operator.
// Example:
let gravity = 9.81;
console.log(typeof(gravity))


console.log(Math.random())//--------0 to 0.99
console.log(Math.random()*10)//-----------0 to 9.9
console.log(Math.ceil(Math.random()*10))//we have taken ceil because min value of ceil is 1 ,and for floor is 0 and we have to get output from 1 to 10


let num=5.7
console.log(Math.ceil(num))//------------------ooutput wll be 6 because it takes highest round off value

console.log(Math.floor(num))//------------------output will be 5 because it takes lowest round off value


// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.

const dice1 = Math.floor(Math.random()*6)+1    // 1 --6
const dice2 = Math.floor(Math.random()*6)+1   
console.log(dice1,dice2)


// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);

//Math.random will create value from 0 to 0.99
//*10 will generate 0 to 9.9 
//floor value for 0 is 0 and floor value for 9.9 is 9
//adding 5 in both the values (0+5=5) and (9+5=14) so it will generate value from 5 to 14

//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
// Math.floor(Math.random()* (max-min+1))+min  // inculsively 
console.log(Math.floor(Math.random()*(20-10-1))+10)

// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.

let floatrandom= Math.random()*(9.3-5.5)+5.5

console.log(floatrandom.toFixed(1))


// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;

console.log(number.toFixed(2))