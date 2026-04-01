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
let weight = 75.654;
console.log(weight.toFixed(2));

// 3. Create a program to roll two dice (1–6 each) and print their sum.
// -----------------------------------------------------
let dice1 = Math.ceil(Math.random()*6);
let dice2 = Math.ceil(Math.random()*6);
console.log(dice1+dice2);

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
// -----------------------------------------------------
let randomNumber = 47;
console.log(Math.round(randomNumber/10)*10);

// 5. Generate a random 6-digit OTP using Math methods.
// -----------------------------------------------------
console.log(Math.floor(Math.random()*(999999-100000)+100000+1));

// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
// -----------------------------------------------------
let givenString = "JavaScript";
console.log(givenString[0]);
console.log(givenString[givenString.length-1]);

// 8. Write a program to count how many characters (excluding spaces) are in a string.
// -----------------------------------------------------
let randomString = " thisis a random  string hich has   lot of spaces   s   ";
console.log(randomString.trim().replaceAll(" ","").length);

// 9. Concatenate first name, middle name, and last name using template literals and print it.
// -----------------------------------------------------
let firstName = "Ganesh"
let middleName = "Ramling"
let lastName = "Dhage"
console.log(`${firstName} ${middleName} ${lastName}`);

// 10. Write a program that takes a long sentence and prints it in uppercase.
// -----------------------------------------------------
let longString = " this a very very long \
string for the assignment";
console.log(longString.toUpperCase());

// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
// -----------------------------------------------------
let stringWithSpaces = "                a string containing lot so spaces            "
console.log(stringWithSpaces.trimStart().trimEnd());

// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
// -----------------------------------------------------
let testString = " JavaScript is beginner friendlt language";
let testString2 = "java is scripting launage";
console.log(testString.includes("JavaScript"));
console.log(testString2.includes("JavaScript"));

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
// -----------------------------------------------------
let exampleString = "This is a bad idea";
console.log(exampleString.replace("bad","good"));

// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
// -----------------------------------------------------
let replaceAllExample = " capturing apple photo from apple device which has apple red color";
console.log(replaceAllExample.replaceAll("apple","Mango"));

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
// -----------------------------------------------------
let colorString = "red,green,blue,yellow";
let colorArray = colorString.split(",");
console.log(colorArray[0]);
console.log(colorArray[1]);
console.log(colorArray[2]);
console.log(colorArray[3]);

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
// -----------------------------------------------------
let string1 = " this a samplestring containing multiple letters";
console.log(`first index of \"a\" is ${string1.indexOf("a")} \nlast index of \"a\" is ${string1.lastIndexOf("a")} `);

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
// -----------------------------------------------------
let word = "JavaScript";
console.log(word.substring(word.indexOf("S"),word.length));

// 18. Extract the first 4 characters of the string "Programming" using substr().
// -----------------------------------------------------
let word2 = "Programming";
console.log(word2.substr(0,4));

// 19. Write a program that takes two strings and joins them using concat().
// -----------------------------------------------------
let string2 = "Jonathon"
let string3 ="Jostar"
console.log(string2.concat(" ",string3));

// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
// -----------------------------------------------------
randomNumber = Math.random()*100;
console.log(`Round up value = ${Math.ceil(randomNumber)}`);
console.log(`Round down value = ${Math.floor(randomNumber)}`);

// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length);

// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2[str2.length-1]);

// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log(str3.toUpperCase());

// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
console.log(str4.includes("code"));

// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log(str5.trim());

// ===============================
// Tough and Advanced Questions
// ===============================

// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
console.log(str6.substring(0,5));

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
let splitArray = str7.split(" ");
console.log(`${splitArray[0]}\n${splitArray[1]}\n${splitArray[2]}`);

// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replace("banana","pineapple"));

// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase());

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(str10.charAt(4));

// 11. Write a check for a string and return true if it includes the word "API".
// -----------------------------------------------------
let stt = "api tetsting is required for this job";
console.log(stt.includes("API"));

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(`last 4 chars of the given string are = ${str12.substring(str12.length-4,str12.length)}`);

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLowerCase().trim());

// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace("test","exam"));