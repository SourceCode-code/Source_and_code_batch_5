
// WHAT IS VARIABLE ?

/** 
 * ITS IS CONTAINER WHICH IS USED TO STORE DATA 
 * 
 */
let x = 10 // it shows that the value 10 is placed in container called as x 
let y = 20


console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)
console.log(x ** y)

// i need to perform same opertaion for the given varaible 
let z = 100
let u = 50

//  WHAT IS FUNCTION ?
//FUNCTION IS CONATINER WHICH IS USED TO CODE DATA TO MAKE YOUR CODE DYNAMIC AND RESUABLE

/**
 * 
 * SYNTAX OF FUNCTIONS 
 * 
 * function functionname(parameter){
 * logical code
 * }
 * 
 *HOW TO CALL A FUNCTION
 *  NAMEOFFUNCTION(PARAMETER)
 */
// CREATE A FUNCTION TO WRITE ARTHIMATIC OPERATIONS
function arthmatic_op(num1, num2) {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
    console.log(num1 % num2)
    console.log(num1 ** num2)
}
arthmatic_op(20, 30)
console.log("___________________")
arthmatic_op(100, 50)

// ADVANATAGES OF FUNCTIONS
/**
 * 1 makes code reusable (saves time)
 * 2 keep your code clean and dynamic
 * 3 avoid unnessacry dupliaction
 * 4 makes its easy to understand the code and managed
 */


// TYPES OF FUNCTIONS 

// THERE ARE 2 MAJOR CLASSIFICATION TYPES OF FUNCTION

//1 ON BASIS ON OF WRITING IT 
/**
 * 1 DELECRATIVE FUNCTION
 * 2 EXPERSSION TYPE FUNCTION
 * 3 ARROW TYPE FUNCTION
 */


//2 ON BASIS OF PARAMETER

/**
 * 1 WITHOUT PARAMTER WITHOUT RETURN TYPE
 * 2 WITH PARAMTER WITHOUT RETURN TYPE
 * 3 WITH PARAMTER WITH RETURN TYPE
 */


//2 ON BASIS OF PARAMETER


//1 WITHOUT PARAMTER WITHOUT RETURN TYPE


function fullname() {
    console.log("Siddhant Arjun Gadakh")
}

fullname()

//2 WITH PARAMTER WITHOUT RETURN TYPE

function calculator(num1, num2) {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
    console.log(num1 % num2)
    console.log(num1 ** num2)
}

calculator(1000,2000)

// 3 WITH PARAMTER WITH RETURN TYPE

// RETURN TYPE -->  THE FUNCTION WITH A RETURN TYPE  HAVE A SPECAIL USECASE WHERE I CAN STORE THERE OUTPUT 
//                   IN A VARAIBLE AND USED IT FOR FURTHER 

//  NOTE ; WHEN EVER THERE IS FUNCTION WHO HAS A RETRUN KEY WORD THAT FUNCTION IN { } WILL NOT USE CONSOLE.LOG()

function personinfo(firstname,lastname,midname){
    return `${firstname} ${midname} ${lastname}`
}

let sid_info = personinfo("siddhant","gadakh","arjun")

console.log(sid_info.toUpperCase())


// example 2 ---------------


// create a function or operation where you can calcualate total price of shooping for eggs and rice 



// function for eggs 

function eggPrice(numofeggs,priceofegg){
    return numofeggs*priceofegg
}

function ricePrice(quanityofrice,priceofkgprice){
    return quanityofrice*priceofkgprice
}

let total_eggprice = eggPrice(12,7)
 console.log(total_eggprice)  //84

let total_riceprice = ricePrice(10,50)
console.log(total_riceprice)  //500

let total_pice = total_eggprice+total_riceprice
console.log(total_pice)


//2 ON BASIS ON OF WRITING IT   --> here the usecase will not be changing 

//  * 1 DELECRATIVE FUNCTION --> here we delacre the name of the fumction while creating it so it called as delecarative functyion

function calculator3(num1, num2) {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
    console.log(num1 % num2)
    console.log(num1 ** num2)
}

calculator3(1000,2000)



//  * 2 EXPERSSION TYPE FUNCTION  -->  because here a function stored in varaible 

let fullname3 = function(firstname,lastname){
    return ` ${firstname} ${lastname}`
}

// NOTE :- EXPERSSION TYPE CAN ONLY BE USED FOR A FUNCTION WITH PARAMTER WITH RETURN TYPE




//  * 3 ARROW TYPE FUNCTION --> because this function uses arrow instead the keyword function so it called as arrow type function

let fullname2 = (firstname,lastname)=>{
     return ` ${firstname} ${lastname}`
}

console.log(fullname2("sid","gadakh"))
