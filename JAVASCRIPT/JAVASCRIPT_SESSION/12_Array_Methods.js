// ----------------------------------- METHODS ON ARRAY -----------------------------------------------------------------

// WHEN EVER WE USE ANY METHOD WE GET 2 THINGS 

//OUTPUT --> result of the action performed 
//RETURN TYPE --> THE DATATYPE OF THE OUTPUT RECVIED

let Method_array = ["siddhant", "arjun", "gadakh", 27, "lead-software enginner"]

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

let city = Method_array.pop()
console.log(Method_array)
console.log(city)


// ACTION      --> action the element is removed  form the end  
// RETURN TYPE --> the datatype of removed element  


// 4 METHOD --> shift() --> THIS METHOD IS USED TO REMOVE THE START ELEMENT FORM THE ARRAY 
// Sytnax -->  arrayName.shift()
// example

let initails = Method_array.shift()
console.log(Method_array)
console.log(initails)


// ACTION      --> action the element is removed  form the start  
// RETURN TYPE --> the datatype of removed element  


// 5 METHOD  splice()-->  THIS IS USED TO REMOVE ELEMENTS FORM THE ARRAY 

// syntax --> arrayName.splice("starting index" ,number of charatcter to remove)

let arrSplice = Method_array.splice(0, 2)

console.log(arrSplice)

// ACTION      --> action the given  element are removed  
// RETURN TYPE -->  the return type is a new array with removed elements  

// 6 METHOD --> slice()-->  THIS IS USED TO REMOVE ELEMENTS FORM THE ARRAY 

// syntax --> arrayName.slice("starting index" ,"ending index") --> this will not included ending index

let Method_array_1 = ["siddhant", "arjun", "gadakh", 27, "lead-software enginner"]

let arrSlice = Method_array_1.splice(0, 2)

console.log(arrSlice)

// ACTION      --> action the given  element are removed  
// RETURN TYPE -->  the return type is a new array with removed elements  


// 7 METHOD --> sort() --> this method will sort your alphabetically array 
// sytnax =--> arrayName.sort() 

let fruits_array = ["mango", "apple", "banana ", "watermelon", "chiku"]

console.log(fruits_array.sort())
//NOTE this method will not work on number
let number_array = [258, 654, 9, 5, 95, 67, 98745, 0, 682, 789, 34, 456, 24785]
// console.log(number_array.sort())

// ACTION      --> action the given  array is sorted 
// RETURN TYPE -->  the return type is a new array with sorted elements  

// HOW TO SORT A ARRAY WITH NUMBERS 

// syntax --> arrayName.sort((a,b)=>{return a-b})

let sorted_number_array = number_array.sort((a, b) => { return a - b })
console.log(sorted_number_array)


//8 METHOD --> reverse() --> this method will reverse your array 


console.log(sorted_number_array.reverse())

// action --> reverse the element 
// return type --> array 

// NOTE :- combvination of spilt / reverse / join is used to revsre a string 

// example :-

let str = "siddhant"

// i want output as "tnahddis"

let split_str = str.split('')
console.log(split_str.reverse().join(''))

// oneline solution

console.log(str.split("").reverse().join(""))


//9 METHOD  join() --> this method will convert your array into string 

// example -> 

let name = ["siddhant", "arjun", "gadakh"]

console.log(name.join(" "))

// action --> coverts array into string 
// return type is string 


// 10 METHOD includes() --> to check if the element is present in the array or not 

// example 

//let fruits_array = ["mango","apple","banana ","watermelon","chiku"]

console.log(fruits_array.includes("grape"))
console.log(fruits_array.includes("watermelon"))

// action      -->check if element is avaiable 
// return type -->boolean 


//11 METHOD  concat() --> this method is used to join two or more arrays 

// example 

let a = [1, 2, 3]
let b = [4, 5, 6]
let c = [7, 8, 9]


let combine_array = a.concat(b, c)
console.log(combine_array)

// action       --> joining all the arrays 
// return type  --> a new joined array

// 12 METHOD Flat() --> this is used to flatten the array 
// if in a single array there are mutiple array and you want to combine them all 

let mix_array = [1, 2, 3, ["qwert"], ["tryu"], "ubhav", [true, false]]

console.log(mix_array.flat())

// action --> action we are flatting the array 
// return --> a new flaten array 


// NOTE --> 

// find me the largest number and the smallest number in a  array

//let number_array = [258,654,9,5,95,67,98745,0,682,789,34,456,24785]

// ... this is called a spread opeartor  --> converts array into numbers 

// on number we have 2 methods called as Math.max() and Math.min()

//Math.max() --> used to find the largest number 

console.log(Math.max(...number_array)) //98745

console.log(Math.min(...number_array)) //0

console.log("____________________________________loop__________________________")
// -------------------------------------------------------------------------------------------------------------------

// LOOPS IN ARRAY 

// for an array you have use a for loop 

/**
 * syntax
 * 
 * for(let i =0;i<array.length;i++){
 * //code
 * } 
 */


let num_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < num_array.length; i++) {
    console.log(num_array[i])
}


//---------------------------------------------------------------------------

// i have to add2 to every array element and give it new array 

let add2 = []

for (let i = 0; i < num_array.length; i++) {
    add2.push(num_array[i] + 2)
}

console.log(add2)


// 2 now from the same array i want all elements above 5 

let filter5 = []

for (let i = 0; i < num_array.length; i++) {
    if (num_array[i] >= 5) {
        filter5.push(num_array[i])
    }
}

console.log(filter5)

let mix_num_array = [1, 2, 3, 4, 56, 5756, 78, 89, 789, 453, 624, 5, 75, 678, 678, 54768, 68796572, 24575687, 1243645, 12234, 13237]

let even_num = []
let odd_num = []


for (let i = 0; i < mix_num_array.length; i++) {
    if (mix_num_array[i] % 2 === 0) {
        even_num.push(mix_num_array[i])
    }
    else {
        odd_num.push(mix_num_array[i])
    }
}

console.log(even_num)
console.log(odd_num)


let names_arr = ["sidddhant", "amol", "ruhsi", "shree", "vaibhav", 0, "tejas"]



for (let i = 0; i < names_arr.length; i++) {
    if (typeof names_arr[i] === "string") {
        console.log(names_arr[i].toUpperCase())
    }
}

//________________________________COMPLEX ARRAY METHOD___________________________________________________
console.log("____________________________________COMPLEX ARRAY METHOD__________________________")

/**
 * map()    -->
 * filter() -->
 * reduce() -->
 * forEach()-->
 */

// 1 Method number 1 --> map() --> it will iterate over every element in array to perform given action and return a new array 

let Array_num_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// multply 5 to every element and give output in new array

/**
 * let newarray=Arrayname.map((el,index,arr)=>{
 * return code
 * })


 * el ==>current element 
 * index==> index of that current element
 * arr ==> the orignal arr
 */

let add5_arr = Array_num_1.map((el, index, arr) => {
    return el * 5
})


console.log(add5_arr)

// 2 Method number 1 --> filter() --> it will filter out elements by given conditions and return its output in new array 

/**
 *let newarray=Arrayname.filter((el,index,arr)=>{
 * return code
 * })
 */
let even_array = Array_num_1.filter((el, index, arr) => {
    return el % 2 === 0
})
console.log(even_array)



// 3 Method number 1 --> forEach() --> a method used to perform operation on every element of array but it does not 
// return output in new array 

/**
 * 
 * Arrayname.forEach((el,index,arr)=>{
 *   code
 * })
 * 
 */

let name_arr = ["siddhant","vaibhabv","amol"]

name_arr.forEach((el,index,arr)=>{
    console.log(el.toUpperCase())
})


// NOTE :- this method is widely used in cypress and playwright instead of using loops on array 
// IN cypress it has its own method called as each() --> this is used for looping array elements 



// 4 Method number 1 --> reduce() --> this method is used to get sum of all the elements (numbers ) in array and the new sum is 
// given in a  number 

/**
 * let newarray=Arrayname.reduce((acc,el,index,arr)=>{
 * return code
 * },accvalue)
 
 */

//let Array_num_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let SUM_TOTAL = Array_num_1.reduce((acc,el,index,arr)=>{
    return el+acc
        //1+2
        //2+1 =3
},0)

console.log(SUM_TOTAL)


// Extra methods 

// some and every 

// some() --> will check if some of the elements in array matches the condition or not (it is similar to or (||))

/**
 *  * let newarray=Arrayname.some((el,index,arr)=>{
 * return code
 * })
 * 
 * 
 * 
 */

//let Array_num_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// check if some of element are greater than 5 

let some_ele = Array_num_1.some((el,index,arr)=>{
    return el >5
})

console.log(some_ele)


//every()-->will check if every of the elements in array matches the condition or not (it is similar to  &&)

/**
 *  * let newarray=Arrayname.every((el,index,arr)=>{
 * return code
 * })
 * 
 * 
 */


let every_ele = Array_num_1.every((el,index,arr)=>{
    return el >5
})

console.log(every_ele)


