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