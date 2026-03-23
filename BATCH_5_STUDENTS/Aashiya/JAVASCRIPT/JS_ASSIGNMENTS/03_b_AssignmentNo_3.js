// 2 generate a random phone number 
//phone number consist of 10 digits so lets use formula (min 1000000000 max 9999999999)
let phone_Number=Math.floor(Math.random()*(9999999999-1000000000+1))+1000000000
console.log('91+ '+phone_Number)


// 3 generate a random otp 
//lets consider we need to generate 3 digits otp (min 100 max 999)
let otp=Math.floor(Math.random()*(999-100+1))+100
console.log(otp)

// 4 generate a random password (letters +number+sign) 