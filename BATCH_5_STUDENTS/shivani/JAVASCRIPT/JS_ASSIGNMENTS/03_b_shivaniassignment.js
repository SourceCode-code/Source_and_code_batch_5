// question --> 

// 1 Generate a random adahar number 
// generate a random 12 digit number of adhar card
//generate pack of 3 till number is of 12 digit ==. 4 number in each pack and this we have to do 3 times to generate 12 digit adhar number

//we have generate a number which is of 4 digit 
//the highest 4 digit number is = 9999
//the lowest 4 digit number is = 1000

let pack1 = Math.floor(Math.random()*(9999-1000+1))+1000
let pack2 = Math.floor(Math.random()*(9999-1000+1))+1000
let pack3 = Math.floor(Math.random()*(9999-1000+1))+1000

console.log(pack1 ,pack2 ,pack3) // output ==> 5627 1411 7661
//console.log(pack1+" "+pack2+" "+pack3)  // output ==> 7399 9281 3239





// 2 generate a random phone number 

// generate a random 10 digit phonenumber 
//the max 10 digit number is = 9999999999
//the min 10 digit number is = 1000000000
let phoneNumber = Math.floor(Math.random()*(9999999999-1000000000+1))+1000000000

console.log(phoneNumber)   // output ===> 6439584278






// 3 generate a random otp 
// generate a random 6 digit number of otp
//generate pack of 2 till number is of 6 digit ==> 3 number in each pack and this we have to do 2 times to generate 6 digit otp

//we have generate a number of otp which is of 3 digit 
//the max 3 digit number is = 999
//the min 3 digit number is = 100

let otp1 = Math.floor(Math.random()*(999-100+1))+100
let otp2 = Math.floor(Math.random()*(999-100+1))+100
console.log(otp1 ,otp2)  // output===> 313 173
//console.log(otp1+" "+otp2)  // output===> 412 843



// 4 generate a random password (letters +number+sign) 
//generate aa random password of 8 character whi is combination of letters +number +sign
const uppercasecharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercasecharacters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const specialcharacters = "!@#$%^&*()-+"

const allcharacters = uppercasecharacters + lowercasecharacters + numbers + specialcharacters
// console.log(allcharacters.length) //output ===> 74
length = 8
let password = ""
for(let i=0; i<8; i++){
    password += allcharacters.charAt(Math.floor(Math.random() * allcharacters.length))
}
console.log(password) 
 
//output ====> 6F2XHvC$