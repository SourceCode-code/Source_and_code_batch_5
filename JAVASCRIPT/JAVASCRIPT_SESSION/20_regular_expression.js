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