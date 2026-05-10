//

// ASSIGNMENT NO 10

/* 1) Iterate 0 to 10 using for loop, do the same using while

for (let i = 1; i <= 10; i++) {
    console.log(i)
}


  
//   // 2) Iterate 10 to 0 using for loop, do the same using while
  
for (let i =10 ; i>=0; i--) {
    console.log(i)
}  */



/* 3) Iterate 0 to n using for loop
 
let n = 6

for (let i = 0 ; i>=n ; i++){
    console.log(i)
} */


  
/* 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######
 

for (let i = 1; i <= 7; i++) {

    console.log("#".repeat(i))
}  */





  
/* 5) Print the following pattern using loop
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

console.log("i  i^2  i^3");
for (let i =0 ; i<=7 ; i++){
    console.log(i , i*i ,i*i*i);
} */





/* 6) Use for loop to iterate from 0 to 100 and print only even numbers

for (let i = 0 ; i <=100 ; i++){
console.log(i)
}
for (let i = 0 ; i<=100 ; i++){
    if(i % 2===0){
        console.log(i)
    }
} */




/* 7) Use for loop to iterate from 0 to 100 and print only odd numbers

for (let i =0 ; i<=100 ;i++){
    if(i % 2 !==0){
        console.log(i)
    }
} */



  
//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
/* 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0
for(let i = 0 ; i<= 100 ; i++){
    //sum = sum+i
sum += i
}
console.log(sum) */



  
   /* 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evenSum = 0;
let oddSum = 0 ;

for (let i = 0 ; i<= 100 ; i++){
    if(i % 2===0){
    //evenSum = evenSum+i
   evenSum+=i;
    }else{
    oddSum+= i;
    }
}


console.log("Even Sum=" , evenSum);
console.log("odd Sum=", oddSum); */



  
/* 11) Develop a small script which generates a six-character random id.

let Id = "";
let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i=0; i<6; i++)
{
 let randomIndex = Math.floor(Math.random() * char.length);
     Id += char[randomIndex];
}
console.log(Id); */





  
/* 12) Develop a small script which generates any number of characters random id.

let num = 15;

let ID1 = "";

let char1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for (let i=0; i< num; i++)

 {
 let randomIndex = Math.floor(Math.random() * char1.length);

 ID1 += char1[randomIndex];

 }

console.log(ID1) */




  
/* 13) Write a script which generates a random hexadecimal number.

let hexchar = "0785649365sehtap";
let hex = "";
for (let i=0; i<6; i++)
{
    let randomIndex = Math.floor(Math.random() * hexchar.length);

    hex += hexchar [randomIndex];
}

    console.log(hex); */





/* 14) Write a script which generates a random rgb color number.

const getRandomRGB = () => {

 const r = Math.floor(Math.random() * 256);

 const g = Math.floor(Math.random() * 256);

 const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
};
console.log(getRandomRGB()) ; */






//15) print the following patterns 
/*   * 
//  ***
// ******
//  ***
//   *

for (let i = 1; i <= 3;  i++) {

    console.log("#".repeat(i))
}

for (let i = 1 ; i>= 3 ; i++){
    console.log("#".repeat(i))
}   */





/*16

// ****
// *  *
// ****

for (let i = 1 ; i<= 3 ; i++){
console.log(i === 1 || i === 3 ? 
"****" : "*  *");
}  */




/*17

// 4444
// 333
// 22
// 1
 
for(let i=4 ;i>=1 ;i-- ){
let row = "";
for(let j = 1 ; j<= i ; j++){
row +=i ;
}
    console.log(row);
} */




/* // 18
// 1111
// 222
// 33
// 4

for (let i =1 ; i<=4 ; i++){
    let row ="";

for(let j =4 ; j>=i ; j--){
row += i;
}
console.log(row);
}
*/



/*19) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"


let str  = " hello i am learning javascript and currently i am seeing the topic loops";

let sentence =str.split("");
let longest ="";

for(let word of sentence){
if(word.length >longest.length){
longest =word ;
}
}
console.log("Longest word is",longest); */
