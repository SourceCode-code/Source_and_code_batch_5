//============================
// Simple Session Assignments:
//============================

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.

let greeting = "Hello World!"
console.log(greeting)       //output==> Hello World!
console.log(typeof greeting)//output==> string



// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.

let price = 199.99;
console.log(Math.ceil(price)) //output==> 200



// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.

let  name = "Shivani anil kshirsagar"
console.log(name.length) //output==> 23



// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.

let firstName = "shivani"
let middleName = "mankeshwar"
let lastName = "sarkale"
// using + operator
let fullName1 = firstName +" "+ middleName +" "+ lastName
// using template literals
let fullName2 = `${firstName} ${middleName} ${lastName}`
console.log(fullName1) //output==> shivani mankeshwar sarkale
console.log(fullName2) //output==> shivani mankeshwar sarkale



// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.

let language = 'JavaScripts'
console.log(language[4]) //output ==> S



//=====================================
// Advanced Session Assignments:
//=====================================

// 7. Create a long literal string that spans multiple lines and log it.

let long_string = "abcdefghijklmanopqrstuvwxyz\
1234567890"
console.log(long_string) //output ==> abcdefghijklmanopqrstuvwxyz1234567890



// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!

let escape_string = "I am learning JavaScripts.\nIt's \"fun\" to learn Javascripts!"
console.log(escape_string) /*output==> I am learning JavaScripts.
                                       It's "fun" to learn Javascripts!*/



// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.

let amount = 45.85
console.log(Math.floor(amount))//output ==>45
console.log(Math.ceil(amount))//output ==>46
console.log(Math.round(amount))//output ==>46



// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.

let quote = "Learning JavaScript is awesome!"
console.log(quote.length)//output ==>31
console.log(quote.indexOf('J')) //output ==>9



// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.

let str = 'Hello,\tWorld!'
console.log(str) // output ==> Hello,  World!

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';

//using + operator
let small1 = str1 + str2
//using template literals
let small2 = `${str1}${str2}`
console.log(small1) //output ==> abcdef
console.log(small2) //output ==> abcdef


// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let random_string = "qwertyuiopasdfghjklzxcvbnm"
let random_index = Math.floor(Math.random() * random_string.length)
let random_element = random_string[random_index]
console.log(random_element) //output ==>  t (random character from the string)