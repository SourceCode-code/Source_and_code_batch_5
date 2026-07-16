// ==========================================
//   JavaScript Assignment - 30 Questions
//   Topics Covered: Comments, Variables, Data Types, Numbers, Strings, Methods
// ==========================================

// Q1. Write a single-line comment and a multi-line comment in JS.
//this is single line comment
/*
this is multiline comment
*/
// Q2. Print "Welcome to JavaScript Assignment" using console.log.
console.log("Welcome to JavaScript Assignment")
// Q3. Declare a variable using var, reassign it with a new value, and print both values.
var age = 25;
console.log(age);
var age = 24;
console.log(age)

// Q4. Declare a variable using let, update its value, and print it.
let name = "Anurag";
console.log(name)
name = "Sidhhant";
console.log(name);
// Q5. Declare a constant variable pi = 3.14 and try re-assigning it. Observe the error.
const pi = 3.14 
//TypeError: Assignment to constant variable.

// Q6. Declare 3 variables (firstName, middleName, lastName) and print your full name using:
//     a) + operator
//     b) template literal (backticks)
let firstName = "Anurag", middleName = "Prashant" , lastName = "Rasane"
console.log(firstName +" "+ middleName +" "+ lastName)
console.log(`${firstName} ${middleName} ${lastName}`);

// Q7. Create variables using valid names: city1, _city, $city and print them.
let city1 = "Pune"
let _city = "Mumbai"
let $city = "Banglore"
// Q8. Show with an example that variable names are case-sensitive in JavaScript.
let country = "India"
//console.log(Country);
//ReferenceError: Country is not defined
// Q9. Find the data type of the following using typeof operator:
//     25, "hello", true, undefined, null
console.log("Datatype of 25 is: ",typeof(25))
console.log("Datatype of \"hello\" is : ",typeof("Hello"))
console.log("Datatype of true is :",typeof(true))
console.log("Datatype of undefined null is : ",typeof(undefined))
console.log("Datatype of null is :",typeof(null))
// Q10. Write a program to declare a number and perform all arithmetic operations:
//      +, -, *, /, %
let num1 = 10
let num2 = 20
console.log("num1","+","num2","=",num1 + num2 )
console.log("num1","-","num2","=",num1 - num2 )
console.log("num1","*","num2","=",num1 * num2 )
console.log("num1","/","num2","=",num1 / num2 )
console.log("num1","%","num2","=",num1 % num2 )
// Q11. Round the number 10.99 down to nearest integer using Math.floor.

let number = 10.99
console.log(Math.floor(number))
// Q12. Round the number 10.01 up to nearest integer using Math.ceil.
let n = 10.01
console.log(Math.ceil(n))
// Q13. Round 10.05 and 10.99 using Math.round.
console.log(Math.round(number))
console.log(Math.round(n))
// Q14. Generate a random number between 0 and 1 using Math.random.
console.log(Math.round(Math.random()*1))
// Q15. Generate a random integer between 1 and 6 (simulate a dice roll).
console.log(Math.floor((Math.random() * 6 +1)))
// Q16. Generate a random number between 10 and 20.
console.log(Math.floor((Math.random() * 6 +1)))
// Q17. Write a program that rounds any given number to the nearest multiple of 5.
// Example: 28 → 30, 32 → 30
num1 = 47
roundnum =
console.log((Math.round(num1/5) * 5))
// Q18. Generate a random 4-digit OTP number between 1000 and 9999.
console.log("Your OTP is :",Math.floor(Math.random()*(9999 - 1000))+1000)
// Q19. Generate a random Aadhaar-like 12-digit number (using Math.random).
digit1= (Math.floor(Math.random()*(9999 - 1000))+ 1000)
digit2= (Math.floor(Math.random()*(9999 - 1000))+ 1000)
digit3= (Math.floor(Math.random()*(9999 - 1000))+ 1000)
digit4= (Math.floor(Math.random()*(9999 - 1000))+ 1000)
console.log("Random Adhar NUmber :",digit1,digit2,digit3,digit4)
// Q20. Create a string "Siddhant Arjun Gadakh". Print:
//      a) length of the string
//      b) first character
//      c) last character
String1 = "Sidhhant Arjun Gadakh"
console.log("length of the string is :",String1.length,"\n First Character of a String is:",String1[0])
// Q21. Write a program to print "Siddhant\nArjun\nGadakh" using escape characters.
console.log("Siddhant\nArjun\nGadakh")
console.log("Printing Escape sequence itself")
console.log("Siddhant\\nArjun\\nGadakh")
// Q22. Create a string: "my name is 'Siddhant'". Print it using escape characters properly.
console.log("my name is \'Siddhant\'")
// Q23. Convert "javascript" into UPPERCASE using string method.
strName = "javascript"
console.log("String in Upper Case :",strName.toUpperCase())
// Q24. Convert "HELLO WORLD" into lowercase using string method.
console.log("String in Lower Case :",strName.toLowerCase())
// Q25. Use method chaining: Convert "hello world" to uppercase, then back to lowercase, and print the length.
console.log("Hello World".toUpperCase().toLowerCase().length)
// Q26. Extract "Siddhant" from "Siddhant Arjun Gadakh" using substr() method.
fullName = "Sidhhant Arjun Gadakh"
console.log(fullName.substr(0,8))
// Q27. Extract "Arjun" from "Siddhant Arjun Gadakh" using substring() method.
console.log(fullName.substring(9,14))
// Q28. Split the string "I love JavaScript" into an array by spaces.
js_str = "I love javascript"
console.log("String split by spaces and turned into array of elements which were seperated by space:",js_str.split(" "))
// Q29. Split the string "banana" into parts wherever "a" occurs.
bn_str = "banana"
console.log(bn_str.split("a"))
// Q30. Write a program that prints your full name in camelCase variable name.
// Example: let siddhantArjunGadakh = "Your Name";

anuragPrashantRasane = "Anurag Prasahnt Rasane"


// Q31. Generate a random integer between 50 and 100.
min = 50
max = 100
console.log(Math.floor(Math.random()* (max - min))+min)
// Q32. Generate a random integer between -20 and -10.
minimum = -20
maximum = -10
console.log(Math.floor(Math.random()* (maximum - minimum)) + minimum)
// Q33. Write a function that simulates tossing a coin (should print either "Heads" or "Tails").

// Q34. Generate a random integer between 100 and 999 (3-digit number).
console.log("3 Digit Random Number",Math.floor(Math.random() * (999 - 100)) + 100)
// Q36. Generate a random number between 1 and 100 and check if it is even or odd.

// Q37. Generate 5 random numbers between 1 and 10 
console.log("Random Number Between 1 to 10:",Math.floor(Math.random() * (10 - 1)) + 1)
// Q38. Create a random password of 8 characters using letters and numbers (hint: use Math.random and string methods).
