
// lets take example of an array 

let person_1 = ["siddhant", "arjun", "gadakh", 26, 7020400749, 47]

// the major drawback of array is that it is not descriptive 


// what is object and why it is needed  ? 
// object is datatype which is descriptive 



let Obj_1 = {
  first_name: "siddhant",
  middle_name: "arjun",
  last_name: "gadakh",
  age: 26,
  contact_number: 7020400749,
  skills: ["JS", "PY", "REACT", "VANILLA JS ", "CY", "PW", "CI", "CD"]
}

//OOPS --> OBJECT ORIENTED PROGRAMING STRUCTURE


/**
 * object is descriptive datatype 
 * object --> object is container in js that is used to store the values in key and value pair 
 * object are non primitive data type that allows us to group related data 
 * // how will you idenify and object 
 * object is identified by {}
 * every value in obj is separeted by comma 
 * in a object there always be data in key and value 
 */

// every data type will have  property and method
// object has a hidden property call as prototype 
// the combination of key and value represent as propties in array
// method of object object do some predefiend method
// in an object you can create method by using function


// example of object 


const user = {
  name: "Alice",
  age: 30,
  isStudent: false,
  hobbies: ["coding", "reading"]
}

console.log(user)


// every non primtive data  type has 4 basic operation

// addition
// delete
// update
// rertiving 

// object has 2 ways to perform basic operations

// 1 dot notation
// 2 bracket notation

// NOTE : IN CASE OF OBJECT THE DOT NOTATAION WILL NOT WORK IN LOOPS 

// // OBJECT :- 
// const user = {
//   name: "Alice",               
//   age: 30,                    
//   isStudent: false,           
//   hobbies: ["coding", "reading"]
// }

// console.log(user)



// RETRIEVE : -

// 1 dot notation
console.log(user.age)
// 2 bracket notation
console.log(user['age'])

//Update : -

// 1 dot notation
user.age = 35
console.log(user)
// 2 bracket notation
user['age'] = 25
console.log(user)

//Addition :-

// 1 dot notation
user.email = "hello@gmail.com"
console.log(user)
// 2 bracket notation
user["id"] = 1
console.log(user)

//Delete 

// 1 dot notation
delete user.id
console.log(user)

// 2 bracket notation
delete user["email"]
console.log(user)


//------------------------------------------LOOPS IN OBJECT 

// loops in array and string 

/**
 * for(let i =0;i<array.length;i++){
 * code
 * }

 */


let car = {
  Brand:"BMW",
  MODEL_NAME:"M5",
  COLOR:["GREEN","RED","WHITE","BLACK"],
  ENGINE_WARRNTY:"3 years"
} 

// LOOPS IN OBJECT 

for(let key in car){
console.log(`${key} --> ${car[key]}`)
}



//---------------------------------- METHOD IN OBJECTS ------------------------------------

//Object.assign() --> it will copy your object without changing the original object

let BMW_M5 = Object.assign({},car)

console.log(BMW_M5)]

BMW_M5.ENGINE_WARRNTY =1
console.log(BMW_M5)

console.log(car)



//Object.keys()--> gets all the keys form the object but the output is in array 

let BMW_KEYS = Object.keys(BMW_M5)
console.log(BMW_KEYS)

//[ 'Brand', 'MODEL_NAME', 'COLOR', 'ENGINE_WARRNTY' ]


//Object.values() -->  gets all the values form the object but the output is in array 

let BMW_value = Object.values(BMW_M5)
console.log(BMW_value)


//Object.entries() --> get will get you each key and value in a array 

let entry_obj = Object.entries(BMW_M5)

console.log(entry_obj)


// [
//   [ 'Brand', 'BMW' ],
//   [ 'MODEL_NAME', 'M5' ],
//   [ 'COLOR', [ 'GREEN', 'RED', 'WHITE', 'BLACK' ] ],
//   [ 'ENGINE_WARRNTY', 1 ]
// ]

//hasownproperty()--> this is used to check if object has a property or key 

console.log(BMW_M5.hasOwnProperty("ENGINE_WARRNTY"))

// this will be used in very complex object 

