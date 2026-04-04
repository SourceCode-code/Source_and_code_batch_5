// ===============================
// Assignment Questions
// ===============================

// 1. Write a program to generate a random number between 50 and 100 (inclusive).
// -----------------------------------------------------
let minNum = 50
let maxNum = 100
//let randomNum = Math.floor(Math.random()*(maxNum-minNum)+minNum)
//console.log(randomNum)
let randomNum = Math.floor(Math.random()*(100-50))+50

console.log(randomNum) //output===> 56


// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
let floatNumber = 45.6789
console.log(floatNumber.toFixed(2)) //output===> 45.68

// -----------------------------------------------------




// 3. Create a program to roll two dice (1–6 each) and print their sum.
let dice1 = Math.floor(Math.random() * 6) + 1
let dice2 = Math.floor(Math.random() * 6) + 1
let sum = dice1 + dice2
console.log(sum) //output===>8
// -----------------------------------------------------



// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120

let newNumber = 56
let roundNumber = Math.round(newNumber/10)*10
console.log(roundNumber) //output====>60

let NewNumber2 = 96
let roundNumber2 = Math.round(NewNumber2/10)*10
console.log(roundNumber2) //output====>100
// -----------------------------------------------------




// 5. Generate a random 6-digit OTP using Math methods.
// generate a random 6 digit number of otp
//generate a pack of 3 till number is of 6 digit ===> 2 number in each pack and this we have to do 3 times to generate 6 digit number of opt
// we have generate a number of otp which is of 2 digit
//the max 2 digit number is = 99
// the min 2 digit number = 10
let otp1 = Math.floor(Math.random()*(99-10+1))+10
let otp2 = Math.floor(Math.random()*(99-10+1))+10
let otp3 = Math.floor(Math.random()*(99-10+1))+10
console.log(otp1, otp2, otp3) // output ===> 66 64 54

// -----------------------------------------------------




// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
let Name = "Shivani"
console.log(Name[0])
console.log(Name[Name.length-1])/*output===> S
                                             i
                                             */
// -----------------------------------------------------




// 8. Write a program to count how many characters (excluding spaces) are in a string.
let str ="hello I am shivani"
let space = str.replace(" ","")
console.log(space.length) // output===>17
// -----------------------------------------------------




// 9. Concatenate first name, middle name, and last name using template literals and print it.
let firstName = "Shivani"
let middleName = "Mankeshwar"
let LastName = "sarkale"
console.log(`${firstName} ${middleName} ${LastName}`) //output ===> Shivani Mankeshwar sarkale
// -----------------------------------------------------



// 10. Write a program that takes a long sentence and prints it in uppercase.
let sentence = "I am learning JavaScript and it is very interesting."
console.log(sentence.toUpperCase()) //output===> I AM LEARNING JAVASCRIPT AND IT IS VERY INTERESTING.
// -----------------------------------------------------




// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
let Word = "    how are you?    "
console.log(Word.trim())  //output===> how are you?
// -----------------------------------------------------




// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
let include_1= "I am learning a javascripts and its very intresting"
console.log(include_1.includes("javascripts")) //output ===> true
// -----------------------------------------------------




// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
let string_1 = "This is a bad idea."
console.log(string_1.replace("bad","good")) //output===> This is a good idea.
// -----------------------------------------------------




// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
let str_2 = "I like apple,apple is my favorite fruite,apple is very testy, apple is very healthy."
console.log(str_2.replaceAll("apple","Mango")) //output===> I like Mango,Mango is my favorite fruite,Mango is very testy, Mango is very healthy.
// -----------------------------------------------------




// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
let colors = "red,green,blue,yellow"
let colorArray = colors.split(",")
console.log(colorArray) //output===> [ 'red', 'green', 'blue', 'yellow' ]

// -----------------------------------------------------

// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
let fruit = "Banana"
console.log(fruit.indexOf("a")) //output===> 1
console.log(fruit.lastIndexOf("a")) //output===> 5
// -----------------------------------------------------




// 17. Extract the substring "Script" from the string "JavaScript" using substring().
let word_name = "JavaScripts"
console.log(word_name.substring(4, 10)) //output===> Script
// -----------------------------------------------------




// 18. Extract the first 4 characters of the string "Programming" using substr().
let word_name2 = "Programming"
console.log(word_name2.substr(0,4))//output ===> Prog
// -----------------------------------------------------




// 19. Write a program that takes two strings and joins them using concat().
let Name_1 = "Shivani"
let sirname_1 = "Kshirsagar"
console.log(Name_1.concat(" ",sirname_1)) //output ===>Shivani Kshirsagar
// -----------------------------------------------------




// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
let randomNum2 = Math.random() * 100
console.log(Math.ceil(randomNum2)) //output===> 57
console.log(Math.floor(randomNum2)) //output===> 56
// -----------------------------------------------------



// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world";
console.log(str1.length) //output===> 11


// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2[str2.length-1]) // output===> n


// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
console.log(str3.toUpperCase()) // output===> LEARNING


// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
console.log(str4.includes("code"))// output====> false


// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
console.log(str5.trim()) //output===>JavaScript



// ===============================
// Tough and Advanced Questions
// ===============================

// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
console.log(str6.substr(0,5)) // outputy===> Playw



// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
//let str7 = "Cypress is fun";
let str7 = "Cypress\nis\nfun";
console.log(str7)        /*output===>Cypress
                                     is
                                     fun
                                     */




// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
console.log(str8.replaceAll("banana","pineapple")) //output===> pineapple apple



// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";
console.log(str9.toUpperCase().toLowerCase().toUpperCase()) //output===> JAVASCRIPT



// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";
console.log(str10[4])//outpot===> t




// 11. Write a check for a string and return true if it includes the word "API".
let str11 ="i am learning API testing with Javascripts"
console.log(str11.includes("API")) //output===> true
// -----------------------------------------------------



// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
console.log(str12[str12.length-4]+str12[str12.length-3]+str12[str12.length-2]+str12[str12.length-1]) //output===> ting



// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
let lowecase = str13.toLowerCase()
console.log(lowecase.trim()) //output===> helloworld



// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
console.log(str14.replace("test","exam")) //'output===> exam your code with a test case


//=============================================