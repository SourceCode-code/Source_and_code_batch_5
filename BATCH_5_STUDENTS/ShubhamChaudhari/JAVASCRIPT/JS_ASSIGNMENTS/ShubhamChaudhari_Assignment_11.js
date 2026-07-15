// Exercise: Level 1

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Declare an empty array
let array_1 = [];

// Declare an array with more than 5 number of elements
let array_2 = [1, 2, 3, 5, 4, 6];

// Find the length of your array
console.log(array_2.length);

// Get the first item, the middle item and the last item of the array
let midIndex = Math.floor(array_2.length / 2);
console.log("First:", array_2[0], "Middle:", array_2[midIndex], "Last:", array_2[array_2.length - 1]);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, 3, 5, "5", 7, "Shubham", true, null];
console.log(mixedDataTypes.length);

// Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let Companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

// Print the array using console.log()
console.log(Companies);

// Print the number of companies in the array
console.log(Companies.length);

// Print the first company, middle and last company
let midC = Math.floor(Companies.length / 2);
console.log("First:", Companies[0], "Middle:", Companies[midC], "Last:", Companies[Companies.length - 1]);

// Print out each company
for (let i = 0; i < Companies.length; i++) {
    console.log(Companies[i]);
}

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < Companies.length; i++) {
    console.log(Companies[i].toUpperCase());
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let lastCompany = Companies[Companies.length - 1];
let restCompanies = Companies.slice(0, Companies.length - 1).join(", ");
console.log(restCompanies + " and " + lastCompany + " are big IT companies.");

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
let searchCompany = "Google";
console.log(Companies.includes(searchCompany) ? searchCompany : "Company is not found");

// Filter out companies which have more than one 'o' without using the filter method
let moreThanOneO = [];
for (let i = 0; i < Companies.length; i++) {
    let count = 0;
    for (let j = 0; j < Companies[i].length; j++) {
        if (Companies[i][j].toLowerCase() === "o") count++;
    }
    if (count > 1) moreThanOneO.push(Companies[i]);
}
console.log(moreThanOneO);

// Sort the array using sort() method
let sortedCompanies = [...Companies].sort();
console.log(sortedCompanies);

// Reverse the array using reverse() method
let reversedCompanies = [...Companies].reverse();
console.log(reversedCompanies);

// Slice out the first 3 companies from the array
console.log(Companies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(Companies.slice(-3));

// Slice out the middle IT company or companies from the array
let midSlice = Math.floor(Companies.length / 2);
console.log(Companies.slice(midSlice, midSlice + 1));

// Remove the first IT company from the array
let companiesCopy1 = [...Companies];
companiesCopy1.shift();
console.log(companiesCopy1);

// Remove the middle IT company or companies from the array
let companiesCopy2 = [...Companies];
let mid2 = Math.floor(companiesCopy2.length / 2);
companiesCopy2.splice(mid2, 1);
console.log(companiesCopy2);

// Remove the last IT company from the array
let companiesCopy3 = [...Companies];
companiesCopy3.pop();
console.log(companiesCopy3);

// Remove all IT companies
let companiesCopy4 = [...Companies];
companiesCopy4.splice(0, companiesCopy4.length);
console.log(companiesCopy4);

// =====================================================
// Exercise: Level 2
// =====================================================

// First remove all the punctuations and change the string to an array and count the number of words in the array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[.,]/g, "").split(" ");
console.log(words);
console.log(words.length);

// In the following shopping cart add, remove, edit items:
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// add 'Meat' in the beginning if not already added
if (!shoppingCart.includes("Meat")) 
    shoppingCart.unshift("Meat");

// add Sugar at the end if not already added
if (!shoppingCart.includes("Sugar")) 
    shoppingCart.push("Sugar");

// remove 'Honey' if you are allergic to honey
let honeyIndex = shoppingCart.indexOf("Honey");
if (honeyIndex !== -1) shoppingCart.splice(honeyIndex, 1);

// modify 'Tea' to 'Green Tea'
let teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex !== -1) shoppingCart[teaIndex] = "Green Tea";

console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes("Ethiopia")) {
    console.log("ETHIOPIA");
} else {
    countries.push("Ethiopia");
    console.log(countriesCopy);
}

// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
const webTechsCopy = [...webTechs];
if (webTechsCopy.includes("Sass")) {
    console.log("Sass is a CSS preprocess");
} else {
    webTechsCopy.push("Sass");
    console.log(webTechsCopy);
}

// Concatenate the following two variables and store it in a fullStack variable
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [...frontEnd, ...backEnd];
console.log(fullStack);

// =====================================================
// Exercise: Level 3
// =====================================================

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
let sortedAges = [...ages].sort((a, b) => a - b);
console.log("Sorted ages:", sortedAges);
console.log("Min age:", sortedAges[0]);
console.log("Max age:", sortedAges[sortedAges.length - 1]);

// Find the median age
let midAge = Math.floor(sortedAges.length / 2);
let median = sortedAges.length % 2 === 0
    ? (sortedAges[midAge - 1] + sortedAges[midAge]) / 2
    : sortedAges[midAge];
console.log("Median age:", median);

// Find the average age
let totalAge = sortedAges.reduce((acc, el) => acc + el, 0);
let avgAge = totalAge / sortedAges.length;
console.log("Average age:", avgAge);

// Find the range of the ages
console.log("Range:", sortedAges[sortedAges.length - 1] - sortedAges[0]);

// Compare the value of (min - average) and (max - average), use abs() method
console.log("abs(min - avg):", Math.abs(sortedAges[0] - avgAge));
console.log("abs(max - avg):", Math.abs(sortedAges[sortedAges.length - 1] - avgAge));

// Slice the first ten countries from the countries array
console.log(countries.slice(0, 10));

// Find the middle country(ies) in the countries array
let midCountry = Math.floor(countries.length / 2);
if (countries.length % 2 === 0) {
    console.log("Middle countries:", countries[midCountry - 1], countries[midCountry]);
} else {
    console.log("Middle country:", countries[midCountry]);
}

// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
let half = Math.ceil(countries.length / 2);
let firstHalf = countries.slice(0, half);
let secondHalf = countries.slice(half);
console.log("First half:", firstHalf);
console.log("Second half:", secondHalf);
