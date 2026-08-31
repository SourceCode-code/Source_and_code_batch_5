//assignment 16
//=============



//Exercises: Level 1

//1 Declare a function fullName and it print out your full name.
function fullname() {
    console.log("shivani anil kshirsagar")
}
fullname()
//output===>shivani anil kshirsagar
//=================================================================================================


//2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function Fullname1(firstname, lastname) {
    return `${firstname} ${lastname}`
}
let my_name = Fullname1("shivani", "kshirsagar")
//.log(my_name)
//output===>shivani kshirsagar
//=================================================================================================


//3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
    return num1 + num2;
}
/*output===>
let sum=addNumbers(5,6)
console.log(sum)//11

let sum1=addNumbers(10,10)
console.log(sum1)//20
*/
//=================================================================================================


//4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaofrect(length, width) {
    return length * width
}
/*output===>
let area=areaofrect(5,6)
console.log(area)//30

let area1=areaofrect(4,3)
console.log(area1)//12
*/
//=================================================================================================


//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeter(length, width) {
    return 2 * (length + width);
}
let per = perimeter(5, 6)
//console.log(per)//22

let per1 = perimeter(4, 3)
//console.log(per1)//14
//=================================================================================================


//6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
    return length * width * height
}
let volume = volumeOfRectPrism(5, 6, 7)
//console.log(volume)//210

let volume2 = volumeOfRectPrism(3, 6, 1)
//console.log(volume2)//18
//=================================================================================================
//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
let circlearea = (r) => {
    return Math.PI * r * r
}
let area = circlearea(5)
//console.log(area)//78.53981633974483
//======================OR=========================

function areaofcircle(r) {
    return Math.PI * r * r
}
let area1 = areaofcircle(3)
//console.log(area1)//28.274333882308138
//=================================================================================================


//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(r) {
    return 2 * Math.PI * r
}
let circumference = circumOfCircle(5)
//console.log(circumference)//31.41592653589793
//===============================================================================================================


//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
    return mass / volume
}
let density1 = density(10, 5)
//console.log(density1)//2
let density2 = density(20, 4)
//console.log(density2)//5
//=================================================================================================


//10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

//distance in km and time in hr
//speed = (distance/time) km/hr

function speed(distance, time) {
    return distance / time
}
let speedofmovingobject = speed(100, 2)
//console.log(speedofmovingobject)//50
let speedofmovingobject1 = speed(50, 3)
//console.log(speedofmovingobject1)//16.666666666666668
//=================================================================================================


//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
let weigth = (mass, gravity) => {
    return mass * gravity
}
let weight1 = weigth(10, 9)
//console.log(weight1)//90
let weight2 = weigth(20, 9)
//console.log(weight2)//180 
//=================================================================================================


//12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * (9 / 5)) + 32
}
let temperature = convertCelsiusToFahrenheit(32)
//console.log(temperature)//89.6 0F
let temperature1 = convertCelsiusToFahrenheit(0)
//console.log(temperature1)//32 0F(Fahrenheit )
//=================================================================================================


/*13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
 Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old 
 or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/
function calculateBMI(weightinKg, heightinM) {
    const bmi = weightinKg / (heightinM * heightinM);

    if (bmi < 18.5) {
        return "Underweight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight"
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
let BMI = calculateBMI(70, 2)
//console.log(BMI)//Underweight
let BMI1 = calculateBMI(80, 1.8)
//console.log(BMI1)//Normal weight
let BMI2 = calculateBMI(80, 1.5)
//console.log(BMI2)//Obese
let BMI3 = calculateBMI(80, 1)
//console.log(BMI3)//Obese


//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkseason(month) {
    if (month == "september" || month == "october" || month == "november") {
        return "Autumn"
    }
    else if (month == "december" || month == "january" || month == "february") {
        return "Winter"
    }
    else if (month == "march" || month == "april" || month == "may") {
        return "Spring"
    }
    else {
        return "Invalid month"
    }
}
let season = checkseason("september")
//console.log(season)//Autumn
let season1 = checkseason("december")
//console.log(season1)//Winter
let season2 = checkseason("april")
//console.log(season2)//Spring
//=================================================================================================


/*15 Math.max returns its largest argument. Write a function findMax that takes three arguments
 and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
*/
function findMax(a, b, c) {
    let max = a

    if (b > max) {
        max = b
    }
    if (c > max) {
        max = c
    }

    return max
}

//console.log(findMax(0, 10, 5))      // 10
//console.log(findMax(0, -10, -2))    // 0

//Exercises: Level 2

//1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a
//linear equation, solveLinEquation.
function solveLinEquation(a, b, c, x, y) {
    return (a * x) + (b * y) + c
}
let equation = solveLinEquation(2, 3, 4, 5, 6)
console.log(equation)//32
let equation1 = solveLinEquation(1, 2, 3, 4, 5)
console.log(equation1)//17
//=================================================================================================


//2 Quadratic equation is calculated as follows: ax2 + bx + c = 0.
//  Write a function which calculates value or values of a
//  quadratic equation, solveQuadEquation.
/*
console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic
*/
/*function solveQuadEquation(a, b, c) {
    return (a * x2) + (b * x) + c
}
let quadratic = solveQuadEquation(1, 4, 4)
console.log(quadratic)//9
*/
//3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(array) {
    array.forEach(value => {
        console.log(value)
    })
}
let myArray = [1, 2, 3, 4, 5]
//printArray(myArray)
/*output===>
1
2
3
4
5
*/
//===================================================================================================


/*4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08
*/
/*
const showDateTime = () => {
  const now = new Date()
  const day = String(now.getDate()).padStart(2, '0')
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear()
  

  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  
  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`
  console.log(formattedDateTime)
  return formattedDateTime
}

showDateTime()// Output:  11/05/2026 19:09
*/
//=================================================================================================


/*5 Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
*/
function swapValue(x, y) {

}
//6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

//console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
function reverseArray(array) {
    let reversed = []
    for (let i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i])
    }
    return reversed
}
console.log(reverseArray([1, 2, 3, 4, 5])) //output===>[5, 4, 3, 2, 1]

//console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

//7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

//8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

//9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

//10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

//11Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

//12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function reverseArray1(array1) {
    let reversed1 = []
    for (let i = array1.length - 1; i >= 0; i--) {
        reversed1.push(array1[i])
    }
    return reversed1
}
console.log(reverseArray1(['A', 'B', 'C']))  //output===>['C', 'B', 'A']

//=================================================================================================
/*13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
*/
function evenandodds(number) {
    let evens = 0
    let odds = 0
    for (let i = 1; i <= number; i++) {
        if (i % 2 != 0) {
            odds++
        }
        else {
            evens++
        }
    }
    console.log(`The number of odds are ${odds}`);
    console.log(`The number of evens are ${evens}`);
}
evenandodds(100)
/*output===>
    The number of odds are 50
    The number of evens are 50
*/
//=================================================================================================

/*14 Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10
*/
function sum(...args) {
    return args.reduce((acc, el) => acc + el, 0)
}
/*
console.log(sum(1, 2, 3)) //output===>6
console.log(sum(1, 2, 3, 4)) //output===>10
*/

//15 Writ a function which generates a randomUserIp.
function randomUserIp() {
    const ip1 = Math.floor(Math.random() * 256);
    const ip2 = Math.floor(Math.random() * 256);
    const ip3 = Math.floor(Math.random() * 256);
    const ip4 = Math.floor(Math.random() * 256);
    return `${ip1}.${ip2}.${ip3}.${ip4}`;
}

//console.log(randomUserIp())//output===>251.225.19.134
//==========================================================================================


//16 Write a function which generates a randomMacAddress



//==========================================================================================


/*17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'
*/
function randomHexaNumberGenerator() {
    const characters = '0123456789abcdef'
    let result = ''
    for (let i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
}

//console.log(randomHexaNumberGenerator()) //  output==>4b9743
//=================================================================================================


/*18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE
*/
function userIdGenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result
}
//console.log(userIdGenerator()) //output===>jHH5ZvO
//=================================================================================================


//Exercises: Level 3

/*1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'
*/

//===============================================================================================
/*2 Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)
*/
function rgbColorGenerator() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

//console.log(rgbColorGenerator())//output===>rgb(49, 133, 130)
//=================================================================================================


//3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(num) {
    const colors = []
    for (let i = 0; i < num; i++) {
        colors.push(randomHexaNumberGenerator())
    }
    return colors
}
//console.log(arrayOfHexaColors(3))//output===>['4b9743', 'ee33df', 'a1b2c3']

//4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.
function arrayOfRgbColors(num) {
    const colors = []
    for (let i = 0; i < num; i++) {
        colors.push(rgbColorGenerator())
    }
    return colors
}

//console.log(arrayOfRgbColors(3))//output===>[ 'rgb(131, 232, 80)', 'rgb(74, 167, 105)', 'rgb(126, 242, 161)' ]
//=================================================================================================


//5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
function convertHexaToRgb(hex) {
    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)
    return `rgb(${r}, ${g}, ${b})`
}

//console.log(convertHexaToRgb('4b9743'))//output==>rgb(75, 151, 67)
//console.log(convertHexaToRgb('ee33df'))//output==>rgb(238, 51, 223)
//===================================================================================================


//6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
function convertRgbToHexa(rgb) {
    const [r, g, b] = rgb.match(/\d+/g).map(Number)
    const hexaR = r.toString(16).padStart(2, '0')
    const hexaG = g.toString(16).padStart(2, '0')
    const hexaB = b.toString(16).padStart(2, '0')
    return `#${hexaR}${hexaG}${hexaB}`
}
console.log(convertRgbToHexa('rgb(75, 151, 67)'))//output==>#4b9743
//====================================================================================================================


/*7 Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
*/
function generateColors(type, num) {
    if (type === 'hexa') {
        return arrayOfHexaColors(num)
    }
    else if (type === 'rgb') {
        return arrayOfRgbColors(num)
    }
}
// console.log(generateColors('hexa', 3)) // [ '918b21', '92253d', '6c6a24' ]
// console.log(generateColors('hexa', 1)) // [ '3db040' ]
// console.log(generateColors('rgb', 3)) // [ 'rgb(24, 119, 162)', 'rgb(71, 111, 106)', 'rgb(12, 245, 250)' ]
// console.log(generateColors('rgb', 1)) // [ 'rgb(103, 189, 84)' ]
//===================================================================================================================


//8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(array) {
  let shuffled = [...array]
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  
  return shuffled
}
// console.log(shuffleArray([1, 2, 3, 4, 5])) //output===>[ 4, 3, 1, 2, 5 ]
// console.log(shuffleArray(['A', 'B', 'C', 'D', 'E'])) //output===>[ 'E', 'B', 'D', 'A', 'C' ]


//9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    let result = 1  
    for (let i = 2; i <= n; i++) {
        result *= i
    }   

    return result
}
// console.log(factorial(5))//output===>120
// console.log(factorial(0))//output===>1    
//====================================================================================================


//10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not
/*
const isEmpty = (value) => {
    if (value === null || value === undefined || value === '') {
        return true
    }
    return false
}
console.log(isEmpty(null))//output===>true
console.log(isEmpty(undefined))//output===>true
console.log(isEmpty(''))//output===>true
console.log(isEmpty('Hello'))//output===>false
*/
function isEmpty(value) {       
    if (value === null || value === undefined || value === '') {
        return true
    }
    return false
}
// console.log(isEmpty(null))//output===>true
// console.log(isEmpty(undefined))//output===>true
// console.log(isEmpty(''))//output===>true
// console.log(isEmpty('Hello'))//output===>false
//====================================================================================================


//11 Call your function sum, it takes any number of arguments and it returns the sum.

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0)
}

// console.log(sum(1, 2, 3)) //output===>6
// console.log(sum(1, 2, 3, 4)) //output===>10
//============================================================================================================


//12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items.
//  Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(array) {
    if (!array.every(item => typeof item === 'number')) {
        return "All items in the array should be numbers."  
    }
    return array.reduce((acc, item) => acc + item, 0)
}
let sumArray = [1, 2, 3, 4, 5]
//console.log(sumOfArrayItems(sumArray))//output===>15
//================================================================================================================================


//13 Write a function called average, it takes an array parameter and returns the average of the items. 
// Check if all the array items are number types. If not give return reasonable feedback.
function average(array) {
    if (!array.every(item => typeof item === 'number')) {
        return "All items in the array should be numbers."  
    }       
    const sum = array.reduce((acc, item) => acc + item, 0)
    return sum / array.length
}
let averageArray = [1, 2, 3, 4, 5]
//console.log(average(averageArray))//output===>3
//===================================================================================================================================

/*14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array.
 If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'
*/
function modifyArray(array) {
    if (array.length < 5) {
        return 'Not Found'
    }               
    array[4] = array[4].toUpperCase()
    return array
}
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))//output===>[ 'Avocado', 'Tomato', 'Potato', 'Mango', 'LEMON', 'Carrot' ]
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']))//output===>[ 'Google', 'Facebook', 'Apple', 'Amazon', 'MICROSOFT', 'IBM' ]
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))//output===>Not Found
//===================================================================================================================================   


//15  Write a function called isPrime, which checks if a number is prime number.
    function isPrime(num) {
    if (num <= 1) {
        return false
    }   
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }   
    }  
    return true
}   
//console.log(isPrime(7))//output===>true
//console.log(isPrime(10))//output===>false
//==================================================================================================================


//16 Write a functions which checks if all items are unique in the array.
function areAllItemsUnique(array) {
    const uniqueItems = new Set(array)
    return uniqueItems.size === array.length
}
let uniqueArray = [1, 2, 3, 4, 5]
//console.log(areAllItemsUnique(uniqueArray))//output===>true
let nonUniqueArray = [1, 2, 3, 4, 5, 2]
//console.log(areAllItemsUnique(nonUniqueArray))//output===>false
//===================================================================================================================



//17 Write a function which checks if all the items of the array are the same data type.
const allSameType = (arr) => {
  if (arr.length === 0) return true
  return arr.every(item => typeof item === typeof arr[0])
}

console.log(allSameType([1, 2, 3]))        // true
console.log(allSameType([1, '2', 3]))      // false
console.log(allSameType(['a', 'b', 'c']))   // true

//===================================================================================================================



//18 JavaScript variable name does not support special characters or symbols except $ or _.
//  Write a function isValidVariable which check if a variable is valid or invalid variable.
function isValidVariable(name) {
  const reservedKeywords = [
    'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 
    'default', 'delete', 'do', 'else', 'export', 'extends', 'finally', 
    'for', 'function', 'if', 'import', 'in', 'instanceof', 'new', 
    'return', 'super', 'switch', 'this', 'throw', 'try', 'typeof', 
    'var', 'void', 'while', 'with', 'yield', 'let', 'static', 'enum'
  ]

  if (reservedKeywords.includes(name)) {
    return "Invalid (Reserved Keyword)"
  }

  const variableRegex = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;

  return variableRegex.test(name) ? "Valid" : "Invalid";
}

console.log(isValidVariable("myVar"))    // Valid
console.log(isValidVariable("$price"))   // Valid
console.log(isValidVariable("_private")) // Valid
console.log(isValidVariable("123test"))  // Invalid (Starts with number)
console.log(isValidVariable("my-var"))   // Invalid (Contains hyphen)
console.log(isValidVariable("let"))      // Invalid (Reserved word)


/*19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
*/
function sevenRandomNumbers() {
    const numbers = new Set()       
    while (numbers.size < 7) {
        const randomNum = Math.floor(Math.random() * 10)
        numbers.add(randomNum)
    }
    return Array.from(numbers)
}   

console.log(sevenRandomNumbers())
/*output===>[8, 9, 0, 4,
                2, 1, 5
         ]      
*/
//====================================================================================================================


//20 Write a function called reverseCountries, it takes countries array and first it copy the array and 
// returns the reverse of the original array
function reverseCountries(countries) {
    let reversedCountries = []      
    for (let i = countries.length - 1; i >= 0; i--) {
        reversedCountries.push(countries[i])
    }
    return reversedCountries
}       
let countries = ['India', 'USA', 'Germany', 'France', 'Japan']
console.log(reverseCountries(countries))//output===>[ 'Japan', 'France', 'Germany', 'USA', 'India' ]
//======================================================================================================================
