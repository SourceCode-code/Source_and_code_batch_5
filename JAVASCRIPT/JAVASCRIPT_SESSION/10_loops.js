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
