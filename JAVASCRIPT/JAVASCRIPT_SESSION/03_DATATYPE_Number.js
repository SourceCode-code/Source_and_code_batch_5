//Primitive Data type 

// 1 number --> it represent numeric value 
// all the numeric value in js which inculdes all intergers and floating numbers are considered as numbers in js 

// EXAMPLES 

let intergers = -100 // this is also a number 
let floatnumber = 10.33333333333333333333333333333333333333333333333333333333 // this is also valid number 

console.log(typeof intergers)
console.log(typeof floatnumber)

//why do use numbers in js or in day today life
//we use numbers to perform arthemtaic operators 
/**
 * + --> addition
 * - --> subsctration
 * * --> multiplication
 * / --> division
 * % --> modulus (reminder ) example 10/3 ==> modolus --> 1
 */



console.log(2+2)
console.log(2*2)
console.log(2/2)
console.log(2-2)
console.log(2%2)

/**
 NOTE:- any data in js will always have two things 
 1 properties--> inherent properties or default nature --> in case of primitive datatype you cannot change the properties
 2 methods ---> methods are the command used to perfrom operation on datatype
 
 */

//METHODS FOR NUMBERS

// NOTE :-  while using any method on number always remember to use a keyword called as Math


/**
 * Math.floor() --> rounds down the floating number to its nearest interger (it will take or convert to nearest lowest integer)
 * examples
 * // 10.1 -->10
 * //9.9999999 -->9
 * 
 * EXAMPLE
 */

let num1 = 9.2

console.log(Math.floor(num1))
console.log(Math.floor(7.8))


/**
 * Math.ceil() --> rounds up  the floating number to its nearest interger (it will take or convert to nearest highest integer)
 * examples
 * // 10.1 -->11
 * //9.9999999 -->10
 * //8.2356 --> 9
 * 
 * EXAMPLE
 */
console.log(Math.ceil(num1))
console.log(Math.ceil(9.23))


/**
 * Math.round() --> rounds the number to the nearest interger
 * if decimal number is 0.5 or greater the it will round higher
 * 
 * example 
 * 
 * 10.2 --> 10
 * 10.5 -->11
 * 10.9 -->11
Examples
 */
console.log(Math.round(num1))
console.log(Math.round(10.2))
console.log(Math.round(10.5))
console.log(Math.round(10.9))

/**
 * num.toFixed() --> formate a number using a fixed point notaion
 * 
 * example 
 * 10.12345678 --> 10.12
 * 
 * Example
 * 
 */

let num2 = 9.235568

let num3 = 9.2344

console.log(num2.toFixed(2))
console.log(num3.toFixed(2))



/**
 * Math.random() --> it will generate a random number form 0 to 0.99999999999
 * 
 * USECASE ->
 * it used to generate amy random between the given range by the deveopler
 * it used to generate dummy data for automation
 *  
 * 
 */

console.log(Math.random()) // 

/*
  Q : GENERATE RANDOM NUMBER FORM 0-100
*/

let Random100 = Math.random()*100
console.log(Random100) // lowest number will be 0 and highest number will be 99.99

// now to convert floating number 99.999 we have 3 methods
/**
 * Math.ceil() ->100  but now the lowest number will be 1 
 * Math.round()-> we cannot use round beacuse it cause us uncertain result in endpoints 
 * Math.floor()-> 99    now lowest will be 0
 *  */ 

Math.floor(Random100)// it will be inetrger  ->0 ===99



console.log(Math.floor(Math.random()*100)+1) 



// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.


const dice1 = Math.floor(Math.random()*6)+1    // 1 --6
const dice2 = Math.floor(Math.random()*6)+1   
console.log(dice1,dice2)

console.log(dice1+dice2)



// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();
console.log(Math.floor(randomVal * 10) + 5);
// write the output and reason in commnets 
// 0-0.99 
//0 -9.99999
//0-9
//5-14

// Hint: Understand how the number is being generated and what range it falls in.

//7 generate  randomBetween(10, 20) should generate a number between 10 and 20.
// console.log(randomBetween(10, 20));

// inclusive --> included endpoints 
// exclusive --> excluded endpoints 


// general formula for generating any random number in the range 

// Math.floor(Math.random()* (max-min+1))+min  // inculsively 
//// Math.floor(Math.random()* (max-min-1))+min  // exclusive 

console.log(Math.floor(Math.random()*(20-10-1))+10)


// 8 generate a random number between 5.5-9.3
//Example: randomFloat(5.5, 9.3) should generate a random float between 5.5 and 9.3.

let floatrandom= Math.random()*(9.3-5.5)+5.5

console.log(floatrandom.toFixed(1))


// 9. Given a number `x = 1234.56789`, write code to round this number to 2 decimal places. that is x=1234.57
let number = 1234.56789;

console.log(number.toFixed(2))

// 10. Write a program  that rounds any given number to the nearest multiple of 5.
// Example:if 28 is given  should return 30, 32 should return 30.

let numb_1 = 22
console.log(Math.round(numb_1/5)*5)



// question --> 

// 1 Generate a random adahar number
// generate a random 12 digit number --> 
// generate pack of 3 till number is of 12 digit  --> 4

// you have generate a number which is of 4 digit  and this you have to do 3 

// highest 4 digit numnber is -->9999
// lowest 4 digit number is  --->1000 


let pack1  = Math.floor(Math.random()*(9999-1000+1))+1000
let pack2 = Math.floor(Math.random()*(9999-1000+1))+1000
let pack3 = Math.floor(Math.random()*(9999-1000+1))+1000

console.log(pack1 , pack2 , pack3)

// 2 generate a random phone number 
// 3 generate a random otp 
// 4 generate a random password (letters +number+sign) 
 

