// question --> 

// 1 Generate a random adahar number 

function ranAadhaar()
{
    let aadhaar = "";
    
    for(let i = 0; i < 12; i++)
        {
            aadhaar += Math.floor(Math.random() * 10);
        } 

    return aadhaar;
}


// 2 generate a random phone number 

function ranPhone()
{
    let phone = "";

    for(let i = 0; i < 10; i++)
        {
            phone += Math.floor(Math.random() * 10);
        } 

    return phone;
}


// 3 generate a random otp 

function ranOtp()
{
    let otp = "";

    for(let i = 0; i < 4; i++)
        {
            otp += Math.floor(Math.random() * 10);
        } 

    return otp;
}


// 4 generate a random password (letters +number+sign) 

function ranPassword(length)
{
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    const allChars = lower + upper + numbers + symbols;

    let password = "";

    password += lower[Math.floor(Math.random() * lower.length)];
    password += upper[Math.floor(Math.random() * upper.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    for (let i = password.length; i < length; i++) 
        {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }

    return password;
}


console.log("Aadhaar:", ranAadhaar());
console.log("Phone:", ranPhone());
console.log("OTP:", ranOtp());
console.log("Password:", ranPassword(12));