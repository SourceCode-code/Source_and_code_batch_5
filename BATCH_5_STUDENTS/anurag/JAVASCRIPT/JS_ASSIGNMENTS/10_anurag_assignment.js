// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while
console.log("1-a) using for loop");

for(let i=0; i<=10; i++)
{
    console.log(i);
}

console.log("1-b) using while loop");
let j=0;
while(j<=10)
{  
    console.log(j);
    j++;
}

console.log("===================================");
  
//   // 2) Iterate 10 to 0 using for loop, do the same using while
console.log("2-a) using for loop");
for(let i=10; i>=0; i--)
{
    console.log(i);
}

console.log("2-b) using while loop");
let k=10;
while(k>=0)
{
    console.log(k);
    k--;
}

console.log("===================================");
  
//   // 3) Iterate 0 to n using for loop
console.log("3) using for loop to iterate from 0 to n");
let n=100;
for(let i=0; i<=n; i++)
{
    console.log(i);
}
 
console.log("==================================="); 
//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######
console.log("4) printing the pattern using for loop");

n =7;
for(let i=1; i<=n; i++)
{
    let pattern = "";
    for(let j=1; j<=i; j++)
    {
        pattern += "#";
    }
    console.log(pattern);
}

console.log("===================================");  

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
console.log("5) printing the pattern using the for loop square and cube");

for (let i=0; i<=10; i++)
{
    console.log(i,i*i, i*i*i);
}

console.log("===================================");
//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
console.log("6) using for loop to iterate from 0 to 100 and print only even numbers");

for(let i=0; i<=100; i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

console.log("===================================");

//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
console.log("7) iterate from 0 to 100 and print only odd numbers");
for(let i=0; i<=100; i++)
{
    if(i%2!=0)
    {
        console.log(i);
    }
}

console.log("===================================");

//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
console.log("8) iterate from 0 to 100 and print only prime numbers");
for (let i=2; i<=100; i++)
{
    let j;
    for(j=2; j < i; j++)
    {if(i%j===0)
    {
        break;
    }
    if(j===i)
    {
        console.log(i); 
    }
    
}

console.log("===================================");
//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
console.log("9) iterate from 0 to 100 and print the sum of all numbers");
let sum = 0;
for (let i=0; i<=100; i++)
{
    sum += i;
}
console.log("the sum of all numbers from 0 to 100 is: " + sum);

console.log("===================================");
//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
console.log("10) iterate from 0 to 100 and print the sum of all evens and odds");
let sumEven = 0;
let sumOdd = 0;
for (let i=0; i<=100; i++)
{
    if (i%2==0)
    {
        sumEven += i;
    }else {
    sumOdd += i;
}
}
}
  
console.log("================================");

//   // 11) Develop a small script which generates a six-character random id.
console.log(" 11)  generate a six-character random id");
let Id = "";
let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i=0; i<6; i++)
{
    let randomIndex = Math.floor(Math.random() * char.length);
    Id += char[randomIndex];
}
console.log(Id);

console.log("===================================");

//   // 12) Develop a small script which generates any number of characters random id.
console.log("12) generate any number of characters random id");
let num = 10;
let ID2 = "";
let char2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i=0; i< num; i++)
{
    let randomIndex = Math.floor(Math.random() * char2.length);
    ID2 += char2[randomIndex];
}
console.log(ID2)

console.log("===================================");

//   // 13) Write a script which generates a random hexadecimal number.
console.log("13) generate a random hexadecimal number");
let hexchar = "0123456789abcdef";
let hex = "";
for (let i=0; i<6; i++)
{
    let randomIndex = Math.floor(Math.random() * hexchar.length);
    hex += hexchar [randomIndex];
}
console.log(hex);

console.log("===================================");
//   // 14) Write a script which generates a random rgb color number.
//console.log(" 14) generate a random rgb color number");


//15) print the following patterns 
//   * 
//  ***
// ******
//  ***
//   *




//16

// ****
// *  *
// ****



//17

// 4444
// 333
// 22
// 1

// // 18
// 1111
// 222
// 33
// 4

//19) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"