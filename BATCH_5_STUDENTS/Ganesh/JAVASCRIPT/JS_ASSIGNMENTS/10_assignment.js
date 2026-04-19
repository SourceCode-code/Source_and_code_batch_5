// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

//   // 2) Iterate 10 to 0 using for loop, do the same using while
for (let j = 10; j >= 0; j--) {
  console.log(j);
}

let j = 10;
while (j >= 0) {
  console.log(j);
  j--;
}

//   // 3) Iterate 0 to n using for loop
for (let i = 0; i <= 21; i++) {
  console.log(i);
}

//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######
for (let i = 1; i <= 7; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "#";
  }
  console.log(row);
}

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
console.log(`i i^2 i^3`);
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i * i} ${i * i * i}`);
}

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 2; i <= 100; i++) {
  let flag = true;
  for (let j = 2; j < i / 2 + 1; j++) {
    if (i % j === 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    console.log(i);
  }
}

//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenSum = 0;
let oddSum = 0;
for (i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log(evenSum);
console.log(oddSum);

//   // 11) Develop a small script which generates a six-character random id.
let str = "qwertyuiopasdfghjklzxcvbnm";
let RandomID = "";
for (let i = 0; i < 6; i++) {
  RandomID += str.charAt(Math.floor(Math.random() * str.length));
}
console.log(RandomID);

//   // 12) Develop a small script which generates any number of characters random id.
let str = "qwertyuiopasdfghjklzxcvbnm";
let RandomID2 = "";
for (let i = 0; i <= 12; i++) {
  RandomID2 += str.charAt(Math.floor(Math.random() * str.length));
}
console.log(RandomID2);

//   // 13) Write a script which generates a random hexadecimal number.
let hexDigit = "0123456789ABCDEF";
let hexNumber = "#";

for (let i = 1; i <= 6; i++) {
  hexNumber += hexDigit[Math.floor(Math.random() * hexDigit.length)];
}
console.log(hexNumber);

//   // 14) Write a script which generates a random rgb color number.
let set1 = Math.floor(Math.random() * 256);
let set2 = Math.floor(Math.random() * 256);
let set3 = Math.floor(Math.random() * 256);
let RGB_colorCode = `${set1} ${set2} ${set3}`;
console.log(RGB_colorCode);

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
let col = 4;
let row = col - 1;
for (i = 1; i <= row; i++) {
  let p = "";
  for (let j = 1; j <= col; j++) {
    if (i == 1 || i == row || j == 1 || j == col) {
      p += "*";
    } else {
      p += " ";
    }
  }
  console.log(p);
}

//17

// 4444
// 333
// 22
// 1
for (let i = 4; i > 0; i--) {
  let d = "";
  for (let j = 0; j < i; j++) {
    d += i;
  }
  console.log(d);
}

// // 18
// 1111
// 222
// 33
// 4
for (let i = 1; i <= 4; i++) {
  let d = "";
  for (let j = 4 - i; j >= 0; j--) {
    d += i;
  }
  console.log(d);
}

//19) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"
str =
  " hello i am learning javascript and currently i am seeing the topic loops";
let newStr = str.trim();
let longestWord = "";

while (newStr.includes(" ")) {
  let word = newStr.substring(0, newStr.indexOf(" "));
  if (word.length > longestWord.length) {
    longestWord = word;
  }
  newStr = newStr.substring(newStr.indexOf(" ") + 1, newStr.length);
}
if (newStr.length > longestWord.length) {
  longestWord = newStr;
}
console.log("longest word ", longestWord);