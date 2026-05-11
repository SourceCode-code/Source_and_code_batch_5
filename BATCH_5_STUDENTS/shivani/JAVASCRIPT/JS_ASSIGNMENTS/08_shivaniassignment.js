/*
dd:mm:yyyy HH:mm (24 hours)
dd:mm:yyyy HH:mm (12 hours)//(month should be like oct)
dd:mm:yyyy HH:mm (12 hours)//(month should be like octomber
yyyy:mm:DD mm:hh
*/

let age = 25;
let secondlived = age*(365*24*60*60);// assume this is not a leap year
console.log("I have lived for " + secondlived + " seconds.")

//or
let secondlived1= age*(365*24*60*60);// assume this is not a leap year
console.log( secondlived1)//788400000


let assumption =100;
let secondlived2= assumption*(365*24*60*60);// assume this is not a leap year
console.log("If I live for " + assumption + " years, I will have lived for " + secondlived2 + " seconds.")
//If I live for 100 years, I will have lived for 3153600000 seconds.

/*or 
let secondlived2= assumption*(365*24*60*60);// assume this is not a leap year
console.log( secondlived2 ) //3153600000
*/

//question 2
let currentyear = 2024;
let birthyear = 1998;
let age1 = currentyear - birthyear;
console.log("I am " + age1 + " years old.")
//I am 26 years old.

//question 3
let radius = 5;
let area = Math.PI * radius * radius;
console.log("The area of the circle with radius " + radius + " is " + area.toFixed(2) + ".")
//The area of the circle with radius 5 is 78.54.

//question 4
let fahrenheit = 100;
let celsius = (fahrenheit - 32) * 5 / 9;
console.log(fahrenheit + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius.")
//100 degrees Fahrenheit is equal to 37.78 degrees Celsius.

//question 5
let celsius1 = 37;
let fahrenheit1 = (celsius1 * 9 / 5) + 32;
console.log(celsius1 + " degrees Celsius is equal to " + fahrenheit1.toFixed(2) + " degrees Fahrenheit.")
//37 degrees Celsius is equal to 98.60 degrees Fahrenheit.

//question 6
/*return the date in the format: " day of th weak , DD month yyyy HH:mm"
(e.g. "Monday, 02 October 2024 14:30")
(e.g."Monday, 02 octomber 2024 3:30 pm")
*/
let date = new Date();
let curday =date.toLocaleString("en-us",{weekend:"long"})
console.log(curday)

let curdate = date.getDate();
console.log(curdate) //17

let curmonth = date.toLocaleString("en-us",{month:"long"})
console.log(curmonth)//April

let curyear = date.getFullYear();
console.log(curyear)//2026

let curhour = date.getHours();
console.log(curhour) //13

let curminute = date.getMinutes();
console.log(curminute) //50

let second = date.getSeconds();
console.log(second) //24

let ampm = curhour >= 12 ? "PM" : "AM";
console.log(ampm); //PM
/*
let chour = curhour % 12 || 12; // Convert to 12-hour format
console.log(chour) //1
*/
let chour = curhour % 12 
console.log(chour) //1

let minutes = date.getMinutes();
console.log(minutes) //9

/*
let minute = curminute < 10 ? "0" + curminute : curminute; // Add leading zero to minutes if needed
console.log(minute) //07

let minute = curminute < 10 ? "0" + curminute : curminute;
console.log(minute) //09
*/
let chours=date.getHours() % 12 || 12; // Convert to 12-hour format
let hourformat = String(chours).padStart(2, "0");
console.log(hourformat) //14
let minuteformat = String(minutes).padStart(2, "0");
console.log(minuteformat) /13

console.log(`${curday}, ${curdate} ${curmonth} ${curyear} ${hourformat}:${minuteformat} ${ampm}`)

console.log(` ${hourformat}:${minuteformat} ${ampm}`)
// 02:17 PM