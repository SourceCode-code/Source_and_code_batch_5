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
let num= 45.6789;
console.log(num.toFixed(2));

// 3. Create a program to roll two dice (1–6 each) and print their sum.
// -----------------------------------------------------
let dice1 = 2
let dice2 = 12
let sumDice = Math.floor(Math.random()*(dice2-dice1)+dice1);
console.log(sumDice)

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
// -----------------------------------------------------
let number=47;
console.log( Math.round(number / 10) * 10);
// 5. Generate a random 6-digit OTP using Math methods.
// -----------------------------------------------------
let startNum = 100000;
let endNum = 999999;
let randomOtp = Math.floor(Math.random()*(endNum-startNum)+startNum)
console.log(randomOtp);

// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
// -----------------------------------------------------
let datastr='JavaScript';
console.log(`string first char ${datastr[0]} and  string last char ${datastr[datastr.length-1]}`);


// 8. Write a program to count how many characters (excluding spaces) are in a string.
let strValue=' JavaScript';
console.log(`Length without remove space ${strValue.length} length after remove the length : ${strValue.trim().length}`);



// -----------------------------------------------------
// 9. Concatenate first name, middle name, and last name using template literals and print it.
let firstName='Shubham';
let middleName='K';
let lastName='Chaudhari';
console.log(`${firstName} ${middleName} ${lastName}`);

// -----------------------------------------------------
// 10. Write a program that takes a long sentence and prints it in uppercase.
// -----------------------------------------------------
console.log(datastr.toUpperCase());



// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
// -----------------------------------------------------
let datastr2=' JavaScript ';
console.log(datastr2.trim());
// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
// -----------------------------------------------------
let datastr3='JavaScript strnng java is string';
console.log(datastr3.includes("JavaScript"));


// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
// -----------------------------------------------------
let original_str='This is a bad idea';
console.log(`original string '${original_str}' and replaced string is '${original_str.replace('bad','good')}'`);


// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
// -----------------------------------------------------
let firstStr = "apple is good. apple is healthy. apple is sweet";
console.log(`original string '${firstStr}' and replaced string is '${firstStr.replaceAll("apple", "mango")}'`);


// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
// -----------------------------------------------------
let commonStr='red,green,blue,yellow';
let newStr = commonStr.split(",");

console.log(newStr[0]);
console.log(newStr[1]);
console.log(newStr[2]);
console.log(newStr[3]);

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
// -----------------------------------------------------
let str ="JavaScript";
let firstIndex = str.indexOf("a");
let lastIndex = str.lastIndexOf("a");

console.log(`First occurrence of a: ${firstIndex}, Last occurrence of a: ${lastIndex}`);

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
// -----------------------------------------------------
let str17='JavaScript';
console.log(` ${str17.substring(4,(str17.length))}`);

// 18. Extract the first 4 characters of the string "Programming" using substr().
// -----------------------------------------------------
let str18='Programming';
console.log(` ${str18.substr(0,4)}`);
// 19. Write a program that takes two strings and joins them using concat().
// -----------------------------------------------------
let string1='Java';
let string2='JavaScript';
console.log(` ${string1.concat(string2)}`);


// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
// -----------------------------------------------------
let randomNumber=Math.random();
console.log(`Use Math ceil for Randome generated Number: ${Math.ceil(randomNumber)}, Use Math floor for Randome generated Number: ${Math.floor(randomNumber)}`);

// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length);
// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log.apply(str2[str2.length-1])
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
console.log(str6.substr(0, 4))



// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
let stringWithoutSpace = str7.split(" ");

console.log(stringWithoutSpace[0]);
console.log(stringWithoutSpace[1]);
console.log(stringWithoutSpace[2]);


// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(`original string '${str8}' and replaced string is '${str8.replaceAll("banana", "pineapple")}'`);

// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(`5th character of  string '${str10[5]}'`);


// 11. Write a check for a string and return true if it includes the word "API".
// -----------------------------------------------------
let str11 = "This API Testing";
console.log(`is API includes in String  '${str11.includes("API")}'`);

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(`Last Four character of string   '${str12.slice(-4)}'`);

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.toLowerCase().trim());


// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace( "test" , "exam"));
