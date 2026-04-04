/*  new assignment 

let date = new Date()
console.log(date) //2026-04-02T15:42:13.889Z */

/*date

let date = new Date()
console.log(date) */

//year
let date = new Date()

console.log(date) 

let year = date.getFullYear()
console.log(year)

let curMonth = date.getMonth()+1
console.log(curMonth)


let curshortMonth =date.toLocaleString("en"-"gb",{month :"short"})
console.log(curshortMonth)

let curlongMonth =date.toLocaleString("en" -"gb",{month :"long"})
console.log(curlongMonth)

let curdate = date.getDate()
console.log(curdate)

console.log(`${curdate} /${curMonth} / ${year}`)

console.log(`${curdate} /${curshortMonth} / ${year}`)

console.log(`${curdate} /${curlongMonth} / ${year}`)


let formatdate = curdate<10?`0${curdate}`:curdate
let formatmonth =curdate<10?`0${curdate}` :curdate

console.log(`${formatdate}/${formatmonth}/${year}`)
