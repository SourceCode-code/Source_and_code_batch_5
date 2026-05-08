/**
 * Exercises: Level 1
 */

// 1. Get user input using prompt("Enter your age:").
// If user is 18 or older, give feedback: 'You are old enough to drive'.
// If not 18, give feedback stating how many years are left to turn 18.

/**
 * Enter your age: 30
 * You are old enough to drive.
 *
 * Enter your age: 15
 * You are left with 3 years to drive.
 */

let age = 17;
if (age >= 18) {
  console.log(`Yor are old enough to drive`);
} else {
  console.log(`You are left with ${18 - age} years to drive`);
}

// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.
/**
 * Enter your age: 30
 * You are 5 years older than me.
 */

let myAge = 40;
let yourAge = 35;
if (myAge > yourAge) {
  console.log(`You are ${myAge - yourAge} years yonger than me.`);
} else {
  console.log(`You are ${yourAge - myAge} years older than me.`);
}

// 3. Compare if 'a' is greater than 'b'.
// Implement it in two ways: using if...else and ternary operator.
/**
 * 4 is greater than 3
 */

let a = 4;
let b = 3;

// Using if...else
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

// Using ternary operator
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

// 4. Check if a number is even or odd.
/**
 * Enter a number: 22
 * 22 is an even number.
 *
 * Enter a number: 99
 * 99 is an odd number.
 */

let givenNumber = 25;
if (givenNumber % 2 === 0) {
  console.log(`${givenNumber} is even`);
} else {
  console.log(`${givenNumber} is odd`);
}

/**
 * Exercises: Level 2
 */

// 1. Write a code to give grades to students according to their scores:
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F
let score = 51;
switch (true) {
  case score >= 80 && score <= 100:
    console.log("Grade : A");
    break;
  case score >= 70 && score <= 79:
    console.log("Grade : B");
    break;
  case score >= 60 && score <= 69:
    console.log("Grade : C");
    break;
  case score >= 50 && score <= 59:
    console.log("Grade : D");
    break;
  case score >= 0 && score <= 49:
    console.log("Grade : F");
    break;
  default:
    console.log("please enter a valid input data");
}

// 2. Check the season based on user input month.

let month = "december";
month = month.toLowerCase();

if (
  month === "february" ||
  month === "march" ||
  month === "april" ||
  month === "may"
) {
  console.log("Current season is Summer");
} else if (
  month === "june" ||
  month === "july" ||
  month === "august" ||
  month === "september"
) {
  console.log("Current season is Autumn");
} else if (
  month === "october" ||
  month === "november" ||
  month === "december" ||
  month === "january"
) {
  console.log("Current season is Winter");
} else {
  console.log("Invalid input");
}

// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.

/**
 * What is the day today? Saturday
 * Saturday is a weekend.
 *
 * What is the day today? FrIDAy
 * Friday is a working day.
 */
let day = "MONDAY";
day = day.toLowerCase();

if (day === "saturday" || day === "sunday") {
    console.log(`${day} is a weekend.`);
}
else if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday"
) {
    console.log(`${day} is a working day.`);
}
else {
    console.log("Invalid input");
}


/**
 * Exercises: Level 3
 */

// 1. Write a program that tells the number of days in a month.

/**
 * Enter a month: January
 * January has 31 days.
 */


month = "february";
month = month.toLowerCase();
if (
    month === "january" ||
    month === "march" ||
    month === "may" ||
    month === "july" ||
    month === "august" ||
    month === "october" ||
    month === "december"
) {
    console.log(`${month} has 31 days.`);
}
else if (
    month === "april" ||
    month === "june" ||
    month === "september" ||
    month === "november"
) {
    console.log(`${month} has 30 days.`);
}
else if (month === "february") {
    console.log(`${month} has 28 or 29 days depnding on leap year.`);
}
else {
    console.log("Invalid input");
}
