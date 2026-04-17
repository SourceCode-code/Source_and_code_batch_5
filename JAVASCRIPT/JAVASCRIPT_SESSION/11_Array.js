// Datatypes :-

// primitive      --> simple data type which immutable (number , string , boolean,null,undefined ) 
// non-primitive  --> data types which arte complex and can be changed (array object)

// example 

let a = 20
let b = "hello"

//Array --> Array is datatype which is used to stored multiple values 

/**
 * 
 * // 1 how to determine if a datatype is an array 
 * an array is always defined by [ sqaure bracket]
 * 
 * //2 how to know if theb value is seprated or not 
 *  in array each is separted by a comma ,
 * 
 * 
 * //3 what are the datatypes or values we canb store in all array 
 * we can store any value in an array  
 */


// examples for how to delacre an array 

// 1 way of delecraing an --> this is perfeered way 

let array_a  = []
let array_b = [20,"hello",30,true,null,undefined,[]]
let c = ["Wwqrwe",25,"wadfsdf",true]

console.log(array_a)
console.log(array_b)
console.log(c)

// 2 way of delecraing  --> this not used as much  (igonre this )

let arr = Array()
console.log(arr)



// TECHINCAL DIFFERENCE BETWEEN PRIMTIVE AND NON PRIMITIVE 


let aa = 10
let bb = 10

let cc = [10]
let dd = [10]

console.log(aa === bb) // TRUE  

console.log(cc === dd) //FALSE 

// NOTE :-  why this happens 
// two primitive data types can be equal , but two non primitive data type can never be equal 
// they can be similar because there referance point are not same 


let ee = [1,2,3]



// console.log(ff ===gg)
// console.log(ee ==ff) //TRUE 



// Array --> every datatype will have properties and methods 

// array has property called as length
// array will vast number methods
// in array the values are stored in indexes 
// in array the value are separted by comma 

// examples of array 
//                  0       1      2    3       4
let array_ex  = ["siddhant",27,"gadakh",true,null]

// the total legth of array will be how to get length 

//5 
console.log(array_ex.length)
// length -1 will always be last element 


