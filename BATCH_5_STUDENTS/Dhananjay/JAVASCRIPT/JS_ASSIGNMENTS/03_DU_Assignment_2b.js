//Practice - 21.03.2026

let weight = "29.49"

console.log(Math.floor(weight))

console.log(Math.ceil(weight))

console.log(Math.round(weight))

// num.toFixed() --> It convert the decimail values in the provided notaion

let AvailableBal = 10.54984962263

console.log(AvailableBal.toFixed(2))

//Math.random() --> Generate random number 0 to 0.999999

console.log(Math.random())

let Random100 = Math.random()*100
console.log(Random100)

console.log(Math.floor(Math.random()*100))

// 5. Write program  `rollDice` that simulates rolling two dice and returns their combined result.
// Hint: Each dice roll should return a number between 1 and 6.

const dice1 = Math.floor(Math.random()*6)+1
const dice2 = Math.floor(Math.random()*6)+1

console.log(dice1,dice2)
console.log(dice1+dice2)

// 6. What will be the result of the following code? Explain why.
let randomVal = Math.random();