//

// ------------------------------------------------------------------
// JAVASCRIPT LOGICAL ASSIGNMENT - 2026

// =====================================================
// 1. INTRODUCTION TO JS (BASICS & VARIABLES)
// =====================================================

/* Q1. Print your name, age, and one goal for Diwali learning using variables.

let name = "shweta";

let age = "28";

let goal = "become a good developer";

console.log("Name" , name);
console.log("Age" , age)
console.log("Goal" , goal) */



/* Q2. Declare 3 variables in one line and print them.

let varaibale1 ="shweta" ,  varaible2 = "01" , varaible3 ="97"

console.log(varaibale1 , varaible2 , varaible3) */



/* Q3. Write a program that swaps two numbers without using a third variable.

let a = 20 , b = 15

 a = a +b
 b = a-b
 a = a-b

console.log("a", a ,"b" , b) */





/* Q4. Display the type of each of these: 45, "45", true, undefined, null.

console.log(typeof 45);

console.log(typeof "45");

console.log(typeof true);

console.log(typeof undefined);

console.log(typeof null); */



/* Q5. Create a variable “message” = "Happy Diwali" and print it 10 times using a loop.

let msg = "Happy Diwali"

for(let i=1 ; i<=10 ; i++){

    console.log(msg)
}           */


/* Q6. Create a variable x = 10; increment and decrement it, printing value each time.

let prenum = 10
console.log(++prenum)

let postnum = 10
console.log(postnum++)
console.log(postnum) 

let prenum1 = 10
console.log(--prenum1)

let postnum1 = 10
console.log(postnum1--)
console.log(postnum1)
  */

/* Q7. Print the result of typeof NaN — explain what you see.

console.log(typeof NaN)

output = number */



// =====================================================
// 2. NUMBER DATATYPE (LOGIC & ARITHMETIC)
// =====================================================

/* Q8. Find the sum of first 100 natural numbers using a loop.

let sum = 0

for(let i = 1 ; i<=100 ;i++){
    //sum=sum+i
    sum+=i
    console.log(sum)

}
output = 5050 */

/* Q9. Given 3 numbers, find the greatest number (no if, use Math.max()).

let x =12 , y=15 ,z= 21

let max = Math.max(x, y , z );
console.log("greatest", max);

greatest no = 21 */




/* Q10. Find the factorial of a number using a for loop.

let num = 8

let fact = 1

for(let i= 1 ; i<=8 ; i++){
    fact*=1 ;
}
console.log("factorial" , fact)


factorial = 1 


// Q11. Write a program to check if a number is prime.  --->



// Q12. Write a program to find the number of digits in a given number.

let num = 89764530;
let count = 0;

while(num > 0){
    count++;
num= Math.floor(num/10);
}
console.log("digits" , count);

output = 8 

// Q13. Generate a random number between 1 and 100.

let Random100 = Math.random()*100

console.log(Random100)

o/p = 62.59688821721132  

// Q14. Check if a number is a perfect square.

let num = 28
let sqrt = Math.sqrt(num)

if(Number. isInteger(sqrt) ){
    console.log("perfect square");
}else{console.log("not perfect square")
}

o/p = not square 




// Q15. Write a program that prints multiplication table of 9.

for (let i = 1; i <= 10; i++) {

    console.log(`9 X ${i} = ${9 * i}`)

}




// =====================================================
// 3. STRING DATATYPE (LOGIC + PATTERN)
// =====================================================

// Q16. Write a program that prints each character of a string on a new line.

let firstName ="shweta"
let middleName ="pralhad"
let lastName = "Bholankar"


console.log(`${firstName}\n ${middleName}\n ${lastName}`) 




// Q17. Given a name string, print only the vowels from it.

let str = "shweta";
let vowels = "aeiouAEIOU";

for(let i = 0 ;i < str.length ; i++ ){
    if(vowels.includes(str[i])){
console.log(str[i])

    }
} 

o/p = e,a 


// Q18. Check if two strings are equal (case insensitive).

let str1 = "Hello"
let str2 = "hello"

if(str1.toLowerCase()===str2.toLowerCase()){
    console.log("Equal");
}else{
    console.log("Not equal")

}

o/p = equal 


// Q19. Count how many words are in the string: “Happy Diwali to Everyone”

let word_string = "Happy Diwali to Everyone"

let word_count = 1

console.log(word_count)

for (let j = 0; j < word_string.length; j++) {
    if (word_string[j] === " ") {
        word_count++
    }

}

console.log(word_count)

o/p = 1,4 */



 /*Q20. Create a string that repeats “✨” 20 times using repeat().

 //“✨"
let str = "✨"

console.log(str.repeat(20)) */
 



//=====================================================
/*4. STRING METHODS (APPLIED UNDERSTANDING)
 //=====================================================

// Q21. Given string = "  Diwali Celebration  ", remove extra spaces and print clean version.

let str  ="   Diwali Celebration   "

let clean = str.trim();
 console.log(clean)


o/p =Diwali Celebration 




// Q22. Extract the last 4 characters of any given string.

let str = "parashoot"

let last = str.slice(-4);
console.log(last);

o/p = hoot 



// Q23. Convert “Javascript is fun” → “JAVASCRIPT IS FUN” → “javascript is fun”.


let str = "JAVASCRIPT IS FUN"

console.log(str.toUpperCase());
console.log(str.toLowerCase());





// Q24. Replace all occurrences of “light” with “spark” in “Festival of lights brings light”.

let str = "Festival of lights brings light"

let output = str.replaceAll("light" , "spark");
console.log(output)

o/p = Festival of sparks brings spark 



// Q25. Find if a string starts with “Happy” and ends with “Diwali”.

let str = "Happy Diwali"

if (str.startsWith("Happy")&& str.endsWith("Diwali")){

console.log("yes")
}else{

console.log("no")
}
o/p = yes 

// =====================================================
// 5. CONVERSION (NUMBER <-> STRING)
// =====================================================

// Q26. Convert number 2025 into a string and print its type.

let num = 2025

console.log(typeof num)
console.log( num.toString())
console.log(typeof num.toString()  )



// Q27. Convert string “99.9” to number and round it.

let str = "99.9"
console.log(typeof str)

console.log(Number(num))
console.log(typeof Number(num)) 



// Q28. Add number + string and explain result for (5 + "5") and (5 - "5").

console.log(5+ "5") = 55

console.log(5 -"5") =0 




// Q29. Convert true → 1 and false → 0 using Number().

let a = true
let b = false

console.log(Number(a));  
console.log(Number(b));

o/p = 1, 0 */





/* Q30. Ask: what happens when you do String(10 + 5) vs String(10) + String(5)?

console.log("10+5")  = 10+5

console.log("10")+("5") = 10*/






// =====================================================
// 6. OPERATORS (LOGICAL + ARITHMETIC + TERNARY)
// =====================================================

/* Q31. Calculate and print: ((10 + 3) ** 2) / 13.

console.log((10+3)** 2)/13


o/p = 169  */





/* Q32. Create a program that checks if a number is divisible by both 3 and 5.

let num =21

    if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divsible by 3 and 5")

    }else{console.log( "Not divsible by 3 and 5")

}
o/p = not divisible by 3 and 5 




// Q33. Use logical operators to check if a student’s age is between 18–25 and from “Pune”.

let age = 22;
let city = "pune";

if(age>=18  &&  age <= 25 && city ==="pune"){

    console.log("Eligible");
}else {
    console.log("Not Eligible");
}

o/p = Eligible 



// Q34. Use ternary operator to check if given marks >= 40 → “Pass” else “Fail”.


let marks = 45;

let result =(marks >= 40)? "pass" : "fail";

console.log(result);

o/p = pass 




// Q35. Find the output of: console.log(5 + 3 * 2 ** 2) and explain order of evaluation.


console.log( 5 + 3 * 2 **2);


o/p = 17  




// =====================================================
// 7. DATE (REAL-TIME APPLICATIONS)
// =====================================================

// Q36. Print today’s date in format “DD-MM-YYYY”.

const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();

console.log(`${day}-${month}-${year}`); 



// Q37. Print current time in format “HH:MM:SS”.

const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

console.log(`${hours}:${minutes}:${seconds}`);







// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.

const date = new Date("2025-10-24");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const dayName = days[date.getDay()];

console.log(dayName);

o/p = Friday 




// Q39. Calculate how many days are left for Diwali 2026 (use Date difference).

const today = new Date();

const diwali = new Date("2026-11-08");

const diffTime = diwali - today;

const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


console.log(diffDays + " days left for Diwali 2026");

o/ = 199 days left for Diwali 2026 







// Q40. Print “Good Morning / Good Afternoon / Good Evening” based on current hour.

let hour = new Date().getHours();



if (hour < 12) {

  console.log("Good Morning");
} else if (hour < 17) {

console.log("Good Afternoon");

 } else {

 console.log("Good Evening");
 }
*/
