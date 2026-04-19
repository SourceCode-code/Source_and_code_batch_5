/**
 * ASSIGNMENT 6 & 7 QUESTIONS
 */

//impots
const prompt = require(`prompt-sync`)();

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = "10";
let numTen = 10;
if (strTen === numTen) {
  console.log("Both are equals");
} else {
  strTen = Number(strTen);
  console.log("Converted to Number");
}

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
if (parseFloat("9.8") == 10) {
  console.log("is equal");
} else {
  let tempNumb = Math.ceil(parseFloat("9.8"));
  console.log(tempNumb);
}

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = "python";
let word2 = "jargon";
word1.includes("on") && word2.includes("on")
  ? console.log('Both words has "on" in it')
  : console.log('one of the word don\'t have "on" in it');

// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
sentence.includes("jargon")
  ? console.log('given sentance has "jargon" word')
  : console.log('given sentence don\'t have "jargon" word');

// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence =
  "You cannot end a sentence with because because because is a conjunction.";
let getStartIndex = longSentence.indexOf("because");
let getLastIndex = longSentence.lastIndexOf("because");
console.log(`first = ${getStartIndex} | last = ${getLastIndex}`);
let miniSentence = longSentence.substr(
  getStartIndex,
  getLastIndex - getStartIndex + "beacuse".length,
);
console.log(`substr sentence = ${miniSentence}`);

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName = "Ganesh";
let LastName = "Dhage";
let country = "India";
let city = "Navi Mumbai";
let age = 29;
let isMarried = false;
let year = 2026;
console.log(
  `type of ${firstName} is ${typeof firstName}
    type of ${LastName} is ${typeof LastName}
    type of ${country} is ${typeof country}
    type of ${city} is ${typeof city}
    type of ${age} is ${typeof age}
    type of ${isMarried} is ${typeof isMarried}
    type of ${year} is ${typeof year}`,
);

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
typeof 10 === typeof parseInt("10")?console.log("both have same type"):console.log("both don't have same data type");

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
console.log(50>45.999);
console.log("abacus".length < "staflexer".length);
console.log(false || true);

// 9. Write three JavaScript statements that provide falsy values.
console.log(!50>45.999);
console.log(!("abacus".length < "staflexer".length));
console.log(false && true);

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments
console.log(4 > 3); //true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // tue
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); //false
console.log(4 == "4"); // true
console.log(4 === "4");//false

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
"python".length >= "jargon".length ? console.log("first word has more or equal length"):console.log("second word has more length");

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); //true

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = "dragon";
"dragon".includes("on")&&"python".includes("on")?console.log("Both has \'on\' word"):console.log("One of the word don\'t have \'on\' word");

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let height = prompt('Enter height of triangle : ');
let base = prompt('Enter base of triangle : ');
let area = 0.5*height*base; 
console.log(`Area of triangle : ${area}`);

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
let side_a = parseFloat(prompt('Enter side a : '));
let side_b = parseFloat(prompt('Enter side b : '));
let side_c = parseFloat(prompt('Enter side c : '));
console.log(`Perimeter of triangle : ${side_a+side_b+side_c}`);

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let lengthOfRectangle = parseFloat(prompt('Enter length of rectangle : '));
let widthOfRectangle = parseFloat(prompt('Enter width of rectangle : '));
console.log(`Area of rectangle : ${lengthOfRectangle*widthOfRectangle}`);
console.log(`Perimeter of rectangle : ${(lengthOfRectangle+widthOfRectangle)*2}`);

// 17. Get the radius   calculate the area and circumference of a circle.
let radius = parseFloat(prompt('Enter radius of circle : '));
console.log(`Area of circle : ${(3.14*radius*radius).toFixed(2)}`);

// 22. Compare the length of your first name and your family name.
firstName = "Ganesh";
let familyName = "Dhage";
if (firstName.length > familyName.length) {
  console.log("first name has more length");
} else {
  console.log("Familt naame has more length");
}

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge = 75;
let yourAge = 64;
let ageGap;
myAge >= yourAge ? (ageGap = myAge - yourAge) : (ageGap = yourAge - myAge);
console.log(`Age gap is : ${ageGap}`);

// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.
let currentAge = 24;
currentAge >= 18
  ? console.log(`old enough to drive`)
  : console.log(`Not old enough to drive`);

//25  using ternary opertor check number is even or odd
let num1 = 24;
num1 % 2 === 0 ? console.log(`${num1} is even`) : console.log(`${num1} is odd`);
