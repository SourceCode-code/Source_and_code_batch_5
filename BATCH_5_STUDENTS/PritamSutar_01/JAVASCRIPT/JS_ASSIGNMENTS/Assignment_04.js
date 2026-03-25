// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting ="Hello World"

console.log(typeof(greeting))

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.

let price = 199.99

console.log(Math.ceil(price))


// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
  let name ="Pritam Balaso Sutar"
  console.log( name.length)


// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.

let fName="Pritam"
let mName="Balaso"
let lName="Sutar"

console.log(fName+mName+lName)

console.log(fName+" "+mName+" "+lName)

console.log("My name is "+fName+" "+mName+" "+lName)

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.

let language = "JavaScript"

console.log(language[4])
console.log(language[language.length-1])

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.

let long_string = "aqwedrftgyhhhhhhhhhhhhhhhhhh\
hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\
hhaeteaeaeaeaeateateatteateateat\
eateateateattet"

console.log(long_string)

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!
let line1="I am learning JavaScript"
let line2="It's fun to learn JavaScript!"
console.log("I\nam\nlearning\nJavaScript\nIt's fun to learn\nJavaScript")
//console.log((line1)"\n"(line2)) -----> How to get output with \n for declared string

// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount = 45.85
console.log(Math.floor(amount))
console.log(Math.ceil(amount))
console.log(Math.round(amount))

// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote="Learning JavaScript is awesome!"

console.log(quote.length)
console.log(quote[quote.length-1])

// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let strn="Hello, World!"

console.log("Hello,\nWorld!")

console.log('\'Hello, World!\'')
console.log("\"Hello, World!\"")

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
console.log(str1+str2)
console.log(`${str1}${str2}`)

console.log(`${str1} ${str2}`)

// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.

let longString="qwertyuiopasdfghjklzxcvbnm"


