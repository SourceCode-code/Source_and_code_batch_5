// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while

for(let num1=0;num1<=10;num1++){
console.log(`Number By Using For loop : ${num1}`);

}
let num2=0;
while(num2<=10){
console.log(`Number By Using While loop : ${num2}`);
num2++;

}
  console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);

//   // 2) Iterate 10 to 0 using for loop, do the same using while
  for(let num3=10;num3>=0;num3--){
console.log(`Number By Using For loop : ${num3}`);

}
let num4=10;
while(num4>=0){
console.log(`Number By Using While loop : ${num4}`);
num4--;

}
 console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);
//   // 3) Iterate 0 to n using for loop
let limitNum=5;
  for(let num5=0;num5<=limitNum;num5++){
console.log(`Number By Using For loop : ${num5}`);

}
   console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);
//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // ## ####
 for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i))
}
 console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`); 
//   // 5) Print the following pattern using loop
//   // i    i^2   i^3
//   // 0    0     0
//   // 1    1     1
//   // 2    4     8
//   // 3    9     27
//   // 4    16    64
//   // 5    25    125
//   // 6    36    216
//   // 7    49    343
//   // 8    64    512
//   // 9    81    729
//   // 10   100   1000
for(let num6=0;num6<=10;num6++){
console.log(`${num6} ${num6*num6} ${num6*num6*num6}`);
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers

//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers

  
//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers

//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.

  
//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//Quetion 6,7,8,9,10
let sum_all_number =0
let even=[];
let odd =[];
let even_sum= 0;
let odd_sum =0;
let prime =[];

for(let i=0; i<=100;i++){
    sum_all_number += i;
    if(i%2==0){
        even.push(i);
        even_sum += i;
    }
    else{
odd.push(i);
odd_sum +=i ;
    }
      if (i > 1) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            prime.push(i);
        }
    }
}
console.log("Sum of all  number from 1 to 100 is =" ,sum_all_number);
console.log("all evan number from 1 to 100 is = " ,even);
console.log("All odd number from 1 to 100 is = " ,odd);
console.log("Sum of all evan number from 1 to 100 is =" ,even_sum);
console.log("Sum of all odd number from 1 to 100 is =" ,odd_sum);
console.log("all prime number from 1 to 100 is =" ,prime);  

console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);
//   // 11) Develop a small script which generates a six-character random id.
let random_num=(Math.floor(Math.random()*(999999-100000 + 1))+100000);
  console.log(`Random Number is ${random_num}`);
//   // 12) Develop a small script which generates any number of characters random id.
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let randomId = "";

for (let i = 0; i < 5; i++) {
    let index = Math.floor(Math.random() * chars.length);
    randomId += chars[index];
}

console.log("Random ID:", randomId);
  console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);
//   // 13) Write a script which generates a random hexadecimal number.

let hexchar = "0123456789abcdef";
let hex = "";
for (let i=0; i<6; i++)
{
    let randomIndex = Math.floor(Math.random() * hexchar.length);
    hex += hexchar [randomIndex];
}
console.log("hexadecimal number:#",hex);
//   // 14) Write a script which generates a random rgb color number.

//15) print the following patterns 
//   * 
//  ***
// ******
//  ***clea
//   *



//16

// ****
// *  *
// ****

let num10 = 4;

for (let i = 1; i <= 3; i++) {
    let row = "";

    for (let j = 1; j <= num10; j++) {
        if (i === 1 || i === 3 || j === 1 || j === num10) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);
//17

// 4444
// 333
// 22
// 1
//using string.repeat()
 for  (let i = 4; i >= 1; i--){
    console.log(String(i).repeat(i))
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);

// // 18
// 1111
// 222
// 33
// 4
//using string.repeat
let n=4;
for (let i = 1; i <= n; i++) {
    console.log(String(i).repeat(n+1 - i));
}
console.log(`-------------------------------------------------------------------------------------------------------------------------------------------`);

//19) print the longest word form the given string

str = "hello i am learning javascript and currently i am seeing the topic loops"
charString=str.split(" ")
console.log(charString);
longestWord="";
for(let num11=0;num11<charString.length;num11++){
if (charString[num11].length>longestWord.length){

    longestWord=charString[num11]
}

}
console.log("longestWord:", longestWord);