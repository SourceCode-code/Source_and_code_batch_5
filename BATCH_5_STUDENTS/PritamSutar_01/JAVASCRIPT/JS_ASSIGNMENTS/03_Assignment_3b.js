// question --> 

// 1 Generate a random adahar number 
// 2 generate a random phone number 
// 3 generate a random otp 
// 4 generate a random password (letters +number+sign) 


let pack1  = Math.floor(Math.random()*(9999-1000+1))+1000
let pack2 = Math.floor(Math.random()*(9999-1000+1))+1000
let pack3 = Math.floor(Math.random()*(9999-1000+1))+1000

console.log(pack1 , pack2 , pack3)

// 2 generate a random phone number

let phNumber = Math.floor(Math.random()*(9999999999-1000000000+1))+1000000000

console.log("+91", phNumber)

// 3 generate a random otp

let otp = Math.floor(Math.random()*(9999-1000+1))+1000

console.log(otp)

// 4 generate a random password (letters +number+sign)

let var = ""

