

// Assignment: JavaScript Date and Time Exercises

// 
//Question 1: 
//Prompt the user to enter the number of years they have lived. 
//Then, calculate the number of seconds a person can live. 
//Assume someone lives 100 years as the maximum. 
//Also, display the current time in various formats.


//dd:mm:yyyy HH:mm (24 hours)
//dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
//dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
/*yyyy:mm:DD mm:hh 



let age = 25

 let secondsLived = age * 365 * 24 * 60 * 60 

console.log(secondsLived) 

let assumption = 100
let secondslived2 = assumption  * 365 *  24  *  60 * 60 
console.log(secondslived2)

let date = new Date()
console.log(date)

let curdate =date.getDate()
console.log(curdate)

let formatdate = curdate<10?`0${curdate}`:curdate

 console.log(formatdate)

let curMonth =date.getMonth()
console.log(curMonth)

let formatmonth = curMonth<10?`0${curMonth}`:curMonth
console.log(formatmonth)

let year = date.getFullYear()
console.log(year)

let now = new Date()
console.log(now)

let HH = String(now.getHours()).padStart(2 , '0')
console.log(HH)

let min = String(now.getMinutes()).padStart( 2 ,'0')
console.log(min)

let hours12 = now.getHours()%12
console.log(hours12)

let curshortMonth = date.toLocaleString("en-gb",{month:"short"})

console.log(curshortMonth)

let curlongMonth = date.toLocaleString("en-gb",{month:"long"})

console.log(curlongMonth)

console.log(`${date} :${curshortMonth} ${year} ${HH} ${min}`)

console.log(`${date} :${curshortMonth} ${year} ${hours12} ${min}`)

console.log(`${date} :${curlongMonth} ${year} ${hours12} ${min}`) */



 
/* question 2
//Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
//(e.g., "Monday, 02 October 2024 15:30

let date =new Date()
console.log(date)
let weekDay = date.toLocaleString("en-gb",{"weekday":"long"})

console.log(weekDay)

let curlongmonth =date.toLocaleString("en-gb",{"month":"long"})
console.log(curlongmonth)

let year = date.getFullYear()
console.log(year)

let curhour = date.getHours()
console.log(curhour)

let curMin  = date.getMinutes()
console.log(curMin)

let ampm = (curhour<12)?"am":"pm"
console.log(ampm)


console.log(`${date} ,${weekDay} ,${curlongmonth} ,${year} ,${curhour}'${curMin} ,${ampm}`)

output =  16 April 2026 thursday 12:41pm */





//question 3: 
//calculate how many days are left until a specific date (input: 'YYYY-MM-DD')

/*31 -dec

function daysLeft(targetDate) {


let today =new Date()
console.log(today)

let getDate = new Date()
console.log(getDate)

let diffTime = getDate - today
console.log(diffTime)

let diffDays = Math.ceil(diffTime /(1000 * 60 * 60* 24))
console.log(diffDays)

return diffDays ;
}
console.log(daysLeft("2026-12-31"))*/


/* 
Question 4: 
Check if a current  year is a leap year.



let date = new Date()
console.log(date)

let year =new Date()
console.log(year)

let formatYear = year.getFullYear()
console.log(formatYear)

let leapYear = formatYear % 4===0? "Is that leap year" :" Not leap year"
console.log(leapYear) */