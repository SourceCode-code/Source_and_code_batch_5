// Condition -->

// when we have to make a decison based on condition given its called as conditional programining

/**
 *1 if()                 --> used on single condition
 *2 if else()            --> used in ethier or --(ternary opertor)
 *3 esle if ()           -->used for more than 2 conditions
 *4 switch case
 */

// If()  --> when you have a single condition to check you will use if ()

/**
 * synatx
 * 
 * if(condition){ output}
 */

//example :- 

//1 write a program to check if a given number is positive
let num = -25
if (num >= 0) { console.log(`the given number is a ${num} postive number`) }


// if else() --> it used in ethier or condition ( the output will always be between two condition) --> ternary opertaor


//1 write a program to check if a given number is positive or not 
// ternary opertaor
let checknum = num >= 0 ? console.log("the given number is postive ") : console.log("the number is negative")


// if else()

/**
 * sytnax 
 * if(condition){ output}
 * else{output 2}
 */

// example 

if (num >= 0) { console.log("number is postive") }
else { console.log("number is negative") }


// esle if() --> this will be used for multiple statement (more than 2 )

/**
 * 
 * 
 * 
 * if(condition){ output}
 * else if(condition){output }
 * else{output 2}
 * 
 */

// EXAMPLES :-- create program to check the season

let season = "summer"


if (season.toLowerCase() === "summer") { console.log("please carry a sunscreen and be hrydated") }

else if (season.toLowerCase() === "winter") { console.log("carry warm clothes ") }

else if (season.toLowerCase() === "rainy") { console.log("carry a umberlla and a raincoat") }

else { console.log("enter a valid input") }

// SWITCH CASE () --> this is latest update in es6 (this is most prefeered due to the sytanx clarity)

/**
 * 
 * sytnax --> 
 * 
 * let parameter = value 
 * 
 * switch(paramter){
 * case 1 : case1 output
 * case 2 : case2 output
 * case 3 : case3 output
 * 
 * default :default output 
 * } 
 */

// check a number if its postiive or negative 

let num1 = -40

switch (true) {

    // case 1 : if the number is postive 
    case num1 > 0: console.log(`the given number ${num1} is a postive number`)
        break
    // case 2 : if the number is negative
    case num1 < 0: console.log(`the given number ${num1} is a negative number`)
        break
    // case 3 : if the number is zero
    case num1 === 0: console.log(`the given number ${num1} is a zero `)
        break

    case typeof (num1) === String: console.log("the input given is aplha numeric")
        break
    // default 
    default: console.log("please enter a valid input data")
}

//break --> this keyword is used to terminate the opertaion when condition is met


// EXAMPLE OF 2

// write program to check working day and check if its is a office day or wfh 

let day = "monday"

let formated_day = day.toLowerCase()

switch (formated_day) {

    case "monday": console.log(" offically work for office day")
        break
    case "tuesday": console.log(" offically work for office day")
        break
    case "wednesday": console.log("you have work form home")
        break
    case "thrusday": console.log("you have work form home")
        break
    case "friday": console.log("you have work form home")
        break
    case "saturday": console.log("weekend please enjoy your holiday")
        break
    case "sunday": console.log("weekend please enjoy your holiday")
        break
    default: console.log(" enter vaild input data")
}


// optimzed version 

let day_1 = "saturday"

let formated_day_1 = day_1.toLowerCase()
switch (formated_day_1) {

    case "monday":
    case "tuesday": console.log(" offically work for office day")
        break
    case "wednesday":
    case "thursday":
    case "friday": console.log("you have work form home")
        break
    case "saturday":
    case "sunday": console.log("weekend please enjoy your holiday")
        break
    default: console.log(" enter vaild input data")
}