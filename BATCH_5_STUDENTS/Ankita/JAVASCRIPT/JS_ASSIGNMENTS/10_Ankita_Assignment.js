// ASSIGNMENT NO 10

// // 1) Iterate 0 to 10 using for loop, do the same using while
for (let a = 0; a <= 10; a++) {
    console.log(a)

}


//   // 2) Iterate 10 to 0 using for loop, do the same using while
for (let b = 10; b >= 0; b--) {
    console.log(b)

}

//   // 3) Iterate 0 to n using for loop
let n = 100
for (let i = 0; i <= n; i++) {
    console.log(i)
}

//   // 4) Write a loop that makes the following pattern using console.log():
//   // #
//   // ##
//   // ###
//   // ####
//   // #####
//   // ######
//   // #######

let pattern = "#"
for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i))
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

for (let b = 1; b <= 10; b++) {
    console.log(b, b * b, b * b * b)

}

//   // 6) Use for loop to iterate from 0 to 100 and print only even numbers
let evenNum = 100
for (let c = 0; c <= evenNum; c++) {
    if (c % 2 == 0) {
        console.log(c)

    }
}
//   // 7) Use for loop to iterate from 0 to 100 and print only odd numbers
let oddNUm = 100
for (d = 0; d <= oddNUm; d++) {
    if (d % 2 !== 0) {
        console.log(d)
    }
}

//   // 8) Use for loop to iterate from 0 to 100 and print only prime numbers
for (let p = 2; p <= 100; p++) {
    let count = 0

    for (let i = 1; i <= p; i++) {
        if (p % i === 0) {
            count++
        }
    }

    if (count === 2) {
        console.log("Prime=", p);
    }
}


//   // 9) Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let num = 100
let sum = 0
for (let e = 0; e <= num; e++) {
    sum += e
} console.log(sum)


//   // 10) Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0
let sumOdd = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i
    } else {
        sumOdd += i
    }
} console.log("Sum of even", sumEven)
console.log("Sum of odd", sumOdd)

//   // 11) Develop a small script which generates a six-character random id.
let char= "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
let randomId=""
for (let i=0; i<=5; i++){
    let randomChar= Math.floor(Math.random()*char.length)
    randomId= randomId+char[randomChar]
} console.log("six character ID=", randomId)

//   // 12) Develop a small script which generates any number of characters random id.
let characters= "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
let randomID=""
for (let i=0; i<=3; i++){
    let randomChar= Math.floor(Math.random()*characters.length)
    randomID= randomID+characters[randomChar]
} console.log("random character ID=", randomID)

//   // 13) Write a script which generates a random hexadecimal number.

//   // 14) Write a script which generates a random rgb color number.

//15) print the following patterns 
//   * 
//  ***
// ******
//  ***
//   *
let line = 3
for (let i = 1; i <= line; i++) {
    let space = "cc".repeat(line - i)
    let star = "*".repeat(2 * i - 1)     //  
    console.log(space + star)
}
for (let i = line - 1; i >= 1; i--) {
    let space = "cc".repeat(line - i)
    let star = "*".repeat(2 * i - 1)
    console.log(space + star)
}


//16

// ****
// *  *
// ****



//17

// 4444
// 333
// 22
// 1
let num1 = "4"
for (let i = 4; i >= 1; i--) {
    console.log(String(i).repeat(i))

}

// // 18
// 1111
// 222
// 33
// 4

for (let t = 1; t <= 4; t++) {
    console.log(String(t).repeat(5 - t));
}

//19) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"