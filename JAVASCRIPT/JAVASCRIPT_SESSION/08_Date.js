// Date --> keyWord / object that is used to display and manipulate time and date 

// how to get date and time 

// step 1 you have to initalize a object of date 

let date = new Date()

console.log(date) //2026-04-02T15:42:13.889Z

// on Date we have different method that used to get the required data 

//getFullYear() --> this method will return the current year in 4 digit 

let year = date.getFullYear() // 2026
console.log(year)


// getMonth() --> it will return the current month but here (jan is consrided as zero and december is considered as 11) 
// if we want to get in in human/ roman calnder just add 1

let curMonth = date.getMonth()+1
console.log(curMonth)


// short form in letters 

let curshortMonth = date.toLocaleString("en-gb",{month:"short"})
console.log(curshortMonth)
// Apr

//long form in letters 
let curlongmonth = date.toLocaleString("en-gb",{"month":"long"})
console.log(curlongmonth)
//April

//getDate() --> this will give you the current day of the month
let curdate = date.getDate()
console.log(curdate)

// 2/4/2026
//dd/mm/yyyy  ---> // 2/4/2026
console.log(`${curdate}/${curMonth}/${year}`)
//2/Apr/2026
console.log(`${curdate}/${curshortMonth}/${year}`)
//2/April/2026
console.log(`${curdate}/${curlongmonth}/${year}`)


// if the date or month is between 1-9 i have to add zero 
// if the month or date is 10 or greater

let formatdate = curdate<10?`0${curdate}`:curdate
let formatmonth = curMonth<10?`0${curMonth}`:curMonth
console.log(`${formatdate}/${formatmonth}/${year}`)

// PadStart() --> using to add charactwer to string form the start upto given length
//syntax 
// padStart(what length of the string,"what character to add")

let dateformat = String(curdate).padStart(2,"0")
console.log(dateformat)

let monthformat =String(curMonth).padStart(2,"0")
console.log(monthformat)

//PadEnd() --> using to add charactwer to string form the end upto given length

let dateformat1 = String(curdate).padEnd(2,"0")
console.log(dateformat1)


// ------------------------------------------------------------

// TIME --- 

// by default in time it will show 24 hour format
// getHour() --> returns the current hour 
let curhour = date.getHours()

console.log(curhour)

// getMinutes() --> this will return Minutes

let curMin  = date.getMinutes()
console.log(curMin)
//getSeconds() --> return the current seconds
let curSec  = date.getSeconds()
console.log(curSec)

console.log(`${curhour}:${curMin}:${curSec}`)


//task is --> you have convert this 24 time into the 12 format 
// 9:51 pm

let ampm = (curhour<12)?"am":"pm"
console.log(ampm)
let chours = curhour%12   //
console.log(chours) 


let hourformat = String(chours).padStart(2,"0")
let minformat = String(curMin).padStart(2,"0")
let secformat = String(curSec).padStart(2,"0")

console.log(`${hourformat}:${minformat}:${secformat} ${ampm}`)


let cur_time = date.toLocaleString("en-In",{timeZone:"Asia/Kolkata",day:"2-digit",month:"2-digit",year:"numeric",
    hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:true
})

console.log(cur_time)



// -----------------------------------------------------------------------------------------------------


// MANIPUALTION OF DATE setDate()  setMonth() setYear()
//NOTE:- when you use  set method it manipulated  the delecraed date object  or initalize date obejct 

let mani_date = new Date()

let todaydate = mani_date.getDate()  //3
console.log(todaydate)

mani_date.setDate(todaydate+2)

console.log(mani_date.getDate())

// setMonth 

let thismonth = mani_date.getMonth()+1
console.log(thismonth)

mani_date.setMonth(thismonth+2)

console.log(mani_date.getMonth())

// setYear()

let thisyear = mani_date.getFullYear()

mani_date.setFullYear(thisyear+4)

console.log(mani_date.getFullYear())

// setHour  setMintues setSeconds