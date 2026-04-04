/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
/*
console.log(typeof strTen); // Check the type of strTen
console.log(typeof numTen); // Check the type of numTen
console.log(typeof strTen === typeof numTen)  // Check if types are exactly equal
console.log(Number(strTen) === numTen)  // Convert strTen to a number and check it is equal to numTen
*/




// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
/*
let floatNum = parseFloat('9.8')
console.log(floatNum) //output===> 9.8
console.log(floatNum ==10) //output===> false
console.log(Math.round(floatNum)) //output===> 10
*/



// 3. Check if 'on' is found in both 'python' and 'jargon'.
/*
let word1 = 'python';
let word2 = 'jargon';
console.log(word1.includes('on')) //output===> true
console.log(word2.includes('on')) //output===> true
*/



// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
/*
console.log(sentence.includes('jargon')) //output===> true
*/




// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
/*
console.log(longSentence.substr(31, 23)) //output===> because because because
console.log(longSentence[31]) //output===>b
*/



// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
/*let firstName = 'Shivani';
let lastName = 'kshirsagar';
let country = 'India';
let city = 'Latur';
let age = 27;
let isMarried = true;
let year = 2026;

console.log(typeof firstName) //output===> string
console.log(typeof lastName) //output===> string
console.log(typeof country) //output===> string
console.log(typeof city) //output===> string
console.log(typeof age) //output===> number
console.log(typeof isMarried) //output===> boolean
console.log(typeof year) //output===> number
*/




// 7. Check if the type of '10' is equal to 10 using `parseInt`.
/*
let strNum = "10"
console.log(parseInt(strNum)==10) //output===>true
*/



// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.


// 9. Write three JavaScript statements that provide falsy values.


// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
/*
console.log(4 > 3);   //output ===> true    
console.log(4 >= 3);  //output ===> true       
console.log(4 < 3);   //output ===> false     
console.log(4 <= 3);  //output ===> false     
console.log(4 == 4);   //output ===> true         
console.log(4 === 4);   //output ===> true          
console.log(4 != 4);   //output ===> false          
console.log(4 !== 4);   //output ===> false            
console.log(4 != '4');   //output ===> false     
console.log(4 == '4');   //output ===> true     
console.log(4 === '4');  //output ===> false
*/



// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let Word = "python"
let Word1 = "jargon"
/*
console.log(Word.length) //output ===> 6
console.log(Word1.length) //output ===> 6
console.log(Word.length != Word1.length); //output ===> false
*/




// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
/*
console.log(4 > 3 && 10 < 12); //output ===> true 
console.log(4 > 3 && 10 > 12); //output ===> false
console.log(4 > 3 || 10 < 12); //output ===> true
console.log(4 > 3 || 10 > 12); //output ===> true
console.log(!(4 > 3));          //output ===> false
console.log(!(4 < 3));          //output ===> true
console.log(!(false));           //output ===> true
console.log(!(4 > 3 && 10 < 12)); //output ===> false
console.log(!(4 > 3 && 10 > 12)); //output ===> true
console.log(!(4 === '4'));        //output ===> true
*/



// 13. Check if there is no 'on' in both 'dragon' and 'python'.
/*
let dragon = 'dragon';
let python = 'python';

console.log(!(dragon.includes('on')) && !(python.includes('on'))) //output ===> false
*/




// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let base = "Enter the base of the triangle:"
let height = "Enter the height of the triangle:"
let area = 0.5 * base * height;
/*
console.log(area)
console.log("The area of the triangle is: " + area);
Example:
let area = 0.5 * 5 * 5;
console.log(area) //12.5
*/



// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
/*
let side_a = 10;
let side_b = 20;
let side_c = 30;
let perimeter = side_a + side_b + side_c;
console.log(perimeter) //output ===> 60
*/




// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
/*
let length = 10;
let width = 5;
let area_rectangle = length * width;
let perimeter_rectangle = 2 * (length + width);
console.log(area_rectangle) //output ===> 50
console.log(perimeter_rectangle) //output ===> 30
*/




// 17. Get the radius   calculate the area and circumference of a circle.
let radius = 5;
let area_circle = Math.PI * radius * radius;      //area of circle = πr^2  .....(here  π=3.14 and r= radius)
let circumference_circle = 2 * Math.PI * radius;    //circumference of circle = 2πr  .....(here  π=3.14 and r= radius)
/*
console.log(area_circle) //output ===> 78.53981633974483
console.log(circumference_circle) //output ===> 31.41592653589793
*/



// 22. Compare the length of your first name and your family name.
/*
let firstName = "Shivani";
let familyName = "Kshirsagar";
console.log(firstName.length) //output ===> 7
console.log(familyName.length) //output ===> 10
console.log(firstName.length > familyName.length) //output ===> false
console.log(firstName.length < familyName.length) //output ===> true
*/



// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
/*
let myAge = 27;
let yourAge = 30;
let agedifference = yourAge - myAge;
console.log(agedifference) //output ===> 3
*/



// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.

let birthyear =1996;
let currentyear =2026;
let age = currentyear - birthyear;
let canDrive = (age >= 18 )? "You are old enough to drive." : "You are not old enough to drive.";
console.log(canDrive) //output ===> You are old enough to drive.




//25  using ternary opertor check number is even or odd
let number =10;
let even_odd = (number%2 ===0)? "The number is even." : "The number is odd.";
console.log(even_odd) //output ===> The number is even.




////////////..................the end................///////////////