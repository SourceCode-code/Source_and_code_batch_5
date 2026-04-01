/** 
 * ASSIGNMENT 6 & 7 QUESTIONS 
 */

// 1. Check if the type of '10' is exactly equal to 10. If not, convert '10' to a number and check again.
let strTen = '10';
let numTen = 10;
console.log(strTen===numTen)
console.log(Number(strTen)===numTen)

// 2. Check if parseFloat('9.8') is equal to 10. If not, round it to make it equal to 10.
let parseNum= '9.8'
console.log(parseFloat(parseNum)===10)
let round= Math.round(parseFloat(parseNum))
console.log(round)
console.log(round===10)

// 3. Check if 'on' is found in both 'python' and 'jargon'.
let word1 = 'python';
let word2 = 'jargon';
let onInclude= word1.includes("on") && word2.includes("on")
console.log(onInclude)

// 4. Check if the word 'jargon' is found in the sentence: "I hope this course is not full of jargon."
let sentence = "I hope this course is not full of jargon.";
let wordInclude= sentence.includes('jargon')
console.log(wordInclude)

// 5. Use `substr` to slice out the phrase 'because because because' from the following sentence:
// "You cannot end a sentence with because because because is a conjunction."
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';
let longSentence1= longSentence.indexOf("because") 
console.log(longSentence1)
let sliceOut= longSentence.substr(longSentence1 , 23)
console.log(sliceOut)

// 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.
let firstName= "Ankita"
let lastName= "Fartade"
let country= "India"
let city= "Dharashiv"
let age= 23
let isMarried= false
let year= "2026"
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)





// 7. Check if the type of '10' is equal to 10 using `parseInt`.
let num= 10
let str= '10'
console.log(parseInt(str)=== num)

// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.
console.log(Boolean("Fartade"))
console.log(Boolean(1))
console.log(Boolean('false'))

// 9. Write three JavaScript statements that provide falsy values.
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(''))

// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
//write the output in the comments 
console.log(4 > 3);  //true         
console.log(4 >= 3);  //true           
console.log(4 < 3);    //false         
console.log(4 <= 3);    //false       
console.log(4 == 4);      //true      
console.log(4 === 4);    //true       
console.log(4 != 4);     //false      
console.log(4 !== 4);      //false     
console.log(4 != '4');     // false    
console.log(4 == '4');   //true        
console.log(4 === '4');   //false    

// 11. Find the length of the words 'python' and 'jargon' and make a falsy comparison statement.
let wordd= 'python'
let worrd= 'jargon'
console.log(wordd.length , worrd.length)
let charInclude= wordd.length !== worrd.length
console.log(charInclude)

// 12. Evaluate the following expressions and confirm with `console.log()`:
//write the output in the comments 
console.log(4 > 3 && 10 < 12);   //true
console.log(4 > 3 && 10 > 12);   //false
console.log(4 > 3 || 10 < 12);   //true
console.log(4 > 3 || 10 > 12);   //true
console.log(!(4 > 3));   //false       
console.log(!(4 < 3));    //   true    
console.log(!(false));     //true      
console.log(!(4 > 3 && 10 < 12));  //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4'));  //true      

// 13. Check if there is no 'on' in both 'dragon' and 'python'.
let dragon = 'dragon';
let pyThon= 'python'
let notInclude= !dragon.includes("on") && !pyThon.includes("on")
console.log(notInclude)

// 14. Write a script  the user to enter the base and height of a triangle, then calculate its area.
let base= 10
let height= 25
let area= 0.5*base*height
console.log("Area of Triangle=", area)

// 15. Write a script that the user to enter sides a, b, and c of a triangle, then calculate its perimeter.
let a= 10
let b= 13
let c= 10
console.log("Perimeter of Triangle=", a+b+c)

// 16. Calculate the area and perimeter of a rectangle, prompting for length and width.
let length= 58
let width= 24
console.log("Perimeter of Rectangle=", 2*(length+width))
console.log("Area of Rectangle=", length * width)

// 17. Get the radius   calculate the area and circumference of a circle.
let radius= 8
let area1= Math.PI*radius*radius
console.log("Area of circle= ",area1)
let circumference= 2*Math.PI*radius
console.log("Circumference of Circle=", circumference)

// 22. Compare the length of your first name and your family name.
let firstName1= "Ankita"
let lastName1= "Fartade"
console.log(firstName1.length === lastName1.length)

// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.
let myAge= 23
let yourAge= 26
console.log("Age Differenec=", myAge-yourAge)

// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.
let driverAge= 23
let drive= (driverAge>18)? "Yes you can drive." : "No you cannot drive"
console.log(drive)

//25  using ternary opertor check number is even or odd
let numOddEven= 8080
let checkNum= (numOddEven%2===0)? "Even Number" : "Odd Number"
console.log(checkNum)