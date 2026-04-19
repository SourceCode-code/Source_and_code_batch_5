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
let name = "Ankita"
let age = 23
let goal = "Improve my technical skills and become a better QA"
console.log(name)
console.log(age)
console.log(goal)


// Q2. Declare 3 variables in one line and print them.
let fullName = "Ankita Fartade"
let gender = "female"
let place = "Dharashiv"
console.log(fullName, gender, place)

// Q3. Write a program that swaps two numbers without using a third variable.
let a = 10
let b = 20
c = b - a
console.log(c)

// Q4. Display the type of each of these: 45, "45", true, undefined, null.
let num = 45
let num1 = "45"
let isBoy = true
let h
let value = null
console.log(typeof num)
console.log(typeof num1)
console.log(typeof isBoy)
console.log(typeof h)
console.log(typeof value)



// Q5. Create a variable “message” = "Happy Diwali" and print it 10 times using a loop.
let message = "Happy Diwali"
for (i = 1; i <= 10; i++) {
    console.log(message)
}

// Q6. Create a variable x = 10; increment and decrement it, printing value each time.
let x = 10
x++
console.log(x)
x--
console.log(x)

// Q7. Print the result of typeof NaN — explain what you see.
console.log(typeof NaN)
//NaN means Not a Number, but its type is number because NaN represents an invalis number.


// =====================================================
// 2. NUMBER DATATYPE (LOGIC & ARITHMETIC)
// =====================================================

// Q8. Find the sum of first 100 natural numbers using a loop.
let sum = 0
for (b = 0; b <= 100; b++) {
    sum = sum + a
} console.log(sum)

// Q9. Given 3 numbers, find the greatest number (no if, use Math.max()).
let z = 24
c = 29
d = 47
let greatest = Math.max(z, c, d)
console.log(greatest)

// Q10. Find the factorial of a number using a for loop.
let numA = 24
let factorial = 2
for (let i = 1; i <= numA; i++) {
    factorial = factorial * i
} console.log(`The factorail of ${numA} is ${factorial}`)

// Q11. Write a program to check if a number is prime.
let numB = 360
let count = 0
for (i = 0; i <= numB; i++) {
    if (numB % 2 === 0)
        count++
} if (count === 2) {
    console.log(numB + " is a prime number")
} else {
    console.log(numB + " is not a prime number")
}

// Q12. Write a program to find the number of digits in a given number.
let numC = 152687586
let count1 = numC.toString().length
console.log(count1)

// Q13. Generate a random number between 1 and 100.
let min = 1
let max = 100
let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
console.log(randomNum)

// Q14. Check if a number is a perfect square.
let numD = 3
let squareRoot = Math.sqrt(numD)
console.log(squareRoot)
if (Math.floor(squareRoot) === squareRoot) {
    console.log(numD + "is a perfect square")
} else {
    console.log(numD + "is not a perfect square")

}

// Q15. Write a program that prints multiplication table of 9.
let numE = 9
for (i = 1; i <= 10; i++) {
    console.log("9 *" + i + "=" + (numE * i))
}

// =====================================================
// 3. STRING DATATYPE (LOGIC + PATTERN)
// =====================================================

// Q16. Write a program that prints each character of a string on a new line.
let fullName1 = "Ankita Hanumant Fartade"
for (i = 0; i < fullName1.length; i++) {
    console.log(fullName1[i])
}
console.log(fullName1.split(" ")) //spilt words not characters

// Q17. Given a name string, print only the vowels from it.
let name2 = "Ankita Hanumant Fartade"
let vowels = "aeiouAEIOU"
for (let i = 0; i < name2.length; i++) {
    if (vowels.includes(name2[i]))
        console.log(name2[i])
}


// Q18. Check if two strings are equal (case insensitive).
let str1= "Ankita"
let stR1= "ankita"
console.log(str1.toUpperCase()===str1.toUpperCase())

// Q19. Count how many words are in the string: “Happy Diwali to Everyone”.
let str5= 'Happy Diwali to Everyone'
console.log(str5.length) //total character
let newSTr= str5.split(" ")
console.log(newSTr.length)

// Q20. Create a string that repeats “✨” 20 times using repeat()
let star='✨'
for (i=0; i<=20; i++){
    console.log(star)
}

// =====================================================
// 4. STRING METHODS (APPLIED UNDERSTANDING)
// =====================================================

// Q21. Given string = "  Diwali Celebration  ", remove extra spaces and print clean version.
let string = "  Diwali Celebration  "
console.log(string.trim())

// Q22. Extract the last 4 characters of any given string.
let str6= "Happy Diwali"
let newSTr6= str6.substring(8,12)
console.log(newSTr6)


// Q23. Convert “Javascript is fun” → “JAVASCRIPT IS FUN” → “javascript is fun”.
let str7="Javascript is fun"
console.log(str7.toUpperCase().toLowerCase())

// Q24. Replace all occurrences of “light” with “spark” in “Festival of lights brings light”.
let str8= "Festival of lights brings light"
let newStr8= str8.replaceAll("light" ,"spark")
console.log(newStr8)

// Q25. Find if a string starts with “Happy” and ends with “Diwali”.
let str9= "Happy Diwali Happy Happy"
let newStr9= str9.startsWith("Happy")
console.log(newStr9)
let newSTR9= str9.endsWith("Diwali")
console.log(newSTR9)

// =====================================================
// 5. CONVERSION (NUMBER <-> STRING)
// =====================================================

// Q26. Convert number 2025 into a string and print its type.
let num2= 2025
let newNum= num2.toString()
console.log(typeof newNum)

// Q27. Convert string “99.9” to number and round it.
let num3= 99.9
let newNum3= Math.round(num3)
console.log(newNum3)

// Q28. Add number + string and explain result for (5 + "5") and (5 - "5").
console.log(5 + "5") // here string concatenation happened because of + operator using in number and string
console.log(5 - "5") //here mathematical operation happened because - operator and javascript convert "5" into number

// Q29. Convert true → 1 and false → 0 using Number().
console.log(Number(true)) //true=1
console.log(Number(false)) //false=0 

// Q30. Ask: what happens when you do String(10 + 5) vs String(10) + String(5)?
console.log(String(10+5)) //numbers are inside one brackets so math operation happens
console.log(String(10)+ String(5)) //numbers are in seperate brackets while using + operator so concatenation happens

// =====================================================
// 6. OPERATORS (LOGICAL + ARITHMETIC + TERNARY)
// =====================================================

// Q31. Calculate and print: ((10 + 3) ** 2) / 13.
console.log(((10 + 3) ** 2) / 13) //
/**10+3=13
13**2=169
169÷13=13 */

// Q32. Create a program that checks if a number is divisible by both 3 and 5.
let numm= 30
if(numm%3==0 && numm%5===0){
        console.log(`${numm} is divided by 3 & 5`)
}else{
        console.log(`${number} is not divided by 3 & 5`)

}

// Q33. Use logical operators to check if a student’s age is between 18–25 and from “Pune”.
let studentAge= 23
let Place= "Sambhajinagar"
if(studentAge>=18 && studentAge<=25 && Place==="Pune"){
    console.log("The student is eligible")
} else {
    console.log("The student is not eligible")
}

// Q34. Use ternary operator to check if given marks >= 40 → “Pass” else “Fail”.
let mark= 67
let result=(mark>=40)?"Pass":"Fail"
console.log(result)

// Q35. Find the output of: console.log(5 + 3 * 2 ** 2) and explain order of evaluation.
console.log(5 + 3 * 2 ** 2) //First exponential 2*2=4 then multiplication 4*3=12 then addtion 12+5=17

// =====================================================
// 7. DATE (REAL-TIME APPLICATIONS)
// =====================================================

// Q36. Print today’s date in format “DD-MM-YYYY”.
let today= new Date()
let day= today.getDate()
let month= today.getMonth()+1
let year= today.getFullYear()
console.log(today)
console.log(`${day}-${month}-${year}`)

// Q37. Print current time in format “HH:MM:SS”.
let hours= today.getHours()
let AMPM= hours>=12?"PM":"AM"
hours= hours%12
let minutes= today.getMinutes()
let seconds= today.getSeconds()
minutes = minutes.toString().padStart(2, '0')
seconds = seconds.toString().padStart(2, '0')
console.log(`${hours}:${minutes}:${seconds}`)


// Q38. Create a Date for “24 Oct 2025” and find which day it falls on.
let date = new Date("2025-10-24")
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let dayName = days[date.getDay()]
console.log(dayName)


// Q39. Calculate how many days are left for Diwali 2025 (use Date difference).
let todayy = new Date()
let diwali = new Date("2026-11-08")
let diff = diwali - todayy
console.log(diff) //time in milisecond
let daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24)) //milisecond in one day
console.log(daysLeft)

let today1= new Date()
let diwalii = new Date(2025, 9, 20)
let diffe= diwalii-today1
console.log(diffe)
let daysLeftt= Math.ceil(diffe / (1000 * 60 * 60 * 24))
console.log(daysLeftt)


// Q40. Print “Good Morning / Good Afternoon / Good Evening” based on current hour.
let dayy= new Date()
let hour= dayy.getHours()
if (hour<=12){
    console.log("Good Morning")
} else if(hour<=18){
    console.log("Good Afternoon")
}
else {
    console.log("Good Evening")
}

/* ------------------------------------------------------------------
🌟 BONUS CHALLENGE (Optional)
Create a program called “Diwali Countdown”.
It should print today’s date and how many days left until Diwali.
Then display “🪔 Get Ready to Celebrate!” if less than 10 days remain.
------------------------------------------------------------------ 
🎉 Remember: Programming is not about writing code —
it’s about breaking problems into logic
*/
let countDown= new Date()
let diwali1= new Date("2026-11-05")
let differen= diwali1- countDown
let diwaliCel= Math.ceil(differen/(1000*60*60*24))
console.log(diwaliCel)