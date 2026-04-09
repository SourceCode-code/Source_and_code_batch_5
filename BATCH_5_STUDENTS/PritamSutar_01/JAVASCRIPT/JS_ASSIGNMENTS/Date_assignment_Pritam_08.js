//Date related assignment

let date = new Date()
console.log(date)

let month = date.getMonth()+1
console.log(month)

let year = date.getFullYear()
console.log(year)

let curSMonth = date.toLocaleString("en-gb",{month:"short"})
console.log(curSMonth)


let curLMonth = date.toLocaleString("en-gb",{month:"long"})
console.log(curLMonth)

let cdate = date.getDate()
console.log(cdate)

console.log(`${year}/${month}/${cdate}`)
console.log(`${cdate}/${month}/${year}`)
console.log(`${year}/${cdate}/${month}`)

let formatDate = cdate<10?`0${cdate}`:cdate
let formatMonth = month<10?`0${month}`:month

console.log(`${formatDate}/${formatMonth}/${year}`)
