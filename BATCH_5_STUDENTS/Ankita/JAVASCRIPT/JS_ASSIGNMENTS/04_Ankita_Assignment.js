// Simple Session Assignments:

// 1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let str="Hello World"
console.log(typeof str)

// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let price= 199.99
console.log(Math.ceil(price))

// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let fullName= 'Ankita Hanumant Fartade'
console.log(fullName.length)

// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let firstname= 'Ankita'
let middleName= 'Hanumant'
let lastName= 'Fartade'
console.log(firstname+" "+middleName+" "+lastName)
console.log(`${firstname} ${middleName} ${lastName}`)

// 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language= 'JavaScript'
console.log(language[4])

// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.

let strr= "qwertyuioplkajsjsdgfnmxcbxzvbshafiulawe\nfnsdjkvbakwusydvasjdvkuayhgkuvsdkncbzskv\nAKLekjhdljkcsdhvbNScBSDVhkga\nDJlnaksncjsdbvhdkasjhlifurygvfhbjkandsliuahwsfiuawhriygfakjsdv\nbjufgkhefskdjbavskuydfhslzjdknc,mzvbAJHgliaweyrowai"
console.log(strr)



// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!
let str_1="I am learning JavaScript.\nIt's \"fun\" to learn JavaScript!"
console.log(str_1)

// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount= 45.85
console.log(Math.ceil(amount))
console.log(Math.floor(amount))
console.log(Math.round(amount))

// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote= "Learning JavaScript is awesome!"
console.log(quote.length)

// 12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let str_01='Hello,\t World!'
console.log(str_01)

// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';
console.log(str1+" "+str2)
console.log(`${str1} ${str2}`)

// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let strr1= "qwertyuiopasdfghjklzxcvbnm"
let newStr=Math.floor(Math.random()*strr1.length)
let randomStrr1= strr1[newStr]
console.log(newStr, randomStrr1)