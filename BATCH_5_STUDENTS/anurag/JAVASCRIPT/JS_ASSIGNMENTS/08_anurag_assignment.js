// assignment on date and time 

/*
Question 1:
Prompt the user to enter the number of years they have lived. 
Then, calculate the number of seconds a person can live. 
Assume someone lives 100 years as the maximum. 
Also, display the current time in various formats.

dd:mm:yyyy HH:mm (24 hours)
dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
dd:mm:yyyy HH:mm (12 hours) // (month should be like october)   
yyyy:mm:DD mm:hh
*/

/*
let age = 25
let secondslived = age*(365*24*60*60) //assume this is not a leap year
console.log(secondslived) //788400000
let assumption = 100
let secondslived2 = assumption*(365*24*60*60) //assume this is not a leap year 
console.log(secondslived2)  //  3153600000
*/
let years = 30; // your age in years
let secondsLived = years * (365 * 24 * 60 * 60)
console.log(`You have lived approximately ${secondsLived} seconds.`)

// Current date
let date = new Date()

let currdate = String(date.getDate()).padStart(2, "0")
let currMonth = String(date.getMonth() + 1).padStart(2, "0")
let year = date.getFullYear()

// Month names
let curshortMonth = date.toLocaleString('en-US', { month: 'short' });
let curlongmonth = date.toLocaleString('en-US', { month: 'long' });

// Time
let currhour = date.getHours()
let currMin = String(date.getMinutes()).padStart(2, "0")

// 12 hour format
let hours12 = currhour % 12 || 12
let ampm = currhour >= 12 ? "PM" : "AM"

// 1. dd:mm:yyyy HH:mm (24 hours)
console.log(`${currdate}:${currMonth}:${year} ${currhour}:${currMin}`)

// 2. dd:mm:yyyy HH:mm (12 hours short month)
console.log(`${currdate}:${curshortMonth}:${year} ${hours12}:${currMin} ${ampm}`)

// 3. dd:mm:yyyy HH:mm (12 hours full month)
console.log(`${currdate}:${curlongmonth}:${year} ${hours12}:${currMin} ${ampm}`)

// 4. yyyy:mm:DD mm:hh
console.log(`${year}:${currMonth}:${currdate} ${currMin}:${currhour}`)

console.log("--------------------------------------------------")

/* 
Question 2: 
Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
(e.g., "Monday, 02 October 2024 15:30").


(e.g., "Monday, 02 October 2024 3:30 pm").
*/
let dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
console.log(`${dayOfWeek}, ${currdate} ${curlongmonth} ${year} ${currhour}:${currMin}`)
console.log(`${dayOfWeek}, ${currdate} ${curlongmonth} ${year} ${hours12}:${currMin} ${ampm}`)

console.log("--------------------------------------------------")

/* 
Question 3: 
Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').
31 -dec
*/
let targetDate = new Date('2024-12-31')
let currentDate = new Date()
let timeDiff = targetDate - currentDate
let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
console.log(`There are ${daysLeft} days left until December 31, 2024.`)

console.log("--------------------------------------------------")

/*
Question 4:
Check if a current year is a leap year.
*/
let currentYear = date.getFullYear()
let isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0)
console.log(`${currentYear} is a leap year: ${isLeapYear}`)

console.log("--------------------------------------------------")
