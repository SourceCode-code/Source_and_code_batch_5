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
let age = 30

if (age >= 18) {
    console.log("You are old enough to drive.")
} else {
    let yearsLeft = 18 - age;
    console.log(`You are left with ${yearsLeft} years to drive.`)
}

// 2. Compare the values of myAge and yourAge using if...else.
// Log the result stating who is older. Use prompt("Enter your age:") to get the age input.

/**
 * Enter your age: 30
 * You are 5 years older than me.
 */
let myAge = 25
let yourAge = 30
if (myAge > yourAge) {
    console.log(`I am ${myAge - yourAge} years older than you.`)
} else if (yourAge > myAge) {
    console.log(`You are ${yourAge - myAge} years older than me.`)
} else {
    console.log("We are the same age.")
}

// 3. Compare if 'a' is greater than 'b'. 
// Implement it in two ways: using if...else and ternary operator.

// Using if...else

let a = 4;
let b = 3;
if (a < b) { console.log(`${a} is less than ${b}`) }
else (console.log(`${a} is greater than ${b}`))


// Using ternary operator
let condition = (a > b) ? `${a} is greater than ${b}`
    : `${a} is less than or equal to ${b}`
console.log(condition)
/**
 * 4 is greater than 3
 */

// 4. Check if a number is even or odd.
/**
 * Enter a number: 22
 * 22 is an even number.
 *
 * Enter a number: 99
 * 99 is an odd number.
 */
let num = 99
let evenOdd = (num % 2 === 0) ? "Even Number" : "Odd Number"
console.log(evenOdd)

/**
 * Exercises: Level 2
 */

// 1. Write a code to give grades to students according to their scores:
// 80-100: A, 70-79: B, 60-69: C, 50-59: D, 0-49: F
let score = 84
if (score >= 80 && score <= 100) {
    console.log("Grade A")
}
else if (score >= 70 && score <= 79) {
    console.log("Grade B")
}
else if (score >= 60 && score <= 69) {
    console.log("Grade C")
}
else if (score >= 50 && score <= 59) {
    console.log("Grade D")
}
else if (score >= 0 && score <= 49) {
    console.log("Grade F")
}
else (console.log("Enter Valid Score"))


// 2. Check the season based on user input month.
let month = "July"
month = month.toLowerCase()
if (month === "March" || month === "April" || month === "May") {
    console.log("Summer")
} else if (month === "june" || month === "july" || month === "august" || month === "september") {
    console.log("Rainy")
} else if (month === "october" || month === "november" || month === "december" || month === "january" || month === "february") {
    console.log("Winter")
} else {
    console.log("Invalid month")
}

// 3. Check if a day is a weekend or working day. Take day input and check its case insensitively.
/**
 * What is the day today? Saturday
 * Saturday is a weekend.
 *
 * What is the day today? FrIDAy
 * Friday is a working day.
 */
let day = "Saturday"
let formattedDay = day.toLowerCase()

switch (formattedDay) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log(`${day} is a working day`)
    break
  case "saturday":
  case "sunday":
    console.log(`${day} is a weekend`)
    break
  default:
    console.log("Enter valid day")
}

/**
 * Exercises: Level 3
 */

// 1. Write a program that tells the number of days in a month.
let months= "january"
let formattedMonths = months.toLowerCase()

switch (months){
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    console.log(`${months} has 31 days`)
    break
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${months} has 30 days`)
    break
  case "february":
    console.log(`${months} has 28 days`)
    break
    
  default:
    console.log("Enetr valid month")
}

/**
 * Enter a month: January
 * January has 31 days.
 */