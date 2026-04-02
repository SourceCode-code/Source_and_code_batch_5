
//javascript assignment 6

/* 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.

let strTen = '10';
let numTen = 10;

console.log(strTen===numTen)  = false */

/*let strTen = '10'
let numTen = 10

let output = Number(strTen)

console.log(output===numTen) = true */

/* 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.

let num = parseFloat('9.8')
console.log(num===10)  =false*/

/*let num = parseFloat('9.8')

let rounded = Math.round(num)
console.log(rounded===10)  = true */


/* 3. Check if 'on' is found in both 'python' and 'jargon'.

let word1 = 'python';
let word2 = 'jargon';

console.log(word1.includes('on')) = true 
console.log(word2.includes('on')) = true */


/* 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";

console.log(sentence.includes('jargon')) =true */



/* 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."

let longSentence = "You cannot end a sentence with because because because is a conjunction."

let output=longSentence.substr(31,23)
console.log(output) ; // because because because */


/* 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.

let firstName ="Shweta"
let lastName ="Bholankar"
let country = "India"
let age      = 28
let city     ="Pune"
let isMarried ="true"
let year     =2026

console.log(typeof firstName) // string
console.log(typeof lastName)  //string
console.log(typeof country)  //string
console.log(typeof age)  //number
console.log(typeof city)  // string
console.log(typeof isMarried)  // string
console.log(typeof year)  //number */


/* 7. Check if the type of '10' is equal to 10 using `parseInt`.

console.log(parseInt('10')=== 10)  //TRUE */


/* 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.

console.log(2)
console.log("hello")
console.log(true) */


/* 9. Write three JavaScript statements that provide falsy values.

console.log(0)
console.log("")
console.log(null) */

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3);    // true                                 
console.log(4 >= 3);   //true   
console.log(4 < 3);    //false  
console.log(4 > 3);    // true                                  
console.log(4 <= 3);   //false   
console.log(4 <= 3);   //false   
console.log(4 <= 3);   //false   
console.log(4 == 4);    //false    
console.log(4 <= 3);    //true   
console.log(4 === 4);   //false      



/* 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.

let word1 = 'python'
let word2 = 'jargon'

console.log(word1.length) =6
console.log(word2.length) =6

console.log(word1.length < word2.length) =false */

/* 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 

console.log(4 > 3 && 10 < 12);   //true
console.log(4 > 3 && 10 > 12);   //false
console.log(4 > 3 || 10 < 12);   //true
console.log(4 > 3 || 10 > 12);   //true
console.log(!(4 > 3));           //false
console.log(!(4 < 3));           //true
console.log(!(false));           //true
console.log(!(4 > 3 && 10 < 12));  //false
console.log(!(4 > 3 && 10 > 12));  //true
console.log(!(4 === '4'));         //true */




/* 13. Check if there is no 'on' in both 'dragon' and 'python'.

let dragon = 'dragon';
let python ='python';

let output = !(dragon.includes('on')&& python.includes('on'))
console.log(output) // false */


/*14. Write a script  the user to enter the base and height of a triangle, then calculate its area.

let base =12
let height = 14

let area =0.5*base*height
console.log("Area of Triangle =", area)

output = 84 */


/*15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

let a = 10
let b = 15
let c = 12

console.log("Perimeter of Triangle=", a+b+c)

output = 37 */


/* 16. Calculate the area and perimeter of a rectangle, prompting for length and width.

let length = 58
let width = 24

console.log("Perimeter of rectangle=",2*(length+width))
console.log("Area of Rectangle=", length+width)

Perimeter of rectangle =164
Area of Rectangle = 82 */


/* 17. Get the radius   calculate the area and circumference of a circle.

let radius = 9
let area1 =Math.PI*radius*radius
console.log("Area of circle=",area1) 
let circumference = 2*Math.PI*radius
console.log("circumference of circle=", circumference)

Area of circle= 254.46900494077323
circumference of circle= 56.548667764616276 */


/* 22. Compare the length of your first name and your family name.
 let firstName1 = "Shweta"
 let lastName1 = "Bholankar"

 console.log(firstName1.length===lastName1.length) */


/* 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.

let myAge =28
let yourAge = 25

console.log("Age Difference=", myAge-yourAge)

Age difference = 3 */


/* 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.

let driverAge= 26
let drive= (driverAge>18)? "Yes you can drive." : "No you cannot drive"
console.log(drive)

Yes you can drive */


/*25  using ternary opertor check number is even or odd

let numOddEven= 1200

let checkNum= (numOddEven%2===0)? "Even Number" : "Odd Number"

console.log(checkNum)

output = Even Number */







