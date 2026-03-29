// STRINGS IN JS  -->
//string is seqeunece of character and can be defined by ("double quotes") , ('single quotes),(`back ticks`)

// Examples 

let str_0= "   "// empty string
let str_1 = "siddhant"
let str_2 = '12345678900'
let str_3 = "true"
let str_4 = `null`
let str_5 = " ' ' " 


console.log(typeof str_0)
console.log(typeof str_1)
console.log(typeof str_2)
console.log(typeof str_3)
console.log(typeof str_4)
console.log(typeof str_5)

/** srting datatype will also have
 * 
 * properties--> length ( size of string / size charcter )
 * methods--> string will have a various methods
  */


// String has a property called as length

// how to check a length of given string  --> strname.length
console.log( str_0.length)
console.log( str_1.length)
console.log( str_2.length)
console.log( str_3.length)
console.log( str_4.length)
console.log( str_5.length)


// character in string are stored in indexes 

/**
 * let str = "s i d d h a n t"
 *            0 1 2 3 4 5 6 7  
 */


let name_str = "siddhant"

console.log(name_str)
// how to get any charecter in string by index

console.log(name_str[0])

//  the last index will always be length -1
console.log(name_str[7]) // t

console.log(name_str[name_str.length-1]) //t



// STRING CONCATENTAION --> combining two or more string together to create a new string 

let firstName = "siddhant"
let middleName = "arjun"
let lastName = "gadakh"

// 1 use + opertor
 console.log(firstName+middleName+lastName) //siddhantarjungadakh
  console.log(firstName+" "+middleName +" "+lastName) //siddhant arjun gadakh

console.log("my full name is"+" "+firstName+" "+middleName +" "+lastName) //siddhant arjun gadakh


// 2 es6 template  (template literal )

// NOTE :  CONCATENTAION of two string by template literal is only possible if the string is delecared by backticks ` `

console.log(`${firstName} ${middleName} ${lastName}`) //siddhant arjun gadakh



console.log(`my full name is ${firstName} ${middleName} ${lastName}`) 


// long literal --> (\) it is used to extend the string scope form single to multiline 

let long_string = "aqwedrftgyhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh\
hhaeteaeaeaeaeateateatteateateateateateateattet"

console.log(long_string)


// Escape charcter  --> these are special character usecd to meet certain condition

// if you have print a string on multiple line on terminal
//1 \n (new line)--> this is used to allow you to print output in multiline 
console.log("my\nname\nis\nsiddhant")

//2 \' --> adding single quote in a string delcared by single quote 
 console.log(' my name is \'siddhant\' ')

//3 \" --> adding double quote in a string delcared by double quote 
 console.log(" my name is \"siddhant\" ")

 

