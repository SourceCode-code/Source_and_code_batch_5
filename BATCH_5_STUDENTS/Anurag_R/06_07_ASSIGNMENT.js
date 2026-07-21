/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(strTen === numTen)
let strcTen = parseInt(strTen)
console.log(typeof(strcTen))
console.log(strcTen === numTen)
// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let g = '9.8'
console.log("Check if parseFloat('9.8') is equal to 10",g === 10)
console.log("Rounding of and checking again",Math.round(g) === 10)

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';

console.log("Check if 'on' is found in word1'",word1.includes("on"))
console.log("Check if 'on' is found in word2'",word2.includes("on"))
// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log("Check if the word 'jargon' is found in the sentence",sentence.includes("jargon"))

// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
console.log(longSentence.substr(30,24))

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName = "Anurag"
let lastName = "Rasane"
let country = "India"
let city = "Sagamner"
let age = 27
let isMarried = false
let year = 1999
console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let num1 = '10'
let num2 = 10
console.log("Check if the type of '10' is equal to 10",typeof(num1) == typeof(num2))
console.log("Check if the type of '10' is equal to 10 using parse int",typeof(parseInt(num1)) == typeof(num2))

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
let a = 1
let b = 1
console.log("Boolean value is true")
console.log(a == b)
console.log(Boolean(1 || 1))
console.log(Boolean(0 || 1))

// 9. Write three JavaScript statements that provide falsy values.
console.log("Boolean value is false")
console.log(Boolean(0 & 1))
console.log(Boolean(0 & 0))
console.log(Boolean(0 & 1))

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 

console.log(4 > 3);  //true         
console.log(4 >= 3); //true          
console.log(4 < 3);    //false         
console.log(4 <= 3);  //false           
console.log(4 == 4);  //true          
console.log(4 === 4); //true    
console.log(4 != 4);  //false    
console.log(4 !== 4); //false    
console.log(4 != '4');//false    
console.log(4 == '4');//true    
console.log(4 === '4');//false     

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let word3 = "python"
let word4 = "jargon"
console.log(word1.length)
console.log(word2.length)
console.log (word1.length !== word2.length)

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 

console.log(4 > 3 && 10 < 12);          // true
console.log(4 > 3 && 10 > 12);          // false
console.log(4 > 3 || 10 < 12);          // true
console.log(4 > 3 || 10 > 12);          // true
console.log(!(4 > 3));                   // false
console.log(!(4 < 3));                   // true
console.log(!(false));                   // true
console.log(!(4 > 3 && 10 < 12));        // false
console.log(!(4 > 3 && 10 > 12));        // true
console.log(!(4 === '4'));               // true   

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let python = 'python' ;
console.log("Check if there is no 'on' in both 'dragon' and 'python'.")
console.log(dragon.includes('on'))
console.log(python.includes('on'))

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.

let base = 10
let height = 20
let area = (base * height) / 2;

console.log("The area of the triangle is:", area);

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

let d = 10;
let h = 20;
let f = 30;
let perimeter = d + h + f
console.log("Perimeter:",perimeter)
// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let lenght=10
let width=5
let area1=lenght*width
let perimiter=2*(lenght+width)
console.log("area of rectangle ",area1)
console.log("perimiter of rectagle ",perimiter)

// 17. Get the radius   calculate the area and circumference of a circle.
let radius=10
const pi = 3.14
let areaOfCircle=(pi*radius*radius).toFixed(2)
let circumstances=(2*pi*radius).toFixed(2)
console.log(`area of circle ${areaOfCircle} ,circumstances of circle ${circumstances}`)
// 22. Compare the length of your first name and your family name.
console.log(firstName.length === lastName.length)

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge = 27
let yourAge = 25
console.log("age difference",myAge - yourAge)

// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.
let driverAge = 19
let driveEligible = (driverAge > 18)?"You Can Drive":"You can't Drive"
console.log(driveEligible)
//25  using ternary opertor check number is even or odd
let number = 3
let evenOdd = (number / 2 == 1)? "Even":"Odd"
console.log(evenOdd)