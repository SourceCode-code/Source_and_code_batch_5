/*

userVar = "cinema"
console.log(userVar)

const pi = 3.14
console.log(pi)


//Math.floor()

let str = 5.8
console.log(Math.floor(str))

//Math.ceil
let str1 = 10.3
console.log(Math.ceil(str1))

//Math.round

let str2 = 5.7
console.log(Math.round(str2))

//Math.random

let Random100 = Math.random()*100
console.log(Random100)

//tofixed

let str3 = 34.99999
console.log(str3.toFixed(2))

*/

/*string length

let name = "shweta"
console.log(typeof name)

console.log(name.length)

console.log(name[2])

console.log(name[name.length-1])


// + operator

let name1 = "shweta"
let middleName = "dhananjay"
let lastName = "ugwekar"

console.log(name1 + middleName + lastName)
console.log(name1 +" "+middleName +" "+lastName)
console.log("my full name is" +" "+name1 +""+middleName +""+lastName)

console.log(`${name1} ${middleName} ${lastName}`)
console.log(`my full name is ${name1} ${middleName} ${lastName}`)


//long string

let str4 = "lllllllllllllllllllllllllllllllllsssssssssss\
jjjjjjjjjjjjjjjjjjjjjjjjjjjj"

console.log(str4)

//escape character

console.log("my \nname \nis \nshweta")
console.log("my name is \"shweta\"") */


// string method

/*toUpperCase

let str = "  i am that person who always stay calm"
console.log(str.toUpperCase())
console.log(str.toLowerCase())

//trim()
let trim_ex = "which one is added"
console.log(trim_ex.trim().length)
console.log(trim_ex.trimStart())


//substr

SUB_STR = "i am always right"
console.log(SUB_STR.substr(0 ,3))

//substring

let SUB_STRING = "my world is my mom dad"
console.log(SUB_STRING.substring(0,3))


//include

let INCULDE_EX = "where i can achive my goal"
console.log(INCULDE_EX.includes("run"))

let REPLACE_EX = "where i can achive my goal"

console.log(REPLACE_EX.replace("can", "am"))

let REPLACE_ALL_EX = "where i can achive my goal"

console.log(REPLACE_ALL_EX.replaceAll("can" , "my")) 


let REMOVE_SPACE = "where i can achive my goal"
console.log(REMOVE_SPACE.replaceAll("" , ""))

let EX_index = "where i can achive my goal"

console.log(EX_index.lastIndexOf("c"))


let name = "shivanya"
console.log(name.repeat(4))


let str = "dhananjay shweta"
console.log(str.split(" "))



let num1 =" 234.4"
console.log(typeof Number(num1)) 

let str_2 = "567.3"
console.log(typeof parseInt(str_2))

console.log(typeof str_2)
console.log(parseFloat (str_2))

console.log(typeof parseFloat(str_2)) 

let num3 = 67890
console.log(typeof String(num3))

console.log(typeof num3.toString())
*/

/* string to number 
let str_1 = "567.8"
console.log(typeof str_1)
console.log(Number(str_1))
console.log(typeof Number(str_1)) 

// parseInt - conversion of number to integer

let str_1 = 456.0
console.log(typeof str_1)
console.log(parseInt(str_1))
console.log(typeof parseInt(str_1)) */


/* parseFloat
let str_2 = 5678
console.log(typeof str_2)
console.log(parseFloat (str_2))
console.log(typeof parseFloat(str_2))
console.log(typeof str_2.toString())


console.log(5+5)
console.log("5"+5)
console.log(5+"5")
console.log("5"-5)
console.log(5-"5")
console.log(5*"5")
console.log(5*5)
console.log("5"- true)
console.log("5"-false)
console.log("5"+ true)
console.log("5"+ false)


let aa = 4
let bb = 3
console.log(bb-=aa)

console.log("2"===2)
console.log(!false) 

console.log(5<4&& 200000<100)
console.log(2<4 || 200000<100)


let postnum = 10 
console.log(postnum++) */


/*conditions
let summer = false
let hot_Season = (summer==true)?"please carry you umbrella":"no there is no need of umbrella "
console.log(hot_Season)


let age = 21
let liecence =(age>=18)? "yes you can approval":"no you cannot approval"

console.log(liecence) */
 
/*

let date = new Date
console.log(date)

let year = date.getFullYear()
console.log(year)

let curMonth = date.getMonth()+1
console.log(curMonth)

let curshortMonth = date.toLocaleString("en-gb",{"month" :"short"})
console.log(curshortMonth)

let curlongmonth = date.toLocaleString("en-gb",{"month":"long"})
console.log(curlongmonth)

let curdate = date.getDate()
console.log(curdate)

*/

/* date
let date = new Date
console.log(date)

let year = date.getFullYear()
console.log(year)

let curMonth = date.getMonth()+1
console.log(curMonth)

let curshortMonth = date.toLocaleString("en-gb",{"month":"short"})
console.log(curshortMonth)

let curlongMonth = date.toLocaleString("en-gb",{"month":"long"})
console.log(curlongMonth)

let curdate =date.getDate()
console.log(curdate)


console.log(`${curdate}/${curshortMonth}/${year}`) 


let formatdate = curdate<10?`0${curdate}`:curdate

let formatmonth = curMonth<10?`0${curMonth}`:curMonth


console.log(`${formatdate}/${formatmonth}/${year}`)

let dateformat = String(curdate).padStart(2,"0")
console.log(dateformat)

let monthformat = String(curMonth).padStart(2,"0")
console.log(monthformat)

let dateformat1 = String(curdate).padEnd(2,"0")
console.log(dateformat1)


let curhour = date.getHours()
console.log(curhour)

let curmin = date.getMinutes()
console.log(curmin)

let cursec = date.getSeconds()
console.log(cursec)

console.log(`${curhour}:${curmin}:${cursec}`)

let ampm = (curhour>12)?"am":"pm"
console.log(ampm)

let chours = curhour%12
console.log(chours)


let hourformat = String(chours).padStart(2,"0")
let minformat = String(curmin).padStart(2,"0")

let secformat = String(cursec).padStart(2,"0")
console.log(`${hourformat}:${minformat}:${secformat}${ampm}`) 

let date = new Date
console.log(date)

let curdate = date.getDate()
console.log(curdate)

let curmonth = date.getMonth()+1
console.log(curmonth)

let year = date.getFullYear()
console.log(year)

let curshortMonth =date.toLocaleString("en-gb",{month:"short"})
console.log(curshortMonth)

console.log(`${curdate}/${curmonth}/${year}`) */



/* conditions

let num =- 25
if(num>=0){console.log(`the given number is a ${num} positive number`)}

let checknum = num>=0 ? ("the number is positive"):("the number is negative")


if (num>=0) {console.log("the number is positive")}
else{console.log("the number is negative")} 


let age18 = "drive"
if (age18.toLowerCase()==="drive"){console.log("capable for drive")}
else if (age18.toLowerCase()==="walking"){console.log("capable for walking")}
else if (age18.toLowerCase()==="cycling"){console.log("capable for cycling")}
else{console.log("enter valid input")} 


for (let i = 1 ;i<=10 ; i++){
    console.log(`2 x${i} = ${2 * i}`)

} */


for (let i = 10 ; i<= 10 ; i++){
console.log(`5 x ${i} = ${10 * i}`)


}