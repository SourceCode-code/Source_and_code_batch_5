/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;

(strTen === numTen) ? console.log("strTen is strongly equal to numTen") : strTen = parseInt(strTen); 
(strTen === numTen) ? console.log("After converting '10' to a number, '10' is exactly equal to 10") : console.log("After converting '10' to a number, '10' is not exactly equal to 10");


// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.

(10 === parseFloat('9.8')) ? console.log("parseFloat('9.8') is equal to 10") : (10 === Math.ceil(parseFloat('9.8'))) ? console.log("Math.ceil(parseFloat('9.8')) is equal to 10") : console.log("parseFloat('9.8') is not equal to 10"); 


// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';

(word1.includes('on') && word2.includes('on')) ? console.log("'on' found in both 'python' and 'jargon'") : console.log("'on' not found in both 'python' and 'jargon'"); 


// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";

(sentence.includes('jargon')) ? console.log("'jargon' found in the sentence") : console.log("'jargon' not found in the sentence"); 


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';

let subString = longSentence.substr(longSentence.indexOf('because'), "because because because".length);
console.log(subString); 


// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.

let firstName = "Ankit";
let lastName = "Giri";
let country = "India";
let city = "Pune";
let age = 25;
let isMarried = false; 
let year = 2026
console.log(`${typeof(firstName)}, ${typeof(lastName)}, ${typeof(country)}, ${typeof(city)}, ${typeof(age)}, ${typeof(isMarried)}, ${typeof(year)}`);


// 7. Check if the type of '10' is equal to 10 using `parseInt`.

(10 === parseInt('10')) ? console.log("'type of '10' is equal to 10 using `parseInt`") : console.log("'type of '10' is no equal to 10 using `parseInt`");


// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.

console.log(10 > 0);
console.log("ankit" === 'ankit');
console.log(10 == '10');


// 9. Write three JavaScript statements that provide falsy values.

console.log(10 < 0);
console.log("ankit" === 'Ankit');
console.log(10 === '10');


// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(`${4 > 3} : result will be true`);              
console.log(`${4 >= 3}: result will be true`);             
console.log(`${4 < 3} : result will be false`);             
console.log(`${4 <= 3}: result will be false`);             
console.log(`${4 == 4}: result will be true`);            
console.log(`${4 === 4}: result will be true`);           
console.log(`${4 != 4}: result will be false`);            
console.log(`${4 !== 4}: result will be false`);            
console.log(`${4 != '4'}: result will be false`);           
console.log(`${4 == '4'}: result will be true`);           
console.log(`${4 === '4'}: result will be false`);          


// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.

console.log('python'.length != 'jargon'.length);


// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(`${4 > 3 && 10 < 12}: result will be true`);   
console.log(`${4 > 3 && 10 > 12}: result will be false`);   
console.log(`${4 > 3 || 10 < 12}: result will be true`);   
console.log(`${4 > 3 || 10 > 12}: result will be true`);   
console.log(`${!(4 > 3)}: result will be false`);          
console.log(`${!(4 < 3)}: result will be true`);           
console.log(`${!(false)}: result will be true`);           
console.log(`${!(4 > 3 && 10 < 12)}: result will be false`); 
console.log(`${!(4 > 3 && 10 > 12)}: result will be true`); 
console.log(`${!(4 === '4')}: result will be true`);        


// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let python = 'python';

(dragon.includes('on') && python.includes('on')) ? console.log("there is 'on' in both 'dragon' and 'python'") : console.log("there is no 'on' in both 'dragon' and 'python'");


// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.

let base = 12.5;   // parseFloat(prompt("Enter base of triangle"));
let height = 8.2; // parseFloat(prompt("Enter height of triangle"));
console.log(`Area of triangle is ${1/2 * base * height}`);


// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.

let side1 = 7; //  parseFloat(prompt("Enter side1 of triangle"));
let side2 = 9; //  parseFloat(prompt("Enter side2 of triangle"));
let side3 = 11; // parseFloat(prompt("Enter side3 of triangle"));
console.log(`Perimeter of triangle is ${side1 + side2 + side3}`);


// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.

let length = 15.4; // parseFloat(prompt("Enter length of rectangle"));
let width = 6.8;  //  parseFloat(prompt("Enter width of rectangle"));
console.log(`Area of rectangle is ${length * width}`);
console.log(`Perimeter of rectangle is ${2 * (length + width)}`);


// 17. Get the radius   calculate the area and circumference of a circle.

let radius = 5.5; // parseFloat(prompt("Enter radius of circle"));
console.log(`Area of circle is ${Math.PI * radius * radius}`);
console.log(`Circumference of circle is ${2 * Math.PI * radius}`);


// 22. Compare the length of your first name and your family name.

(firstName.length == lastName.length) ? console.log("length of first name and family name is same") : console.log("length of first name and family name is not same");

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.

let myAge = 25;
let yourAge = 26;
console.log(`age difference is ${Math.abs(myAge - yourAge)}`);


// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.

let birthYear = 2000;
let currentYear = new Date().getFullYear();
((currentYear - birthYear) >= 18) ? console.log("Old enough to drive") : console.log("Not old enough to drive");


//25  using ternary opertor check number is even or odd

let num = 25;
(num % 2 == 0) ? console.log("Number is even") : console.log("Number is odd");