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



let Array_num_1 = [2,4,6,7,8,9,4]

let add5_arr = Array_num_1.map((el, index, arr) => {
    return el * 5
})


console.log(add5_arr)


*/

/*

class details{
constructor(fn,ln,dob,age){

this.fn= fn, 
this.ln = ln, 
this.dob = dob, 
this.age = age
}
get get_age(){
  return this.age  
}
set modify_age(age){
    this.age=age
}
static show_date(){
  let date = new Date()
  let curdate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` 
  return curdate
}




}


let details1 = new details("shweta","bholankar","1997",28)
console.log(details1)
console.log(details1.get_age)
details1.modify_age=29
console.log(details1.get_age)
console.log(details.show_date()) */


/*2 Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class personAccount{
    constructor(fn,ln,ic,ex){
        this.firstname = fn
        this.lastname = ln
        this.incomes = ic
        this.expenses = ex
    }


}
let person1 = new personAccount("shweta","ugwekar",{"salary":50000},{"rent":20000})
console.log(person1)

*/

// First remove all the punctuations and change the string to an array and count the number of words in the array:
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
/* 13


 let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
 let arr = text.split(",")
 let arr2= ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
 let word = text.split(" ")
 console.log(arr)
 console.log(arr2.length)
 console.log(text)
 */

 // In the following shopping cart add, remove, edit items:
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of your shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify 'Tea' to 'Green Tea'


//let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// shoppingCart.unshift("meat")
//console.log(shoppingCart)

//shoppingCart.push("sugar")
//console.log(shoppingCart)

//let thing = shoppingCart.pop("honey")
//console.log(shoppingCart)
//console.log(thing)


//In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.

// Concatenate the following two variables and store it in a fullStack variable:
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// console.log(fullStack)
/*["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

console.log(countries.includes("Ethiopia"))
console.log(countries.includes("Sass"))

countries.push("Sass")
console.log(countries)



const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

let combine = frontEnd.concat(backEnd)
console.log(combine)

*/


/*const user = {
name : "shweta" ,
age : 28, 
isStudent : "true",
hobbies : ["coding","travelling"]
}
//console.log(user)

//console.log(user.age)
//console.log(user['age'])


let car = {
  Brand:"BMW",
  MODEL_NAME:"M5",
  COLOR:["GREEN","RED","WHITE","BLACK"],
  ENGINE_WARRNTY:"3 years"
} 
 for(let brand in car){

console.log(`${brand}->${car[brand]}`)    
 }

 let BMW = Object.assign({},car)
 console.log(BMW)

// let BMW1 = Object.keys(BMW)
 //console.log(BMW1)

 //let BMW2 = Object.values(BMW)
 //console.log(BMW2)

 //let BMW3 = Object.entries(BMW)
 //console.log(BMW3)

 //console.log(BMW.hasOwnProperties("engine warantee"))

 
 const profiles = [
    {
        firstName: "Vihaan",
        lastName: "Mehta",
        age: 28,
        experience: 6,
        skills: ["TypeScript", "CI/CD"],
        position: "Automation Tester",
    },
    {
        firstName: "Rohan",
        lastName: "Joshi",
        age: 29,
        experience: 11,
        skills: ["TypeScript", "JavaScript", "Cypress", "Docker"],
        position: "Technical Lead",
    },
    {
        firstName: "Vihaan",
        lastName: "Deshmukh",
        age: 32,
        experience: 1,
        skills: ["Python", "TypeScript"],
        position: "Software Engineer",
    },
    {
        firstName: "Ishaan",
        lastName: "Pandey",
        age: 31,
        experience: 14,
        skills: ["Python", "Cypress"],
        position: "Systems Engineer",
    },
    {
        firstName: "Ishaan",
        lastName: "Deshmukh",
        age: 25,
        experience: 1,
        skills: ["Java", "Playwright", "JavaScript", "SQL"],
        position: "Systems Engineer",
    },
    {
        firstName: "Rohan",
        lastName: "Joshi",
        age: 33,
        experience: 3,
        skills: ["JavaScript", "Java", "Docker", "TypeScript"],
        position: "Full-Stack Developer",
    },
    {
        firstName: "Pranav",
        lastName: "Joshi",
        age: 24,
        experience: 2,
        skills: ["JavaScript", "GitHub Actions", "Playwright", "TypeScript"],
        position: "Data Analyst",
    },
    {
        firstName: "Rohan",
        lastName: "Nayak",
        age: 24,
        experience: 10,
        skills: ["JavaScript", "GitHub Actions", "Playwright"],
        position: "Backend Developer",
    },
    {
        firstName: "Arjun",
        lastName: "Nayak",
        age: 36,
        experience: 4,
        skills: ["Java", "Playwright", "Docker"],
        position: "Systems Engineer",
    },
    {
        firstName: "Vikram",
        lastName: "Joshi",
        age: 34,
        experience: 1,
        skills: ["python"],
        position: "Full-Stack Developer",
    },
];
 /*
profiles.forEach((el, index , arr) =>{
//console.log(el)
if (el.skills.includes("Cypress")) {
    console.log(`${el.firstName} ${el.lastName}`)
}

})
   

//profiles.forEach((el, index, arr) => {
    // console.log(el)
  //  if (el.skills.includes("Cypress")) {
       // console.log(`${el.firstName} ${el.lastName}`)
   // }
//})
 


profiles.forEach((el, index, arr) =>{
    //console.log(el)
  if(el.skills.includes("python")) {
    console.log(`${el.firstName} ${el.lastName}`)
}

})



let above3 = profiles.filter((el,index,arr)=>{
    return el.experience>3
})

console.log(above3)

above3.forEach((el,index,arr)=>{
    console.log(el.firstName +" "+ el.lastName)
})
 

let above3 = profiles.filter((el, index, arr) =>{
return el.experience>3
})

above3.forEach((el,index, arr) =>{
    console.log(el.firstName +""+ el.lastName)
})  */




// // Tasks:
// // 1. Find the person with the most skills.
// // 2. Count the number of users who are logged in.
// // 3. Count the number of users with points greater than or equal to 50.

// // 4. Identify the MERN stack developers in the users object.
// //'MongoDB', 'Express', 'React', 'Node'

// // 5. Add your own details to the users object without modifying the original object.

// // 6. Retrieve all keys (properties) in the users object.

// // 7. Retrieve all values in the users object.


/*

let MostSkills = users.filter((el, index, arr) =>{
 return el.skills>3
})

console.log(MostSkills)

MostSkills.forEach((el, index, arr) =>{
    console.log(el.firstName + ""+ el.lastName)
})
*

let users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
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
  },
};
/*
//1. Find the person with the most skills.

let maxskills = 0
let peronWithMostskills = "";

for(const user in users){
if(users[user].skills. length > maxskills){
    maxSkills = users[user].skills.length;
    personWithMostskills =user;
}

}
console.log(personWithMostskills);
console.log(maxskills);


/*let maxSkills = 0;
let personWithMostSkills = "";

for (const user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length;
    personWithMostSkills = user;
  }
}

console.log(personWithMostSkills); 
console.log(maxSkills); 



const user1 = {
 

email : "shwetabholankarwork@gmail.com",
skills : [
   "HTML" ,
   "CSS" ,
   "Javascript"
],
age: 28,
isLoggedIn :true,

}



let mydetail = Object.assign({},user1)
console.log(mydetail)
console.log(user1)





let user_keys = Object.keys(users)
console.log(user_keys)

let user_values = Object.values(users)
console.log(user_values)



let isLoggedInUsers = 0

for(const user in users){
if(users[user].isLoggedIn){
    isLoggedInUsers++ ;
}

}
console.log(isLoggedInUsers)


let greaterPointUser = 0 ;

for(const user in users){
 if(users[user].points >= 50){
    greaterPointUser++ ;
} 
}
console.log(greaterPointUser)


/*let highPointUsers = 0;

for (const user in users) {
  if (users[user].points >= 50) {
    highPointUsers++;
  }
}

console.log(highPointUsers); 


const mernDeveloper = [] ;

  for(const user in users) {
    const skills = users[user].skills;

  if(
  skills.includes("MangoDB")&&
  skills.includes("Express") &&
  skills.includes("React")&&
  skills.includes("Node")
){
  mernDeveloper.push(user);
}

}
   console.log(mernDeveloper);
/*
const mernDevelopers = [];

for (const user in users) {
  const skills = users[user].skills;

  if (
    skills.includes("MongoDB") &&
    skills.includes("Express") &&
    skills.includes("React") &&
    skills.includes("Node")
  ){
    mernDevelopers.push(user);
  }
  }

console.log(mernDevelopers); 


 // Question 2: Working with a Countries Object
// // Using a countries object, write a program that prints:
// // - Country name
// // - Capital city
// // - Population count
// // - Languages spoken

const countries = {
  Japan: {
    capital: "Tokyo",
    population: 125.7, // in millions
    languages: ["Japanese"],
  },
  Germany: {
    capital: "Berlin",
    population: 83.2,
    languages: ["German"],
  },
  India: {
    capital: "New Delhi",
    population: 1393, // in millions
    languages: ["Hindi", "English", "Various regional languages"],
  },
  Canada: {
    capital: "Ottawa",
    population: 38,
    languages: ["English", "French"],
  },
  Brazil: {
    capital: "Brasília",
    population: 213,
    languages: ["Portuguese"],
  },
};

for (const country in countries) {
  const { capital, population, languages } = countries[country];

  console.log(country, capital, population, languages.join(", "));
}



*/
/*

let pack1 = Math.floor(Math.random()*(9999-1000+1)+1000)
let pack2 = Math.floor(Math.random()*(9999-1000+1)+1000)
let pack3 = Math.floor(Math.random()*(9999-1000+1)+1000)

console.log(pack1, pack2, pack3)



let pack5 = Math.ceil(Math.random()*(999-100+1)+100)
let pack6 = Math.ceil(Math.random()*(999-100+1)+100)

console.log(pack5, pack6)


let alpha = "sdfghetyru"
let sym = "!@#$%^&*()_+"

let letter1 = Math.floor(Math.random()*(alpha.length))
let letter2 = Math.floor(Math.random()*(alpha.length))
let letter3 = Math.floor(Math.random()*(alpha.length))
let symbol = Math.floor(Math.random()*(sym.length))
let number = Math.floor(Math.random()*(99-10+1)+10)

console.log(`${alpha[letter1]}${alpha[letter2]}${alpha[letter3]}${sym[symbol]}${number}`)




console.log(`Random phone number :91+${Math.floor(Math.random()*(900-800+1)+800)}${Math.floor(Math.random()*(900-700+1)+700)}${Math.floor(Math.random()*(9000-1000+1)+1000)}`)

*
1.// Declare a string variable `greeting` with the value "Hello World" and log its data type.

  let greeting = "Hello world"
  console.log(greeting)



// 2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.

  let num = 199.99

   console.log(Math.ceil(num))




// 3. Create a string `name` with your full name and log the length of the string using the `.length` property.

 let str = "shweta dhananjay ugwekar"
 console.log(str.length)



// 4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.

 let firstName = "Shweta"
 let middleName = "Dhnanjay"
 let lastName = "ugwekar"

 console.log(firstName+ " "+ middleName +" "+lastName)

 console.log(`${firstName} ${middleName} ${lastName}`)


 *

 // 5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.

let language = 'Javascript'

console.log(language[4])



// Advanced Session Assignments:

// 7. Create a long literal string that spans multiple lines and log it.

let str = "ghjkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkllllllllyy\
jjjjjjjjjjjjj"

console.log(str)




// 8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!

let str1 = "I am learning Javasript"

console.log("I\n am \n learning \n javasript")


let str2 = "It's  fun to learn Javasript"

console.log("It's\n fun \n to\n learn \n javasript" )




// 9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.

let amount = 45.85

console.log(Math.floor(amount))
console.log(Math.ceil(amount))
console.log(Math.round(amount))


// 10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.

 let quote = `"Learning JavaScript is awesome!"`

 console.log(quote.length)

 let quote1 = quote.indexOf('J')
 
 console.log(quote1)




 //12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.

let str = 'Hello world'

console.log(`Hello\nworld`)


// 13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.

let str1 = 'abc';
let str2 = 'def';

console.log(str1+""+str2)
console.log(`${str1}${str2}`)



// 14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.

let str3 = "qwertyuiopasdfghjklzxcvbnm"
console.log(str3)

*/


/* 1. Write a program to generate a random number between 50 and 100 (inclusive).
// -----------------------------------------------------
let minNum = 50
let maxNum = 100
let randomNum = Math.floor(Math.random()*(maxNum-minNum)+minNum)
console.log(randomNum)




// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.

let num = 45.6789

console.log(num.toFixed(2))

// -----------------------------------------------------

// 3. Create a program to roll two dice (1–6 each) and print their sum.


// -----------------------------------------------------

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
// Example: 47 → 50, 123 → 120


// -----------------------------------------------------

// 5. Generate a random 6-digit OTP using Math methods.

// 7. Print the first and last character of a given string.
// Example: "JavaScript" → "J" and "t"
/*-----------------------------------------------------

let str = 'Javasript'

console.log(str[0])
console.log(str[str.length-1])




// 8. Write a program to count how many characters (excluding spaces) are in a string.
// -----------------------------------------------------

// 9. Concatenate first name, middle name, and last name using template literals and print it.
// -----------------------------------------------------

// 10. Write a program that takes a long sentence and prints it in uppercase.


let str4 = "I am doing very well practice"
console.log(str4.toUpperCase())


// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.


let str6 = "  Hello what we can say  "
console.log(str6.trim())


// -----------------------------------------------------

// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.

let str7 = " I am learning Javascript "
console.log(str7.includes("Javascript"))



// -----------------------------------------------------

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
// Example: "This is a bad idea" → "This is a good idea"


let string = "This is a bad idea"
console.log(string.replace("bad","good"))



// -----------------------------------------------------

// 14. Replace ALL occurrences of "apple" with "mango" in a given string.


let str8 = "I like apple too much"
console.log(str8.replaceAll("apple","mango"))



// -----------------------------------------------------

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.


let str9 = "red,green,blue,yellow"

let sentence = str9.split(" ")
console.log(sentence)
*/



/* 6. Declare variables (firstName, lastName, country, city, age, isMarried, year) and use the `typeof` operator to check different data types.

let firstName = "shweta"
let lastName  = "ugwekar"
let country  = "India"
let age = 28
let isMarried = "yes"
let year = "2026"

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)


*/
/*

// 7. Check if the type of '10' is equal to 10 using `parseInt`.


let num1 = 10
console.log(typeof parseInt(num1))




// 8. Boolean value is either true or false. Write three JavaScript statements that provide truthy values.

let str1 = "Javascript is casesensitive language"
let str2 = "There are multiple methods in Javascript"

  if(str1){console.log("true")
  }else {
   console.log("false")
  }


if(str2){console.log("true")
  }else {
   console.log("false")
  }


*



// 9. Write three JavaScript statements that provide falsy values.

let str3 = "Javascript is robot made language"
let str4 = "There are multiple language in Javascript"


if(str3){console.log("true")
  }else {
   console.log("false")
  }


if(str4){console.log("true")
  }else {
   console.log("false")
  }









// 10. Figure out the result of the following comparison expressions without using `console.log()` first, then confirm the result using `console.log()`:
/*write the output in the comments 
console.log(4 > 3);              
console.log(4 >= 3);             
console.log(4 < 3);             
console.log(4 <= 3);             
console.log(4 == 4);            
console.log(4 === 4);           
console.log(4 != 4);            
console.log(4 !== 4);            
console.log(4 != '4');           
console.log(4 == '4');           
console.log(4 === '4');          
*/

/*
// 22. Compare the length of your first name and your family name.

let firstName = "Shweta"
let familyName = "Maii"


console.log(firstName.length === familyName.length)




// 23. Declare two variables `myAge` and `yourAge`, then calculate the age difference.


let myAge = 28
let yourAge = 30

console.log(yourAge - myAge)




// 24. Using ternary opertor, when birth year and calculate if they are old enough to drive.


let driveAge = 18

let drive = (driveAge > 18)? "yes you can drive" : "no you can not drive"
console.log(drive)




//25  using ternary opertor check number is even or odd

let num = 37

let number = (num % 2===0)? "the number is even " : "the number is odd"
console.log(number)

*

let dragon = "dragon"
let python = "python"

let str =(dragon.includes('on'))
console.log(str)


let sentence = "I hope this course is not full of jargon.";

let str2 = (sentence.includes('jargon'))
console.log(str2)

*

let date = new Date()
console.log(date)

let weekday = date.toLocaleString("en-gb",{weekday:"long"})
console.log(weekday)

let curMonth = date.toLocaleString("en-gb",{month :"long"})
console.log(curMonth)

let year = date.getFullYear()
console.log(year)

let curhour = date.getHours()
console.log(curhour)

let curMin = date.getMinutes()
console.log(curMin)

let ampm = (curhour<12)? "am":"pm"
console.log(ampm)

console.log(`${date}${weekday}${curMonth}${year}${curhour}${curMin}${ampm}`)


*/