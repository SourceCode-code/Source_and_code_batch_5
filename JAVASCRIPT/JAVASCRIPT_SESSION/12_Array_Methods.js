 // ----------------------------------- METHODS ON ARRAY -----------------------------------------------------------------

 // WHEN EVER WE USE ANY METHOD WE GET 2 THINGS 

 //OUTPUT --> result of the action performed 
 //RETURN TYPE --> THE DATATYPE OF THE OUTPUT RECVIED

 let Method_array = ["siddhant", "arjun","gadakh",27, "lead-software enginner"]

// 1 METHOD  --> push() --> THIS METHOD WILL ADD A ELEMENT AT THE END OF ARRAY 

// Sytnax -->  arrayName.push(value that is to be added )

// example --> 

Method_array.push("Sangamner")
console.log(Method_array)

// ACTION      --> action the element is added at the end 
// RETURN TYPE --> array 


// 2 METHOD  --> unshift() --> THIS WILL ADD THE ELEMENT AT THE START OF THE ARRAY 

// Sytnax -->  arrayName.unshift(value that is to be added )

//example 

Method_array.unshift("MR")
console.log(Method_array)

// ACTION      --> action the element is added at the start 
// RETURN TYPE --> array 

// 3 METHOD --> pop() --> THIS METHOD IS USED TO REMOVE THE LAST ELEMENT FORM THE ARRAY 
// Sytnax -->  arrayName.pop()
// example

let city=Method_array.pop()
console.log(Method_array)
console.log(city)


// ACTION      --> action the element is removed  form the end  
// RETURN TYPE --> the datatype of removed element  


// 4 METHOD --> shift() --> THIS METHOD IS USED TO REMOVE THE START ELEMENT FORM THE ARRAY 
// Sytnax -->  arrayName.shift()
// example

let  initails=Method_array.shift()
console.log(Method_array)
console.log(initails)


// ACTION      --> action the element is removed  form the start  
// RETURN TYPE --> the datatype of removed element  


// 5 METHOD  splice()-->  THIS IS USED TO REMOVE ELEMENTS FORM THE ARRAY 

// syntax --> arrayName.splice("starting index" ,number of charatcter to remove)

let arrSplice = Method_array.splice(0,2)

console.log(arrSplice)

// ACTION      --> action the given  element are removed  
// RETURN TYPE -->  the return type is a new array with removed elements  

// 6 METHOD --> slice()-->  THIS IS USED TO REMOVE ELEMENTS FORM THE ARRAY 

// syntax --> arrayName.slice("starting index" ,"ending index") --> this will not included ending index

let Method_array_1 = ["siddhant", "arjun","gadakh",27, "lead-software enginner"]

let arrSlice = Method_array_1.splice(0,2)

console.log(arrSlice)

// ACTION      --> action the given  element are removed  
// RETURN TYPE -->  the return type is a new array with removed elements  


// 7 METHOD --> sort() --> this method will sort your alphabetically array 
// sytnax =--> arrayName.sort() 

let fruits_array = ["mango","apple","banana ","watermelon","chiku"]

console.log(fruits_array.sort())
//NOTE this method will not work on number
let number_array = [258,654,9,5,95,67,98745,0,682,789,34,456,24785]
// console.log(number_array.sort())

// ACTION      --> action the given  array is sorted 
// RETURN TYPE -->  the return type is a new array with sorted elements  

// HOW TO SORT A ARRAY WITH NUMBERS 

// syntax --> arrayName.sort((a,b)=>{return a-b})

let sorted_number_array = number_array.sort((a,b)=>{return a-b})
console.log(sorted_number_array)

