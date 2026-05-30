//OBJECT ---> object is descriptive data type which is used to store data in key and value pair

// 1 object literal --> creacting object mannually 

let obj = {
    name: "siddhant",
    age: 26
}

// Method/ ways to create object in js 

// 1 function constructor -->

// constructor --> it is special function / keyword which is used to create or initalize
// this        --> this keyword refers to the scope of the object is currently calling (always current context )


function USER_DETAILS(name, age) {
    this.name = name,
    this.age = age
}

let user_1 = new USER_DETAILS("siddhant", 26)
let user_2 = new USER_DETAILS("samarth", 26)

console.log(user_1) // { name: 'siddhant', age: 26 }
console.log(user_2) //{ name: 'samarth', age: 26 }


// 2 Factory FUNCTION  -- 

function USER_DETAILS_2(name, age) {
   return {
    name,
    age
   }
}
let user_3 = new USER_DETAILS("user3", 26)
let user_4 = new USER_DETAILS("user4", 30)

console.log(user_4) // { name: 'siddhant', age: 26 }
console.log(user_3) //{ name: 'samarth', age: 26 }




// ES6 class --> 

// class is more than a object its blueprint to create / get objects and its methods
// class defines the behaviour of the object , and object will represnt its parnet class



/**
 * basic syntax 
 * 
 * 
 * 
 * class classname {
 * 
 * //code
 * 
 * }
 * 
 * 
 * 
 * 
 */

// class user_01 {
    
// }

// console.log(user_01)


// WHY IS CLASS IMPORANT --> POM (PAGE OBJECT MODEL )--> totally depends upon class 