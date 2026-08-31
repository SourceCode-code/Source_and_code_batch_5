/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:"). 
// If user is 18 or older, give feedback: 'You are old enough to drive'. 
// If not 18, give feedback stating how many years are left to turn 18.

let user1_age = 18
if(user1_age >= 18){ console.log("You are old enough to drive.")}
else{ console.log(`You are left with ${18 - user1_age} years to drive.`)}

let user2_age = 14
if(user2_age >= 18){ console.log("You are old enough to drive.")}
else{ console.log(`You are left with ${18 - user2_age} years to drive.`)}




/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */
let user3_age = 30
if(user3_age >= 18){ console.log("You are old enough to drive.")}
else{ console.log(`You are left with ${18 - user3_age} years to drive.`)}

let user4_age = 15
if(user4_age >= 18){ console.log("You are old enough to drive.")}
else{ console.log(`You are left with ${18 - user4_age} years to drive.`)}



// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.
let MyAge = 25
let YourAge = 30
if(MyAge > YourAge){console.log(`You are ${MyAge - YourAge} years older than me.`)}
else if(MyAge < YourAge){console.log(`You are ${YourAge - MyAge} years younger than me.`)}
else {console.log("We are of the same age.")}


/**
 * Enter your age: 30
 * You are 5 years older than me.
 */

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

let a = 4;
let b = 3;

// Using if...else
if (a > b) {
    console.log(`${a} is greater than ${b}`)} 
    else {console.log(`${a} is not greater than ${b}`)}

// Using ternary operator
console.log(a > b ? `${a} is greater than ${b}` : `${a} is not greater than ${b}`)

/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.
let Number1 = 22
if(Number1 % 2 === 0) {console.log(`${Number1} is an even number.`)}
else {console.log(`${Number1} is an odd number,`)}

let Number2 = 99
if(Number2 % 2 === 0) {console.log(`${Number2} is an even number.`)}
else {console.log(`${Number2} is an odd number,`)}

/**
 * Enter a number: 22
 * 22 is an even number.
 *
 * Enter a number: 99
 * 99 is an odd number.
 */


/**
 * Exercises: Level 2
 */

// 1. Write a code to give grades to students according to their scores:
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F
let score = 95
if(score >= 80 && score <= 100){console.log("You got A grade.")}
else if(score >= 70 && score <= 79){console.log("You got B grade.")}
else if(score >= 60 && score <= 69){console.log("You got C grade.")}
else if(score >= 50 && score <= 59){console.log("You got D grade.")}
else if(score >= 0 && score <= 49){console.log("You got F grade.")}
else{console.log("Invalid score.")}


// 2. Check the season based on user input month.
let Current_Month = "December"
if(Current_Month === "December" || Current_Month === "January" || Current_Month === "February"){console.log("The season is Winter.")}
else if(Current_Month === "March" || Current_Month === "April" || Current_Month === "May"){console.log("The season is Spring.")}
else if(Current_Month === "June" || Current_Month === "July" || Current_Month === "August"){console.log("The season is Summer.")}
else if(Current_Month === "September" || Current_Month === "October" || Current_Month === "November"){console.log("The season is Autumn.")}
else{console.log("Kindly enter a valid month.")}


// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.
let Today = "Saturday"
if(Today.toUpperCase() === "SATURDAY" || Today.toUpperCase() === "SUNDAY"){console.log(`${Today} is a weekend.`)}
else if(Today.toUpperCase() === "MONDAY" || Today.toUpperCase() === "TUESDAY" || Today.toUpperCase() === "WEDNESDAY" || Today.toUpperCase() === "THURSDAY" || Today.toUpperCase() === "FRIDAY"){console.log(`${Today} is a working day.`)}
else{console.log("Kindly enter a valid day.")}

let Today_1 = "Friday"
if(Today_1.toLowerCase() === "saturday" || Today_1.toLowerCase() === "sunday"){console.log(`${Today_1} is a weekend.`)}
else if(Today_1.toLowerCase() === "monday" || Today_1.toLowerCase() === "tuesday" || Today_1.toLowerCase() === "wednesday" || Today_1.toLowerCase() === "thursday" || Today_1.toLowerCase() === "friday"){console.log(`${Today_1} is a working day.`)}
else{console.log("Kindly enter a valid day.")}

/**
 * What is the day today? Saturday
 * Saturday is a weekend.
 *
 * What is the day today? FrIDAy
 * Friday is a working day.
 */


/**
 * Exercises: Level 3
 */

// 1. Write a program that tells the number of days in a month.
let month = "February"
if(month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December"){console.log(`${month} has 31 days.`)}
else if(month === "April" || month === "June" || month === "September" || month === "November"){console.log(`${month} has 30 days.`)}
else if(month === "February"){console.log(`${month} has 28 days.`)}
else{console.log("Kindly enter a valid month.")}


/**
 * Enter a month: January
 * January has 31 days.
 */