// 14) Write a script which generates a random rgb color number.
let rgb = []
for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor(Math.random() * 256)
}
console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)

//15) print the following patterns 

//   *                   // 1  
//  ***                  // 3
// ******                // 6
//  ***                  // 3
//   *                   // 1

// logical thinking 

// mistake we do --
//  1 we see the problem ( we know half sloution and then we start sloving)
//  2 we see the problem we try approach  we fail -- then we give 

// what should -->
// 1 see the problem  try to understand take 1-2 min 
// 2 get all the data require form the problem 
// 3 the pattern doesnt not follow any proprtional    -->  ( i have to apply more than 1 loop)
// 4  i will break this in 3 parts 


// 1 first half
//   *                 
//  ***  

// 2  middle 
// ******               

//3 last part
//  ***       
//   *       
let row = 2

for (let i = 1; i <= row; i++) {
    let spaces = " ".repeat(row - i)
    let star = "*".repeat(i * 2 - 1)
    console.log(spaces + star)
}

for (let i = row; i >= 1; i--) {
    let spaces = " ".repeat(row - i)
    let star = "*".repeat(i * 2 - 1)
    console.log(spaces + star)
}


//16

// ****
// *  *
// ****
// solution 1
console.log("*".repeat(4))
console.log(`${"*"}${" ".repeat(2)}${"*"}`)
console.log("*".repeat(4))

// solution 2 
let star_row = 3
let max_star = 4
for (let i = 1; i <= star_row; i++) {
    if (i === 1 || i === 3) {
        console.log("*".repeat(4))
    }
    else {
        console.log(`${"*"}${" ".repeat(2)}${"*"}`)
    }
}


// solution 3
for (let i = 1; i <= star_row; i++) {
    if (i === 2) {
        console.log("*" + " ".repeat(max_star - 2) + "*")
    } else {
        console.log("*".repeat(max_star))
    }
}

//17

// 4444
// 333
// 22
// 1

let pat = 4
for(let i =4 ;i>=1;i--){
  console.log(String(i).repeat(i))
}


for(let i =4 ; i>=1;i--){
    row= ""
    for(let j =1 ;j<=i;j++){
        row+=i
    }
    console.log(row)
}





// // 18
// 1111
// 222
// 33
// 4


//19) print the longest word form the given string

// str = " hello i am learning javascript and currently i am seeing the topic loops"