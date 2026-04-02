// 1.
     let minNum = 50
     let maxNum = 100
     let randomNum = Math.floor(Math.random()*(maxNum-minNum)+minNum)
     console.log(randomNum)
// 2.
     let floatNum = 56.78945
     console.log(floatNum.toFixed(2))
// 3.
     const dice1 = console.log(Math.floor(Math.random()*6)+1)
     const dice2 = console.log(Math.floor(Math.random()*6)+1)
// doubt
// 4.
     let firstName = "Tejas"
     let middleName = "Sanjay"
     let lastName = "Pund"
     console.log(firstName+middleName+lastName)
     console.log(`${firstName} ${middleName} ${lastName}`)
// 5. 
     let x = 57
     console.log(Math.round(x/10)*10)
// 6.
     let otp = Math.floor(Math.random()*((999999-100000)+100000))
     console.log(otp)
// 7.
     let string1 = "Javascript"
     console.log(string1[0])
     console.log(string1[9])
// 8.
     let y = "My name is Tejas"
     console.log(y.length)
// 9.
     let firstname = "Tejas"
     let middlename = "Sanjay"
     let lastname = "Pund"
     console.log(`${firstname} ${middlename} ${lastname}`)
// 10.
     let z = "this is the sentence to be converted into uppercase"
     console.log(z.toUpperCase())
// 11.
     let w = " this is a string with space "
     console.log(w.trim())
// 12.
     let v = "I am learning javascript"
     console.log(v.includes("javascript"))
// 13.
     let u = "This is a bad idea"
     console.log(u.replace("bad","good"))
// 14.
     let t = "this apple is sweet , that apple is sour"
     console.log(t.replaceAll("apple","mango"))
// 15.
     let s = "red,green,blue,yellow"
     let color1 = s.substring(0,3)
     let color2 = s.substring(4,9)
     let color3 = s.substring(10,14)
     let color4 = s.substring(15,21)
     console.log(color1)
     console.log(color2)
     console.log(color3)
     console.log(color4)
// 16.
     let r = "this is a string to check the first and last index of a"
     console.log(r.indexOf("a"))
     console.log(r.lastIndexOf("a"))
// 17.
     let q = "JavaScript"
     let substring = q.substring(4,10)
     console.log(substring)
// 18.
     let p = "Programming"
     let subStr = p.substr(0,4)
     console.log(subStr)
// 19.
     let s1 = "welcome to js"
     let s2 = "that is javascript"
     console.log(s1.concat(s2))
// 20.
     let num = 5.7
     console.log(Math.ceil(num))
     console.log(Math.floor(num))
//--------------------------------------------------------------------------------------------------------------------------
// Simple questions
//1.
     let str1 = "hello world"
     console.log(str1.length)
//2. 
     let str2 = "automation"
     console.log(str2[str2.length-1])
//3. 
     let str3 = "learning"
     console.log(str3.toUpperCase())
//4. 
     let str4 = "coding"
     console.log(str4.includes("code"))
//5. 
     let str5 = "   JavaScript   "
     console.log(str5.trim())
//6. 
     let str6 = "PlaywrightAutomation"
     let fiveChar = str6.substring(0,5)
     console.log(fiveChar)
//7.
     let str7 = "Cypress is fun"
// DOUBT
//8.
     let str8 = "banana apple"
     console.log(str8.replace("banana","pineapple"))
//9.
     let str9 = "JavaScript"
// doubt
//10.
     let str10 = "Functional Testing"
     console.log(str10[5])
//11.
     let str11 = "to check if its contains API"
     console.log(str11.includes("API"))
//12.
     let str12 = "automation testing"
//13.
     let str13 = " HELLOworld "
     console.log(str13.trim().toLowerCase())
//14.
     let str14 = "test your code with a test case"
     console.log(str14.replace("test","exam"))
