/** 

Exercises: Level 1

1 Declare a function fullName and it print out your full name.

2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

3 Declare a function addNumbers and it takes two two parameters and it returns sum.

4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more

14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0
**/

// 1 Declare a function fullName and it print out your full name.
function fullName(fullName){
    console.log("Anurag Deshpande");

}
fullName();

console.log("========================================")

// 2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName1(FirstName, LastName){
    return `${FirstName} ${LastName}`;

}

let name = fullName1("anurag", "deshpande");
console.log(name);

console.log("========================================")

//3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function calculator(num1, num2){
    console.log(num1 + num2);
}
calculator(10, 20);
console.log("========================================")

//4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function area(length , width){
    console.log(area = length * width);
}
area(20, 30)
//console.log(area)
console.log("========================================")

//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeter(length, width){
    console.log(perimeter = 2 * (length * width) );

}
perimeter(20, 40)
console.log("========================================")

//6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volume(length, width, height){
    console.log(volume = length * width * height);
}
volume(10, 20, 30);

console.log("========================================")

//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius){
    const pi = 3.14;
    console.log(areaOfCircle = pi * radius * radius);
}
areaOfCircle(20);
console.log("========================================")

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumference(radius){
    const pi = 3.14;
    console.log(circumference= 2 * pi * radius);
} 
circumference(10);

console.log("========================================")

//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume){
    console.log(density = mass / volume);
    //return density = mass / volume;
}
density(15, 20);

console.log("========================================")

//10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time){
    console.log(speed = distance / time);
}
speed(60, 10);

console.log("========================================")
//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass){
    const g = 9.81;
    console.log(weight = mass * g);
}
weight(20);

console.log("========================================")
console.log("12 question answer")

// 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
let result  = convertCelsiusToFahrenheit(30);
console.log(result);
//convertCelsiusToFahrenheit(30)

console.log("========================================")

//13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
function calculateBMI(weight, height){
    let bmi = weight/(height * height);
    
    if(bmi < 18.5){
        return`BMI: ${bmi.toFixed(2)} = underweight`;

    }else if(bmi < 25){
        return`bmi: ${bmi.toFixed(2)} = normal weight`;
    }else if (bmi < 30){
        return`bmi: ${bmi.toFixed(2)} = overweight`;
    }else {
        return `bmi: ${bmi.toFixed(2)} = obese`;
    }
}
console.log(calculateBMI(90, 1.75))

console.log("========================================")

//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
console.log("current season")
function season (month){
    
    if(month =="December" || month == "Janaury" || month == "February"){
        console.log("current season is winter");
    }else if (month =="March" || month == "April" || month == "May"){
        console.log("current season is spring");
    }else if (month =="June" || month == "July" || month == "August"){
        console.log("current season is summer");
    }else if (month =="September" || month == "October" || month == "November"){
        console.log("current season is autimn")
    }else{
        console.log("please enter valid month")
    }
}
console.log(season("Janaury"));


//15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(a, b, c){
    let max = a;
    if(b > max){
        max = b;
    }else if (c > max){
        max = c;
    }
    return max
}
console.log(findMax(0, 10, 5))

console.log(findMax(0, -10, -2))

console.log("=====================================")

/**
 * Exercises: Level 2

1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08

5 Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4

6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']

7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.

14 Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10

15 Writ a function which generates a randomUserIp.

16 Write a function which generates a randomMacAddress

17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'

18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE

 */

console.log("=====================================")
console.log("level 2 assignment")

//1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
console.log("linear equation")
function solveLinearEquation(a, b, c, x, y){
    // solving the linear equation ax + by + c = 0
    return a * x + b * y + c;

}
console.log(solveLinearEquation(2, 3, 4, 1, 2)); // Output: 12
console.log(solveLinearEquation(1, -1, 0, 3, 3));

console.log("=====================================")

//2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
console.log("quadratic equation")
function solveQuadratic(a, b, c){
    return a * x * x + b * x + c;

}
console.log(solveQuadratic(1, -3, 2)); // Output: 0
console.log(solveQuadratic(1, 2, 1)); // Output: 0
console.log(solveQuadratic(1, 0, -4)); // Output: 0
console.log(solveQuadratic(1, -1, 0)); // Output: 0

//3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
console.log("print array")
function printArray(arr){
    for(let i=0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
console.log(printArray([1, 2, 3, 4, 5]));

// 4 write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
    const now = new Date();
    const day = String