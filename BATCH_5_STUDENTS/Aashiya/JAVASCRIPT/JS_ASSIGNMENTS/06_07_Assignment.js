/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(typeof strTen )//string
console.log(typeof numTen)//number
let strTenToNumber=Number(strTen)
console.log(typeof strTenToNumber)//number

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let nu='9.8'
console.log( parseFloat(nu))//9.8
let value=(parseFloat(nu)==10)?`${parseFloat(nu)}`:(Math.round(nu))//using ternary operators
console.log(value)


// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
console.log("is word1 includes on ",word1.includes('on'))//true
console.log("is word2 includes on ",word2.includes('on'))//true



// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes('jargon'))//true


// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';

console.log(longSentence.substr(31,(54-31)))//(54-31) we need to pass lengh so we used this substr(startingIndex,(lengt))

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.

let firstName = "Aashiya";
let lastName = "Khan";
let country = "India";
let city = "Pune";
let age = 31;
let isMarried = false;
let year = 2026;

// checking data types
console.log(typeof firstName);  // string
console.log(typeof lastName);   // string
console.log(typeof country);    // string
console.log(typeof city);       // string
console.log(typeof age);        // number
console.log(typeof isMarried);  // boolean
console.log(typeof year);       // number

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let ty='10'
console.log(typeof parseInt(ty))//number

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
let string1="I love my India"
console.log(string1.includes("India"))//true
console.log(string1.startsWith("I"))//true
console.log(string1.endsWith("a"))//true

// 9. Write three JavaScript statements that provide falsy values.
console.log(string1.includes("india"))//false
console.log(string1.startsWith("u"))//false
console.log(string1.endsWith("q"))//false


// // 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
// //write the output in the comments 
console.log(4 > 3);   //true           
console.log(4 >= 3);  //true           
console.log(4 < 3);   //false          
console.log(4 <= 3);  //false           
console.log(4 == 4);   //true         
console.log(4 === 4);  //true   //6      
console.log(4 != 4);  //false          
console.log(4 !== 4);  //false          
console.log(4 != '4');  //false         
console.log(4 == '4');  //true         
console.log(4 === '4');  //false        

// // 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let py='python'
let ja='jargon'

console.log(py.length !== ja.length); // false

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12);   //true//1
console.log(4 > 3 && 10 > 12); //false 
console.log(4 > 3 || 10 < 12);  //true 
console.log(4 > 3 || 10 > 12); //true  
console.log(!(4 > 3)); //flase      
console.log(!(4 < 3));  //true         
console.log(!(false));  //true         
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4'));   //true     

// // 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon'
let python='python'

console.log(!dragon.includes('on'))
console.log(!python.includes('on'))


// // 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let a=12
let h=10
let area=0.5*a*h
console.log(area)

// // 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
let c=5
let perimeter=a+h+c
console.log(perimeter)

// // 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let lenght=10
let width=5
let area1=lenght*width
let perimiter=2*(lenght+width)
console.log("area of rectangle ",area1)
console.log("perimiter of rectagle ",perimiter)

// // 17. Get the radius   calculate the area and circumference of a circle.
let radius=10
let areaOfCircle=(Math.PI*radius*radius).toFixed(2)
let circumstances=(2*Math.PI*radius).toFixed(2)
console.log(`area of circle ${areaOfCircle} ,circumstances of circle ${circumstances}`)

// // 22. Compare the length of your first name and your family name.
let firstNamee="Aashiya"
let lastNamee="Khan"
console.log(firstNamee.lenght==lastNamee.length)//false

// // 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myage=30
let yourage=20
let diff=myage-yourage
console.log(diff)

// // 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.
let driveage=20
let condition=(driveage>=18)?"you can drive":"you cant drive"
console.log(condition)


// //25  using ternary opertor check number is even or oddaa
let num1=13
let condistion=(num1/2==0)?"the given number is even":"the given number is odd"
console.log(condistion)