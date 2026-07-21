
// Assignment: JavaScript Date and Time Exercises

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

let age = 25

 let secondslived = age*(365*24*60*60) //assume this is not a leap year 
console.log(secondslived) //788400000

let assumption = 100
let secondslived2 = assumption*(365*24*60*60) //assume this is not a leap year 
console.log(secondslived2)  //  3153600000

/* 
Question 2: 
Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
(e.g., "Monday, 02 October 2024 15:30").


(e.g., "Monday, 02 October 2024 3:30 pm").

*/
let date = new Date()
console.log(date)
console.log("Current Timing : ", date.toLocaleString("en-GB",{
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
}))



/* 
Question 3: 
Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').

31 -dec


*/
let currentDate = new Date()
let countDate = new Date('2028-07-29')
let difference = countDate - currentDate
const daysLeft = Math.ceil((difference)/ (1000 * 60 * 60 * 24))
console.log("No. of Days left",daysLeft)
/* 
Question 4: 
Check if a current  year is a leap year.

*/
let currDate = new Date()
let currentYear = currDate.getFullYear()
console.log(currentYear)
if ((currentYear%4 == 0 && currentYear%100 !== 0) || currentYear %400 == 0)
    console.log("It is Leap Year")
else
    console.log("It is not leap Year")