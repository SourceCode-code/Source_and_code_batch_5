// Assignment =5

/* 1. Write a program to generate a random number between 50 and 100 (inclusive).

let minimum = 50;
let maximum = 100;

let randomNum = Math.floor(Math.random()*(maximum-minimum+1)+minimum)

console.log(randomNum);

output = 95 */

/* 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.

let num = 45.6789 ;

let rounded = num.toFixed(2);

console.log(rounded);

output = 45.68*/

// 3. Create a program to roll two dice (1–6 each) and print their sum.

let dice1 = Math.floor(Math.random()*6)+1;

let dice2 = Math.floor(Math.random()*6)+1;

let sum = dice1 + dice2 ;

console.log("dice1" ,dice2);
console.log("dice2" ,dice2);

console.log("sum",sum)

dice1 = 4
dice2 = 4
sum  = 5

/* 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120c

let num = 47;

let output = Math.round(num/10)*10;

console.log(output)

output = 47=50*/

/*Program of 123-120

let num = 123;

let output = Math.round(num/10)*10;

console.log(output)

output = 123=120 */

/* 5. Generate a random 6-digit OTP using Math methods.

let otp = Math.floor(100000 +Math.random()*900000);

console.log(otp)

otp = 893599*/

/* 7. Print the first and last character of a given string.

let str = "JavaScript";

let firstCharacter = str[0]
let lastCharacter =(str[str.length-1])

console.log("first",firstCharacter);
console.log("last",lastCharacter);

first =J 
last = t */

/* 8. Write a program to count how many characters (excluding spaces) are in a string.

let str = "hello world";

let count = str.replace(" " ).length 

console.log(count)*/


/* 9. Concatenate first name, middle name, and last name using template literals and print it.

let firstName = "Shweta";
let middleName = "Pralhad";
let lastName  = "Bholankar";

console.log(`${firstName} ${middleName} ${lastName}`)

output = Shweta Pralhad Bholankar */


/* 10. Write a program that takes a long sentence and prints it in uppercase.

let str = " i am learning toUpperCase method of string in javascript "

console.log(str.toUpperCase())

output = I AM LEARNING METHOD OF STRING IN JAVASCRIPT*/



/* 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.

let trim_ex = " hello "

console.log(trim_ex.length)

console.log(trim_ex.trim())

console.log(trim_ex.trim().length)

output = hello */


/* 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.

let str = "I am learning Javascript programming"

console.log(str.includes("Javascript"))

output = True*/


/* 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"

let str1 = "this is a bad idea"

 console.log(str1.replace("bad","good"))

 output = this is a good idea */


/* 14. Replace ALL occurrences of "apple" with "mango" in a given string.

let fruits = "apple"

console.log(fruits.replace("apple","mango"))

output = mango */


/* 15. Split the string "red,green,blue,yellow" into an array and print each color separately.

let colors = "red,green,blue,yellow"
let arr = colors.split(" , ")

arr.forEach(color => {console.log(color)})

output = red,green,blue,yellow */


/* 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".

let word = "javascript"

console.log("first index", word.indexOf("a"))

console.log("last index", word.indexOf("a"))

output = first index 1
       = last index 1 */


/* 17. Extract the substring "Script" from the string "JavaScript" using substring().

 let SUB_STRING = "javasript"

 let SUB_STRING_EX = SUB_STRING.substring(4)

 console.log(SUB_STRING_EX)

 output = script */


/* 18. Extract the first 4 characters of the string "Programming" using substr().

 let SUB_STRING = "Programming"

 let SUB_STRING_EX = SUB_STRING.substring(0,4)

 console.log(SUB_STRING_EX)

 output = prog */


/* 19. Write a program that takes two strings and joins them using concat().

let Name = "Shweta"

let surname = "Bholankar"

console.log(Name.concat(surname))

output = ShwetaBholankar */


/* 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.


 let num = Math.random()*10
 let ceilValue =Math.ceil(num)
 let floorvalue =Math.floor(num)

console.log("random",num)
console.log("ceil",ceilValue)
console.log("floor",floorvalue)

random =1.722
ceil =2
floor =1 */


/* 1. Find the length of the string "hello world".

let str1 = "hello world";

console.log(str1.length)

length of string = 11 */


/* 2. Retrieve the last character of the string "automation".

let str2 = "automation";

console.log(str2[str2.length-1])

output = n */


/* 3. Convert the string "learning" to uppercase.

let str = "learning"

console.log(str.toUpperCase())

output = LEARNING*/


/* 4. Check if the string "coding" includes the word "code".

let INCULDE_EX = "coding"

console.log(INCULDE_EX.includes("coding"))

output = true */



/* 5. Trim the spaces from the string "   JavaScript   ".

let trim_ex = "   JavaScript   ";

console.log(trim_ex.length)

output = 16 */


/* 6. Extract the first 5 characters from the string "PlaywrightAutomation".

let str6 = "PlaywrightAutomation";

let str =str6.slice(0,   5)

console.log(str)

output = Playw */


/* 7. Split the string "Cypress is fun" by spaces and print each word on a new line.

let str7 = "Cypress is fun";

let words = str7.split(" ")

words.forEach(words => console.log(words))

ouput = cypress
        is 
       fun */

      
/* 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
   
let REPLACE_ALL_EX = "banana apple"

 console.log(REPLACE_ALL_EX.replaceAll("banana","pineapple"))

output = pineapple apple*/


/* 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.

let str = "JavaScript";

let output = str.toUpperCase(). toLowerCase(). toUpperCase()

 console.log(output)

 output = JAVASCRIPT */


/* 10. Find the character at the 5th position in the string "Functional Testing".

let str = "Functional Testing";

console.log(str[5])

output = i*/


/* 11. Write a check for a string and return true if it includes the word "API".

let INCULDE_EX ="This is API testing"

console.log(INCULDE_EX.includes("API"))

output = true */


/* 12. Extract the last 4 characters from the string "automation testing".

let str7 = "automation testing";

let str =str7.slice(0,   4)

console.log(str)

output = auto*/


/* 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.

let str13 = " HELLOworld ";

console.log(str13.toLowerCase())

output = helloworld*/

/*remove spaces from the beggining and end

let trim_ex = " HELLOworld ";

console.log(trim_ex.length)
console.log(trim_ex.trim())
console.log(trim_ex.trim().length)

output = 10*/


/* 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str = "test your code with a test case";

let str14 =str.replace("test" , "exam")

console.log(str14)

output = exam your code with a test case */
















