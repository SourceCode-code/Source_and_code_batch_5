// ===============================
// Assignment Questions
// ===============================

//1. Write a program to generate a random number between 50 and 100 (inclusive).

let minNum = 50
let maxNum = 100
let randomNum = Math.floor(Math.random()*(maxNum-minNum+1)+minNum)
console.log(randomNum)

// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
// -----------------------------------------------------
let floatNum= 45.6789
let newNum=floatNum.toFixed(2)
console.log(newNum)

// 3. Create a program to roll two dice (1–6 each) and print their sum.
// -----------------------------------------------------
let rollDice1= Math.floor(Math.random()*6)+1
let rollDice2= Math.floor(Math.random()*6)+1
console.log(rollDice1+rollDice2)

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
// -----------------------------------------------------
let num= 50
let newNum1=Math.round(num/10)*10
console.log("Multiple of 10=",newNum1)

// 5. Generate a random 6-digit OTP using Math methods.
// -----------------------------------------------------
let OTP = Math.floor(Math.random() * 900000) + 100000
console.log(OTP)

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"

let str= "JavaScript"
let newStr= str[str.length-1]
console.log("Last Character=",newStr)
console.log("First Character=",str[0])

// 8. Write a program to count how many characters (excluding spaces) are in a string.
let fullName= 'Ankita Hanumant Fartade'
let count= fullName.replaceAll(" ","").length
console.log("Character Count=", count)

// 9. Concatenate first name, middle name, and last name using template literals and print it.
let firstName= 'Ankita'
let middleName= 'Hanumant'
let lastName= 'Fartade'
console.log(`${firstName} ${middleName} ${lastName}`)

// 10. Write a program that takes a long sentence and prints it in uppercase.
let sentence= "Hi my name is Ankita Hnaumant Fartade"
console.log(sentence.toUpperCase())

// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
let str_01 = "               I'm learning JavaScript     "
console.log(str_01.trim())

// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
let str_02= "Learning JavaScript"
let newStr2= str_02.includes("JavaScript") 
console.log(newStr2)

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
let str_03 = "This is a bad idea"
let newStr3= str_03.replace("bad" , "good")
console.log(newStr3)

// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
let str_04= 'apple banana banana apple apple app mango mango'
let newStr4= str_04.replaceAll("apple","mango")
console.log(newStr4)

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
let str_05= "red,green,blue,yellow"
let newStr5= str_05.split(",")
console.log(newStr5)

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
let str_06= "JavaScript"
let newStr6= str_06.indexOf("a")
let newStrr= str_06.lastIndexOf("a")
console.log(newStr6, newStrr)

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
let str_07= "JavaScript" 
let newStr7= str_07.substring(4,10)
console.log(newStr7)

// 18. Extract the first 4 characters of the string "Programming" using substr().
// -----------------------------------------------------
let str_08= "Programming"
let newStr8= str_08.substr(0, 4)
console.log(newStr8)

// 19. Write a program that takes two strings and joins them using concat().
// -----------------------------------------------------
let firstNamee= "Akash"
let lastNamee= "Fartade"
console.log(firstNamee+" "+lastNamee)

// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
// -----------------------------------------------------
let randomNumm= 98.78
let ceilNUm= Math.ceil(randomNumm)
let floorNum= Math.floor(randomNumm)
console.log(ceilNUm, floorNum)

// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length)

// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2[str2.length - 1])

// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log(str3.toUpperCase())

// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
let strr4= str4.includes("code")
console.log(strr4)

// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log(str5.trim())


// ===============================
// Tough and Advanced Questions
// ===============================

// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
let strr_06= str6.substr(0, 5)
console.log(strr_06)

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
let strr_07= str7.split(" ")
console.log(strr_07.join("\n"))

// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replaceAll("banana", "pineapple"))

// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
let newStr10= str10[4]
console.log(newStr10)

// 11. Write a check for a string and return true if it includes the word "API".
// -----------------------------------------------------
let strr = "API testing is important"
console.log(strr.includes("API"))

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
let newStr12= str12.slice(-4)
console.log(newStr12)

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
let newStr13= str13.toLowerCase()
console.log(newStr13.trim())

// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
let newStr14= str14.replace("test","exam")
console.log(newStr14)