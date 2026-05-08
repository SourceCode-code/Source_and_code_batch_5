console.log(typeof NaN)


// Q11. Write a program to check if a number is prime.  --->

let num = 8
let isPrime = true

if(num<2){
    isPrime = false
}
for(let i =2 ;i<Math.sqrt(num);i++){
    if(num%i===0){
        isPrime=false
    }
}
console.log(` the given number is a ${isPrime} prime number`)


// String(10 + 5) vs String(10) + String(5)?

console.log(String(10 + 5))
console.log(String(10) + String(5))



// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.

let date = new Date('24 Oct 2025')
console.log(date.toLocaleString())

let day = date.toLocaleString("en-gb",{weekday:'long'})

console.log(day)


// Q39. Calculate how many days are left for Diwali 2026 (use Date difference).
//5 Nov, 2026 

let diwaliDate= new Date("2026-11-5")

let today_date = new Date()

console.log(diwaliDate-today_date)

let diff = diwaliDate-today_date

/**
 * 1000 ms --> 1 sec
 * 60 sec-- 1 min 
 * 60 mins --> 1 hour 
 * 24 hours -- 1 day 
 */

let Daysleft= Math.round(diff/(1000*60*60*24))
console.log(Daysleft)


if(Daysleft <=10 ){
    console.log( "“🪔 Get Ready to Celebrate!”")
}