//Function is reusable block of code designed to perfrom a specific task
//Functions are used to make code reusable, avoid repetation, and make it dynamic by passing different values.
//function call- where you run it
//Parameters- input you pass into a function
//Return value- the O/P the function gves back

function arithmeticOperation(num1, num2) {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 / num2)
    console.log(num1 * num2)
    console.log(num1 % num2)
} arithmeticOperation(25, 5)

//Type of functions

//On basis of parameter

//Without Parameter without return type
//No input no output, just perform a task
function greetings() {
    console.log("Hello")
}
greetings()

function firstName() {
    console.log("Ankita")
} firstName()

//with parameter without return type
//take input but no return
function greetings(firstName) {
    console.log("Hello" +  firstName)
} greetings("Ankita")


function mathOperation(num3, num4){
    console.log(num3+num4)
} mathOperation(2753, 87253)

//With parameter with return type
//takes inputs nad gives output
//return sends the result back so we can store it and reuse it.

//Addition of two numbers
function add(a, b){
    return(a+b)
}
let total= add(20, 35)
console.log(total) 


//Find square root of number
function square(num){
    return(num*num)
} 
let squareNum= square(24)
console.log(squareNum)


//Print fullname using firstName, middleName, lastName

function fullName(firstName, middleName, lastName) {
    return`${firstName} ${middleName} ${lastName}`
}
let ankitaInfo= fullName("Ankita", "Hanumant", "Fartade")
console.log(ankitaInfo)

//On basis of writing it

//Declarative Function --> defined using function keyword with name
function greet(){ //Only store the function
console.log("Hello")
}

firstName() //function call wil execute it
function firstName(){
    console.log("Ankita")
}

//Expression type function--> This function stored in variable and mainly used for function with parameter and return type
let fullName1= function(firstName, lastName){
    return`${firstName} ${lastName}`
}
console.log(fullName1("Ankita", "Fartade"))

let multiply= function( a, b){
    return(a*b)
} 
console.log(multiply(2, 6))

//Arrow type function--> use arrow instead of key function
let square1= numm=> numm*numm
console.log(square1(5))

let parentInfo= (firstName, lastName)=>{
    return`${firstName} ${lastName}`
}
console.log(parentInfo("Hanumant", "Fartade"))