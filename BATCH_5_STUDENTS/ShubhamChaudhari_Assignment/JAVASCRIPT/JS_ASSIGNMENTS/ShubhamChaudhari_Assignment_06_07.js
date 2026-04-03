/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(strTen===numTen)
console.log(Number(strTen)===numTen)
console.log(`Data type od strTen: '${typeof strTen}' And  Data type od strTen: '${typeof numTen}'`);
console.log(`Data type od strTen after convert in Number: '${typeof Number(strTen)}' And  Data type od strTen: ${typeof numTen}`);

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let floatValue=9.8;
console.log(`Compaire value afetr the parseFloat: '${parseFloat(floatValue)==10}'`);
console.log(`Compaire value afetr the roundof: '${Math.round(parseFloat(floatValue))==10}'`);


// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';

console.log(`on present in Python string ${word1.includes('on')}`);
console.log(`on present in jargon string ${word1.includes('on')}`);


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log(`jargon present in string ${sentence.includes('jargon')}`);

// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
let subStrIndex=longSentence.indexOf("because");
let finalString=longSentence.substr(subStrIndex,23);
console.log(finalString);

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName= "Shubham"
let lastName= "Chaudhari"
let country= "India"
let city= "Jalgaon"
let age= 29
let isMarried= true
let year= 2026
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
console.log("compaire the 10==10 : "+ (10 == parseInt('10')));

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
console.log(Boolean("Hello"));   // true 

console.log(Boolean(100));        // true 

console.log(true);

// 9. Write three JavaScript statements that provide falsy values.
console.log(Boolean(""));  

console.log(Boolean(0));        

console.log(false);

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3);      //true        
console.log(4 >= 3);       //true      
console.log(4 < 3);        //false     
console.log(4 <= 3);        //false     
console.log(4 == 4);          //true  
console.log(4 === 4);          //true
console.log(4 != 4);            //false
console.log(4 !== 4);             //false
console.log(4 != '4');           //false
console.log(4 == '4');           //true
console.log(4 === '4');          //false

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let word3 = 'python';
let word4 = 'jargon';
console.log("compaire the string: "+(!word3.length == word4.length));
// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12); //true  
console.log(4 > 3 && 10 > 12);   //false
console.log(4 > 3 || 10 < 12);   //true
console.log(4 > 3 || 10 > 12);   //true
console.log(!(4 > 3));  //false        
console.log(!(4 < 3));   //true        
console.log(!(false));   //true        
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12));// true
console.log(!(4 === '4')); //  true     

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let value1 = 'dragon';
let value2= 'python'

console.log(!value1.includes("on") && !value2.includes("on"));

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let base= 15
let height= 30
let area= 1/2*(base*height)
console.log("Area of Triangle=", area)

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
let side1= 10;
let side2= 13;
let side3= 10;
console.log("Perimeter of Triangle=", side1+side2+side3);
// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let length = 20;
let width = 10;

let rectangleArea = length * width;
let rectanglePerimeter = 2 * (length + width);

console.log(`Area of Rectangle = ${rectangleArea} and Perimeter of Rectangle = ${rectanglePerimeter} `);
// 17. Get the radius   calculate the area and circumference of a circle.
let radius = 7;
const pi=22/7
let circleArea =pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(`Area of circle = ${circleArea} and Circumference of Circle = ${circumference} `);

// 22. Compare the length of your first name and your family name.
let fName = "Shubham";
let lName = "Chaudhari";
console.log(`compaire the length of name = ${fName==lName} `);
// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge = 25;
let yourAge = 30;

let differenceBetweenAge = yourAge - myAge;

console.log("Age difference =", differenceBetweenAge);
// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.
let birthYear = 2005;
let currentYear = 2026;

let ageLimit = currentYear - birthYear;

console.log( age >= 18 ? "old enough to drive" : "not old enough to drive");


//25  using ternary opertor check number is even or odd
let num = 15;
console.log( num % 2 == 0 ? "Even Number" : "Odd Number");

