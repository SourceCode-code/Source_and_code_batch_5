// WHAT IS VARAIBLE ? 
// A VARAIBLE IS CONTAINER THAT IS USED TO STORE DATA 

// EXAMPLE 
let name = "siddhant"
//let -> keyword
//name ->variable name
//siddhant -> value 

// IN JS WE HAVE 3 VARAIBLES
// LET  
// VAR 
// CONST

// 1 VAR -->  var is the older way of delcaring a variables  ( it was used before es6--> 2014)

// FEATURES OF VAR 

/**
 * CAN BE UPDATED 
 * CAN BE RE-DECLARED
 * GET HOISTED 
 * AVOID THIS USING IN MODERN JS 
 * FUNCTION SCOPED
 */

var city = "pune"
console.log(city)
var city = "mumbai"
console.log(city)

//LET --> ITS NEWER WAY TO DECLARE VARIBALES (IT WAS INTRODUCE IN ES6 )

/**
 * 1 BLOCK SCOPE
 * 2 CANNOT RE-DECLARE IN SAME SCOPE
 * 3 CAN BE UPADTED
 */

//2 CANNOT RE-DECLARE IN SAME SCOPE

/**
 * let name = "xyz" // xyz
 * let name = yze // error
 * 
 */


//CONST --> ITS NEWER WAY TO DECLARE VARIBALES (IT WAS INTRODUCE IN ES6 )  it is used top delcare constant value

/**
 * 1 BLOCK SCOPE
 * 2 CANNOT RE-DECLARE IN SAME SCOPE
 * 3 CANNOT BE UPADTED
 */

//2 CANNOT RE-DECLARE IN SAME SCOPE

/**
 * const name = "xyz" // xyz
 *  name = rrrr // error cannot updated
  * 
 */


const user = {
    name: "siddhant"
}

user.name = "SID"

console.log(user.name)
//CAN WE CHANGE VALUE OF NON PRIMITIVE DATA TYPE INSIDE CONST ? 
// YES // why?
// because object refernce is constant , not object content 



// SCOPE --> 
// where  a variable can be accessed

// TYPE OF SCOPE -->

/**
 * 1 GOBAL SCOPE
 * 2 FUNCTION SCOPE 
 * 3 BLOCK SCOPE 
 * 
 */

// 1 GOBAL SCOPE -->  a varaible delcared outside of any function or block 

let company = "amazon"
console.log(company)
function printcompany() {
    console.log(company)
}


console.log(company)

printcompany()

//2 FUNCTION SCOPE --> variables declared  using var inside a function are function scoped variables

function test() {
    var x = 10
    console.log(x)
}


test()
// console.log(x)
//ReferenceError: x is not defined
// OUTSIDE OF THE FUNCTION X IS NOT ACCESSIBLE 

// BLOCK SCOPE  --  variables declared  using let and const  inside in a block { } are blocked scoped variables

{
    let a = 10
    let b = 20

    console.log(a)
    console.log(b)
}

// console.log(a) 
// //ReferenceError: a is not defined
// console.log(b)
//ReferenceError: b is not defined


// AND THIS IS REAL DIFFERENCE BETWEEN VAR AND LET

// var ingonre block scope 

{
    var q = 50
}

console.log(q)


// TDZ -->
//HOISTING-->
//SHADOWING-->



