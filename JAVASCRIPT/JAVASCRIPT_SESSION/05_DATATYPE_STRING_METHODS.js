//STRING METHODS --> THIS ARE USED TO PERFORM OPERTION ON STRING

// WHY STRING IS IMMUTABLE IN JS
// STRING -->String is immutable in JS 
// This means once string has been defined its characters connot be changes
//any operation or method that you used to create any modifaication actually creates a new string 


// 1 toUpperCase() --> THIS CONVERT YOUR STRING INTO UPPERCASE (CAPTIAL LETTERS)

let str = " i am learning toUpperCase method of string"
console.log(str.toUpperCase())
console.log(str)
// I AM LEARNING TOUPPERCASE METHOD OF STRING

// 2 toLowerCase() --> THIS WILL CONVERT YOUR STRING INTO LOWERCASE (SMALL LETTERS)
let lower_str= "I AM LEARNING toLowerCase() METHOD OF STRING IN JS"

console.log(lower_str.toLowerCase())



// STRING CONCATION -> JOINING TWO OR MORE STRING `` // +
// METHOD CONCATION -> JOINING TWO OR MORE METHODS
//NOTE : -- METHOD CONCATION WILL ONLY WORK IF  THE OUTPUT OF FIRST IS THE VAILD INPUT TO SECOND METHOD

let method_con = "HELLO I AM A DEMO OF LEARNING METHOD CONACTAION"

// console.log(method_con.toLowerCase().toUpperCase().length.toLowerCase())


//example of valid and invalid


let num_str = "28"
console.log(num_str.toLowerCase().toUpperCase())
console.log(typeof num_str)
let len_numstr = num_str.length
console.log(len_numstr)
console.log(typeof len_numstr)


//3 trim() -->  THIS METHOD WILL REMOVE EMPTY SPACE FORM THE START AND FORM END OF THE STRING

let trim_ex = " hello "
console.log(trim_ex.length)
console.log(trim_ex.trim())
console.log(trim_ex.trim().length)

//4 trimStart()--> THIS METHOD WILL REMOVE EMPTY SPACE FORM THE START OF THE STRING

console.log(trim_ex.length)
console.log(trim_ex.trimStart())
console.log(trim_ex.trimStart().length)
//5 trimEnd()--> THIS METHOD WILL REMOVE EMPTY SPACE FORM THE  END OF THE STRING
console.log(trim_ex.length)
console.log(trim_ex.trimStart())
console.log(trim_ex.trimEnd().length)


