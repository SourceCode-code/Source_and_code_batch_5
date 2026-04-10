
// Assignment: JavaScript Date and Time Exercises

/* 
Question 1: 
Prompt the user to enter the number of years they have lived. 
Then, calculate the number of seconds a person can live. 
Assume someone lives 100 years as the maximum. 
Also, display the current time in various formats.
*/

let age = 25
 let secondslived = age*(365*24*60*60) //assume this is not a leap year 
console.log(secondslived) //788400000

let secondLived= age*(365.25*24*60*60) //4 year= 1 leap ,365*3=1095 , leap year=366, total days=1095+366=1461, avg= 1461/4= 365.25
let formatedseconds= age*secondLived
console.log(formatedseconds)

let assumption = 100
let secondslived2 = assumption*(365*24*60*60) //assume this is not a leap year 
console.log(secondslived2)  //  3153600000


//ddm/m/yyyy ,HH:mm ampm
let date= new Date()
let formatedDate= date.toLocaleString("en-In",{timeZone:"Asia/Kolkata",day:"2-digit",month:"2-digit",year:"numeric",
    hour:"2-digit" , minute:"2-digit"
})
console.log("using es6 method=", formatedDate) //09/04/2026, 11:06 pm

//dd:mm:yyyy HH:mm (24 hours)
let currentDateee= date.getDate()
let currentMOnth= date.getMonth()+1
let currentYear= date.getFullYear()
let currentHour= date.getHours()
let currentMinutes= date.getMinutes()
console.log("Using method" ,`${currentDateee}:${currentMOnth}:${currentYear} ${currentHour}${currentMinutes}`)

//dd:mm:yyyy HH:mm (12 hours) // (month should be like oct)
let monthsList= ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"]
let currMonth= date.getMonth()
let formatedMonth= monthsList[currMonth]
console.log(formatedMonth)
let time= date.getHours()%12 ||12
let formatedTime= time.toString().padStart(2,"0")
console.log(formatedTime)
console.log(`${currentDateee}:${formatedMonth}:${currentYear}  ${formatedTime}:${currentMinutes}`)

//dd:mm:yyyy HH:mm (12 hours) // (month should be like october)
let monthsListss= ["January","February","March","April","May","June","July","August","September","October","November","December"]
let currMonthhh= date.getMonth()
let formatedMonthhh= monthsListss[currMonthhh]

let timeee= date.getHours()%12 ||12
let formatedTimeee= time.toString().padStart(2,"0")
console.log(`${currentDateee}:${formatedMonthhh}:${currentYear}  ${formatedTimeee}:${currentMinutes}`)

//yyyy:mm:DD mm:hh 
let formatedDatee= currentDateee.toString().padStart(2,"0")
let formetedMonth= currentMOnth.toString().padStart(2,"0")
console.log(`${currentYear}:${formetedMonth}:${formatedDatee}  ${currentMinutes}:${formatedTime}`)


/* 
Question 2: 
Return the date in the format: "Day of the Week, DD Month YYYY HH:mm" 
(e.g., "Monday, 02 October 2024 15:30").
(e.g., "Monday, 02 October 2024 3:30 pm").
*/

//(e.g., "Monday, 02 October 2024 15:30").

let format = new Date()

let currentDay1 = ["Sunday", "Monday", "Tuesday", "WednesDay", "Thursday", "Friday", "Saturday"]
let formatedDay = format.getDay()
let formDay = currentDay1[formatedDay]

let currentDate = format.getDate()
let formdate = currentDate.toString().padStart(2, "0");
let currentMonth = format.getMonth() + 1
let formMonth = currentMonth.toString().padStart(2, "0")
let curretYear = format.getFullYear()

let currentH = format.getHours()
let currentM = format.getMinutes()
let formMin = currentM.toString().padStart(2, "0")

console.log(`${formDay} ,${formdate},${formMonth} ${curretYear} ${currentH}:${formMin}`)


//(e.g., "Monday, 02 October 2024 3:30 pm").

let newDate = new Date()
let formated12 = newDate.toLocaleString("en-In", {
    timeZone: "Asia/Kolkata", weekday: "long", day: "2-digit", month: "long", year: "numeric",
    hour: "2-digit", minute: "2-digit", hour12: true
})
console.log(formated12)
/* 
Question 3: 
Calculate how many days are left until a specific date (input: 'YYYY-MM-DD').
31 -dec
*/
let today= new Date()
let dayss= new Date ("2026-12-31")
let timeDiff = dayss-today //22916586901 this is in time
let dayDiff= timeDiff/(1000*60*60*24) //convert milliseconds to then seconds to minutes and minutes to hours and hours to days
console.log(dayDiff)

/* 
Question 4: 
Check if a current  year is a leap year.
*/
let year= new Date()
let formatedYear= year.getFullYear()
let leapYear= formatedYear%4===0?"Leap year":"Not leap year"
console.log(leapYear)