
// Assignment: JavaScript Date and Time Exercises

/* 
Question 1: 
Prompt the user to enter the number of years they have lived. 
Then, calculate the number of seconds a person can live. 
Assume someone lives 100 years as the maximum. 
*/
let year=100
let NoOfSecondiYear=(365*24*60*60)
console.log(`no of second person can live in one year ${NoOfSecondiYear}`)

let NoOfSecondIn100Year=year*NoOfSecondiYear
console.log(`no of second person can live in given year year ${NoOfSecondIn100Year}`)




/*
Also, display the current time in various formats.
dd:mm:yyyy HH:mm (24 hours)
dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
yyyy:mm:DD mm:hh 

*/
//get date-----dd
let date =new Date()

let day =date.getDate()//////////to get todays date
console.log(day)//13
let formatedDate=(day<9)?`0${day}`: day
console.log(formatedDate)///date adding 0

//get month
let month=date.getMonth()+1
console.log(month)
let formatedMonth=(month<9)?`0${month}`:month
console.log(formatedMonth)///date adding 04

let shortMonth=date.toLocaleString("en-gb",{month:"short"})
console.log(`short month name ${shortMonth}`)

let longtMonth=date.toLocaleString("en-gb",{month:"long"})
console.log(`long month name ${longtMonth}`)

let yearr=date.getFullYear()
console.log(yearr)


let hh=date.getHours()
console.log(hh)

let fornmattedhr=(hh>12)?`0${hh-12}`:hh
console.log(fornmattedhr)

let min=date.getMinutes()
console.log(min)

let fornmattedmin=(min<10)?`0${min}`:min
console.log(fornmattedmin)

//dd:mm:yyyy HH:mm (24 hours)
console.log(`${formatedDate}:${formatedMonth}:${yearr} ${hh}:${fornmattedmin}`)//13-04-2026 14:45

//dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
console.log(`${formatedDate}:${shortMonth}:${yearr}  ${fornmattedhr}:${fornmattedmin}`)//13:Apr:2026 03:14

//dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
console.log(`${formatedDate}:${longtMonth}:${yearr}  ${fornmattedhr}:${fornmattedmin}`)//13:April:2026 03:14

//yyyy:mm:DD mm:hh 
console.log(`${yearr}:${formatedMonth}:${formatedDate} ${fornmattedmin}:${fornmattedhr} `)//2026:04:13 14:03




/*

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
*/
//(e.g., "Monday, 02 October 2024 3:30 pm").

// Get parts directly
let dayName = date.toLocaleString('en-IN', { weekday: 'long' });
let day1 = String(date.getDate()).padStart(2, '0');
let month1 = date.toLocaleString('en-IN', { month: 'long' });
let year1 = date.getFullYear();

let hours = date.getHours();
let minutes = String(date.getMinutes()).padStart(2, '0');

// 12-hour format
let period = (hours >= 12) ? "pm" : "am";
hours = hours % 12;
hours = hours === 0 ? 12 : hours;

console.log(`${dayName}, ${day1} ${month1} ${year1} ${hours}:${minutes}`);

let hours24 = String(date.getHours()).padStart(2, '0');

console.log(`${dayName}, ${day1} ${month1} ${year1} ${hours24}:${minutes} ${period}`);

/* 
Question 3: 
Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').

31 -dec
*/

let futureDate = new Date("2026-12-31");
let targetDate = new Date("2026-04-14");

let diff = futureDate - targetDate;

let days = diff / (1000 * 60 * 60 * 24);

console.log("difference "+days);

/* 
Question 4: 
Check if a current  year is a leap year.

*/
let yr = new Date().getFullYear();

let isLeap = (yr % 4 === 0 && yr % 100 !== 0) || (yr % 400 === 0);

console.log(isLeap ? "Leap Year" : "Not a Leap Year");



