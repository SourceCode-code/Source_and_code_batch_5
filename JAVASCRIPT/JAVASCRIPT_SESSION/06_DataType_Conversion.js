// DATA TYPE CONVERSION 

// WE NEED TO CONVERT STRING TO NUMBER AND VICE VERSA

console.log(typeof "123")
console.log(typeof 123)

console.log("456"+"789")

// CONVERSION OF STRING "1234" TO NUMBER 1234

let num_1 = "123456"
console.log(typeof num_1)


// 1 Number 

console.log(Number(num_1))

console.log(typeof Number(num_1)) 


//2 parseInt  --> THIS METHOD WILL CONVERT YOUR NUMBER TO INTEGER

let str_1 = "1234.56"

console.log(typeof str_1 )
console.log(parseInt(str_1))
console.log(typeof parseInt(str_1))


//2 parseFloat  --> THIS METHOD WILL CONVERT YOUR NUMBER TO floating number

let str_2 = "1234.56"

console.log(typeof str_1 )
console.log(parseFloat(str_1))
console.log(typeof parseFloat(str_1))

// CONVERSION OF NUMBER 1234 to STRING "1234" 

// STRING()

let num_2 = 123456789

console.log(typeof num_2)
console.log(String( num_2))
console.log(typeof String( num_2) )

//toString() --> this method will convert number to string 

console.log(typeof num_2)
console.log( num_2.toString())
console.log(typeof num_2.toString()  )


console.log("________________________________________________________")
// Question -->

console.log(5+5)  // 10
console.log("5"+5)  //55 
console.log("5"+"5")//"55" 
console.log("5"-5) //0
console.log(5-"5")//0
console.log("5"*5)//25
console.log(5*5)//25
console.log("5"-true)//4 true in coding represent value 1
console.log("5"-false)//5 false in coding represent value 0
console.log("5"+true)// string
console.log("5"+false)//string

//NOTE :- 


//1 for + opertor  --> 

/**
 * if both data types are number then it will act as arthmatic operator
 * if both the datatypes are different then it will as a conversion tool that it it will convert the datatypes
 * into string
 */

// for other operators -->

/**
 * (-,*,/,%) --> it will if the datatype are same or different it will convert them into number and give you arthmatic answer
 */