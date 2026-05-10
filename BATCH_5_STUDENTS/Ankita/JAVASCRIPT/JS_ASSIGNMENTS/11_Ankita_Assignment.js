// Exercise: Level 1

// Declare an empty array
let array1 = []
console.log(array1)

// Declare an array with more than 5 number of elements
let numArray = [1, 3, 55, 24, 76347]
console.log(numArray)

// Find the length of your array
let arrayLength = [23, 45, 78, [65, 89], 82, 67, 23]
console.log(arrayLength.length)

// Get the first item, the middle item and the last item of the array
console.log(numArray[0])
console.log(numArray[Math.floor(numArray.length / 2)])
console.log(numArray[numArray.length - 1])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["Fartade", 24, true, null, undefined, "2002"]
console.log("length of mixed datatypes=", mixedDataTypes.length)

// Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let companies = ["Facebook", "Google", "IBM", "Apple", "Oracle", "Amazon"]

// Print the array using console.log()
console.log(companies)

// Print the number of companies in the array
console.log(companies.length)

// Print the first company, middle and last company
console.log(companies[0])
console.log(companies[Math.floor(companies.length / 2)])
console.log(companies[companies.length - 1])

// Print out each company
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i])
}
// Change each company name to uppercase one by one and print them out
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i].toUpperCase())
}
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(companies.join(", ") + " are big IT companies.")

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
let companyEXist = "Swiggy"
if (companies.includes(companyEXist)) {
    console.log(companyEXist)
} else {
    console.log("Company is not exist")
}

// Filter out companies which have more than one 'o' without using the filter method
let count = 0
for (let i = 0; i < companies.length - 1; i++) {
    if (companies[i].includes("o")) {
        console.log(companies[i])
    }
}

// Sort the array using sort() method
console.log(companies.sort())
console.log(companies.reverse())

// Reverse the array using reverse() method
console.log(companies.reverse())

// Slice out the first 3 companies from the array
console.log(companies.slice(0, 3))

// Slice out the last 3 companies from the array
console.log(companies.slice(-3))

// Slice out the middle IT company or companies from the array
console.log(companies.slice(Math.floor(companies.length / 2)))

// Remove the first IT company from the array
console.log(companies.shift())

// Remove the middle IT company or companies from the array
console.log(companies.pop())

// Remove the last IT company from the array
console.log(companies.pop())

// Remove all IT companies
companies = []
console.log(companies)
// Exercise: Level 2

// First remove all the punctuations and change the string to an array and count the number of words in the array:
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13

// In the following shopping cart add, remove, edit items:
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.unshift("Meat")
console.log(shoppingCart)

// add Sugar at the end of your shopping cart if it has not been already added
//shoppingCart.push("Sugar")
//console.log(shoppingCart)

// remove 'Honey' if you are allergic to honey
shoppingCart.pop()
console.log(shoppingCart)

// modify 'Tea' to 'Green Tea'
shoppingCart[3] = "Green Tea"
console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
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
]

countryName = 'Ethiopia'
let check3 = countries.includes(countryName)
if (check3) {
    console.log(`${countryName} countries present in this array`)
}
else {
    console.log(`${countryName} countries not present in this array`)
}

// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];


webs = 'Sass'
let check4 = webTechs.includes(webs)
if (check3) {

    console.log(`${webs}  present in this array`)
}
else {
    console.log(`${webs}  not present in this array`)
}
// Concatenate the following two variables and store it in a fullStack variable:
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Exercise: Level 3

// The following is an array of 10 students' ages:
const ages = [19, 20, 21, 22, 23, 24, 25, 26]

// Sort the array and find the min and max age
let max = Math.max(...ages)
let min = Math.min(...ages)
console.log(max)
console.log(min)


// Find the median age(one middle item or two middle items divided by two)
console.log(ages[ages.length / 2])
// Find the average age(all items divided by number of items)
let sumAll = 0
for (let i = 0; i <= ages.length - 1; i++) {
    sumAll = sumAll + ages[i]
} let check = sumAll / ages.length
console.log(check)

// Find the range of the ages (max minus min)
console.log(max - min)

// Compare the value of (min - average) and (max - average), use abs() method
let checkValue = (min - check / max - check)
console.log(Math.abs(checkValue))

// Slice the first ten countries from the countries array
let slice10 = countries.slice(0, 10)
console.log(slice10)

// Find the middle country(ies) in the countries array
console.log(Math.round(countries.length / 2))
console.log(countries[6])

// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.
const countriess = [
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
]

let first = []
let second = []
countriess.push("India")
for (let i = 0; i < countriess.length; i++) {
    if (i >= 6) {
        first.push(countriess[i])
    } else {
        second.push(countriess[i])
    }
}
console.log(first)
console.log(second)