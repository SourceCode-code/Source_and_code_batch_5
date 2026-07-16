// ===============================
// Assignment Questions
// ===============================

// 1. Write a program to generate a random number between 50 and 100 (inclusive).
// -----------------------------------------------------
let minNum = 50
let maxNum = 100
let randomNum = Math.floor(Math.random()*(maxNum-minNum)+minNum)
console.log(randomNum)
// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
// -----------------------------------------------------
let fnum = 45.6789
console.log(fnum.toFixed(2))

// 3. Create a program to roll two dice (1–6 each) and print their sum.
// -----------------------------------------------------
dice1 = Math.floor(Math.random()* (6 - 1 + 1)) + 1
dice2 = Math.floor(Math.random()* (6 - 1 + 1)) + 1

console.log("Dice 1 ",dice1,"Dice 2",dice2)
console.log("Addition of two dice numbers: ",dice1+dice2)
// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
// -----------------------------------------------------
num = 54
console.log(Math.round(num/10)*10)

// 5. Generate a random 6-digit OTP using Math methods.
// -----------------------------------------------------
console.log("Your six Digit OTP is: ",Math.floor(Math.random()* (999999 - 100000) + 1) + 100000)

// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
// -----------------------------------------------------
let js = "Javascript"
console.log(js[0])
console.log(js[js.length-1])
// 8. Write a program to count how many characters (excluding spaces) are in a string.
// -----------------------------------------------------
str = "Anurag Prasahnt Rasane"
rmspace_str = str.replaceAll(" ","")
console.log(rmspace_str.length)
// 9. Concatenate first name, middle name, and last name using template literals and print it.
// -----------------------------------------------------
let fName = "Anurag"
let mName = "Prashant"
let lName = "Rasane"
console.log(`${fName} ${mName} ${lName}`)
// 10. Write a program that takes a long sentence and prints it in uppercase.
// -----------------------------------------------------
let sentence = "Anurag is really a good boy,He help other's and also smart and handsome"
console.log(sentence.toUpperCase())
// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
// -----------------------------------------------------
let spstring = "   john debh  "
console.log(spstring.trim())
// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
// -----------------------------------------------------
let string = "With the help of Javascript we can manipulate HTML and CSS to create dynamic content"
console.log(string.includes("Javascript"))
// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
// -----------------------------------------------------
let stringexample = "this is a bad idea"
let modstring = stringexample.replace("bad","Good")
console.log(modstring)
// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
// -----------------------------------------------------
string = "this is apple,in fruits apple is one of the most trending fruit"
let newstring = string.replaceAll("apple","mango")
console.log(newstring)
// 5. Split the string "red,green,blue,yellow" into an array and print each color separately.
// -----------------------------------------------------
let color = "red,green,blue,yellow"
console.log(color.split(","))
// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
// -----------------------------------------------------
let para = "there was a tree,which was standing in a desert,that tree did not had any shadow"
console.log(para.indexOf("a"))
console.log(para.lastIndexOf("a"))

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
// -----------------------------------------------------
js = "JavaScript"
console.log(js.substring(5,js.length))
// 18. Extract the first 4 characters of the string "Programming" using substr().
// -----------------------------------------------------
let p = "Programming"
console.log(p.substr(0,4))
// 19. Write a program that takes two strings and joins them using concat().
// -----------------------------------------------------
let string1 = "Have"
let string2 = "Fun"
let string3 = "make it worth"
console.log(string1.concat(string2))
console.log(string1.concat(string2,string3))
// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
// -----------------------------------------------------
let rand = Math.random() * 100
console.log(Math.ceil(rand))
console.log(Math.floor(rand))

// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log("Length of the string is: ",str1.length)
// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
let auto = "automation"
console.log(auto[auto.length - 1])
// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log(str3.toUpperCase())
// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
console.log(str4.includes("code"))
// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log(str5.trim())

// ===============================
// Tough and Advanced Questions
// ===============================

// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
console.log(str6.substr(0,5))
// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
console.log(str7.split(" "))
// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replaceAll("banana","pineapple"))
// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase())
// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(str10[4])
// 11. Write a check for a string and return true if it includes the word "API".
// -----------------------------------------------------

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(str12.slice(-4))
// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLowerCase().trim())
// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace("test","exam"))
