let name ="kalyani"
let age ="29"
let goal ="goodjob"
console.log(name)
console.log(age)
console.log("diwali learninggoal",goal)

//Q2-ANS
let firstname  ="kalyani"
let middlename ="suraj"
let surname ="sherkar"
console.log(firstname+" "+middlename+" "+surname)

//Q3-ANS
let k = 10
let l = 5
console.log(k+l)
console.log(k*l)

//Q4-ANS
let str1 =45
let str2 ="45"
let str3 =true
let str4 =undefined
let str5 =null
console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)
console.log(typeof str4)
console.log(typeof str5)

//Q5-ANS


let message = "happy diwali";

for(let i = 1; i <= 10; i++) {
    console.log(message);
}

//Q6-ANS
let x =10

    console.log(++x)
console.log(--x)

//Q7-ANS
console.log(typeof NaN)

//Q8-ANS
let sum = 0
for (let i = 0; i <= 100; i++) {
    // sum = sum+i
    sum += i

}
console.log(sum)

//Q9-ANS
let a=5
let b=10
let c=15
let i=Math.max(a,b,c)
console.log(i)

//Q13-ANS
let random100
console.log(Math.floor(Math.random()*100+1))

//Q15-ANS
for (let i = 1; i <= 10; i++) {
    console.log(`9 X ${i} = ${9 * i}`)
}

//Q16-ANS
let str = " my name is kalyani"

for (let i = 0; i < str.length; i++) {
    console.log(str[i])
}

//Q17-ANS

let aplha_str ="my name ia kalyani"

let count =0
for (i=0; i<=aplha_str.length; i++){
     let char = aplha_str[i].toLowerCase()
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        count++
    }
}

console.log(`The above string has ${count} vowels`)