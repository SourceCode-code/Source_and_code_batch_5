// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;

console.log(strTen==numTen)  //Output - true
console.log(strTen === numTen)  //Output - false

let converted = Number(strTen) 
console.log(converted === numTen)  //Output - true

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let strTen1 = '9.8';

console.log(strTen1===10)
console.log(Math.round(parseFloat(strTen1)))
console.log(Math.round(parseFloat(strTen1))===10)
/*Output - 
false
10
true*/

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';

console.log(word1.includes("on"),word2.includes("on")) // output -true true


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon")) // output - true


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction." 31,46
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';

console.log(longSentence.indexOf("b"))
console.log(longSentence.substr(31,23)) // output - because because because

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName = "Dhananjay" 
let lastName = "Ugwekar" 
let Country = "India" 
let City = "Pune"
let age = 29
let isMarried = "Married"
let year = 2026

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(Country))
console.log(typeof(City))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

/* output - 
string
string
string
string
number
string
number*/ 


// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let type = 10
console.log(typeof parseInt(type) === typeof 10) // output - true
console.log(parseInt(type) === 10 ) // output - true

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
let Age1 = 55
let Name = "Dhananjay"
let Company = []

console.log(Boolean(Age1)) // output - tree
console.log(Boolean(Name)) // output - true
console.log(Boolean(Company)) // output - true


// 9. Write three JavaScript statements that provide falsy values.
let Age2 = 0
let Name2 = ""
let Company2 = null

console.log(Boolean(Age2)) // output - false
console.log(Boolean(Name2)) // output - false
console.log(Boolean(Company2)) // output - false

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3);         // true       
console.log(4 >= 3);        // true     
console.log(4 < 3);         // false    
console.log(4 <= 3);        // false    
console.log(4 == 4);        // true   
console.log(4 === 4);       // true    
console.log(4 != 4);        // false    
console.log(4 !== 4);       // false     
console.log(4 != '4');      // false     
console.log(4 == '4');      // true     
console.log(4 === '4');     // false     

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let word11 = 'python'
let word22 = 'jargon'

console.log(word11.length)
console.log(word22.length)
console.log(Boolean(word11.length)!==Boolean(word22.length))


// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12);     // true
console.log(4 > 3 && 10 > 12);     // false
console.log(4 > 3 || 10 < 12);     // true
console.log(4 > 3 || 10 > 12);     // true
console.log(!(4 > 3));             // false
console.log(!(4 < 3));             // true
console.log(!(false));             // true
console.log(!(4 > 3 && 10 < 12));  // false
console.log(!(4 > 3 && 10 > 12));  // true
console.log(!(4 === '4'));         // true

/* true
false
true
true
false
true
true
false
true
true*/


// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let python = 'python';

console.log(!dragon.includes("on") && !python.includes("on")) // output - false


// 14. Write a script the user to enter the base and height of a triangle, then calculate its area.
let base = 50
let height = 80

console.log(0.5*base*height) // output - 2000


// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
let a = 30
let b = 60
let c = 40

let perimeter1 = a+b+c
console.log(perimeter1) // output - 130


// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let length = 120
let width = 50

let area = length*width
let perimeter = 2*length*width
console.log("Area:", area, "&", "Perimeter:", perimeter)  // output - Area: 6000 & Perimeter: 12000


// 17. Get the radius   calculate the area and circumference of a circle.
let radius = 25
let circleArea = Math.PI*radius*radius
console.log(circleArea.toFixed(2)) // output - 1963.50

let circumference = 2*Math.PI*radius
console.log(circumference.toFixed(2)) // output - 157.08

// 22. Compare the length of your first name and your family name.
let FirtName = "Dhananjay"
let FamilyName = "Shrikrushna"

console.log(FirtName.length)  // output - 9
console.log(FamilyName.length)  // output - 11
console.log(FirtName.length===FamilyName.length)  // output - false
console.log(FirtName.length<FamilyName.length)  // output - true
console.log(FirtName.length>FamilyName.length)  // output - false


// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge = 29
let yourAge = 35
let difference = Math.abs(myAge-yourAge)

console.log(difference)  // output - 6

// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.
let birthyear = 1996
let birthyear1 = 2020
let currentyear = 2026

let Age11 = Math.abs(currentyear-birthyear)
let Age22 = Math.abs(currentyear-birthyear1)

let drive= (Age11>=18)? "Yes you can drive." : "No you cannot drive."
let drive1= (Age22>=18)? "Yes you can drive." : "No you cannot drive."

console.log(drive)  // output - Yes you can drive.
console.log(drive1) // output - No you cannot drive.

//25  using ternary opertor check number is even or odd
let number1 = 10
let number2 = 13

let result1 = (number1 % 2 === 0)? "Even" : "Odd"
let result2 = (number2 % 2 === 0)? "Even" : "Odd"

console.log(result1) // Even
console.log(result2) // Odd