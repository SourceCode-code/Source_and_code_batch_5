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
let emptyArr = [];

// Declare an array with more than 5 number of elements
let arr1 = [6523,451,true,"adsfdf",0,5.555,"dddfff"];

// Find the length of your array
console.log(`length : ${arr1.length}`);

// Get the first item, the middle item and the last item of the array
console.log(`first element : ${arr1[0]} | middle element : ${arr1[Math.floor(arr1.length/2)]} | last element : ${arr1[arr1.length-1]}`);

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["adsfdf",0,6.55,"tfhgvbc",57,false];


// Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let Companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"];

// Print the array using console.log()
console.log(Companies);

// Print the number of companies in the array
console.log(Companies.length);

// Print the first company, middle and last company
console.log(`first element : ${Companies[0]} | middle element : ${Companies[Math.floor(Companies.length/2)]} | last element : ${Companies[Companies.length-1]}`);


// Print out each company
Companies.forEach((element) => {
  console.log(element);
});

// Change each company name to uppercase one by one and print them out
Companies.forEach((element, index) => {
  console.log(element.toUpperCase());
});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(`---------`);
console.log(
  `${Companies.slice(0, -1).join(", ")} and ${Companies[Companies.length - 1]} are big IT companies`,
);
console.log(`---------`);

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
let company = "Applew";
Companies.includes(company)
  ? console.log(company)
  : console.log(`Company is not found`);

// Filter out companies which have more than one 'o' without using the filter method
let filterArray = [];
for (let element = 0; element < Companies.length; element++) {
  let count = 0;
  let word = Companies[element];
  for (let char = 0; char < word.length; char++) {
    if (word[char] === "o") {
      count++;
    }
  }
  if (count >= 2) {
    filterArray.push(word);
  }
}
console.log(filterArray);


// Sort the array using sort() method
Companies.sort();
console.log(`sorted Array : ${Companies}`);

// Reverse the array using reverse() method
Companies.reverse();
console.log(`Reversed Array : ${Companies}`);

// Slice out the first 3 companies from the array
console.log(`first 3 companies : ${Companies.slice(0, 3)}`);

// Slice out the last 3 companies from the array
console.log(`Last 3 companies : ${Companies.slice(-3)}`);

// Slice out the middle IT company or companies from the array
if (Companies.length % 2 === 0) {
  let mid = Companies.slice(Companies.length / 2 - 1, Companies.length / 2);
  console.log(`mid companies are ${mid}`);
} else {
  console.log(`mid company is ${Companies[Math.floor(Companies.length / 2)]}`);
}

// Remove the first IT company from the array
Companies.shift();
console.log(`Post removing first element Array : ${Companies}`);

// Remove the middle IT company or companies from the array
if (Companies.length % 2 === 0) {
  let mid = Companies.length/2;
  Companies.splice(mid-1,2);
  console.log(`Post removing mid companies : ${Companies}`);
} else {
let mid = Math.floor(Companies.length/2);
  Companies.splice(mid-1,1);
  console.log(`Post removing mid company : ${Companies}`);
}

// Remove the last IT company from the array
Companies.pop();
console.log(`Post remving last element : ${Companies}`);

// Remove all IT companies
for(let i =0;i<Companies.length;i++){
    delete Companies[i]
}
console.log(Companies);

// Exercise: Level 2

// First remove all the punctuations and change the string to an array and count the number of words in the array:
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replaceAll(".", "").replaceAll(",", "").split(" ");
console.log(words);
console.log(words);
console.log(words.length);
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

// In the following shopping cart add, remove, edit items:
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// add Sugar at the end of your shopping cart if it has not been already added
shoppingCart.push("Sugar");
console.log(shoppingCart);

// remove 'Honey' if you are allergic to honey
shoppingCart.splice(4,1);
console.log(shoppingCart);

// modify 'Tea' to 'Green Tea'
shoppingCart.splice(3,1,"Grreen Tea");
console.log(shoppingCart);
console.log(`------------------------------------------------`);


// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries.includes("Ethiopia")){
  console.log("ETHIOPIA");
}
else{
  countries.push("Ethiopia");
}
console.log(`------------------------------------------------`);
// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
if(webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess');
}
else{
  webTechs.push(`Sass`);
  console.log(webTechs);
}
console.log(`------------------------------------------------`);

// Concatenate the following two variables and store it in a fullStack variable:
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
let fullStack = [...frontEnd,...backEnd];
console.log(fullStack);
console.log(`------------------------------------------------`
);

// Exercise: Level 3



// The following is an array of 10 students' ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
let sorrtedArrray = ages.sort((a,b)=>a-b);
console.log(`Sorted Array : ${sorrtedArrray}`);
let max = Math.max(...sorrtedArrray);
let min = Math.min(...sorrtedArrray);

console.log(`Max : ${max} | Min : ${min}`);

// Find the median age(one middle item or two middle items divided by two)
if(sorrtedArrray.length%2 ===0){
  let middleIndex = sorrtedArrray.length/2 -1;
  console.log(`Median : ${(sorrtedArrray[middleIndex] + sorrtedArrray[middleIndex+1])/2}`);
}
else{
  let middleIndex = Math.floor(sorrtedArrray.length/2)
console.log(`Median : ${sorrtedArrray[middleIndex]}`);
}

// Find the average age(all items divided by number of items)
let sum =sorrtedArrray.reduce((sum,i)=>sum = sum+i);
let average = sum/sorrtedArrray.length
console.log(`Average : ${average}`);

// Find the range of the ages (max minus min)
console.log(`Range : ${max - min}`);

// Compare the value of (min - average) and (max - average), use abs() method
console.log(`Absolute min : ${Math.abs(min -average).toFixed(2)}`);
console.log(`Absolute max : ${Math.abs(max -average).toFixed(2)}`);

// Slice the first ten countries from the countries array
let firstTenCountries = countries.slice(0,10);
console.log(`firrst 10 countries : ${firstTenCountries}`);

// Find the middle country(ies) in the countries array
if (countries.length%2 ===0){
  let mid = countries.length/2 -1;
  console.log(`mid counties : ${countries.slice(mid,mid+1)}`);
}
else{
  let mid = Math.floor(countries.length/2);
  console.log(`mid country : ${countries[mid]}`);
}

// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
 arr1 =[];
let arr2 = [];
if(countries.length%2 ===0){
   let mid = countries.length/2 -1;
   arr1 = countries.slice(0,mid+1);
   arr2 = countries.slice(mid+1);
   console.log(`first Array : ${arr1}`);
   console.log(`second array : ${arr2}`);
}
else{
  let mid = Math.floor(countries.length/2);
     arr1 = countries.slice(0,mid+1);
   arr2 = countries.slice(mid+1);
   console.log(`first Array : ${arr1}`);
   console.log(`second array : ${arr2}`);
}