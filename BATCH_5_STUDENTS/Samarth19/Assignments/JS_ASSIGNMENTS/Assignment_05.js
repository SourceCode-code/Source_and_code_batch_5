// question --> 

// 1 Generate a random adahar number 

let addharfirstfour = Math.floor(Math.random() * (9999 - 1000) + 1000);
let addharsecondfour = Math.floor(Math.random() * (9999 - 1000) + 1000);
let addharthirdfour = Math.floor(Math.random() * (9999 - 1000) + 1000);

console.log(addharfirstfour, addharsecondfour, addharfirstfour);


// 2 generate a random phone number 

let mobilenumber = Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000);
console.log(mobilenumber);


// 3 generate a random otp 

let OneTimePassword = Math.floor(Math.random() * (999999 - 100000) + 100000);
console.log(OneTimePassword);

// 4 generate a random password (letters +number+sign) 

let alphletters = "mnbvcxzasdfghjklqwertyuiop"
let specialcharacter = "*&^%$#@!"

let letterA = Math.floor(Math.random() * (alphletters.length))
let letterB = Math.floor(Math.random() * (alphletters.length))
let letterC = Math.floor(Math.random() * (alphletters.length))
let spcharecter = Math.floor(Math.random() * (specialcharacter.length))
let numforpassword = Math.floor(Math.random() * (99 - 10) + 10)

console.log(letterA.toUppercase, letterB, letterC, spcharecter, numforpassword);




