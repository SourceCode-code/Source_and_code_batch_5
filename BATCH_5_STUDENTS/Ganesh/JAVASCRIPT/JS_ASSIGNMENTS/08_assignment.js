
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

 
//Question 2: 
//Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
//(e.g., "Monday, 02 October 2024 15:30").
let dd = new Date();

let day = dd.toLocaleDateString("en-gb",{weekday:"long"});
let date = dd.getDate()
let month = dd.toLocaleDateString("en-gb",{month:"long"});
let year = dd.getFullYear();
let time = dd.getHours();
let minutes = dd.getMinutes();
//(e.g., "Monday, 02 October 2024 15:30").
console.log(`${day}, ${date} ${month} ${year} ${time}:${minutes}`)

//(e.g., "Monday, 02 October 2024 3:30 pm").
let newTime = dd.toLocaleTimeString("en-bg",{hour:"2-digit", minute: "2-digit"});
let newDate = dd.toLocaleString("en-gb",{weekday:'long',month:"long",day:'2-digit',year:'numeric'});
console.log(`${newDate} ${newTime}`);

 
//Question 3: 
//Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').
//31 -dec

let date1 = new Date("2026-12-31");
let date2 = new Date();
let diff = Math.ceil((date1-date2)/(1000*3600*24));
console.log(`The difference between ${date1.toLocaleDateString()} and ${date2.toLocaleDateString()} is ${diff}`)

 
//Question 4: 
//Check if a current  year is a leap year.

(dd.getFullYear() % 4 === 0 && dd.getFullYear() % 100 !== 0) || (dd.getFullYear() % 400 === 0)?console.log(`${dd.getFullYear()} is leap year}`):console.log(`${dd.getFullYear()} is not leap year`);

