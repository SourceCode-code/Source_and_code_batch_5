// comments --> comments are the line wrriten in  code which are used to explain the code and this line
// are igonred by browser or complier 

// what is use of comment -> 
// 1 it will make your code more readable 
// 2 it will make your code easy to maintain 
// 3 it will make your code easy to understand 


// There are two comments in js 
// 1 single line comment --> (//)
// example this is single line comment --> and it has a range only till this single line 


// 2 mutli-line comment --> (/*this is starting point                       */ this will be ending point)

/* example 
this is 
a 
multi line 
comment 
*/

/*
comment etiqutes :-->
1 use comments to explain a complex logic or algorithms
2 Avoid abnoxious comments that do not add value 
3 keep the comments up to date with code changes 
4 comments should be consise and clear to understand 

*/

/*

VARIABLES --> In JS variable are data container used to store a value 
 
In JS we have 3 types variables 

let 
var
const 
*/

/**
 * let -->let is used to declare a value that can be update in the future 
 * Example 
 * let --> keyword
 * user--> name
 * = -> assign
 * "jhon" --> value
 * 
 * NOTE : let is block scope variable 
 */
let user = "jhon"
console.log(user)
// example of updating a value
user = "new value"
console.log(user)


/**
 * var -->var is used to declare a value that can be update in the future 
 * Example 
 * var --> keyword
 * uservar--> name
 * = -> assign
 * "jhon" --> value
 * 
 * Note :- var is simliar to let 
 * the key difference is var is old school way to delerace a variable 
 * 
 * var is gobal scope variable 
 */

var uservar = "value one of var "
console.log(uservar)

uservar = "updated value of var"
console.log(uservar)


/**
 * const -->const is used to declare a constant value ( the value which cannot be updated)
 * Example 
 * const --> keyword
 * user--> name
 * = -> assign
 * "jhon" --> value
 * 
 * NOTE : const is block scope variable 
 */

const pi = 3.1431
console.log(pi)

// pi = 4.123
// console.log(pi) --> the value is not update because the varable is assigned by const 

/**
 * common mistakes that most people do while using varaibles
 *  redelacring a varibale that is already delacered
 * 
 * this is wrong way to update 
 * let value = "1"
 * console.log(value)
 * 
 * let value = "2"
 * console.log(value)
 * 
 * 
 * correct way to update 
 * 
 let user = "jhon"
console.log(user)
// example of updating a value
user = "new value"
console.log(user)
 * 
 * 
 * 
 * 
 */

/**
 * Rules to keep in mind when delacring avariable
 *1 varaible name should not start with a number */
let demo1 = "sid" // this is valid example 
// let 1demo= "sid" //this is invalid example

//2 varaible name can only contain letter , numbers ,underscore ( _ ) & dollar sign $ 

let $demo2 = "demo function" // valid 
let demo = "demo function" // valid 
let demo_ = "valid " // valid 

// invalid example 

// let demo@ = "invalid" // invalid 
// let demo number = "invalid" // invaild example there should no space in varaibles name 

//3 varaible are case senstive 

let name = "siddhant" // this is variable with name
let Name = "arjun" // this is vraible with Name

// the above two in js are two seprate variable

//4 varaible names cannot included reserved keyword

//let var = "2" // this is invalid becasue var is reserved keyword

//bonus Rule -->
// your variable name should always be decriptive of the value and  be in camel case
//example
let user_Age = "28" // this valid 

let userName = " valid example "



// example delecare varaibles 

// 1 delcare 2 variable in a single line 

let firstName = "siddhant", lastName = "gadakh"

// 2 delecare 2 varaible in multiple line 

let varaibale1 = "sid"
let varaible2 = "gaadakh"



/** DATATYPE IN JS 
 There are mainly two type of datatype in js 
1) primitive data type --> The data type which is simple in nature and is immutable (cannot change its or property)

2) non-primitive data  --> The data type which is complex in nature and is mutable (can change its value or property)



// primitive datatype in js 

1 Number --> it represent any numerical value eg (-infity to +infity) (eg -0.32564 , 100 , 522 ,5555555555555555555555555)
(intergers and floating numbers)

2 String --> it represent any caharcter or sequnece of character that is wrapped into "double quotes ", 'single quotes' `backticks`

let str = "siddhant     " // this is string
let str2 = '28'          // this is also a string
let str3 =`    ` // this is also a string 


3 Boolean --> it represents the true and false value in js 


let value1 = true // this is boolean value
let value2 = false // this is also aboolean value 

4 undefined --> it represents a varaible whos value has not been assigned yet 
let name   // this is example of undefined

5 null --> it represent nothingness 
let name = null // this is a null  value 


 */
// non primitive datatype in js 
// 1 array 
// 2 object 

// how to check a data type in js (use typeof)
//Number
let num = 23
console.log(num)
console.log(typeof num)