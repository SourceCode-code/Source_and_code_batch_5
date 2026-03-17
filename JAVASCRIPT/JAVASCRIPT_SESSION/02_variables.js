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