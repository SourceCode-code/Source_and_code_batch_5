// ===============================
// Assignment Questions
// ===============================

// 1. Write a program to generate a random number between 50 and 100 (inclusive).
// -----------------------------------------------------
let minNum = 50
let maxNum = 100
let randomNum = Math.floor(Math.random()*(maxNum-minNum+1)+minNum)
console.log(randomNum)
// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
let number =45.6789
console.log(number.toFixed(2))//ans=45.68
// -----------------------------------------------------

// 3. Create a program to roll two dice (1–6 each) and print their sum.
//formula to get numbers between 1 to N
//formula=Math.floor(Math.random()*N)+1
let dice1=Math.floor(Math.random()*6)+1
let dice2=Math.floor(Math.random()*6)+1
console.log("addition" ,dice1+dice2)
// -----------------------------------------------------

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
let input_num=47
console.log(Math.round(input_num/10)*10)
let input_num2=123
console.log(Math.round(input_num2/10)*10)
// -----------------------------------------------------

// 5. Generate a random 6-digit OTP using Math methods.
//here we need to generate 6 digit number min 100000 ,max 999999
const min =100000
const max=999999
const otp=Math.floor(Math.random()*(max-min+1)+min)
console.log(otp)
// -----------------------------------------------------


// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
let string_="JavaScript"
console.log(string_.charAt(0))
console.log(string_.charAt(string_.length-1))//last charector index will be (string lenght -1)
// -----------------------------------------------------

// 8. Write a program to count how many characters (excluding spaces) are in a string.
let newString="i am learning java"
let stringwithoutSpace=newString.replaceAll(" ","")
console.log(stringwithoutSpace)
console.log(stringwithoutSpace.length)

// -----------------------------------------------------

// 9. Concatenate first name, middle name, and last name using template literals and print it.
let firstnm="Aashiya"
let middlenm="D"
let lastnm="khan"
console.log(`${firstnm} ${middlenm} ${lastnm}`)
// -----------------------------------------------------

// 10. Write a program that takes a long sentence and prints it in uppercase.
let longString="hhhhhhhhhhhhhaaaa\
jjjjjjjjjj"
console.log(longString.toUpperCase())
// -----------------------------------------------------

// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
let str=" Aashiya "
console.log(str.trim())
// -----------------------------------------------------

// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
let str1_="i am learning JavaScript"
console.log(str1_.includes("JavaScript"))
// -----------------------------------------------------

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
let idea="This is a bad idea"
console.log(idea.replace("bad","good"))
// -----------------------------------------------------

// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
let apple="i love apple ,apple is good for health"
console.log(apple.replaceAll("apple","mango"))
// -----------------------------------------------------

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
// -----------------------------------------------------

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
let st="aashiya"
console.log(st.indexOf("a"))//first index of a
console.log(st.lastIndexOf("a"))//last index of a
// -----------------------------------------------------

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
let javascrpt="JavaScript"
console.log(javascrpt.substring(4,10))
// -----------------------------------------------------

// 18. Extract the first 4 characters of the string "Programming" using substr().
let programming="Programming"
console.log(programming.substr(0,4))
// -----------------------------------------------------

// 19. Write a program that takes two strings and joins them using concat().
let string1="aashiya"
let string2="khan"
console.log(string1.concat(string2))
// -----------------------------------------------------

// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
let randomNum_=Math.random()*10//0 to 9.9
console.log(Math.ceil(randomNum_))
console.log(Math.floor(randomNum_))

// -----------------------------------------------------


// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length)

// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2.charAt(str2.length-1))

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
console.log(str6.substr(0,4))

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";

// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replaceAll("banana","pineapple"))

// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(str10.charAt(4))//t

// 11. Write a check for a string and return true if it includes the word "API".
let str15="API testing is interesting"
console.log(str15.includes("API"))
// -----------------------------------------------------

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(str12.substring(str12.length-4,str12.length))

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLowerCase().trim())

// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace("test","exam"))