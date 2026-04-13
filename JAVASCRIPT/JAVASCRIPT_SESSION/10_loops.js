// Loops --> loops are used to perform repeative 

/** 
 * In JS we have mutiple loops 
 *  1 for   --> for loop is used when the loop is finite ( you know the endpoint)  -->99%
 *  2 while --> while loop is used when the loop is infinte ( we dont know the endpoint) -->1%
 */

// FOR --> it is used when we know the endpoints / when the output is definitive or finite 

/**
 * sytnax
 * 
 * for(initaliztion ; condition ; increament/decrement){
 * 
 * your code
 * }
 */


// simple example loop  print 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// example 2 --> print form 10 to 0 

for (let i = 10; i >= 0; i--) {
    console.log(i)
}


// example for string --> 

let str = "hello my name is siddhant"

// print each character on a new line 

for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}


// example reverse the given 

for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i])
}


// example slove the following example for loop and print the following pattern 

/** print the table of 2 
 * 
2 X 1 = 2
2 X 2 = 4
2 X 3 = 6
2 X 4 = 8
2 X 5 = 10
2 X 6 = 12
2 X 7 = 14
2 X 8 = 16
2 X 9 = 18
2 X 10 = 20
 */


for (let i = 1; i <= 10; i++) {
    console.log(`2 X ${i} = ${2 * i}`)
}


// print the following pattern using a for loop 

/*


#
##
###
####
#####

*/
// 1 method 
for (let i = 1; i <= 5; i++) {
    console.log("#".repeat(i))
}

// 2 logic

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "#"
        // row = "#"+"" // #
        // row = "#"+"#" //##
        // row = "##"+"#" //###
    }
    console.log(row)
}


// count the vowels in the string 

let aplha_str = " hEllo my name is siddhant"
// this string has 7 vowels
let count = 0
// vowels = "aeiou"

for (let i = 0; i < aplha_str.length; i++) {
    let char = aplha_str[i].toLowerCase()
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        count++
    }
}

console.log(`The above string has ${count} vowels`)



// count the words in the following string 

let word_string = "hello my name is siddhant and i am currently teaching js loops which are used to perform repativet action"

let word_count = 1

console.log(word_count)

for (let j = 0; j < word_string.length; j++) {
    if (word_string[j] === " ") {
        word_count++
    }


}

console.log(word_count)


// complex logic 

// in the given password check if the password is weak or strong 
// condition for strong password ==> 
// length should 8 characters 
// it should have numbers  


let pass = "1password"

let hasNumber = false

for (let i = 0; i < pass.length; i++) {
    if (pass[i] >= "0" && pass[i] <= "9") {
        hasNumber = true
    }
}

if(pass.length>=8&&hasNumber){
console.log("Strong Password")
}
else{
    console.log("weaker password")
}


//Q count the total sum of numbers form 0 - 100

let sum =0 
for(let i =0;i<=100;i++){
    // sum = sum+i
    sum+=i

}
console.log(sum)



//Q find how many number are  divisable by 3 and 5 in 0-200

let divisor_count = 0

for(let i =3 ;i<=200;i++){
    if(i%3===0&& i%5 ===0){
        divisor_count++
    }
}

console.log(divisor_count)

