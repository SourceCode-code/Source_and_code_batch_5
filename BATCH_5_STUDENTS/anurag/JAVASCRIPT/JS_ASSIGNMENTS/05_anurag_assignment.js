//1. write a program to generate a random number between 50 and 100 (inclusive).
let minNum = 50
let maxNum = 100
let randomNum = Math.floor(Math.random()*(maxNum-minNum+1)+minNum)
console.log(randomNum)

// 2. Take any floating number (e.g., 45.6789) and print it rounded to 2 decimal places.
let floatNum = 45.6789
let roundedNum = floatNum.toFixed(2)
console.log(roundedNum)

// 3. Create a program to roll two dice (1–6 each) and print their sum.
let dice1 = Math.floor(Math.random()*6)+1
let dice2 = Math.floor(Math.random()*6)+1
let sum = dice1 + dice2
console.log(`Dice 1: ${dice1}, Dice 2: ${dice2}, Sum: ${sum}`)

// 4. Write a program that rounds any number entered by the user to the nearest multiple of 10.
let userNum = 47
let roundedTo10 = Math.round(userNum / 10) * 10
console.log(roundedTo10)

// 5. Generate a random 6-digit OTP using Math methods.
let otp = Math.floor(100000 + Math.random() * 900000)
console.log(otp)

// 7. Print the first and last character of a given string.
let str = "JavaScript"
let firstChar = str.charAt(0)
let lastChar = str.charAt(str.length - 1)
console.log(`First character: ${firstChar}, Last character: ${lastChar}`)

// 8. Write a program to count how many characters (excluding spaces) are in a string.
let sentence = "Hello World"
let charCount = sentence.replace(/\s/g, '').length
console.log(charCount)

// 9. Concatenate first name, middle name, and last name using template literals and print it.
let firstName = "anurag"
let middleName = "arvind"
let lastName = "Deshpande"
let fullName = `${firstName} ${middleName} ${lastName}`
console.log(fullName)

// 10. Write a program that takes a long sentence and prints it in uppercase.
let longSentence = "This is a long sentence that needs to be in uppercase."
console.log(longSentence.toUpperCase()) 

// 11. Take a string with extra spaces at the beginning and end. Remove the spaces and print the cleaned string.
let stringWithSpaces = "   Hello World!   "
let cleanedString = stringWithSpaces.trim()
console.log(cleanedString)

// 12. Write a program that checks if the string "JavaScript" exists inside a sentence. Print true/false.
let sentenceToCheck = "I love learning JavaScript."
let containsJavaScript = sentenceToCheck.includes("JavaScript")
console.log(containsJavaScript)

// 13. Replace the first occurrence of the word "bad" with "good" in a string.
let badString = "This is a bad idea."
let goodString = badString.replace("bad", "good")
console.log(goodString)

// 14. Replace ALL occurrences of "apple" with "mango" in a given string.
let fruitString = "I have an apple. I like apple."
let replacedFruitString = fruitString.replace(/apple/g, "mango")
console.log(replacedFruitString)

// 15. Split the string "red,green,blue,yellow" into an array and print each color separately.
let colors = "red,green,blue,yellow"
let colorArray = colors.split(",")
colorArray.forEach(color => console.log(color))


// 16. Write a program to find the index of the first occurrence of "a" in a string and the last occurrence of "a".
let stringToSearch = "JavaScript"
let firstIndex = stringToSearch.indexOf("a")
let lastIndex = stringToSearch.lastIndexOf("a")
console.log(`First occurrence of 'a': ${firstIndex}, Last occurrence of 'a': ${lastIndex}`)

// 17. Extract the substring "Script" from the string "JavaScript" using substring().
let mainString = "JavaScript"
let extractedSubstring = mainString.substring(4, 10)
console.log(extractedSubstring)

// 18. Extract the first 4 characters of the string "Programming" using substr().
let programmingString = "Programming"
let firstFourChars = programmingString.substr(0, 4)
console.log(firstFourChars)

// 19. Write a program that takes two strings and joins them using concat().
let string1 = "Hello"
let string2 = "World"
let concatenatedString = string1.concat(" ", string2)
console.log(concatenatedString)

// 20. Generate a random number and round it up (Math.ceil) and round it down (Math.floor). Print both results.
let randomDecimal = Math.random() * 10
let roundedUp = Math.ceil(randomDecimal)
let roundedDown = Math.floor(randomDecimal)
console.log(`Random Decimal: ${randomDecimal}, Rounded Up: ${roundedUp}, Rounded Down: ${roundedDown}`)


