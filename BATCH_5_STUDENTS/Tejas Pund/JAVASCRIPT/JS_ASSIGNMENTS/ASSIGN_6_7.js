// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10'
let numTen = 10
    console.log(strTen===numTen)
    console.log(Number(strTen)===(numTen))
    
// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
    let num1 = '9.8'
    console.log(parseFloat(num1)===10)
    console.log(Math.round(num1)===10)

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
    console.log(word1.includes("on") && word2.includes("on"))

// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
    console.log(sentence.includes("jargon"))

// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
    console.log(longSentence.substr(0,31))
// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
    let firstName = "Tejas"
    let lastName = "Pund"
    let country = "India"
    let city = "Sangamner"
    let age = 30
    let isMarried = "yes"
    let year = 2026
    console.log(typeof(firstName))
    console.log(typeof(lastName))
    console.log(typeof(country))
    console.log(typeof(city))
    console.log(typeof(age))
    console.log(typeof(isMarried))
    console.log(typeof(year))

// 7. Check if the type of '10' is equal to 10 using `parseInt`.
    let num2 = '10'
    console.log(parseInt(num2)===10)

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
    let x = "hello"
    console.log(x.includes("hell"))
    console.log(55 === 55)
    console.log(55 > 45)
// 9. Write three JavaScript statements that provide falsy values.
    console.log(x.includes("xyz"))
    console.log(55 === 65)
    console.log(55 > 65)
// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3);         // True          
console.log(4 >= 3);        // True     
console.log(4 < 3);         // False    
console.log(4 <= 3);        // False     
console.log(4 == 4);        // True   
console.log(4 === 4);       // True    
console.log(4 != 4);        // False    
console.log(4 !== 4);       // False     
console.log(4 != '4');      // False     
console.log(4 == '4');      // True     
console.log(4 === '4');     // False     

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
    let y = "python"
    let z = "jargon"
    console.log(y === z)
// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12);   // True
console.log(4 > 3 && 10 > 12);   // False
console.log(4 > 3 || 10 < 12);   // True
console.log(4 > 3 || 10 > 12);   // True
console.log(!(4 > 3));           // False
console.log(!(4 < 3));           // True
console.log(!(false));           // True
console.log(!(4 > 3 && 10 < 12)); //False
console.log(!(4 > 3 && 10 > 12)); //True
console.log(!(4 === '4'));        //True

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon'
let python = 'python'
    console.log(dragon.includes("on") && python.includes("on"))
// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
    let base = 4
    let height = 6
    console.log(0.5*base*height)
// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
    let a = 3
    let b = 4
    let c = 5
    console.log(a+b+c)
// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
    let length1 = 10
    let breadth = 8
    console.log("Area of rectangle is" , length1 * breadth)
    console.log("Perimeter of rectangle is" , 2 * (length1+breadth))
// 17. Get the radius   calculate the area and circumference of a circle.
    let r = 4
     console.log("Area of circle is" , Math.PI*r*r)
     console.log("Circumference of circle is" , 2 * Math.PI * r)
// 22. Compare the length of your first name and your family name.
    let firstname = "Tejas"
    let familyName = "Pund"
    console.log(firstname.length == familyName.length)
// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
    let myAge = 30
    let yourAge = 25
    console.log(myAge-yourAge)
// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.
    let yourage = 30
    let w = (yourage>18)? "You are old enough to drive" : "You are not old enough to drive"
    console.log(w)
//25  using ternary opertor check number is even or odd
    let u = 5
    let checknum = (u % 2 === 0)? "Number is even" : "Number is odd"
    console.log(checknum)