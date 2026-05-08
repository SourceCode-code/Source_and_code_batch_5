
// WHAT IS VARIABLE ?

<<<<<<< HEAD
const { lazy } = require("react")

=======
>>>>>>> be8b338a28c7fe84c0e3a519d901137b1b4b803e
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

<<<<<<< HEAD
calculator(1000,2000)
=======
calculator(1000, 2000)
>>>>>>> be8b338a28c7fe84c0e3a519d901137b1b4b803e

// 3 WITH PARAMTER WITH RETURN TYPE

// RETURN TYPE -->  THE FUNCTION WITH A RETURN TYPE  HAVE A SPECAIL USECASE WHERE I CAN STORE THERE OUTPUT 
//                   IN A VARAIBLE AND USED IT FOR FURTHER 

//  NOTE ; WHEN EVER THERE IS FUNCTION WHO HAS A RETRUN KEY WORD THAT FUNCTION IN { } WILL NOT USE CONSOLE.LOG()

<<<<<<< HEAD
function personinfo(firstname,lastname,midname){
    return `${firstname} ${midname} ${lastname}`
}

let sid_info = personinfo("siddhant","gadakh","arjun")
=======
function personinfo(firstname, lastname, midname) {
    return `${firstname} ${midname} ${lastname}`
}

let sid_info = personinfo("siddhant", "gadakh", "arjun")
>>>>>>> be8b338a28c7fe84c0e3a519d901137b1b4b803e

console.log(sid_info.toUpperCase())


// example 2 ---------------


// create a function or operation where you can calcualate total price of shooping for eggs and rice 



// function for eggs 

<<<<<<< HEAD
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
=======
function eggPrice(numofeggs, priceofegg) {
    return numofeggs * priceofegg
}

function ricePrice(quanityofrice, priceofkgprice) {
    return quanityofrice * priceofkgprice
}

let total_eggprice = eggPrice(12, 7)
console.log(total_eggprice)  //84

let total_riceprice = ricePrice(10, 50)
console.log(total_riceprice)  //500

let total_pice = total_eggprice + total_riceprice
>>>>>>> be8b338a28c7fe84c0e3a519d901137b1b4b803e
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

<<<<<<< HEAD
calculator3(1000,2000)
=======
calculator3(1000, 2000)
>>>>>>> be8b338a28c7fe84c0e3a519d901137b1b4b803e



//  * 2 EXPERSSION TYPE FUNCTION  -->  because here a function stored in varaible 

<<<<<<< HEAD
let fullname3 = function(firstname,lastname){
=======
let fullname3 = function (firstname, lastname) {
>>>>>>> be8b338a28c7fe84c0e3a519d901137b1b4b803e
    return ` ${firstname} ${lastname}`
}

// NOTE :- EXPERSSION TYPE CAN ONLY BE USED FOR A FUNCTION WITH PARAMTER WITH RETURN TYPE




//  * 3 ARROW TYPE FUNCTION --> because this function uses arrow instead the keyword function so it called as arrow type function

<<<<<<< HEAD
let fullname2 = (firstname,lastname)=>{
     return ` ${firstname} ${lastname}`
}

console.log(fullname2("sid","gadakh"))
=======
let fullname2 = (firstname, lastname) => {
    return ` ${firstname} ${lastname}`
}

console.log(fullname2("sid", "gadakh"))


//---------------------------------------------------------------------------------------------------------------
// EXAMPLES OF FUNCTIONS

// 1 write function to count the number vowels in a given string 


function count_Vowels(string) {
    let lower_string = string.toLowerCase()
    let vowel_string = "aeiou"
    let count = 0
    for (let i = 0; i < lower_string.length; i++) {
        if (vowel_string.includes(lower_string[i])) {
            count++
        }
    }
    console.log(count)
}

count_Vowels("string")
//-------------------------------
count_Vowels("siddhant")
//--------------------------------
count_Vowels("vaibhav")


// write a function get me the largest and smallest element of an array based upon the parameter given
// function GET_ELEMENT([],max/min)


function GET_ELEMENT(array, neededvalue) {
    let min = Math.min(...array)
    let max = Math.max(...array)
    if (neededvalue.toLowerCase() === "min") {
        console.log(min)
    } else if (neededvalue.toLowerCase() === "max") {
        console.log(max)
    }
    else {
        console.log("check the entered paramter")
    }
}

GET_ELEMENT([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 1, 2, 5, 8, 6, 1, 5, 6, 5, 555555], "min")
GET_ELEMENT([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 1, 2, 5, 8, 6, 1, 5, 6, 5, 555555], "max")
GET_ELEMENT([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 1, 2, 5, 8, 6, 1, 5, 6, 5, 555555], "")



// create a function to get the longest and shortest word form the string  based upon given parameter

function GET_WORD(string, LENGTH_WORD) {
    let WORD_ARRAY = string.split(" ")
    let longest_word = WORD_ARRAY[0]
    let shortest_word = WORD_ARRAY[0]
    for (let i = 0; i < WORD_ARRAY.length; i++) {
        if (WORD_ARRAY[i].length > longest_word.length) {
            longest_word = WORD_ARRAY[i]
        }
        else if (WORD_ARRAY[i].length < shortest_word.length) {
            shortest_word = WORD_ARRAY[i]
        }
        else {
            "enter correct data "
        }

    }

    if (LENGTH_WORD.toLowerCase() === "longest") {
        return longest_word
    }
    else if (LENGTH_WORD.toLowerCase() === "shortest") {
        return shortest_word
    }
    else {
        return "enter correct data "
    }
}

console.log(GET_WORD("hello i am siddhant", "longest"))
console.log(GET_WORD("hello i am siddhant", "shortest"))
console.log(GET_WORD("hello i am siddhant", "short"))


// write a function to check the given is prime number or not 

function check_prime(number){
    if(number<2){
        return false
    }

    for(let i=2;i<Math.sqrt(number);i++){
        if(number%i===0){
            return false
        }
    }

    return true
}


console.log(check_prime(7))
console.log(check_prime(1))
console.log(check_prime(10))
console.log(check_prime(13))
console.log(check_prime(11))


// ----------------------------------------------->
// in function we can add array , number , string , object 
// but in function we can have unlimted parameter


function get_sum(...number){
    let total = 0
    for(let n of number){
        total+=n
    }
return total
}


console.log(get_sum(0,1,2))
console.log(get_sum(0,1,2,3,4,5,6,7,8,9))
console.log(get_sum(100,200,300,400,500))
>>>>>>> be8b338a28c7fe84c0e3a519d901137b1b4b803e
