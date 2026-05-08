// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while
//for loop 
let number =0;
for(let i=0;i<=10;i++){
    console.log(i)
}
/*output
0
1
2
3
4
5
6
7
8
9
10*/

//while loop
let number1=0;
while(number1<=10){
    console.log(number1)
    number1++
}
/*output
0
1
2
3
4
5
6
7
8
9
10*/
  
//==========================================================================================================


//   // 2) Iterate 10 to 0 using for loop, do the same using while

// for loop
let number2=10;
for(let i=10;i>=0;i--){
    console.log(i)
}
/*output
10
9
8
7
6
5
4
3
2
1
0*/

//while loop
let number3=10;
while(number3>=0){
    console.log(number3)
    number3--
}
/*output
10
9
8
7
6
5
4
3
2
1
0*/

//==========================================================================================================

//   // 3) Iterate 0 to n using for loop
let n=5
for(let i=0;i<=n;i++){
    console.log(i)
}
/*output
0
1
2
3
4
5*/
 
//=====================================================================


  
//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######

for (let i=1;i<=7;i++){
    console.log("#".repeat(i))

}
/*output
#
##
###
####
#####
######
#######
*/
  
//==========================================================================================

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

let n1=10;
console.log("i    i^2   i^3")
for(let i=0;i<=n1;i++){
    console.log(`${i}    ${i**2}   ${i**3}`)
}
/*output
i    i^2   i^3
0    0   0
1    1   1
2    4   8
3    9   27
4    16   64
5    25   125
6    36   216
7    49   343
8    64   512
9    81   729
10    100   1000
*/
//==========================================================================================================


//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers\

let evennumber=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}
/*output
0
2
4
8
--
--
100
*/

//==========================================================================================================

//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
let oddnumber=0;
for(let i=0;i<=100;i++){
    if(i%2!=0){
        console.log(i)
    }
}
/*output
1
3
5
--
--
97
99
*/

//==========================================================================================

//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
let primeNumber=0;
for(let i=0;i<=100;i++){
    let count=0;
    for (let j=1;j<=i;j++){
        if(i%j==0){
            count++
        }
}  
    if(count==2){
        console.log(i)
    }

}
/*output
2
3
5
7
--
--
83
89
97*/

//==================================================================================================

//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let primSum=0;
for(let i=0;i<=100;i++){
    primSum+=i
}
console.log(primSum)
/*/output
5050
*/
//====================================================================================================

//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        evenSum+=i
    }
}
console.log(evenSum)
/*output
2550
*/
let oddSum=0;
for(let i=0;i<=100;i++){
    if (i%2!=0){
        oddSum+=i
    }
}
console.log(oddSum)
/*output
2500
*/


//==========================================================================================
//   // 11) Develop a small script which generates a six-character random id.

function randomId(length){
    let result="";
    let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let charactersLength=characters.length;
    for(let i=0;i<length;i++){
        result+=characters.charAt(Math.floor(Math.random()*charactersLength))
    }
    return result;
}
console.log(randomId(6))
/*
output
yp1JJV
*/

// or

let upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowerCase="abcdefghijklmnopqrstuvwxyz"
let numbers="0123456789"
let symbols="!@#$%^&*()_+"


let letter_1= Math.floor(Math.random()*(upperCase.length))
let letter_2= Math.floor(Math.random()*(lowerCase.length))
let letter_3= Math.floor(Math.random()*(lowerCase.length))
let letter_4= Math.floor(Math.random()*(upperCase.length))
let sym= Math.floor(Math.random()*(symbols.length))
let str_num = Math.floor(Math.random()*(99-10)+10) // 10-99


console.log(`${upperCase[letter_1]}${lowerCase[letter_2]}${lowerCase[letter_3]}${upperCase[letter_4]}${symbols[sym]}${str_num}`)
/*output
SnlV&19
*/
  


//   // 12) Develop a small script which generates any number of characters random id.
function randomId1(length){
    let result="";
    let characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let charactersLength=characters.length;
    for(let i=0;i<length;i++){
        result+=characters.charAt(Math.floor(Math.random()*charactersLength))
    }
    return result;
}
console.log(randomId1(10))
/*output
+hsoZgcUx1
*/
//========================================================================================
  
//   // 13) Write a script which generates a random hexadecimal number.
function randomHexadecimal(length){
    let result="";
    let characters="0123456789abcdef"
    let charactersLength=characters.length;
    for(let i=0;i<length;i++){
        result+=characters.charAt(Math.floor(Math.random()*charactersLength))
    }
    return result;
}
console.log(randomHexadecimal(6))
/*output
a3f2b1
*/
//========================================================================================



// 14) Write a script which generates a random rgb color number.
function randomRgbColor(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}
console.log(randomRgbColor())
/*output
rgb(132,231,166)
*/

//========================================================================================

//15) print the following patterns 
//   * 
//  ***
// ******
//  ***
//   *
let n2=5;
for(let i=1;i<=n2;i++){
    if(i==1 || i==5){
        console.log(" ".repeat(2)+"*")
    }
    else if(i==2 || i==4){
        console.log(" ".repeat(1)+"***")
    }
    else if(i==3){
        console.log("******")
    }
}
/*output
  *
 ***
******
 ***
  *
*/

//=============================================================================



//16

// ****
// *  *
// ****
let n3=4;
for(let i=1;i<=n3;i++){
    if(i==1 || i==4){
        console.log("****")
    }
    else if(i==2 || i==3){
        console.log("*  *")
    }
}
/*output
****
*  *
*  *
****
*/

//================================================================================


//17

// 4444
// 333
// 22
// 1
/*
let n4 = 4;
for (let i=4;i>=1;i--){
    let row=""
    for(let j=1;j<=i;j++){
        row+=i
    }
    console.log(row)
}
*/
/*output
4444
333
22
1
*/

//================================================================================================

// // 18
// 1111
// 222
// 33
// 4


let n5=1;
for(let i=1;i>=4;i--){
    let row="";
    for(let j=1;j<=i;j++){
        row+=i
    }
    console.log(row)
}
/*output
1111
222
33
4
*/

//==============================

//question 
//1
//22
//333
//4444


let n6=4;
for(let i=1;i<=4;i++){
    let row="";
    for(let j=1;j<=i;j++){
        row+=i
    }
    console.log(row)
}

/*output
1
22
333
4444
*/

//19) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"

 let longestWord=""
let str = " hello i am learning javascript and currently i am seeing the topic loops"
let str1=str.split(" ")
for(let i=0;i<str1.length;i++){
    if(str1[i].length>longestWord.length){
        longestWord=str1[i]
    }
}
console.log(longestWord)
/*output
javascript
*/
