const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

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


console.log("=================================");

//declare emapty array
const emptyArray = [];
console.log(emptyArray);

//declare array with more than 5 number of elements
const array5Elements = [1, 2, 3, 4, 5, 6];
console.log(array5Elements);

//find the length of array
console.log(webTechs.length);

//get the first item, the middle item and the last item of the array
console.log(webTechs[0]);
console.log(webTechs[Math.floor(webTechs.length / 2)]);
console.log(webTechs[webTechs.length - 1]);

//declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [
    "Hello",
    30,
    true,
    { name: "Anurag", age: 30 },
    [1, 2, 3],
    null
];
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

console.log("=================================");

// Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(companies);

// Print the number of companies in the array
console.log(companies.length);

// Print the first company, middle and last company
console.log(companies[0]);
console.log(companies[Math.floor(companies.length / 2)]);
console.log(companies[companies.length - 1]);

console.log("=================================");

// Print out each company
companies.forEach(company => console.log(company));

// Change each company name to uppercase one by one and print them out
companies.forEach(company => console.log(company.toUpperCase()));

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(companies.join(", ") + " are big IT companies.");

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
const companyToCheck = "Google";
if (companies.includes(companyToCheck)) {
  console.log(companyToCheck);
}
else{
  console.log("company is not found");

}

// Filter out companies which have more than one 'o' without using the filter method
let comapniesmoreO = [];
for (let i= 0; i < comapniesmoreO.length; i++){
  if (companies[i].toLowerCase().split("o").length - 1 > 1) {
    comapniesmoreO.push(companies[i]);
  }
}
console.log(comapniesmoreO);

console.log("================================");

// Sort the array using sort() method
companies.sort();
console.log(companies);

// Reverse the array using reverse() method
companies.reverse();
console.log(companies);

// Slice out the first 3 companies from the array
let first3Companies = companies.slice(0, 3);
console.log(first3Companies);

// Slice out the last 3 companies from the array
let Last3Comapnies = companies.slice(companies.length - 3);
console.log(Last3Comapnies);

// Slice out the middle IT company or companies from the array
let middleComapaney = companies.slice(Math.floor(companies.length / 2));
console.log(middleComapaney);

// Remove the first IT company from the array
companies.shift();
console.log(companies);

// Remove the middle IT company or companies from the array
companies.splice(Math.floor(companies.length / 2), 1);
console.log(companies);

// Remove the last IT company from the array
companies.pop();
console.log(companies);

// Remove all IT companies
companies.splice(0, companies.length);
console.log(companies);

console.log("=================================");
console.log("exercise level 2");

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
// Remove all the punctuations and change the string to an array and count the number of words in the array
let words = text.replace(/[.,]/g, '').split(' ');
console.log(words);
console.log(words.length);

console.log("=================================");

//in the following shopping cart add, remove, edit items
let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

//add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}
console.log(shoppingCart);

//add 'Sugar' at the end of your shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')){
  shoppingCart.push('Sugar');
}
console.log(shoppingCart);

//remove 'Honey' if you are allergic to honey
let allergicToHoney = true;
if (allergicToHoney) {
  let honeyIndex = shoppingCart.indexOf('Honey');
  if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
  }
}
console.log(shoppingCart);

//modify Tea to 'Green Tea'
let teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA');
} else {
    countries.push('Ethiopia');
}

console.log(countries);

// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if (webTechs.includes('Sass')) {
    console.log('Sass is a CSS preprocess');
} else {
    webTechs.push('Sass');
    console.log(webTechs);
}

// Concatenate the following two variables and store it in a fullStack variable
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

console.log("=================================");
console.log("exercise level 3");


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log(`Min age: ${minAge}, Max age: ${maxAge}`);

// Find the median age(one middle item or two middle items divided by two)
let medianAge;
if (ages.length % 2 === 0) {
  medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
}
else {
  medianAge = ages[Math.floor(ages.length / 2)];
}
console.log(`Median age: ${medianAge}`);

// Find the average age(all items divided by number of items)
const averageAge = ages.reduce((sum, age) => sum + age, 0) / ages.length;
console.log(`Average age: ${averageAge}`);  
// Find the range of the ages (max minus min)
const ageRange = maxAge - minAge;
console.log(`Age range: ${ageRange}`);
// Compare the value of (min - average) and (max - average), use abs() method
const minDiff = Math.abs(minAge - averageAge);
const maxDiff = Math.abs(maxAge - averageAge);
console.log(`Min diff: ${minDiff}, Max diff: ${maxDiff}`);

//slice the first ten countries from the countries array
const firstTenCountries = countries.slice(0, 10);

console.log("-------------------------------");

// Find the middle countries in the countries array
const middleCountries = countries.slice(Math.floor((countries.length - 1) / 2), Math.ceil((countries.length - 1) / 2) + 1);
console.log(`Middle countries: ${middleCountries}`);

// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
const midcontryarry = Math.ceil(countries.length / 2);

const firstHalfCountries = countries.slice(0, midcontryarry);
const secondHalfCountries = countries.slice(midcontryarry);
console.log(`First half: ${firstHalfCountries}`);
console.log(`Second half: ${secondHalfCountries}`);

