// Destructuring 

// Excarating the values from array or object and storing them into varaibles easily 


let arr = [10,20]

// Traditional way 
let a = arr[0]
let b = arr[1]
console.log(a,b)


// NEW WAY 

let [x,y]=arr

// x= 10  y =20

console.log(x,y)


// BVASIC SYNTAX FOR ARRAY DESTRUTURE

let arr1 = [1,2,3]
let [c,d,e] = arr1

console.log(c,d,e)


// STRING ARRAY 
let names_arr = ["sidddhant", "amol", "ruhsi", "shree", "vaibhav", "tejas"]

let [s1,s2,s3,s4,s5,s6 ] = names_arr

console.log(s3)
console.log(s5)


// SKIPPING VALUES 
let [n1,,,,,n2] = names_arr

console.log(n1,n2)

//NESTED ARRAY 
let fullstack = [["HTML","CSS","JS","REACT"],["NODE","EXPRESS","MONGOODB"]]
// let [frontEnd,BackEND]=fullstack
// console.log(frontEnd,BackEND)

let [[f1,f2,f3,f4],[b1,b2,b3]]=fullstack
console.log(f1,b3)
// s1 = html
// s2=css



//let names_arr = ["sidddhant", "amol", "ruhsi", "shree", "vaibhav", "tejas"]

let [name1,name2,...rest]=names_arr

console.log(name1,name2,rest)
//sidddhant amol [ 'ruhsi', 'shree', 'vaibhav', 'tejas' ]