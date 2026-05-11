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
let name = "Ganesh";
let age = 29
let goal = "complete playwright";

// Q2. Declare 3 variables in one line and print them.
let a =5 , b= 45.5, c = "stopper"

// Q3. Write a program that swaps two numbers without using a third variable.
let var1 = 5;
let var2 = 3;
var1 = var1 + var2;
var2 = var1 - var2;
var1 = var1 -var2;
console.log(var1, var2); 

// Q4. Display the type of each of these: 45, "45", true, undefined, null.
console.log(`${typeof 45} || ${typeof "45"} || ${typeof true} || ${typeof undefined} || ${typeof null}`);

// Q5. Create a variable “message” = "Happy Diwali" and print it 10 times using a loop.
for(let i = 1; i<=10; i++){
  console.log("Happy Diwali");
}

// Q6. Create a variable x = 10; increment and decrement it, printing value each time.
let x = 10;
x++
console.log(x);
x--
console.log(x);

// Q7. Print the result of typeof NaN — explain what you see.
console.log(typeof NaN);
// it shows data type as number


// =====================================================
// 2. NUMBER DATATYPE (LOGIC & ARITHMETIC)
// =====================================================

// Q8. Find the sum of first 100 natural numbers using a loop.
let sum;
for(let i = 1; i<=100; i++){
sum +=i;
}
console.log(`sum is ${sum}`);

// Q9. Given 3 numbers, find the greatest number (no if, use Math.max()).
let num1 = 67, num2 = 12; num3 = 51;
console.log(`Largest number between given numbers is ${Math.max(num1,num2,num3)}`);

// Q10. Find the factorial of a number using a for loop.
let factorial = 1;
let givenNumber = 5
for(let i = 1; i<=givenNumber; i++){
factorial = factorial * i;
}
console.log(`Factorial of ${givenNumber} is ${factorial}`);

// Q11. Write a program to check if a number is prime.
givenNumber = 16
let isPrime = true;
for(i=2;i<Math.ceil(givenNumber/2);i++){
  if(givenNumber%i === 0){
    isPrime =false;
    break;
  }
}
isPrime?console.log(`${givenNumber} is prime`):console.log(`${givenNumber} is not prime number`);

// Q12. Write a program to find the number of digits in a given number.
let num4 = 2345678;
console.log(`Number of digits in ${num4} is ${num4.toString().length}`);

// Q13. Generate a random number between 1 and 100.
let randomNumber =  Math.ceil((Math.random()*100));
console.log(`Random number between 1 to 100 is ${randomNumber}`);

// Q14. Check if a number is a perfect square.
let num5 = 25;
Math.sqrt(num5)%1 ===1 ? console.log(`${num5} is perfect square`): console.log(`${num5} is not perfect square`);

// Q15. Write a program that prints multiplication table of 9.
for(let i = 1; i<=10; i++){
  console.log(`${i} ${i*9}`);
}


// =====================================================
// 3. STRING DATATYPE (LOGIC + PATTERN)
// =====================================================

// Q16. Write a program that prints each character of a string on a new line.
let givenString = "Javascript is not longofrm of Java language";
for (let i = 0; i < givenString.length; i++) {
  console.log(givenString[i]);
}

console.log(`---------17----------`);
// Q17. Given a name string, print only the vowels from it.
givenString = "Javascript is not longofrm of Java language";
for (let i = 0; i < givenString.length; i++) {
  if ("aeiou".includes(givenString[i])) {
    console.log(givenString[i]);
  }
}

console.log(`---------18----------`);
// Q18. Check if two strings are equal (case insensitive).
givenString = "Javascript is not longofrm of Java language";
givenString2 = "tavascript is not longofrm of Java   language    ";
let isEqual = true;
if (givenString.length === givenString2.length) {
  for (let i = 0; i < givenString.length; i++) {
    if (givenString[i] !== givenString2[i]) {
      isEqual = false;
      console.log(`given Strings are not equal`);
      break;
    }
  }
} else {
  isEqual =false
}

isEqual
  ? console.log(`given String are equal`)
  : console.log(`given Strings are not equal`);

// Q19. Count how many words are in the string: “Happy Diwali to Everyone”.
console.log(`Number of words in ${'Happy Diwali to Everyone'} is ${'Happy Diwali to Everyone'.split(" ").length}` );

// Q20. Create a string that repeats “✨” 20 times using repeat().
let newString = '✨'.repeat(20);
console.log(newString);

// =====================================================
// 4. STRING METHODS (APPLIED UNDERSTANDING)
// =====================================================

// Q21. Given string = "  Diwali Celebration  ", remove extra spaces and print clean version.
console.log("  Diwali Celebration  ".trim());

// Q22. Extract the last 4 characters of any given string.
let str = "Diwali Celebration";
console.log(str.substring(str.length - 4));

// Q23. Convert “Javascript is fun” → “JAVASCRIPT IS FUN” → “javascript is fun”.
let str2 = "Javascript is fun";
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

// Q24. Replace all occurrences of “light” with “spark” in “Festival of lights brings light”.
let str3 = "Festival of lights brings light";
console.log(str3.replaceAll("light", "spark"));

// Q25. Find if a string starts with “Happy” and ends with “Diwali”.
let str4 = "Happy Festival of lights brings light, so Diwali";
str4.startsWith("Happy") && str4.endsWith("Diwali")
  ? console.log(`given string starts with Happy and ends with Diwali`)
  : console.log("given string does not start with Happy and ends with Diwali");

// =====================================================
// 5. CONVERSION (NUMBER <-> STRING)
// =====================================================

// Q26. Convert number 2025 into a string and print its type.
let nn =2025;
let nm = nn.toString();
console.log(typeof nm);

// Q27. Convert string “99.9” to number and round it.
console.log(Math.round(Number("99.9")));

// Q28. Add number + string and explain result for (5 + "5") and (5 - "5").
console.log((5 +"5")); // + sign acts as concatination
console.log( (5-"5")); // - sign will convert string to number 

// Q29. Convert true → 1 and false → 0 using Number().
console.log(Number(true));
console.log(Number(false));

// Q30. Ask: what happens when you do String(10 + 5) vs String(10) + String(5)?
console.log(String(10 +5)); //first operation is addition and then convert to string
console.log(String(10) + String(5)); //first operation is conversion then addition os 2 string

// =====================================================
// 6. OPERATORS (LOGICAL + ARITHMETIC + TERNARY)
// =====================================================

// Q31. Calculate and print: ((10 + 3) ** 2) / 13.
let ans = (10 + 3) ** 2 / 13;
console.log(ans);

// Q32. Create a program that checks if a number is divisible by both 3 and 5.
let num32 = 14;
num32 % 3 === 0 && num32 % 5 === 0
  ? console.log(`${num32} is divisible by 3 and 5`)
  : console.log(`${num32} is not divisible by 3 and 5`);

// Q33. Use logical operators to check if a student’s age is between 18–25 and from “Pune”.
age = 27;
let place = "Pune";
(age <= 25 && age >= 18 && place === "Pune")
  ? console.log(`Both conditions are true`)
  : console.log(`one or more conditions are false`);

// Q34. Use ternary operator to check if given marks >= 40 → “Pass” else “Fail”.
givenMark = 45;
givenMark >=40?console.log(`pass`):console.log("fail");

// Q35. Find the output of: console.log(5 + 3 * 2 ** 2) and explain order of evaluation.
console.log(5 + 3 * 2 ** 2)
// order of operation = 2**2 then 4*3 then 12+5

// =====================================================
// 7. DATE (REAL-TIME APPLICATIONS)
// =====================================================

// Q36. Print today’s date in format “DD-MM-YYYY”.
let dateObject = new Date();
let dd = dateObject.toLocaleString("en-IN", { day: "2-digit" });
let mm = dateObject.toLocaleString("en-IN", { month: "2-digit" });
console.log(`${dd}-${mm}-${dateObject.getFullYear()}`);

// Q37. Print current time in format “HH:MM:SS”.
let hh = dateObject.toLocaleString("en-IN", { hour: "2-digit", hour12: false });
mm = dateObject.toLocaleString("en-IN", { minute: "2-digit" });
let ss = dateObject.toLocaleString("en-IN", { second: "2-digit" });
console.log(`${hh}:${mm}:${ss}`);

// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.
let newDate = new Date("24 oct 2025");
console.log(newDate.toLocaleString("en-IN", { weekday: "long" }));

// Q39. Calculate how many days are left for Diwali 2026 (use Date difference).
let diwaliDate = new Date("5 nov 2026");
let diff = Math.floor((diwaliDate - dateObject)/(1000*60*60*24));
console.log(diff);
// Q40. Print “Good Morning / Good Afternoon / Good Evening” based on current hour.
console.log(hh);
switch (true) {
  case hh >= 5 && hh < 12:
    console.log(`Good Moring`);
    break;
  case hh >= 12 && hh < 18:
    console.log(`Good Afternoon`);
    break;
  case hh >= 18 && hh < 24:
    console.log(`Good Evening`);
    break;
  default:
    console.log(`Invalid input`);
}

/* ------------------------------------------------------------------
🌟 BONUS CHALLENGE (Optional)
Create a program called “Diwali Countdown”.
It should print today’s date and how many days left until Diwali.
Then display “🪔 Get Ready to Celebrate!” if less than 10 days remain.
------------------------------------------------------------------ */
diff <=10?console.log(`🪔 Get Ready to Celebrate!`):console.log(`${diff} to Celebrate! 🪔`);
/*
🎉 Remember: Programming is not about writing code —
it’s about breaking problems into logic
*/