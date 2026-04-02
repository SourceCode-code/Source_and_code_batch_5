// question --> 

// 1 Generate a random adahar number 
let pack1  = Math.floor(Math.random()*(9999-1000+1))+1000
let pack2 = Math.floor(Math.random()*(9999-1000+1))+1000
let pack3 = Math.floor(Math.random()*(9999-1000+1))+1000
console.log(`Random Aadhaar number = ${pack1} ${pack2} ${pack3}`);


// 2 generate a random phone number 
console.log(`Random mobile nuumber = ${Math.floor(Math.random()*(9999999999-6000000000 + 1)+6000000000)}`);


// 3 generate a random otp
console.log(`Random OTP = ${Math.floor(Math.random()*(9999 - 1000 + 1)+ 1000)}`);


// 4 generate a random password (letters +number+sign) 
let aplha_str = "qwertyuiopasdfghjklzxcvbnm"
let sym_str = "!@#$%^&*()_+"


let letter_1= Math.floor(Math.random()*(aplha_str.length))
let letter_2= Math.floor(Math.random()*(aplha_str.length))
let letter_3= Math.floor(Math.random()*(aplha_str.length))
let sym= Math.floor(Math.random()*(sym_str.length))
let str_num = Math.floor(Math.random()*(99-10)+10) // 10-99


console.log(`Random password = ${aplha_str[letter_1].toUpperCase()}${aplha_str[letter_2]}${aplha_str[letter_3]}${sym_str[sym]}${str_num}`)
