// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting= "Hello World"
console.log(typeof greeting)

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let price= 199.99
console.log(Math.ceil(price))

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let name = 'Ankita Hanumant Fartade'
console.log(name.length)

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let firstName="Ankita"
let middleName= "Hanumant"
let lastName= "Fartade"
console.log(firstName+" "+middleName+" "+lastName)
console.log(`${firstName} ${middleName} ${lastName}`)

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language= 'JavaScript'
console.log(language[4])

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.
let longStr= "jhbdscuyadchbdck\nauysdhfcguiawehd\ncbavkdufcahweilducf\nhskjdckjhgbsdckueagsdyhbaschv aygjckujabhcs\njhbsdhgvckaudycsbd ckjds"
console.log(longStr)

// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!
let sentence= "I am learning JavaScript.\nIt's \"fun\" to learn JavaScript!"
console.log(sentence)

// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount= 45.85
console.log(Math.floor(amount)) //45
console.log(Math.ceil(amount)) //46
console.log(Math.round(amount)) //46


// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote= "Learning JavaScript is awesome!"
console.log(quote.length)
console.log(quote.indexOf('J'))

// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let str= 'Hello, \tWorld!'
console.log(str)

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
console.log(str1+' '+str2)
console.log(`${str1} ${str2}`)

// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let str_1= "qwertyuiopasdfghjklzxcvbnm"
let newStr= Math.floor(Math.random()*str_1.length)
let newChar= str_1[newStr]
console.log(newStr, newChar)