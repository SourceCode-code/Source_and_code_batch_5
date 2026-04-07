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


