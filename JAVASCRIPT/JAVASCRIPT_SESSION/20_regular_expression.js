// REGULAR EXPRESSION --> (REGEX)

/** its small programing which is used to find patterns and slove the complex string problems
 * ( searching , validation , extraction , manipulating)
 * 
  */

// IMagine FORM 

/** 
 * NAME :SIDDHANT
 * PAN :SSSSSP54156F
 * EMAIL:- SIFHWP@GMAIL.COM
 * PHONE :987893875934
 */

// ARRAY , LOOPS , FUNCTIONS ,OBJECT , CONDITIONS , OPERTAORS , STRING 

// iMAGINE EACH FLEID IN A SINGLE SMALL SNIPPET OF  CODE 

// these is very regrex is used 

// SIMPLE LANGAUGE --> regrex is like google  search of string

// WAY TO DELCARE :- 

// METHOD 1 - 

let pattern  = "siddhant"

let regrex = new RegExp(pattern)

console.log(regrex) //----------------/siddhant/


// METHOD - 2 

let regerx1 = /Siddhant/  //--> this is example of direct regerx


//                /pattern/flag  -->  Flags are used to modify the searching behaviour


// what are most important flags in REGEX

/**
 * 
 * g ----> gobal
 * i ---->igonre case
 * m ----> multiline flag
 */

// NOTE :- YOU CAN USE MULTIPLE FALGS AT ONCE 
let string = " JS PYTHON HTML CSS JS"

// console.log(string.include("js")) // false --> because js is case sensitive langauge 


// example used with regrex 
console.log(string.replace("js","react"))  // example of case senstive

console.log(string.replace(/js/gi,"java")  ) //  because js has become case innsenstive 
// console.log(string)


// REGEXP --> DEEP 


// 1 test() : rteurn true or false and check wehatehr the string contains the word or the pattern or not 


let str = " I am Learning Js and the topic is reg Exp in JS"


let result = /js/gi

console.log(result.test(str))


/**
 * Length: Exactly 10 characters.Characters 1–5: Must be uppercase letters.Characters 6–9: Must be numbers.Character 10: Must be an uppercase letter.
 * 
 * 
 * 
 */

// // example valided the pan number is valid or not

// let pan1 = ASDFG123F






// in string following methods support reg exp 
/**
 * match() --> RETRUNS THE MATCHING VALUE OR PATTERN
 * replace()
 */




let str2 = "JS REACT JS NODE JS js"

console.log(str2.match(/JS/gi).length)


//REMOVE DIGIT FORM STRING 

let str3 = "abc123@"

console.log(str3.match(/\d/g))

console.log(str3.match(/\D/g))

// \d -->  this is used to remove digits form the string 
// \D --> this is used to remove non digits form the string 
// \w --> this is used to get words form the string 
// /word/\b --> word boundary 


 console.log(str2.match(/\w/g)) // this replacemnet for string.split("")

 console.log(str2.match(/\bJS\b/gi))


 // IMPORTANT SYMBOLS 

 /**
  * ^ --> starts with
  * $ --> Ends with
  * * --> zero or more 
  * + --> one or more
  * ?--> optional
  * | --> or 
  * */

 // CHARACTER SETS  []
/*
 /[a-z]/ --> all charcter form a to z
 /[A-Z]/ --> all charcter form A to Z
 /[0-9]/ --> number form 0-9
 /[A-Za-z0-9]/ --> everythings
//{0} --> this will check or indiacte length
 */



// // example valided the pan number is valid or not

let pan1 = "ASDFG123F"

let isVaild= /[A-Z]{5}[0-9]{3}[A-Z]{1}/i.test(pan1)

console.log(isVaild)



// exctarct all the number form the string 

let str4 = " hello everyone class on 19 may 2026 is at 9:05 pm"


console.log(str4.match(/\d+/g))


// count the vowesl in the given string 

let str5 = "hello my name is siddhant gadakh"

console.log(str5.match(/[aeiou]/gi).length)