// =====================================================
// 1. INTRODUCTION TO JS (BASICS & VARIABLES)
// =====================================================

// Q1. Print your name, age, and one goal for Diwali learning using variables.
let name = "Shubham Chaudhari";
let age = 20;
let diwaliGoal = "Master JavaScript fundamentals";
console.log(name, age, diwaliGoal);

// Q2. Declare 3 variables in one line and print them.
let a = 10, b = 20, c = 30;
// Q3. Write a program that swaps two numbers without using a third variable.
let var1=10;
let var2=20;
var1=var2+var1;
var2=var1-var2;
var1=var1-var2;
console.log(var1,var2);
// Q4. Display the type of each of these: 45, "45", true, undefined, null.
console.log(typeof 45, typeof "45", typeof true, typeof undefined, typeof null);
// Q5. Create a variable "message" = "Happy Diwali" and print it 10 times using a loop.
let message = "Happy Diwali";
for (let i = 0; i < 10; i++) 
    console.log(message);
// Q6. Create a variable x = 10; increment and decrement it, printing value each time.
let x = 10;
console.log(++x, --x);
// Q7. Print the result of typeof NaN — explain what you see.

console.log(typeof NaN);


// =====================================================
// 2. NUMBER DATATYPE (LOGIC & ARITHMETIC)
// =====================================================

// Q8. Find the sum of first 100 natural numbers using a loop.
let sum = 0;
for (let i = 1; i <= 100; i++)
    {
        sum += i;
    }

console.log(sum);


// Q9. Given 3 numbers, find the greatest number (no if, use Math.max()).
let var9=10;
let var10=23;
let var11=33;

console.log(Math.max(var9,var10,var11));

// Q10. Find the factorial of a number using a for loop.
 
let num = 5;

let fact = 1;

for (let i = 1; i <= num; i++) {
    fact *= i;
}

console.log(`Factorial of ${num} is: ${fact}`);



// Q11. Write a program to check if a number is prime.  --->
let num11 = 7;  
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${num} is a Prime Number`);
} else {
    console.log(`${num} is NOT a Prime Number`);
}

// Q12. Write a program to find the number of digits in a given number.

let num12=123;
count=0;
while (num12 !== 0){
num12= Math.floor(num12 / 10);
count++;

}

console.log(count);
// Q13. Generate a random number between 1 and 100.
// Q14. Check if a number is a perfect square.
// Q15. Write a program that prints multiplication table of 9.
