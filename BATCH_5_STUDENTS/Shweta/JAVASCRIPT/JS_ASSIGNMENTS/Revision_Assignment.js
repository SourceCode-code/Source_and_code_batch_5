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

} 


for (let i = 10 ; i<= 10 ; i++){
console.log(`5 x ${i} = ${10 * i}`)


}



let arr = [10,20]

// Traditional way 
let a = arr[0]
let b = arr[1]
console.log(a,b)

let arr = [10,20]

let a = arr[0]
let b = arr[1]
console.log(a,b)*/
/*
let arr = [40,50]

let a = arr[0]
let b = arr[1]
console.log(a ,b) 

let [x,y]=arr

// x= 10  y =20

console.log(x,y)

let arr1 = [1,2,3]
let [c,d,e] = arr1

console.log(c,d,e)


let arr2 =[2,3,4]
let [f,g,h] = arr2
console.log(f,g,h)
/*

let names_arr = ["sidddhant", "amol", "ruhsi", "shree", "vaibhav", "tejas"]

let [s1,s2,s3,s4,s5,s6 ] = names_arr

console.log(s3)
console.log(s5)


let names_arr2 = ["shiv","dhanu","shweta"]
let [f1,f2,f3] = names_arr2
console.log(f1)
console.log(f2)

let [n1,n3]= names_arr2
console.log(n1,n3)

let fullstack = [["HTML","CSS","JS","REACT"],["NODE","EXPRESS","MONGOODB"]]
let [[f1,f2,f3,f4],[b1,b2,b3]]=fullstack
console.log(f1,b3)

let fullstack1 = [["mango" , "banana", "jira"],["apple","soya"]]
let [[f1,f2,f3],[c1,c2]]=fullstack1
console.log(f2,c2)


let names_arr = ["sidddhant", "amol", "ruhsi", "shree", "vaibhav", "tejas"]

let [name1,name2,...rest]=names_arr

console.log(name1,name2,rest)


let names_arr2 = ["dhanu","shweta","payu"]
let [name1,name2,...rest] = names_arr2
console.log(name1,name2,rest) */


/*loop

for(let i =1 ; i<=10 ; i++){
    console.log(i)
}

for(let i =10 ; i>=0 ; i--){
console.log(i)
}


let str = "hello my name is shweta"

for(let i=0 ; i<str.length; i++){
    console.log(str[i])
}

for(let i = str.length; i>=0; i--){
    console.log(str[i])
}

for (let i = 1; i <= 10; i++) {
    console.log(`2 X ${i} = ${2 * i}`)
}

for(let i=1 ; i<=10 ;i++){
console.log(`2x${i}=${2*i}`)
}

for(let i=1 ; i<=10; i++){
    console.log(`6x${i}=${6*i}`)
}*/

/*
//#
//##
//###
//####
//#####


for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "#"
    }
    console.log(row)
}

for(let i=1 ; i<=5 ; i++){
let row =""

for(let j=1 ; j<=i; j++){
    row+="#"
}
console.log(row)
}*/

 /* #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######
 
for (let i=1;i<=6; i++){
    let row=""
    for(let j=1; j<=i; j++){
        row+="#"
    }
    console.log(row)
}*/
/*
//   *                   // 1  
//  ***                  // 3
// ******                // 6
//  ***                  // 3
//   *                   // 1
let row = 2

for(let i=row; i>=1 ; i--){
let spaces = " ".repeat(row-1)
let star="*".repeat(i*2-1)
console.log(spaces+star)
}

for(let i=1 ;i<=row ; i++){
    let spaces ="".repeat(row-1)
    let star ="*".repeat(i*4-2)
    console.log(spaces+star)
}

for(let i=row; i>=1 ; i--){
let spaces = " ".repeat(row-1)
let star="*".repeat(i*2-1)
console.log(spaces+star)
}

*/
/*
//   *                   
//  ***                  
// ******                
//  ***                  
//   *                   

let row = 2
for(let i=1 ; i<=row ; i++){
let spaces =" ".repeat(row-i)
let star = "*".repeat(i* 2 - 1)
console.log(spaces + star)

}
for(let i = 1 ;i<=row ; i++){
    let spaces =" ".repeat(row-1)
    let star ="*".repeat(i*4-2)
    console.log(spaces + star)
}

for(let i=row ; i>=1 ; i--){
let spaces =" ".repeat(row-1)
let star = "*".repeat(i* 2 - 1)
console.log(spaces + star)

}

let row = 2

for (let i = 1; i <= row; i++) {
    let spaces = " ".repeat(row - i)
    let star = "*".repeat(i * 2 - 1)
    console.log(spaces + star)
}

for (let i = row; i >= 1; i--) {
    let spaces = " ".repeat(row - i)
    let star = "*".repeat(i * 2 - 1)
    console.log(spaces + star)
}


// ****
// *  *
// ****

console.log("*".repeat(4))
console.log(`${"*"}${" ".repeat(2)}${"*"}`)
console.log("*".repeat(4))


console.log("*".repeat(4))
console.log(`${"*"}`)


let pattern  = "siddhant"

let regrex = new RegExp(pattern)

console.log(regrex) //----------------/siddhant/


let string = " JS PYTHON HTML CSS JS"

 //console.log(string.include("js")) // false --> because js is case sensitive langauge 

console.log(string.replace("js","react"))

console.log(string.replace(/js/gi,"java")  ) 

let pan1 = "ASDFG123F"

let isVaild= /[A-Z]{5}[0-9]{3}[A-Z]{1}/i.test(pan1)

console.log(isVaild) 
*/
/*
let pan1 = "ASDFG145j"
let isValid = /[A-Z]{5}[0-9]{3}[A-Z]{1}/i.test(pan1)
console.log(isValid)

let pass1 = "AVBG@12"
let isValid = /[A-Z]{4}[@#$%^&*!]{1}[1-9]{2}/i.test(pass1)
console.log(isValid)



for (let i=1 ; i<=10 ; i++){
    console.log(i)
}

for(let i=10 ;i>=0 ;i--){
    console.log(i)
}

let str ="hello my name is shweta"
for(let i=0 ; i<str.length ;i++){
    console.log(str[i])
}

for(let i=str.length; i>1 ;i--){
    console.log(str[i])
}

for (let i=1 ; i<=10 ; i++){
  console.log(`2x${i}=${2*i}`)
}

for(let i=0 ; i<=10 ; i++){
    console.log(`5x${i}=${5*i}`)
}

for(let i=1 ; i<=10 ; i++){
    console.log(`6x${i}=${6*i}`)
}

/*
//#
//##
//###
//####
//#####

for(let i=1 ; i<=5 ; i++){
    let row=""
    for(let j=1 ; j<=i ; j++){
         row+= "#"
    }
    console.log(row)
}


let arr = []
let arr1 =[null,String,76,undefined]

console.log(arr)
console.log(arr1)

let array_ex = ["shweta",26,null,"dhanu"]
console.log(array_ex.length)


array_ex[array_ex.length-1] = "software engineer"
console.log(array_ex)

delete array_ex[array_ex.length-1]

console.log(array_ex)


let Method_array =["shweta" , 45 , null ,89, "dhan"]
Method_array.unshift("shivaji")
console.log(Method_array)

let city = Method_array.pop()
console.log(Method_array)


let Method_array = ["shweta",56,null,"dhanu"]

let initails = Method_array.shift()
console.log(Method_array)
console.log(initails)

let arrSplice = Method_array.splice(0, 2)

console.log(arrSplice)

let Method_array_1 = ["siddhant", "arjun", "gadakh", 27, "lead-software enginner"]
let arrSlice = Method_array_1.splice(0, 3)

console.log(arrSlice)

let fruits_array = ["mango", "apple", "banana ", "watermelon", "chiku"]

console.log(fruits_array.sort())


let array = [ 24,78.2,89,0,98,45,23]
console.log(array.sort()) 


let Method_array = ["solo", 48,"han"]
Method_array.push("ram")
console.log(Method_array)

Method_array.unshift("dhanu")
console.log(Method_array)

let city =Method_array.shift()
console.log(Method_array)
console.log(city) */

/*

let car = `{
  "Brand":"BMW",
  "MODEL_NAME":"M5",
  "COLOR":["GREEN","RED","WHITE","BLACK"],
  "ENGINE_WARRNTY":"3 years"
} `

let object_1 = JSON.parse(car)
console.log(object_1)



let users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30,
    },
}

let JSON_EXAMPLE = JSON.stringify(users)
 console.log(JSON_EXAMPLE) */

/*
let Paul = {
    email: "paul@paul.com",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "MongoDB",
        "Express",
        "React",
        "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
}


let Paul_json =JSON.stringify(Paul,["email","isLoggedIn"])
console.log(Paul_json) */

/*

var city = "pune"
console.log(city)
var city = "mumbai"
console.log(city)



let company= "amazon"
console.log(company)
function printcompany(){
    console.log(company)
}
console.log(company)
printcompany() 

function test() {
var x = 19
console.log(x)
}
test()

let company = "amazon"
function printcompany(){

}
console.log(company)
printcompany()  */


//scope - variable can be accessed

//there are three types of scope

//1)global scope 
//2)function scope 
//3)block scope

/*1) global scope - variable declared outside of function 

let fruit = "apple"
function printfruit(){

}
console.log(fruit)
printfruit() */

/*2) function scope - variable declared using var inside of function

function test(){
    var x = 15
    console.log(x)
}
test() */



/*3) block scope - variable declared using let and const inside of function 
{
let a = 10
console.log(a)

} */

//there is difference between var and let is 
//1) var ignore block scope   // let apply block scope 
/*eg) 
function test(){
    var c = 6 
    console.log(c)}
test() */



//function

// types of function 
// 1) on the basis of parameter

/*1) without parameter without return type
function flower(){
    console.log("lotus")

}
flower()

function game(){
    console.log("cricket")
}
game() */


/*2) with parameter without return type

function calculator(x,y){
console.log(x+y)
}
calculator(5,10)

function calculator(y,u){
    console.log(y-u)

}
calculator(9,7) */


/*3) with parameter with return type
function info(name){

}
let sinfo =info("shweta")
console.log(sinfo.toUpperCase()) */


//based on writing 
/*1) declarative type function - here we declare name of function 
function addition(x,y){
console.log(x+y)
}
addition(4,7) */

/*2)expression type function - function stored in variable
let fullname = function(firstname, lastname){
    return`${firstname}${lastname}`
}
console.log(fullname) 


//3) arrow type function - declare function with arrow instead of keyword
let fullname = (firstname , lastname) =>{

return`${firstname}${lastname}`
}
console.log(fullname("shweta","ugwekar")) */

/*
const set = new Set()
console.log(set)

let arr = [1,3,5,1,1,6,5,6,7,1,4]
const set1 = new Set(arr)
console.log(set1)


let arr2 = [...set1]
console.log(arr2) */

/*
let company = new Set()
console.log(company)
company.add("google")
console.log(company)


console.log(company.has("amazon"))

console.log(company.size)

let set4 = company.clear()
console.log(set4)  


let arr4 = [2,3,4]
let arr5 =[6,3,8]

let union= new Set([...arr4,...arr5])
console.log(union)


let seti = new Set(arr4)
let seth =new Set(arr5)

let intersection = arr5.filter((el)=>seti.has(el))
console.log(new Set(intersection))


let Difference = arr6.filter((el)=>sety.has(el))

console.log(new Set(Difference = arr5.filter((el)=>!sety.has(el))
))

*/
/*


for(let i=1 ; i<=10 ;i++){
    console.log(i)
}

for(let i=10 ;i>=0; i--){
    console.log(i)
}


for(let i=1 ;i<=10 ; i++){
    console.log(`2x${i}=${2*i}`)
}


for (let i=1 ; i<=10 ; i++){
    console.log(`5x${i}=${5*i}`)
}


for(let i=1 ; i<=10; i++){
    console.log(`6x${i}=${6*i}`)
}
*/
/*
//#
//##
//###
//####
//#####

for(let i=1 ;i<=5 ;i++){
    let row = ""
    for(let j=1 ; j<=i ;j++){
     row+="#"
    }
    console.log(row)
}

*/

let Array_num_1 = [2,4,6,7,8,9,4]

let add5_arr = Array_num_1.map((el, index, arr) => {
    return el * 5
})


console.log(add5_arr)
