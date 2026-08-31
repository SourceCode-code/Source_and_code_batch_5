// Exercises: Level 1

// 1 Declare a function fullName and it print out your full name.
function fullName() {
  console.log("Ganesh Dhage");
}
fullName();

// 2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullname2(fn, ln) {
  console.log(`${fn} ${ln}`);
}
fullname2("Ganesh", "Dhage");

// 3 Declare a function addNumbers and it takes two two parameters and it returns sum.
let addNumbers = function (a, b) {
  return Number(a) + Number(b);
};
console.log(addNumbers("456", 1));

// 4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
let areaOfRectangle = function (l, w) {
  return Number(l) * Number(w);
};
console.log(areaOfRectangle(10, 5));

// 5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
let perimeterOfRectangle = function (l, w) {
  return 2 * (l + w);
};
console.log(perimeterOfRectangle(10, 5));

// 6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
let volumeOfRectPrism = function (l, w, h) {
  return l * w * h;
};
console.log(volumeOfRectPrism(8, 4, 2));

// 7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
let areaOfCircle = function (r) {
  return Math.PI * r * r;
};
console.log(areaOfCircle(5));

// 8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
let circumOfCircle = function (r) {
  return 2 * Math.PI * r;
};
console.log(circumOfCircle(5));

// 9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
let density = function (mass, volume) {
  return mass / volume;
};
console.log(density(100, 20));

// 10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
let speed = function (distance, time) {
  return distance / time;
};
console.log(speed(120, 2));

// 11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
let weight = function (mass, gravity) {
  return mass * gravity;
};
console.log(weight(70, 9.8));

// 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
let convertCelsiusToFahrenheit = function (c) {
  return (c * 9) / 5 + 32;
};
console.log(convertCelsiusToFahrenheit(25));

// 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

let bmi = function (weight, height) {
  let result = weight / (height * height);

  if (result < 18.5) {
    return "Underweight";
  } else if (result >= 18.5 && result <= 24.9) {
    return "Normal weight";
  } else if (result >= 25 && result <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
};
console.log(bmi(70, 1.75));

// 14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
let checkSeason = function (month) {
  month = month.toLowerCase();

  if (
    month === "october" ||
    month === "november" ||
    month === "december" ||
    month === "january"
  ) {
    return "Winter";
  } else if (
    month === "february" ||
    month === "march" ||
    month === "april" ||
    month === "may"
  ) {
    return "Summer";
  } else if (
    month === "june" ||
    month === "july" ||
    month === "august" ||
    month === "september"
  ) {
    return "Autumn";
  } else {
    return "Invalid month";
  }
};
console.log(checkSeason("October"));
// 15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

let findMax = function (a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
};

console.log(findMax(0, 10, 5)); // 10
console.log(findMax(0, -10, -2)); // 0

// Exercises: Level 2

console.log("------------Exercises: Level 2-----------------------------");
// 1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
let solveLinEquation = function (a, b, c, x) {
  return (-a * x - c) / b;
};
console.log(solveLinEquation(2, 3, 1, 3));
// 2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
let solveQuadratic = function (a, b, c) {
  let d = b * b - 4 * a * c;

  if (d < 0) {
    return "No Real Roots";
  } else if (d == 0) {
    return -b / (2 * a);
  } else {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    return [x1, x2];
  }
};

// console.log(solveQuadratic()) // {0}
console.log(solveQuadratic());
// console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, 4, 4));
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, -1, -2));
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 7, 12));
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, 0, -4));
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
console.log(solveQuadratic(1, -1, 0));

// 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let printArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};
printArray([1, 2, 3, 4, 5]);
// 4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08
let showDateTime = function () {
  let date = new Date();

  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();

  let hour = String(date.getHours()).padStart(2, "0");
  let minute = String(date.getMinutes()).padStart(2, "0");

  console.log(`${day}/${month}/${year} ${hour}:${minute}`);
};
showDateTime();

// 5 Declare a function name swapValues. This function swaps value of x to y.
let swapValues = function (x, y) {
  let temp = x;
  x = y;
  y = temp;

  console.log(`x => ${x}, y => ${y}`);
};
swapValues(3, 4);

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4

// 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
let reverseArray = function (arr) {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }

  return newArr;
};
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));
// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']

// 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
let capitalizeArray = function (arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }
  return newArr;
};
console.log(capitalizeArray(["css", "AjaX", "javascript"]));

// 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
let items = [1, 2, 3];

let addItem = function (item) {
  items.push(item);
  return items;
};
console.log(addItem(4));

// 9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// 10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
let sumOfNumbers = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumOfNumbers(10));

// 11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
let sumOfOdds = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      sum += i;
    }
  }

  return sum;
};
console.log(sumOfOdds(10));

// 12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
let sumOfEven = function (num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      sum += i;
    }
  }

  return sum;
};

console.log(sumOfEven(12));

// 13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
let evensAndOdds = function (num) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }

  console.log(`The number of odds are ${odd}.`);
  console.log(`The number of evens are ${even}.`);
};

evensAndOdds(100);

// 14 Write a function which takes any number of arguments and return the sum of the arguments
let sum = function (...args) {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

// 15 Writ a function which generates a randomUserIp.
let randomUserIp = function () {
  return (
    Math.floor(Math.random() * 256) +
    "." +
    Math.floor(Math.random() * 256) +
    "." +
    Math.floor(Math.random() * 256) +
    "." +
    Math.floor(Math.random() * 256)
  );
};

console.log(randomUserIp());
// 16 Write a function which generates a randomMacAddress
let randomMacAddress = function () {
  let chars = "0123456789ABCDEF";
  let mac = "";

  for (let i = 0; i < 6; i++) {
    mac += chars[Math.floor(Math.random() * 16)];
    mac += chars[Math.floor(Math.random() * 16)];

    if (i != 5) {
      mac += ":";
    }
  }

  return mac;
};

console.log(randomMacAddress());
// 17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'
let randomHexaNumberGenerator = function () {
  let chars = "0123456789abcdef";
  let hex = "#";

  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }

  return hex;
};

console.log(randomHexaNumberGenerator());
// 18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE

let userIdGenerator = function () {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let id = "";

  for (let i = 0; i < 7; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }

  return id;
};

console.log(userIdGenerator());

// Exercises: Level 3
console.log("---------------Exercises: Level 3--------------------------");

// 1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// userIdGeneratedByUser()
// 'kcsy2
// SMFYb
// bWmeq
// ZXOYh
// 2Rgxf
// '
// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26
// YD7eFwNQKNs7qXaT
// ycArC5yrRupyG00S
// UbGxOFI7UXSWAyKN
// dIV0SSUTgAdKwStr
// '
// 2 Write a function name rgbColorGenerator and it generates rgb colors.

// rgbColorGenerator()
// rgb(125,244,255)
let rgbColorGenerator = function () {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};

console.log(rgbColorGenerator());

// 3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
let arrayOfHexaColors = function (count) {
  let colors = [];
  let chars = "0123456789abcdef";

  for (let i = 0; i < count; i++) {
    let color = "#";

    for (let j = 0; j < 6; j++) {
      color += chars[Math.floor(Math.random() * 16)];
    }

    colors.push(color);
  }

  return colors;
};

console.log(arrayOfHexaColors(5));

// 4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.
let arrayOfRgbColors = function (count) {
  let colors = [];

  for (let i = 0; i < count; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    colors.push(`rgb(${r},${g},${b})`);
  }

  return colors;
};

console.log(arrayOfRgbColors(3));

// 5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
let convertHexaToRgb = function (hex) {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);

  return `rgb(${r},${g},${b})`;
};

console.log(convertHexaToRgb("#ff00aa"));

// 6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
let convertRgbToHexa = function (r, g, b) {
  let rr = r.toString(16).padStart(2, "0");
  let gg = g.toString(16).padStart(2, "0");
  let bb = b.toString(16).padStart(2, "0");

  return "#" + rr + gg + bb;
};

console.log(convertRgbToHexa(255, 0, 170));

// 7 Write a function generateColors which can generate any number of hexa or rgb colors.
let generateColors = function (type, count) {
  let colors = [];

  for (let i = 0; i < count; i++) {
    if (type == "hexa") {
      let chars = "0123456789abcdef";
      let color = "#";

      for (let j = 0; j < 6; j++) {
        color += chars[Math.floor(Math.random() * 16)];
      }

      colors.push(color);
    } else {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);

      colors.push(`rgb(${r},${g},${b})`);
    }
  }

  return count == 1 ? colors[0] : colors;
};

console.log(generateColors("hexa", 3));
console.log(generateColors("rgb", 2));

// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

// 8 Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
let shuffleArray = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
};

console.log(shuffleArray([1, 2, 3, 4, 5]));

// 9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
let factorial = function (num) {
  let fact = 1;

  for (let i = 1; i <= num; i++) {
    fact *= i;
  }

  return fact;
};

console.log(factorial(5));

// 10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not
let isEmpty = function (value) {
  return value == "" || value == null || value == undefined;
};

console.log(isEmpty(""));
console.log(isEmpty("Ganesh"));

// 11 Call your function sum, it takes any number of arguments and it returns the sum.
let sum2 = function (...args) {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(sum2(1, 2, 3, 4, 10, 10, -5));

// 12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
let sumOfArrayItems = function (arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      return "Array contains non-number";
    }

    total += arr[i];
  }

  return total;
};

console.log(sumOfArrayItems([1, 2, 3, 4]));

// 13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
let average = function (arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
};

console.log(average([10, 20, 30]));

// 14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
let modifyArray = function (arr) {
  if (arr.length < 5) {
    return "item Not Found";
  }

  arr[4] = arr[4].toUpperCase();

  return arr;
};

console.log(
  modifyArray(["Google", "Facebook", "Apple", "Amazon", "Microsoft"]),
);

// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
//   'Not Found'

// 15  Write a function called isPrime, which checks if a number is prime number.
let isPrime = function (num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(7));
console.log(isPrime(12));

// 16 Write a functions which checks if all items are unique in the array.
let allUnique = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return false;
      }
    }
  }

  return true;
};

console.log(allUnique([1, 2, 3, 4]));
console.log(allUnique([1, 2, 2, 4]));

// 17 Write a function which checks if all the items of the array are the same data type.
let sameDataType = function (arr) {
  let type = typeof arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] != type) {
      return false;
    }
  }

  return true;
};

console.log(sameDataType([1, 2, 3]));
console.log(sameDataType([1, "2", 3]));

// 18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
let isValidVariable = function (name) {
  let pattern = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

  return pattern.test(name);
};

console.log(isValidVariable("firstName"));
console.log(isValidVariable("1name"));

// 19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
let sevenRandomNumbers = function () {
  let numbers = [];

  while (numbers.length < 7) {
    let random = Math.floor(Math.random() * 10);

    if (!numbers.includes(random)) {
      numbers.push(random);
    }
  }

  return numbers;
};

console.log(sevenRandomNumbers());

// 20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
let reverseCountries = function (countries) {
  let newCountries = [];

  for (let i = countries.length - 1; i >= 0; i--) {
    newCountries.push(countries[i]);
  }

  return newCountries;
};

let countries = ["India", "USA", "Japan", "Brazil", "Canada"];

console.log(reverseCountries(countries));
