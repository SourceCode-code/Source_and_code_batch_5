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


// inculisly and excusiley
