//
 /*Declare a function fullName and it print out your full name.

function fullname() {
    console.log("Shweta dhananjay ugwekar")
}
fullname()





/* Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullname(firstName, lastname, midname) {
    return `${firstName} ${midname} ${lastname}`
}
let sinfo = fullname("shweta", "ugwekar", "dhananjay")

console.log(sinfo.toUpperCase()) 


//3 Declare a function addNumbers and it takes two two parameters and it returns function

function addnumber(num1 , num2){

    return num1 + num2
}

console.log(addnumber( 5 , 10))




/* An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaofRectangle(Length,width){


    return Length *width
}

console.log(areaofRectangle(5, 10))






5//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterofRectangle(Length,width){
    return 2*(Length +width)
}

console.log(perimeterofRectangle(5,10))






6 //A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfrectanglePrism(Length,width,height){
return Length *width *height

}

console.log(volumeOfrectanglePrism(5,10,15))




7// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfcircle(radius){
return Math.PI * radius*radius

}
console.log(areaOfcircle(5))







8// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function CircumferrnceOfCircle(radius){

    return 2 * Math.PI *radius
}
console.log(CircumferrnceOfCircle(5))







9 //Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density(mass ,volume){
return mass/volume
}

console.log(density(10,5))





10// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(distance , time){
    return distance/time
}

console.log(speed (100 , 5))






11 //Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weight(mass , gravity){

    return mass *gravity
}


console.log(weight(5,6,7))




12 //Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertcelsiustofahrneheit(celcius){

    return (celcius *9/4)+ 67
}

console.log(convertcelsiustofahrneheit(100))




13// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

//The same groups apply to both men and women.
//Underweight: BMI is less than 18.5
//Normal weight: BMI is 18.5 to 24.9
//Overweight: BMI is 25 to 29.9
//Obese: BMI is 30 or more

function bmi(weight , height){
    let bmi = weight / (height *height)
if (bmi <18.5){

    return "underweight"
}

}

console.log(bmi(50,1.5))








14 //Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month){

    if(month ==="september" || month ==="october"|| month ==="november"){

        return "Autumn"
    }
}

console.log(checkSeason("september"))




*/

15 /*Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

//console.log(findMax(0, 10, 5))
//10
//console.log(findMax(0, -10, -2))
//0

function findmax(num1 , num2 , num3){
return Math.max(num1 , num2 , num3)

}
console.log(findmax(0 ,10 , 5))
console.log(findmax(0 , -10 ,-2))

o/p = 10
    = 0

    

//Exercises: Level 2

1// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solvelinequation(a,b,c,x,y){

    return a*x + b*y +c
}

console.log(solvelinequation(1,2,3,4,5))






2// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

function solveQuadratic(a,b,c){
if(a===undefined && b===undefined && c===undefined){
    return (a*x2)+(b*x)+c
    
    
}
     
}
console.log(solveQuadratic(1 ,4 , 4))







*/


3 /*Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printarray(arr){
    for(let i=0; i>arr.length; i++){
        
    }
}
console.log(printarray([1,2,3,4,5]))


*/


4 /*Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

//showDateTime()
//08/01/2020 04:08

function showdatetime(){

    let now = new Date()

    let day = now.getDate()
    let month = now.getMonth()+1
let year = now.getFullYear()
let hour =now.getHours()
let minute = now.getMinutes()
let second = now.getSeconds()
let date = `${day}/${month}/${year}/ ${hour}:${minute}:${second}`
return date = `${day}/${month}/${year}${hour}:${minute}:${second}`

}

console.log(showdatetime())

*/




5 /*Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4

function swapValues(x,y){
    let temp = x
    x= y
    y =temp
return`x => ${x},y =>${y}`


}
console.log(swapValues(3,4))

*/






6/*Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

function reverseArray(arr){

    let reversed =[]
    for(let i =arr.length-1; i>=0;i--){

        reversed.push(arr[i])
    }

    return reversed
}
console.log(reverseArray([1,2,3,4,5]))


*/

7/* Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(array) {
  return array.map(item => item.toUpperCase());
}

console.log(capitalizeArray(["apple", "banana", "mango"]))



*/




8/* Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

let items = [];

function addItem(item) {
  items.push(item);
  return items;
}

console.log(addItem("Apple"));
console.log(addItem("Banana"));







9// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item


let items = ["Apple", "Banana", "Mango"];

function removeItem(index) {
  items.splice(index, 1);
  return items;
}
Example:
console.log(removeItem(1));

*/





10/* Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}
console.log(sumOfNumbers(5));



*/

11/* Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  return sum;
}
console.log(sumOfOdds(10));

*/



12 /*



function sumOfEven(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}
*/













13/* Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

//evensAndOdds(100);
//The number of odds are 50.
//The number of evens are 51.


function evenAndOdds(number){

    let evencount = 0
let addcount = 0


}

*/









14/* Write a function which takes any number of arguments and return the sum of the arguments

//sum(1, 2, 3) // -> 6
//sum(1, 2, 3, 4) // -> 10

function sum(...args){
let total = 0
for (let i=0; i<args.length;i++){

    total += args[i];

}

return total;

}


console.log (sum (1,2,3))
console.log(sum(1,2,3,4))



*/




15/* Writ a function which generates a randomUserIp.


function randomUserIp(){
let ip = "";
for (let i = 0; i<4; i++){
let num =
Math.floor(Math.random()*256);

if(i<3){
    ip+= num+ ".";
}else{
    ip+=num;
}

}
return ip ; 

}

console.log(randomUserIp())



*/



16 /*Write a function which generates a randomMacAddress


function randomMacAddress(){
let chars = "0123456789ABCDEF";
let mac = "";

for(let i = 0; i<6 ; i++){
let pair = "";

for (let j = 0 ; j<2 ; j++){
    pair +=
chars[Math.floor(Math.random()*chars.length)]

}

mac += pair;


if (i< 5 ){
    mac+= ";";
}

}

return mac;

}
console.log(randomMacAddress());


*/



17 /*Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

//console.log(randomHexaNumberGenerator());
//'#ee33df'

function randomHexNumberGenerator(){
let hex = "#";
let chars = "0123456789abcdef";
for (let i = 0 ; i<6 ; i ++){
    hex+=
    chars[Math.floor (Math.random()*chars.length)]
}

return hex;
}
console.log(randomHexNumberGenerator())




18// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

//console.log(userIdGenerator());
//41XTDbE

function userIdGenerator(){
let chars = 
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

let id = "";
for(let i = 0 ; i<7 ; i++){
id +=
chars[Math.floor(Math.random()*chars.length)]
}

return id ;
}

console.log(userIdGenerator())



*/

//Exercises: Level 3

1/*Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

//userIdGeneratedByUser()
//'kcsy2
//SMFYb
//bWmeq
//ZXOYh
//2Rgxf

//userIdGeneratedByUser()
//'1GCSgPLMaBAVQZ26
//YD7eFwNQKNs7qXaT
//ycArC5yrRupyG00S
//UbGxOFI7UXSWAyKN
//dIV0SSUTgAdKwStr


function userIdGeneratedByUser(){
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
let numchars = parseInt(prompt("Enter the number of characters for the id"))
let numIds = parseInt(prompt("number of ids to generate"))
let ids = [];
let id ="";
  
for (let i = 0 ;i< nmIds ; i++){
id = "";
for (let j=0 ;j<numchars ; j++){
    id += chars[Math.floor(Math.random()*chars.length)]

}
ids.push(id)

}
console.log(ids.join("\n"))


*/




/*2 Write a function name rgbColorGenerator and it generates rgb colors.

//rgbColorGenerator()

//rgb(125,244,255)


function rgbColourGenerator(){
let r = Math.floor(Math.random()*256);
let g = Math.floor(Math.random()*256);
let b = Math.floor(Math.random()*256);
let rgb = `rgb(${r,g,b})`
return rgb;


}

console.log(rgbColourGenerator())







3 //Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(numColors){

let colors = [];
let chars = "0123456789abcdef";
for (let i = 0 ; i< numColours ; i++){
let hex = "#";
for (let j =0 ; j<6 ; j+=){
    hex += chars[Math.floor(Math.random()*chars.length)]
}
return colors.push(hex)

}
}
console.log(arrayOfHexaColors(5))



*/



4 /*Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(num) {
  let colors = [];

  for (let i = 0; i < num; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    colors.push(`rgb(${r}, ${g}, ${b})`);
  }

  return colors;
}

console.log(arrayOfRgbColors(3))


*/






5/* Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

function convertHexaToRgb(hexa) {
  
  hexa = hexa.replace('#', '');

  
  let r = parseInt(hexa.substring(0, 2), 16);
  let g = parseInt(hexa.substring(2, 4), 16);
  let b = parseInt(hexa.substring(4, 6), 16);

  return `rgb(${r}, ${g}, ${b})`;
}


console.log(convertHexaToRgb('#ff5733'));



*/




6/* Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertRgbToHexa(r, g, b) {
  
  let red = r.toString(16).padStart(2, '0');
  let green = g.toString(16).padStart(2, '0');
  let blue = b.toString(16).padStart(2, '0');

  return `#${red}${green}${blue}`;
}


console.log(convertRgbToHexa(255, 87, 51));


*/


7/* Write a function generateColors which can generate any number of hexa or rgb colors.

//console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
//console.log(generateColors('hexa', 1)) // '#b334ef'
//console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
//console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

function generateColors(type, num) {
  const colors = [];

  for (let i = 0; i < num; i++) {
    if (type === 'hexa') {
      let hex = '#';
      let chars = '0123456789abcdef';

      for (let j = 0; j < 6; j++) {
        hex += chars[Math.floor(Math.random() * 16)];
      }

      colors.push(hex);

    } else if (type === 'rgb') {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      colors.push(`rgb(${r}, ${g}, ${b})`);
    }
  }

  
  return num === 1 ? colors[0] : colors;
}


console.log(generateColors('hexa', 3));
console.log(generateColors('hexa', 1));
console.log(generateColors('rgb', 3));
console.log(generateColors('rgb', 1));




*/





8 /*Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(arr) {
  
  let shuffled = [...arr];

  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate random index
    let j = Math.floor(Math.random() * (i + 1));

    
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

console.log(shuffleArray([1, 2, 3, 4, 5]));
console.log(shuffleArray(['apple', 'banana', 'orange', 'mango']));


*/



9 /*Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(num) {
  
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  }

  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5)); 
console.log(factorial(0)); 




*/




10 /*Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(value) {
  if (
    value === null ||
    value === undefined ||
    value === '' ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === 'object' &&
      !Array.isArray(value) &&
      Object.keys(value).length === 0)
  ) {
    return true;
  }

  return false;
}


console.log(isEmpty(''));          
console.log(isEmpty([]));          
console.log(isEmpty({}));          
console.log(isEmpty(null));
console.log(isEmpty('Hello'));     
console.log(isEmpty([1, 2]));      



*/




11 /*Call your function sum, it takes any number of arguments and it returns the sum.

function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}


console.log(sum(1, 2, 3));         
console.log(sum(5, 10, 15, 20));   
console.log(sum(100, 200));        


*/




12/* Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(arr) {
  
  for (let item of arr) {
    if (typeof item !== 'number') {
      return 'All array items must be numbers';
    }
  }


  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}


console.log(sumOfArrayItems([1, 2, 3, 4]));      
console.log(sumOfArrayItems([10, 20, 30]));     
console.log(sumOfArrayItems([1, '2', 3]));      


*/






13 /*Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr) {
  
  for (let item of arr) {
    if (typeof item !== 'number') {
      return 'All array items must be numbers';
    }
  }

  
  if (arr.length === 0) {
    return 0;
  }


  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  
  return sum / arr.length;
}


console.log(average([1, 2, 3, 4]));     
console.log(average([10, 20, 30]));     
console.log(average([1, '2', 3]));      
console.log(average([]));              



*/






14/* Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

//console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
//['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
//console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
//['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
//console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  //'Not Found'

function modifyArray(arr) {
  if (arr.length < 5) {
    return 'item not found';
  }

  
  arr[4] = arr[4].toUpperCase();

  return arr;
}


console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));


console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));


console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));


*/






15 /* Write a function called isPrime, which checks if a number is prime number.

function isPrime(num) {
    
    if (num <= 1) {
        return false;
    }

    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}


console.log(isPrime(7));   
console.log(isPrime(10)); 
console.log(isPrime(13));  

*/



16 /*Write a functions which checks if all items are unique in the array.

function areItemsUnique(arr) {
    
    return new Set(arr).size === arr.length;
}


console.log(areItemsUnique([1, 2, 3, 4]));     
console.log(areItemsUnique([1, 2, 2, 4]));     
console.log(areItemsUnique(["a", "b", "c"]));
console.log(areItemsUnique(["a", "b", "a"]));  



*/



17/* Write a function which checks if all the items of the array are the same data type.

function areSameDataType(arr) {
    
    if (arr.length === 0) {
        return true;
    }

    const firstType = typeof arr[0];

    
    return arr.every(item => typeof item === firstType);
}


console.log(areSameDataType([1, 2, 3]));           
console.log(areSameDataType(["a", "b", "c"]));     
console.log(areSameDataType([1, "2", 3]));         
console.log(areSameDataType([true, false, true])); 




*/



18 /*JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.


function isValidVariable(variable) {
    
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    return regex.test(variable);
}


console.log(isValidVariable("myVar"));     
console.log(isValidVariable("_name"));     
console.log(isValidVariable("$price"));    
console.log(isValidVariable("123name"));   
console.log(isValidVariable("user-name")); 
console.log(isValidVariable("first name"));




*/







19/* Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]


function sevenRandomNumbers() {
    const numbers = [];

    while (numbers.length < 7) {
        const randomNum = Math.floor(Math.random() * 10);

        
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }

    return numbers;
}


console.log(sevenRandomNumbers());


*/




20/* Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array

function reverseCountries(countries) {
    
    return [...countries].reverse();
}


const countries = ["India", "USA", "Canada", "Japan"];

console.log(reverseCountries(countries));



console.log(countries);

*/