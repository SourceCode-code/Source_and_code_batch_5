// 1. Write a function to generate a random Aadhar number (12 digits).

let aadhaar = Math.floor(Math.random() * 900000000000) + 100000000000;

console.log("Aadhaar Number:", aadhaar);

// 2. Write a function to generate a random phone number (10 digits).

let phoneNumber = Math.floor(Math.random() * 9000000000) + 1000000000;  
console.log("Phone Number:", phoneNumber);

// 3. Write a function to generate a random OTP (6 digits).
let otp = Math.floor(Math.random() * 900000) + 100000;
console.log("OTP:", otp);   


// 4. Write a function to generate a random password (letters + numbers + signs).
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*";
let password = "";

for (let i = 0; i < 8; i++) { // length = 8
    let index = Math.floor(Math.random() * chars.length);
    password += chars[index];
}

console.log("Password:", password);

// Alternative implementation for all the above functions: with the use of functions
// 1 generate a random adahar number
function generateAadharNumber() {
    let aadharNumber = '';
    for (let i = 0; i < 12; i++) {
        aadharNumber += Math.floor(Math.random() * 10);
    }
    return aadharNumber;
}
console.log("Random Aadhar Number: " + generateAadharNumber());

// 2 generate a random phone number
function generatePhoneNumber() {
    let phoneNumber = '';
    for (let i = 0; i < 10; i++) {
        phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
}
console.log("Random Phone Number: " + generatePhoneNumber());

// 3 generate a random otp
function generateOTP() {
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}
console.log("Random OTP: " + generateOTP());

// 4 generate a random password (letters +number+sign)
function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
console.log("Random Password: " + generatePassword(12)); // You can specify the desired length of the password here


