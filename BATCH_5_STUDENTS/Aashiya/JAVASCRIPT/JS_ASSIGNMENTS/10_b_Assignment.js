/* ------------------------------------------------------------------
 JAVASCRIPT LOGICAL ASSIGNMENT - 2026

🪔 Objective:
By solving these problems, you should gain strong logical foundations
and be able to confidently write clean, working JS programs.

💡 Instructions:
- Use console.log() for output.
- Comment your logic clearly.
- Don’t copy from AI — think like a programmer!
------------------------------------------------------------------*/

// =====================================================
// 1. INTRODUCTION TO JS (BASICS & VARIABLES)
// =====================================================

// Q1. Print your name, age, and one goal for Diwali learning using variables.
let name="aashiya"
let age=18
let goal="beacome Automation Test engineer "

console.log(`"my name is "${name} "My age is "${age}," my diwali goal is "${goal}`)
// Q2. Declare 3 variables in one line and print them.
let a=8,b=9,c=8
console.log(a,b,c)
// Q3. Write a program that swaps two numbers without using a third variable.
let v=2
let u=4
v=v+u      //2+4=6
u=v-u      //6-4=2
v=v-u      //6-2=4

console.log(`"value of v "${v} "value of u "${u}`)


// Q4. Display the type of each of these: 45, "45", true, undefined, null.
console.log(typeof(45))//number
console.log(typeof("45"))//string
console.log(typeof(true))//boolean
console.log(typeof(undefined))//undefined
console.log(typeof(null))//object


// Q5. Create a variable “message” = "Happy Diwali" and print it 10 times using a loop.
let message="Happy Diwali"
let count=0
for(let i=0;i<10;i++){
    count++
    console.log(`${count} ${message}`)
    
}

// Q6. Create a variable x = 10; increment and decrement it, printing value each time.
let x=10
console.log(x)//10
x++
console.log("initial increament "+ x)//11
++x
console.log("again initial increament "+ x)//12

x--
console.log("initial decreament "+ x)//11

--x
console.log("again initial decreament "+ x)//10


// Q7. Print the result of typeof NaN — explain what you see.
console.log(typeof(NaN))//number
//NaN is the invalid numeric number

// =====================================================
// 2. NUMBER DATATYPE (LOGIC & ARITHMETIC)
// =====================================================

// Q8. Find the sum of first 100 natural numbers using a loop.
let sum=0
for(let i=1;i<=100;i++){
    sum+=i
//console.log(sum)
}
console.log(sum)//5050


// Q9. Given 3 numbers, find the greatest number (no if, use Math.max()).
let w=1
let q=40
let r=33
let maxx=Math.max(w,q,r)
console.log(maxx)


// Q10. Find the factorial of a number using a for loop.
let fac=1
for(let i=1;i<=7;i++){
    fac*=i
    console.log(fac)
}


// Q11. Write a program to check if a number is prime.
let num=11
let isPrime=true
for(let i=2;i<9;i++){
    if(num % i===0){
      isPrime=false
      break
    }

}
if(isPrime==true && num>1){
    console.log("given number is prime number")

}
else{
    console.log("the given number is not a prime number")
}

// Q12. Write a program to find the number of digits in a given number.
let num1 = 12345;
let count1 = 0;

for (; num1 > 0; num1 = Math.floor(num1 / 10)) {
    count1++;
}
console.log("Number of digits:", count1);

// Q13. Generate a random number between 1 and 100.
let ran=Math.floor(Math.random()*100)+1
console.log(ran)


// Q14. Check if a number is a perfect square.
let t=25
let issqure=false
for(let i=1;i<t;i++){
    if(i*i===t){

issqure=true
break
}
}
let res=(issqure==true)?"number is perfect squre":"number is not square"
console.log(res)
// Q15. Write a program that prints multiplication table of 9.
let mul=9
for(let i=1;i<=10;i++){
    let ress=i*mul
    console.log(ress)

}

// =====================================================
// 3. STRING DATATYPE (LOGIC + PATTERN)
// =====================================================

// Q16. Write a program that prints each character of a string on a new line.
let st="I am leaning javascript"
for(let i=0;i<st.length;i++){
    console.log(st[i])

}
// Q17. Given a name string, print only the vowels from it.
let vow="i am learning javascript its fantastic language"

for(let i=0;i<vow.length;i++){
    if("aeiou".includes(vow[i])){
        console.log(vow[i])
        }
}

// Q18. Check if two strings are equal (case insensitive).
let strr="aaShiy"
let str_="AASHIYA"
if(strr.toLowerCase()===str_.toLowerCase()){
    console.log("the given strings are equal")
}
else{
    console.log("the given strings are not equal")}

// Q19. Count how many words are in the string: “Happy Diwali to Everyone”.
let wordCount=" Happy Diwali to Everyone "
let fullstr=wordCount.trim()//here we are using trim to remove spaces from at starting and ending point
let ccc=1
for(let i=0;i<fullstr.length;i++){
    if(fullstr[i]===" "){
        ccc++

    }

}
console.log(ccc)

// Q20. Create a string that repeats “✨” 20 times using repeat().

// =====================================================
// 4. STRING METHODS (APPLIED UNDERSTANDING)
// =====================================================

// Q21. Given string = "  Diwali Celebration  ", remove extra spaces and print clean version.
let st1="  Diwali Celebration  "
let stclean=st1.trim()
console.log(stclean)

// Q22. Extract the last 4 characters of any given string.
let lst="i am learning javascript"
let lastFourChar = lst.substr(lst.length - 4, 4)
console.log (lastFourChar)

// Q23. Convert “Javascript is fun” → “JAVASCRIPT IS FUN” → “javascript is fun”.
let jj= "Javascript is fun"
console.log(jj.toUpperCase())
console.log(jj.toLowerCase())
// Q24. Replace all occurrences of “light” with “spark” in “Festival of lights brings light”.
let re="Festival of lights brings light"
let replace=re.replaceAll("light","spark")
console.log(replace)

// Q25. Find if a string starts with “Happy” and ends with “Diwali”.
let stringgg="Happy Diwali"
if(stringgg.startsWith("Happy") && stringgg.endsWith("Diwali") ){
    console.log("condition true")

}
else{
    console.log("condition false")
}


// =====================================================
// 5. CONVERSION (NUMBER <-> STRING)
// =====================================================

// Q26. Convert number 2025 into a string and print its type.
let num11=2025
console.log(typeof(num11))//number
let conv=String(num11)
console.log(typeof(conv))//string
// Q27. Convert string “99.9” to number and round it.
let ne="99.9"
console.log(typeof(ne))//string
let toNumber=Number(ne)
console.log(typeof(toNumber))//number
let round=Math.round(toNumber)
console.log(round)//100
// Q28. Add number + string and explain result for (5 + "5") and (5 - "5").
console.log(5 + "5")//55
//5+"5" in arithmatic operation we have + sign then it will be consider as concatination and it will concate the numbers
console.log(5 - "5")//0
//when there is sign of -/*/ rather that +operator it will perform arithmatical operation

// Q29. Convert true → 1 and false → 0 using Number().
let aa=true
let bb=false

let aa1=Number (aa)
console.log(aa1)//1

let bb1=Number (bb)
console.log(bb1)//0

// Q30. Ask: what happens when you do String(10 + 5) vs String(10) + String(5)?
let str=String(10 + 5)
console.log(str)//15

let stru=String(10) + String(5)
console.log(stru)//105

// =====================================================
// 6. OPERATORS (LOGICAL + ARITHMETIC + TERNARY)
// =====================================================

// Q31. Calculate and print: ((10 + 3) ** 2) / 13.
let op=((10 + 3) ** 2) / 13
console.log(op)
// Q32. Create a program that checks if a number is divisible by both 3 and 5.
let div=10
if(div%3===0 && div%5===0){
    console.log("the given number is divisible by 3 and 5")

}
else{
    console.log("Number is not divisible by 3 and 5")
}
// Q33. Use logical operators to check if a student’s age is between 18–25 and from “Pune”.
let agee=18
let city ="Pune"
if(agee>=18 && agee<=25 && city==="Pune"){
console.log("given condition satisfied")
}
else{
    console.log("given condition not satisfied")
}
// Q34. Use ternary operator to check if given marks >= 40 → “Pass” else “Fail”.
let marks=30
let resulrt =(marks>=40)?"pass":"Fail"
console.log(resulrt)

// Q35. Find the output of: console.log(5 + 3 * 2 ** 2) and explain order of evaluation.
console.log(5 + 3 * 2 ** 2)//17
//order first it will perform 2**2 =4 then 4*3=12 then 12+5= 17
// =====================================================
// 7. DATE (REAL-TIME APPLICATIONS)
// =====================================================

// Q36. Print today’s date in format “DD-MM-YYYY”.
let date=new Date()

let todaysDate=date.getDate()
console.log(todaysDate)
let twoDigittodaysDate=String(todaysDate).padStart(2,"0")
console.log(twoDigittodaysDate)

let todaysMont=date.getMonth()+1
console.log(todaysMont)
let towdigitMonth=String(todaysMont).padStart(2,"0")
console.log(towdigitMonth)
console.log(date.toLocaleDateString("en-gb",{month:"short"}))

let todaysYear=date.getFullYear()
console.log(todaysYear)

console.log(`"date in format “DD-MM-YYYY" ${twoDigittodaysDate}-${towdigitMonth}-${todaysYear}`)

// Q37. Print current time in format “HH:MM:SS”.
let hours=date.getHours()
console.log(hours)
let formatedHours=String(hours).padStart(2,"0")

let minutes=date.getMinutes()
console.log(minutes)
let formattedMinutes=String(minutes).padStart(2,"0")

let second=date.getSeconds()
console.log(second)
let formattedSecond=String(second).padStart(2,"0")
console.log(formattedSecond)

console.log(`${formatedHours}:${formattedMinutes}:${formattedSecond}`)

// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.
let datee=new Date("2025-10-24")
console.log(date.toLocaleDateString("en-gb",{weekday:"long"}))


// Q39. Calculate how many days are left for Diwali 2025 (use Date difference).
//diwali is on 8 nov 2026
let today=new Date()//getting todays date
let diwali= new Date("2026-11-08")//getting diwali date 

let diff =(diwali-today)//calculating difference
console.log(diff)//this is miliseconds
console.log(Math.ceil(diff/(1000*60*60*24)))//203


// Q40. Print “Good Morning / Good Afternoon / Good Evening” based on current hour.
if(hours<12){
    console.log("Good Morning")
}
else if(hours<17){
    console.log("Good afternoon")

}
else{
    console.log("Good Evening")
}


/* ------------------------------------------------------------------
🌟 BONUS CHALLENGE (Optional)
Create a program called “Diwali Countdown”.
It should print today’s date and how many days left until Diwali.
Then display “🪔 Get Ready to Celebrate!” if less than 10 days remain.
//already calcute days left for diwali
*/
  let daysLeftForDiwali=(Math.ceil(diff/(1000*60*60*24)))//203
  console.log(daysLeftForDiwali)
  if (daysLeftForDiwali<10 && daysLeftForDiwali>=0){

    console.log("🪔 Get Ready to Celebrate!")
  }


