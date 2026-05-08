/* ------------------------------------------------------------------
 JAVASCRIPT LOGICAL ASSIGNMENT - 2026

🪔 Objective:
By solving these problems, you should gain strong logical foundations
and be able to confidently write clean, working JS programs.

💡 Instructions:
- Use console.log() for output.
- Comment your logic clearly.
- Don’t copy from AI — think like a programmer!
------------------------------------------------------------------*/

// =====================================================
// 1. INTRODUCTION TO JS (BASICS & VARIABLES)
// =====================================================

// Q1. Print your name, age, and one goal for Diwali learning using variables.
let name1 = "shivani";
let age = 27;
let Diwali = "my feavorite festival";
console.log("NAME: ${name1}")
console.log("AGE: ${age}")
console.log("FESTIVAL: ${Diwali}")
/*output==>
  NAME: ${name1}
AGE: ${age}
FESTIVAL: ${Diwali}
*/
//==============================================================================

// Q2. Declare 3 variables in one line and print them.
let fruit = "mango", food = "indian food", juice = "watermelon juice";
console.log(fruit, food, juice)
//output==> mango indian food watermelon juice
//==============================================================================

// Q3. Write a program that swaps two numbers without using a third variable.
let name = "shivani";
let sirname = "kshirsagar";

[name, sirname] = [sirname, name]

console.log(`name: ${name}, sirname: ${sirname}`)
// Output==> name: kshirsagar, sirname: shivani
//=============================================================================

// Q4. Display the type of each of these: 45, "45", true, undefined, null.
let num = 45;
let word = "45";
Indian = true;
tree = undefined;
sky = null;
console.log(typeof (num))
console.log(typeof (word))
console.log(typeof (Indian))
console.log(typeof (tree))
console.log(typeof (sky))
/*output==>
number
string
boolean
undefined
object
*/
//====================================================================================

// Q5. Create a variable “message” = "Happy Diwali" and print it 10 times using a loop.
let message = "Happy Diwaly";
for (i = 0; i < 10; i++) {
  console.log(message)
}
/* output==>
Happy Diwaly
Happy Diwaly
Happy Diwaly
Happy Diwaly
Happy Diwaly
Happy Diwaly
Happy Diwaly
Happy Diwaly
Happy Diwaly
Happy Diwaly
*/
//================================================================================

// Q6. Create a variable x = 10; increment and decrement it, printing value each time.
let x = 10;
//increment
x++;
console.log(x)//11
//decrement
x--;
console.log(x)//10

//==================================================================================

// Q7. Print the result of typeof NaN — explain what you see.
console.log(typeof NaN)
//OUTPUT==>number
/*
NAN it is a number type and alongside its a positive and nigative infinity.
NAN IS THE ONLY VALUE IN JS THAT IS NOT EQUALS TO  ITSELF because it is immutable.
console.log(NaN === NaN); // false
*/

//==================================================================================
// =====================================================
// 2. NUMBER DATATYPE (LOGIC & ARITHMETIC)
// =====================================================

// Q8. Find the sum of first 100 natural numbers using a loop.
let sum = 0;
for (i = 0; i <= 100; i++) {
  console.log(sum)
  sum += i
}
console.log(sum)
//output==>5050
//========================================================================

// Q9. Given 3 numbers, find the greatest number (no if, use Math.max()).
let num1 = 10;
let num2 = 20;
let num3 = 30;
console.log(Math.max(num1, num2, num3))
//output===>30
//========================================================================

// Q10. Find the factorial of a number using a for loop.

function Factorial(x) {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i;  //result=result*i
  }
  return result
}
console.log(Factorial(5)); // Output: 120
console.log(Factorial(3)); // Output: 6
console.log(Factorial(2)); // Output: 2

//========================================================================

// Q11. Write a program to check if a number is prime or not.
let number = 29;
let isPrime = true;
if (number <= 1) {
  isprime = false
}
else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0)
      isPrime = false
    break
  }
}
console.log(isPrime ? `${number} is a prime number` : `${number} is not a prime number`)

//output==>29 is a prime number
//========================================================================

// Q12. Write a program to find the number of digits in a given number.
let num4 = 12345;
let numDigits = num4.toString().length;
console.log(`Number of digits in ${num4} is ${numDigits}`)
//output==> Number of digits in 12345 is 5
//========================================================================


// Q13. Generate a random number between 1 and 100.
let randomNum = Math.floor(Math.random() * 100) + 1
console.log(`random number between 1 to 100 is ${randomNum}`)
//output==> random number between 1 to 100 is 59
//========================================================================

// Q14. Check if a number is a perfect square.
let num5 = 16;
let sqrt = Math.sqrt(num5);
if (sqrt === Math.floor(sqrt)) {
  console.log(`${num5} is a perfect square`)
} else {
  console.log(`${num5} is not a perfect square`)
}
//output==>16 is a perfect square

let num6 = 20;
let sqrt1 = Math.sqrt(num6);
if (sqrt1 === Math.floor(sqrt1)) {
  console.log(`${num6} is a perfect square`)
} else {
  console.log(`${num6} is not a perfect square`)
}
//output==>20 is not a perfect square
//========================================================================

// Q15. Write a program that prints multiplication table of 9.
let num7 = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${num7}x${i}=${num7 * i}`)
}
/*output==>
9x1=9
9x2=18
9x3=27
9x4=36
9x5=45
9x6=54
9x7=63
9x8=72
9x9=81
9x10=90
*/
//========================================================================

// =====================================================
// 3. STRING DATATYPE (LOGIC + PATTERN)
// =====================================================

// Q16. Write a program that prints each character of a string on a new line.
let str = "Diwaly";
for (let i = 0; i < str.length; i++) {
  console.log(str[i])
}
/*ooutput==>
D
i
w
a
l
y
*/
//========================================================================

// Q17. Given a name string, print only the vowels from it.
let name2 = "Shivani";
let count = 0;
for (let i = 0; i < name2.length; i++) {
  let char = name2[i].toLowerCase();
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    count++
  }
}
console.log(`Number of vowels in ${name2} is ${count}`)
//output==> Number of vowels in Shivani is 3
//========================================================================

// Q18. Check if two strings are equal (case insensitive).
let str1 = "Diwali";
let str2 = "diwali";
if (str1.toLowerCase() === str2.toLowerCase()) {
  console.log("The strings are equal (case insensitive)")
}
else {
  console.log("The strings are not equal")
}
//output==> The strings are equal (case insensitive)
//========================================================================

// Q19. Count how many words are in the string: “Happy Diwali to Everyone”.
let str3 = "Happy Diwali to Everyone";
let word_count = 1;
for (let i = 0; i < str3.length; i++) {
  if (str3[i] === " ") {
    word_count++
  }
}
console.log(`Number of words in "${str3}" is ${word_count}`)
//output==> Number of words in "Happy Diwali to Everyone" is 4
//========================================================================

// Q20. Create a string that repeats “✨” 20 times using repeat().
let star = "*".repeat(20);
console.log(star)
//output==> ********************
//========================================================================

// =====================================================
// 4. STRING METHODS (APPLIED UNDERSTANDING)
// =====================================================

// Q21. Given string = "  Diwali Celebration  ", remove extra spaces and print clean version.
let str4 = "  Diwali Celebration  ";
let cleanStr = str4.trim();
console.log(cleanStr)
//output==> Diwali Celebration
//========================================================================

// Q22. Extract the last 4 characters of any given string.
let str5 = "Diwali Celebration";
let char = str5[14] + str5[15] + str5[16] + str5[17]
console.log(char)//output==>tion

let str6 = "Diwali Celebration";
let newstr = str6.substring(str6.length - 4);
console.log(newstr)//output==>tion
//========================================================================

// Q23. Convert “Javascript is fun” → “JAVASCRIPT IS FUN” → “javascript is fun”.
let str7 = "Javascript is fun";
let upperStr = str7.toUpperCase();
let lowerstr = upperStr.toLowerCase();
console.log(upperStr)//output==> JAVASCRIPT IS FUN
console.log(lowerstr)//output==> javascript is fun
//==============or=======================

console.log(str7.toUpperCase().toLocaleLowerCase())//output==> javascript is fun
//========================================================================

// Q24.Replace all occurrences of “light” with “spark” in “Festival of lights brings light”.
let str8 = "Festival of lights brings light";
let newstr8 = str8.replace("light", "spark");
console.log(newstr8)//output==> Festival of sparks brings spark
//========================================================================

// Q25. Find if a string starts with “Happy” and ends with “Diwali”.
let str9 = "Happy Diwali";
if (str9.startsWith("Happy") && str9.endsWith("Diwali")) {
  console.log("The string starts with 'Happy' and ends with 'Diwali'")
}
else {
  console.log("The string does not start with 'Happy' and end with 'Diwali'")
}
//output==> The string starts with 'Happy' and ends with 'Diwali'
//========================================================================

// =====================================================
// 5. CONVERSION (NUMBER <-> STRING)
// =====================================================

// Q26. Convert number 2025 into a string and print its type.
let num8 = 2025;
let strnum = num8.toString();
console.log(typeof (num8))//output==>number
console.log(typeof (strnum))//output==>string
//========================================================================

// Q27. Convert string “99.9” to number and round it.
let str10 = "99.9";

// Q28. Add number + string and explain result for (5 + "5") and (5 - "5").
// Q29. Convert true → 1 and false → 0 using Number().
// Q30. Ask: what happens when you do String(10 + 5) vs String(10) + String(5)?

// =====================================================
// 6. OPERATORS (LOGICAL + ARITHMETIC + TERNARY)
// =====================================================

// Q31. Calculate and print: ((10 + 3) ** 2) / 13.
// Q32. Create a program that checks if a number is divisible by both 3 and 5.
// Q33. Use logical operators to check if a student’s age is between 18–25 and from “Pune”.
// Q34. Use ternary operator to check if given marks >= 40 → “Pass” else “Fail”.
// Q35. Find the output of: console.log(5 + 3 * 2 ** 2) and explain order of evaluation.

// =====================================================
// 7. DATE (REAL-TIME APPLICATIONS)
// =====================================================

// Q36. Print today’s date in format “DD-MM-YYYY”.
// Q37. Print current time in format “HH:MM:SS”.
// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.
// Q39. Calculate how many days are left for Diwali 2025 (use Date difference).
// Q40. Print “Good Morning / Good Afternoon / Good Evening” based on current hour.

/* ------------------------------------------------------------------
🌟 BONUS CHALLENGE (Optional)
Create a program called “Diwali Countdown”.
It should print today’s date and how many days left until Diwali.
Then display “🪔 Get Ready to Celebrate!” if less than 10 days remain.
------------------------------------------------------------------ 
🎉 Remember: Programming is not about writing code —
it’s about breaking problems into logic
*/