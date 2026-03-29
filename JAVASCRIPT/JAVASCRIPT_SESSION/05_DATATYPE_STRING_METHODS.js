// =============================================
// STRING METHODS IN JAVASCRIPT
// =============================================

// Strings in JavaScript are IMMUTABLE
// ---------------------------------------------
// This means once a string is created, its characters
// CANNOT be changed directly.
//
// Any method that seems to modify a string actually
// returns a NEW string instead of changing the original one.

// =============================================
// 1. toUpperCase()
// ---------------------------------------------
//THIS CONVERT YOUR STRING INTO UPPERCASE (CAPTIAL LETTERS)

let str = " i am learning toUpperCase method of string"
console.log(str.toUpperCase())
console.log(str)
// I AM LEARNING TOUPPERCASE METHOD OF STRING

// =============================================
// 2. toLowerCase()
// ---------------------------------------------
// 2 toLowerCase() --> THIS WILL CONVERT YOUR STRING INTO LOWERCASE (SMALL LETTERS)

let lower_str= "I AM LEARNING toLowerCase() METHOD OF STRING IN JS"

console.log(lower_str.toLowerCase())



// =============================================
// STRING CONCATENATION
// ---------------------------------------------
// Joining two or more strings together

// =============================================
// METHOD CHAINING
// ---------------------------------------------
// Calling multiple methods one after another
// NOTE:
// Method chaining works ONLY if the output of the
// first method is a valid input for the next method

let method_con = "HELLO I AM A DEMO OF LEARNING METHOD CONACTAION"

// console.log(method_con.toLowerCase().toUpperCase().length.toLowerCase())


//example of valid and invalid


let num_str = "28"
console.log(num_str.toLowerCase().toUpperCase())
console.log(typeof num_str)
let len_numstr = num_str.length
console.log(len_numstr)
console.log(typeof len_numstr)


// =============================================
// 3. trim()
// ---------------------------------------------
//3 trim() -->  THIS METHOD WILL REMOVE EMPTY SPACE FORM THE START AND FORM END OF THE STRING

let trim_ex = " hello "
console.log(trim_ex.length)
console.log(trim_ex.trim())
console.log(trim_ex.trim().length)


// =============================================
// 4. trimStart()
// ---------------------------------------------
//4 trimStart()--> THIS METHOD WILL REMOVE EMPTY SPACE FORM THE START OF THE STRING

console.log(trim_ex.length)
console.log(trim_ex.trimStart())
console.log(trim_ex.trimStart().length)

// =============================================
// 5. trimEnd()
// ---------------------------------------------
//5 trimEnd()--> THIS METHOD WILL REMOVE EMPTY SPACE FORM THE  END OF THE STRING
console.log(trim_ex.length)
console.log(trim_ex.trimStart())
console.log(trim_ex.trimEnd().length)


// =============================================
// 5. subStr() 
// ---------------------------------------------
// 5. subStr() --> this method will get you a part of string and create a new string
// subStr(starting index , number of character)

let SUB_STR = "hello this is example of sub str for removeing some part of string"

let HELLO_STR = SUB_STR.substr(0,10)
console.log(HELLO_STR)


// =============================================
// 6. substring() 
// ---------------------------------------------
// 6. substring() -> this method will get you a part of string and create a new string
 //substring(starting index , ending index ) // it will not include the ending index in the range

 let SUB_STRING = "hello this is example of sub string for removeing some part of string"

 let SUB_STRING_EX = SUB_STRING.substring(0,4)
 console.log(SUB_STRING_EX)

// =============================================
// 7. includes() 
// ---------------------------------------------
//7. includes() --> this will check if a certain character or sequence of character are present in string
// this will check that means output will be in --> Boolean (true and false)
// THIS IS A CASE SENSTIVE METHOD

let INCULDE_EX = "hello this is an example to show inculdes in string"

console.log(INCULDE_EX.includes("Example"))

// =============================================
// 8. replace() 
// ---------------------------------------------
//replace(word that is to be replace , new word that will replace old) --> this method will replace some character in string 
// NOTE :- it will only replace the first occurance of the word  
let REPLACE_EX = "hello i am learning python and this topic string method in python"

 console.log(REPLACE_EX.replace("python","js"))


// =============================================
// 9. replaceAll() 
// ---------------------------------------------

//replaceAll(word that is to be replace , new word that will replace old) --> this method will replace all character in string 
// NOTE :- it will replace ALL the  occurance of the word  let REPLACE_EX = "hello i am learning python and this topic string method in python"
let REPLACE_ALL_EX = "hello i am learning python and this topic string method in python"

 console.log(REPLACE_ALL_EX.replaceAll("python","js"))


 // IMP: -> remove all the space form the string given string

 let REMOVE_SPACE = " HELLO i am learning replace all in js "

 console.log(REMOVE_SPACE.replaceAll(" ",""))


 // =============================================
// 10. indexOf() 
// ---------------------------------------------
// 10. indexOf()  --> this will give you the index  of the given charcacter or the string
// THIS WILL ONLY GIVE ME THE INDEX OF FIRST OCCURANCE

let EX_index = "hello my name is sid"

console.log(EX_index.indexOf("h"))
console.log(EX_index.indexOf("e"))

 // =============================================
// 11. lastIndexOf() 
// ---------------------------------------------
// 11. lastIndexOf() --> this will give you the lastindex  of the given charcacter or the string
// THIS WILL ONLY GIVE ME THE INDEX OF last OCCURANCE

console.log(EX_index.lastIndexOf("h"))
console.log(EX_index.lastIndexOf("e"))


 // =============================================
// 12. concat() 
// ---------------------------------------------
//concat()  --> this combine two or more string together

let HELLO = "hello"
let Name = "sid"
let surname = "gadakh"

console.log(Name.concat(surname)) // two string concat 

console.log(HELLO.concat(Name,surname))


 // =============================================
// 13. Repeat() 
// ---------------------------------------------
//repeat --> this method is used to repeat a string multiple 
console.log(Name.repeat(10))


 // =============================================
// 14. StartsWith() 
// ---------------------------------------------
//StartsWith()  --> this method will verify if your string starts with particular character 
// this methods output will be Boolean
console.log(Name.startsWith("s"))


 // =============================================
// 15. endsWith() 
// ---------------------------------------------
//  this method will verify if your string end with particular character 
// this methods output will be Boolean
console.log(Name.endsWith("d"))


// 16 --> split()
//17 --> match 
//18 --> matchAll
// match and matchAll will covered during regrex function
// split method will be covered during array 
