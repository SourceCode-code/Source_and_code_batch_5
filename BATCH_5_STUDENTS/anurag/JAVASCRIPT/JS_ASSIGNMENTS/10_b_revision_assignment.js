//1. introduction to JS (Basics & Variables)

//Q1. Print your name, age, and one goal for Diwali learning using variables.
console.log("Q1. print your name age and goal for diwali");

let name = "Anurag";
let age = 30;
let goal = "get job on javascript for automation tester role";

console.log("name: "+ name + ", age: " +age + ", goal: " + goal);

console.log("--------------------------------------------------");

//Q2. Declare 3 variables in one line and print them.
console.log("Q2. Declare 3 variable in one line and print them");
let a = 5, b = 10, c = 15;
console.log("a: " + a + ", b: " + b + ", c: " + c);

console.log("--------------------------------------------------");

//Q3. Write a program that swaps two numbers without using a third variable.
console.log("Q3. swap 2 numbers without using 3rd variable");

let x = 10 , y = 20;
console.log("before swap:" + x + ", " + y);

x = x + y; //x=30
y = x - y; //y=30-20=10
x = x - y; //x=30-10=20

console.log(x, y );

console.log("--------------------------------------------------");

//Q4. Display the type of each of these: 45, "45", true, undefined, null.
console.log("Q4. Display the type of");

console.log(typeof 45);  //Number
console.log(typeof "45"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object 

console.log("--------------------------------------------------");

//Q5. Create a variable “message” = "Happy Diwali" and print it 10 times using a loop.
console.log("Q5. print message 10 times using for loop");

let greetings = "Happy Diwali";
for(let i=0; i<10; i++)
{
    console.log(greetings);
}

console.log("--------------------------------------------------");

//Q6. Create a variable x = 10; increment and decrement it, printing value each time.
console.log("Q6. increment and decrement variable ");

let num = 10;
console.log(num); //10
num++; //increment
console.log(num); //11
num--; //decrement
console.log(num); //10
num--; //decrement
console.log(num); //9

console.log("--------------------------------------------------");

//Q7. Print the result of typeof NaN — explain what you see.
console.log("Q7. print typeof NaN");

console.log(typeof NaN); //number
//NaN is also type of number but it is not a valid number 

console.log("====================================================");

//2. number datatype (logic & arithmetic)

//Q8. Find the sum of first 100 natural numbers using a loop.
console.log("Q8. sum of 100 natuarl numbers using loop");

let sum = 0;
for (let i=0; i<=100; i++)
{
    sum = sum + i;
}
console.log (sum);

console.log("--------------------------------------------------");

//Q9. Given 3 numbers, find the greatest number (no if, use Math.max()).
console.log("Q9.find the greatest number using Math.max()")

let num1 = 10, num2 = 20, num3 = 30;
Math.max(num1, num2, num3);
console.log(Math.max(num1, num2, num3));

console.log("--------------------------------------------------");

//Q10. Find the factorial of a number using a for loop.
console.log("Q10. factorial of a number using loop");

let factorial_number = 10;
let factorial = 1;
for (let i=1; i<=factorial_number; i++)
{
    factorial = factorial * i;
}
console.log(factorial);

console.log("--------------------------------------------------");

//Q11. Write a program to check if a number is prime.
console.log("Q11. check if number is prime");

let prime_number = 28;
if (prime_number <= 1)
{
    console.log("it is not a prime number ");
} else{
    for (let i=2; i<prime_number; i++)
    {
        if (prime_number % i === 0)
        {
            console.log("it is not a prime number");
            break;

        }
        if (i === prime_number -1)
        {
            console.log("it is a prime number");
        }
    }
}

console.log("--------------------------------------------------");

//Q12. Write a program to find the number of digits in a given number.
console.log("Q12. find the number of digits in the given number");

let given_number = 1234567;
let count = 0;
while (given_number > 0)
{
    given_number = Math.floor(given_number/10);
    count++;
}
console.log(count);

console.log("--------------------------------------------------");

//Q13. Generate a random number between 1 and 100.
console.log("Q13. generate a random number between 1 to 100");
let random_number = Math.random() *100;
console.log(Math.floor(random_number) + 1);

console.log("--------------------------------------------------");

//Q14. Check if a number is a perfect square.
console.log("Q14. check the perfect square");
let number = 25;
let square = false;
for (let i=1; i<=number; i++)
{
    if (i * i === number)
    {
        square = true;
        console.log(number + " is a perfect square");
        break;
    } else
    {
        console.log(number + "is not a perfect square");

    }
}

console.log("--------------------------------------------------");

//Q15. Write a program that prints multiplication table of 9.
console.log("Q15. table of 9");
let num_table =9;
for (let i=1; i<=10; i++)
{
    console.log(num_table + " x " + i + " = " + num_table * i);
}

console.log("====================================================");

//3. string datatype (logic + pattern)

//Q16. Write a program that prints each character of a string on a new line.
console.log("Q16. print each charater of string in new line");
let str = "happy diwali";
for (let i=0; i<str.length; i++)
{
    console.log(str[i]);

}

console.log("--------------------------------------------------");

//Q17. Given a name string, print only the vowels from it.
console.log("Q17. print only the vowels from the string");
let name_string = "anurag deshpande";
for (let i=0; i<name_string.length; i++)
{
    let vov = name_string[i].toLowerCase();
    if (vov ==='a'|| vov ==='e' || vov ==='i' || vov ==='o' || vov ==='u')
    {
        console.log(vov);
    }
}
console.log("--------------------------------------------------");

//Q18. Check if two strings are equal (case insensitive).
console.log("Q18. check if 2 strings are equal case insensitive");
let string1 = "Hello World";
let string2 = "hello world";
if(string1.toLowerCase() === string2.toLowerCase())
{
    console.log("the strings are equal");

} else 
{
    console.log(" the strings are not equal");

}

console.log("--------------------------------------------------");

//Q19. Count how many words are in the string: “Happy Diwali to Everyone”.
console.log("Q19. count the words in the string");
let sentence = "Happy Diwali to Everyone";
let words = sentence.split(" ");
console.log("number of words in the string: " + words.length);

console.log("--------------------------------------------------");

//Q20. Create a string that repeats “✨” 20 times using repeat().
console.log("Q20. repeat the string 20 times");
let star = "✨";
console.log (star.repeat(20));

console.log("====================================================");

//4. string methods (applied understanding)
// =====================================================

// Q21. Given string = "  Diwali Celebration  ", remove extra spaces and print clean version.
console.log("Q21. remove extra spaces from the string");
let diwali_string = "  Diwali Celebration  ";
console.log(diwali_string.trim());

console.log("--------------------------------------------------");

// Q22. Extract the last 4 characters of any given string.
console.log("Q22. extract last 4 characters of the string");
let string = "Happy Diwali";
console.log(string.slice(-4));

console.log("--------------------------------------------------");

// Q23. Convert “Javascript is fun” → “JAVASCRIPT IS FUN” → “javascript is fun”.
console.log("Q23. convert the string to uppercase and lowercase");
let js_string = "Javascript is fun";
console.log(js_string.toUpperCase());
console.log(js_string.toLowerCase());

console.log("--------------------------------------------------");

// Q24. Replace all occurrences of “light” with “spark” in “Festival of lights brings light”.
console.log("Q24. replace all occurrences of light with spark");
let festival_string = "Festival of lights brings light";
let replaced_string = festival_string.replaceAll("light", "spark");
console.log(replaced_string);

console.log("--------------------------------------------------");

// Q25. Find if a string starts with “Happy” and ends with “Diwali”.
console.log("Q25. check if string starts with happy and ends with diwali");
let check_string = "Happy Diwali";
if (check_string.startsWith("Happy") && check_string.endsWith("Diwali"))
{
    console.log("the string starts with Happy and ends with Diwali");
}
else
{
    console.log("the string does not start with Happy and end with Diwali");
}
console.log("====================================================");

//5. conversion (number <-> string)
// =====================================================

// Q26. Convert number 2025 into a string and print its type.
console.log("Q26. convert number to string and print its type");
let orr_number = 2025;
let str_number = orr_number.toString();
console.log(typeof str_number);

console.log("--------------------------------------------------");

// Q27. Convert string “99.9” to number and round it.
console.log("Q27. convert string to number and round it");
let str_num = "99.9";
let num_conv = Number(str_num);
console.log(Math.round(num_conv));

console.log("--------------------------------------------------");

// Q28. Add number + string and explain result for (5 + "5") and (5 - "5").
console.log("Q28. add number and string and explain the result");
let number1 = 5;
let str1 = "5";
console.log(number1 + str1);
//In the above case when we add number and string it will convert the number into string and concatenate both the value and give us 55 as output
console.log(number1 - str1);
//In the above case when we subtract number and string it will convert the string into number and perform the subtraction and give us 0 as output

console.log("--------------------------------------------------");

// Q29. Convert true → 1 and false → 0 using Number().
console.log("29. convert number to boolean using number ");
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log("--------------------------------------------------");

//Q30. ask: what happens when you do String(10 + 5) vs String(10) + String(5)?
console.log("Q30. string operations");
console.log(String(10 + 5)); //15
//in the above it will add the digits and then converts it into the string so we get 15 
console.log(String(10) + String(5)); //105
//in the above it will convert both the number into string and then concatenate

console.log("====================================================");

//6. operators (logical + arithmetic + ternary)


//Q31. Calculate and print: ((10 + 3) ** 2) / 13.
console.log("Q31. calculate the expression");
let result = ((10+ 3) ** 2) /13;
console.log(result);

console.log("--------------------------------------------------");

//Q32. Create a program that checks if a number is divisible by both 3 and 5.
console.log("Q32. check if number is divisible by both 3 and 5");
let div_number = 15;
if (div_number % 3 === 0 && div_number % 5 === 0)
{
    console.log(div_number + "is divisible with both 3 & 5");

}else
{
    console.log(div_number + "is not divisible with both 3 & 5");
}

console.log("--------------------------------------------------");

//Q33. Use logical operators to check if a student’s age is between 18–25 and from “Pune”.
console.log("Q33. check the age and student city using logical operators");
let student_age = 30;
let student_city = "Pune";
if (student_age >= 18 && student_age <= 25 && student_city === "Pune");
{
    console.log("the student age is between 18-25 and from Pune");
}

console.log("--------------------------------------------------");

// Q34. Use ternary operator to check if given marks >= 40 → “Pass” else “Fail”.
console.log("Q34. check the marks using ternary operator");
let marks = 35;
let result_marks = marks >= 40 ? "Pass" : "Fail";
console.log(result_marks);

console.log("--------------------------------------------------");

// Q35. Find the output of: console.log(5 + 3 * 2 ** 2) and explain order of evaluation.
console.log("Q35. order of evaluation");
console.log(5 + 3 * 2 ** 2);
// In the above expression first it will evaluate the exponentiation operator which is 2**2 and give us 4
// then it will evaluate the multiplication operator which is 3*4 and give us 12
// then it will evaluate the addition operator which is 5+12 and give us 17 as output

console.log("====================================================");

//7. date (real-time applications)

// Q36. Print today’s date in format “DD-MM-YYYY”.
console.log("Q36. print today's date in DD-MM-YYYY format");
let today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; //months are zero indexed
let year = today.getFullYear();

if (day < 10) {
    day = "0" + day;
}
if (month < 10) {
    month = "0" + month;
}

console.log(day + "-" + month + "-" + year);

console.log("--------------------------------------------------");

// Q37. Print current time in format “HH:MM:SS”.
console.log("Q37. print current time in HH:MM:SS format");
let current_time = new Date();
let hours = current_time.getHours();
let minutes = current_time.getMinutes();
let seconds = current_time.getSeconds();
if (hours < 10) {
    hours = "0" + hours;
}
if (minutes < 10) {
    minutes = "0" + minutes;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}
console.log(hours + ":" + minutes + ":" + seconds);

console.log("--------------------------------------------------");

// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.
console.log("Q38. find the day for 24 oct 2025");
let date = new Date ("24 Oct 2025");   //the D should be capital in Date otherwise it will give us invalid date error
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day_of_week = days[date.getDay()];
console.log("24 Oct 2025 falls on " + day_of_week);

console.log("--------------------------------------------------");

// Q39. Calculate how many days are left for Diwali 2026 (use Date difference).
console.log("Q39. calculate how many days are left for diwali 2026");
let today_date = new Date();
let diwali_date = new Date("08 nov 2026");
let time_diff = diwali_date - today_date;
let days_left = Math.floor(time_diff / (1000 * 60 * 60 * 24)); // 1000=miliseconds, 60=seconds, 60=minutes, 24=hours
console.log("Number of days left for Diwali 2026: " + days_left);

console.log("---------------------------------------------------");

//Q40. Print “Good Morning / Good Afternoon / Good Evening” based on current hour.
console.log("Q40. print good morning/afternoon/evening based on current hour");
let current_hour = new Date().getHours();
if (current_hour < 12) {
    console.log("Good Morning");
}
else if (current_hour < 18) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}   

console.log("====================================================");

// BONUS CHALLENGE (Optional)
console.log("BONUS CHALLENGE");
//getting the privious questions data 
console.log("Number of days left for Diwali 2026: " + days_left);
if (days_left <= 10){
    console.log("🪔 Get Ready to Celebrate!")
}
