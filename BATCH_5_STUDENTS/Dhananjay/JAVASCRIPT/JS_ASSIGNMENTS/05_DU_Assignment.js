// 1. Write a program to generate a random number between 50 and 100 (inclusive).
// -----------------------------------------------------
let minNum = 50
let maxNum = 100
let randomNum = Math.floor(Math.random()*(maxNum-minNum)+minNum)
console.log(randomNum)

// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.

let floatnum = 45.6789
console.log(floatnum.toFixed(2))

// 3. Create a program to roll two dice (1–6 each) and print their sum.

const dice1 = Math.floor(Math.random()*6)+1
const dice2 = Math.floor(Math.random()*6)+1
console.log(dice1,dice2)

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
let Roundnum = 47
let Roundnum1 = 123
let Roundnum2 = 456

console.log(Math.round(Roundnum/10)*10)
console.log(Math.round(Roundnum1/10)*10)
console.log(Math.round(Roundnum2/10)*10)
/*Output
50
120
460*/ 


// 5. Generate a random 6-digit OTP using Math methods.

let OTP1 = Math.floor(Math.random()*(99999-10000+1)+100000)

console.log(OTP1)


// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"

let String = "JavaScript"

console.log(String[0])
console.log(String[String.length-1])

// 8. Write a program to count how many characters (excluding spaces) are in a string.

let characters = "Hi I Am Dhananjay Ugwekar"
console.log(characters.replaceAll(" ", "").length-1)
console.log(characters[characters.length-1])

let Question = "Write a program to count how many characters (excluding spaces) are in a string."
console.log(Question.replaceAll(" ", "").length-1)
console.log(Question[Question.length-1])

// 9. Concatenate first name, middle name, and last name using template literals and print it.
let firstName = "Dhananjay"
let middleName = "Shrikrushna"
let lastName = "Ugwekar"

console.log(firstName+" "+middleName +" "+lastName)

// 10. Write a program that takes a long sentence and prints it in uppercase.

let multilinecode = "My Name is Dhananjay Ugwekar and I am Currently working in \
Yethi Consulting PVT. LTD. I have 5+ Years of experiance."
console.log(multilinecode. toUpperCase())

// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
let Extraspace = "  Hi I Am Dhananjay Ugwekar   "
console.log(Extraspace.trim())

// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
let Quest = "I am learning JavaScript by self study"
console.log(Quest.includes("JavaScript"))

let Quest1 = "I am learning Python by self study"
console.log(Quest1.includes("JavaScript"))
/*Output - 
true
false*/

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
let Sent = "This is a bad idea"
console.log(Sent.replace("bad", "good"))
//Output - This is a good idea

// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
let Paragraph = `Apple is a sweet and juicy fruit that grows on trees, and people \ 
all over the world love to eat Apple because Apple is healthy and 
delicious, so doctors always say eat an Apple every day to stay 
fit, and my favourite fruit is also Apple because Apple gives us 
energy and keeps us strong.`

console.log(Paragraph.replaceAll("Apple", "Mango"))

/* Output - 
Mango is a sweet and juicy fruit that grows on trees, and people
all over the world love to eat Mango because Mango is healthy and
delicious, so doctors always say eat an Mango every day to stay
fit, and my favourite fruit is also Mango because Mango gives us
energy and keeps us strong.*/

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
let colors = "red\ngreen\nblue\nyellow"

console.log(colors)

/* Output - 
red
green
blue
yellow*/

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
let Findindex = "I am learning JavaScript by self study at Pune"

console.log(Findindex.indexOf("a"))
console.log(Findindex.lastIndexOf("a"))

/* Outut - 
2
39*/

// 17. Extract the substring "Script" from the string "JavaScript" using substring().

let string = "JavaScript"
console.log(string.indexOf("S"), string.lastIndexOf("t"))
console.log(string.substring(string.indexOf("S"), string.lastIndexOf("t") + 1))

// 18. Extract the first 4 characters of the string "Programming" using substr().
let char = "Programming"
console.log(char.substr(0, 4));

// 19. Write a program that takes two strings and joins them using concat().
let string1 = "My Full Name is Dhananjay"
let string2 = "Shrikrushna Ugwekar"

console.log(string1.concat(" ",string2))

// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.

let random = Math.random() * 100

console.log("Random:", random, "Ceil:", Math.ceil(random), "Floor:", Math.floor(random))


// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length)

// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2[str2.length-1])

// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log(str3.toUpperCase())

// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
console.log(str4.includes("code")) // Output - false

// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log(str5.trim())


// ===============================
// Tough and Advanced Questions
// ===============================

// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
console.log(str6.substr(0, 5))

// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = `Cypress \nis \nfun`;
console.log(str7)

// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replaceAll("banana", "pineapple"))

// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase())

// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(str10[4])

// 11. Write a check for a string and return true if it includes the word "API".
let str15 = "We are learning API Testing";
console.log(str15.includes("API")) // true

let str16 = "We are learning Autoation Testing";
console.log(str16.includes("API")) // false

// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing"
console.log(str12.substring(str12.length-4, str12.length))

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
console.log(str13.trim().toLowerCase())

// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace("test", "exam"))
// output - exam your code with a test case