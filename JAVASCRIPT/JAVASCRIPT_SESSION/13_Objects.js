
// lets take example of an array 

let person_1 = ["siddhant","arjun","gadakh",26,7020400749,47]

// the major drawback of array is that it is not descriptive 


// what is object and why it is needed  ? 
// object is datatype which is descriptive 



let Obj_1 = {
    first_name:"siddhant",
    middle_name:"arjun",
    last_name:"gadakh",
    age:26,
    contact_number:7020400749,
    skills:["JS","PY","REACT","VANILLA JS ","CY","PW","CI","CD"]
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