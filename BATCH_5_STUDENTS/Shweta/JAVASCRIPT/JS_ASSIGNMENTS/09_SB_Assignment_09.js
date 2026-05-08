//

/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.


/*
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 *

let age = 18
console.log(age)

if (age>=18){console.log("you are old enough to drive")}
else{console.log("you are left to turn 18")}

let age1 = 30
console.log(age1)

if (age1>=18){console.log("you are old enough to drive")}
else{console.log("you are left to turn 18")}

let age2 = 15
console.log(age2)

if (age2>=18){console.log("you are old enough to drive")}
else{console.log("you are left to turn 18")} */





// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.



/*
 * Enter your age: 30
 * You are 5 years older than me.
 

let myAge = 25
console.log(myAge)

let yourAge = 30
console.log(yourAge)

if (yourAge>=myAge){console.log("you are older than me")}
else{console.log("you are younger than me")}


output = you are older than me */








/* 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a = 4;
let b = 3;

// Using if...else
// Using ternary operator



 * 4 is greater than 3
 *
let a1 = 4
console.log(a)

let b1 = 3
console.log(b)

if (a>=b){console.log("a is greter than b")}
else{console.log("a is not greater than b")}

output = a is greater than b */

/*using ternory oprator

let a1 = 4
let b1 = 3

let compare =(a>=b)?"a is greater b":"a is not greater than b"
console.log(compare) */






/* 4. Check if a number is even or odd.


/*
 * Enter a number: 22
 * 22 is an even number.
 *
 * Enter a number: 99
 * 99 is an odd number.
 

/* even number or odd

let num  = 22
let evenOdd = (num % 2===0)? "Even number":"odd number"
console.log(evenOdd)

let num1 = 99
let evenOdd1 = (num1 % 2===0)? "Even number": "odd number"
console.log(evenOdd1) */






/* 2. Check the season based on user input month.

let month = "may"
month = month.toLowerCase()
if (month==="february"|| month==="march"|| month==="april"|| month==="may"){console.log("summer")}
else if (month==="june" || month==="july"|| month==="august"|| month==="september"){console.log("rainy")}
else if(month==="october"|| month==="november"|| month==="december"|| month==="january"){console.log("winter")}
else{console.log("invalid month")} */




// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.



/*
 * What is the day today? Saturday
 * Saturday is a weekend.
 *
 * What is the day today? FrIDAy
 * Friday is a working day.
 *

let day =prompt ("what is the day today?").toLowerCase();

let weekend = ["saturday" , "sunday"];

if (weekend.includes(day)){console.log(day.charAt(0).toUpperCase()+day.slice(1)+"is a weekend.");}
else{console.log(day.charAt(0).toUpperCase()+day.slice(1)+"ia a working day")} */




/**
 * Exercises: Level 3
 */

// 1. Write a program that tells the number of days in a month.



/**
 * Enter a month: January
 * January has 31 days.
 *
let months= "january"
console.log(months)

let formatedMonths = months.toLowerCase()
console.log(formatedMonths)
switch (months){
case "january":
case "march":
case "may" :
case "july":
case "october":
case "december":
Console.log(`${months} has 31 days`)
break
case "april" :
case "june":
case "september":
case "november":
console.log(`${months} has 30 days`)
break
case "february":
console.log(`${months} has 28 days`)
break
default:console.log("Enter valid months")

} */





























/* 1 Write a code to give grades to students according to their scores 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F

let a = 86
console.log(a)
let b = 75
console.log(b)
let c = 60
console.log(c)
let d = 60
console.log(d)
let f = 35
console.log(f)

let score =0 -100
console.log(score)

if (score<=80 && score>=100){console.log("a is greater than 90")}
else{console.log("a is less than 100")} 
if (score<=79 && score>=70){console.log("b is greater than 70")}
else{console.log("b is less than 79")}
if(score<=60 && score>=69){console.log("c is greater than 60")}
else{console.log("c is less than 69")}
if(score<=50 && score>=59){console.log("d is greater than 50")}
else{console.log("d is less than 59")}
if(score<=0 && score>=49){console.log("f is greater than 0")}
else{console.log(" f is less than 49")}*/