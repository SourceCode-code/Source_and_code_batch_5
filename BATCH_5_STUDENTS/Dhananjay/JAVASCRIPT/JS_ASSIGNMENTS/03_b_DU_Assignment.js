// 1 Generate a random adahar number 

console.log(`Random Aadhaar Number: ${(Math.floor(Math.random() * (9999 - 1000 + 1) + 1000))} ${(Math.floor(Math.random() * (9999 - 1000 + 1) + 1000))} ${(Math.floor(Math.random() * (9999 - 1000 + 1) + 1000))}`)

// 2 generate a random phone number 
//As in India Mobile number starts from 6,7,8,9 and the +91 is a Country Code
console.log(`Random Mobile Number: +91 ${Math.floor(Math.random() * (900 - 600 + 1) + 600)}${Math.floor(Math.random() * (900 - 100 + 1) + 100)}${Math.floor(Math.random() * (9000 - 1000 + 1) + 1000)}`)

// 3 generate a random otp 
// Generating random 6 digit otp
console.log(`Random OTP: ${(Math.ceil(Math.random() * (999999 - 100000 - 1) + 100000))}`)


// 4 generate a random password (letters +number+sign) 

let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let Symbols = '!@#$%&*_';

let Letter1 = Math.floor(Math.random()*(characters.length))
let Letter2 = Math.floor(Math.random()*(characters.length))
let Letter3 = Math.floor(Math.random()*(characters.length))
let Letter4 = Math.floor(Math.random()*(characters.length))
let Symbol5 = Math.floor(Math.random()*(Symbols.length))
let Number6 = Math.floor(Math.random()*(99-10-1)+10)


console.log(`${characters[Letter1]}${characters[Letter2]}${characters[Letter3]}${characters[Letter4]}${Symbols[Symbol5]}${Number6}`)