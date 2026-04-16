
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

let age = 25;

let secondsLived = age * 365 * 24 * 60 * 60;
console.log(`Seconds lived: ${secondsLived}`);

let maxAge = 100;
let maxSeconds = maxAge * 365 * 24 * 60 * 60;
console.log(`Max seconds (100 years): ${maxSeconds}`);



/* 
Question 2: 
Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
(e.g., "Monday, 02 October 2024 15:30").


(e.g., "Monday, 02 October 2024 3:30 pm").

)*/
let date = new Date();


let dayName = date.toLocaleString("en-IN", { weekday: "long" });

let day = date.toLocaleString("en-IN", { day: "2-digit" });


let month = date.toLocaleString("en-IN", { month: "long" });


let fullyear = date.getFullYear();


let time24 = date.toLocaleString("en-IN", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false
});


let time12 = date.toLocaleString("en-IN", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true
});



console.log(`${dayName}, ${day} ${month} ${fullyear} ${time24}`);


console.log(`${dayName}, ${day} ${month} ${fullyear} ${time12}`);



/* 
Question 3: 
Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').

31 -dec


*/
let inputDate = "2026-12-31";

let today = new Date();
let targetDate = new Date(inputDate);

let timeDiff = targetDate - today;

let dayDiff = (timeDiff / (1000 * 60 * 60 * 24));


  console.log(`Days left: ${dayDiff}`);



/* 
Question 4: 
Check if a current  year is a leap year.

*/
let year = new Date().getFullYear();

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(`${year}  is a leap year.`);
} else {
  console.log(`${year} is Not a leap year.`);
}