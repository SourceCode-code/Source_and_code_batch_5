// ===============================
// Assignment Questions
// ===============================

// 1. Write a program to generate a random number between 50 and 100 (inclusive).
// -----------------------------------------------------
let minNum = 50
let maxNum = 100
let randomNum = Math.floor(Math.random()*(maxNum-minNum)+minNum)
console.log(randomNum);


// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
// -----------------------------------------------------
let num = 45.6789;
console.log(num.toFixed(2));


// 3. Create a program to roll two dice (1–6 each) and print their sum.
// -----------------------------------------------------
function rollDice()
{
    let dice1 = Math.round(Math.random() * (6)) + 1;
    let dice2 = Math.round(Math.random() * (6)) + 1;

    return [dice1, dice2]

}
console.log(rollDice());


// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120
// -----------------------------------------------------
function roundToNearestMultiple10(num)
{
    return Math.round(num/10) * 10;
}
console.log(roundToNearestMultiple10(47));


// 5. Generate a random 6-digit OTP using Math methods.
// -----------------------------------------------------
function ranOtp()
{
    let otp = "";

    for(let i = 0; i < 6; i++)
        {
            otp += Math.floor(Math.random() * 10);
        } 

    return otp;
}


// -----------------------------------------------------

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
// -----------------------------------------------------
let str = "JavaScript";
console.log(str.charAt(0));
console.log(str.charAt(str.length - 1));


// 8. Write a program to count how many characters (excluding spaces) are in a string.
// -----------------------------------------------------
function countOfChars(str)
{
    str = str.trim();
    str = str.replaceAll(" ", "");
    return str.length;
}
console.log(countOfChars(" Ankit Giri "));


// 9. Concatenate first name, middle name, and last name using template literals and print it.
// -----------------------------------------------------
let firstName = "Ankit";
let middleName = "Sunil";
let lastName = "Giri"

console.log(`${firstName}${middleName}${lastName}`);


// 10. Write a program that takes a long sentence and prints it in uppercase.
// -----------------------------------------------------
function toUpper(str)
{
    return str.toUpperCase();
}
console.log(toUpper("Adsajfhdajfnkahn"));


// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
// -----------------------------------------------------
let st = "   Ankit   ";
st = st.trim();
console.log(st);


// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
// -----------------------------------------------------
let string12 = " I love JavaScript";
console.log(string12.includes("JavaScript"));


// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"
// -----------------------------------------------------
let s = "This is a bad idea";
s = s.repeat("bad", "good");
console.log(s);


// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
// -----------------------------------------------------
let strin = "apple is tasty, apple is sweet";
strin = strin.replaceAll("apple", "mango");

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
// -----------------------------------------------------
let s1 = "red,green,blue,yellow";
let arr = s1.split(",");
for(let ele of arr)
{
    console.log(ele);
}


// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
// -----------------------------------------------------
let s2 = "Ankit Anushka";
console.log(`First Occurrence : ${s2.indexOf('a')}
Second Occurance : ${s2.lastIndexOf('a')} `);


// 17. Extract the substring "Script" from the string "JavaScript" using substring().
// -----------------------------------------------------
let s3 = "JavaScript";
let subS3 = s3.substring(4, s3.length);
console.log(subS3);


// 18. Extract the first 4 characters of the string "Programming" using substr().
// -----------------------------------------------------
let s4 = "Programming";
console.log(s4.substring(0, 4));


// 19. Write a program that takes two strings and joins them using concat().
// -----------------------------------------------------
let s5 = s3.concat(s4);
console.log(s5);


// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
// -----------------------------------------------------
let numb = Math.random() * 10;
console.log(Math.ceil(numb));
console.log(Math.floor(numb));



// ===============================
// Simple Questions
// ===============================

// 1. Find the length of the string "hello world".
let str1 = "hello world"
console.log(str1.length);


// 2. Retrieve the last character of the string "automation".
let str2 = "automation";
console.log(str2.charAt(str2.length - 1));

// 3. Convert the string "learning" to uppercase.
let str3 = "learning";
str3 = str3.toUpperCase();
console.log(str3);

// 4. Check if the string "coding" includes the word "code".
let str4 = "coding";
console.log(str4.includes("code"));

// 5. Trim the spaces from the string "   JavaScript   ".
let str5 = "   JavaScript   ";
str5 = str5.trim();
console.log(str5);


// ===============================
// Tough and Advanced Questions
// ===============================

// 6. Extract the first 5 characters from the string "PlaywrightAutomation".
let str6 = "PlaywrightAutomation";
str6 = str6.substring(0, 5);
console.log(str6);


// 7. Split the string "Cypress is fun" by spaces and print each word on a new line.
let str7 = "Cypress is fun";
let arr7 = str.split(" ");
for(let ele of arr7)
{
    console.log(ele);
}


// 8. Replace all occurrences of 'banana' with 'pineapple' in the string "banana apple".
let str8 = "banana apple";
str8 = str8.replaceAll('banana', 'pineapple')


// 9. Use method chaining to convert the string "JavaScript" 
//    to uppercase, then lowercase, then uppercase again.
let str9 = "JavaScript";


// 10. Find the character at the 5th position in the string "Functional Testing".
let str10 = "Functional Testing";


// 11. Write a check for a string and return true if it includes the word "API".
// -----------------------------------------------------

function checkString(str)
{
    if(str.includes("API"))
        return true;

    else
        false;
}

console.log(checkString("API stands for Application Programming Interface"));


// 12. Extract the last 4 characters from the string "automation testing".
let str12 = "automation testing";
str12 = str12.substring(str12.length - 5, str12.length);

// 13. Convert the string " HELLOworld " to lowercase and remove spaces from the beginning and end.
let str13 = " HELLOworld ";
str13 = str13.trim().toLowerCase();
console.log(str13);

// 14. Replace the first occurrence of "test" with "exam" 
//     in the string "test your code with a test case".
let str14 = "test your code with a test case";
str14 = str14.replace("test", "exam");
console.log(str14);