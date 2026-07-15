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
let empltyArray=[]
// Declare an array with more than 5 number of elements
let moreThanfiveNumbers=[6,7,8,9,5]
// Find the length of your array
console.log(moreThanfiveNumbers.length)//5
// Get the first item, the middle item and the last item of the array
console.log(moreThanfiveNumbers[0])//frist item 6
console.log(moreThanfiveNumbers[Math.floor(moreThanfiveNumbers.length/2)])//middle item 8
console.log(moreThanfiveNumbers[moreThanfiveNumbers.length-1])//5
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedArray=[5,true,"aashiya",[1,2],"pune",false]
console.log(mixedArray.length)
// Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let companies=['Facebook','Google','Microsoft,Apple','IBM','Oracle','Amazon']

// Print the array using console.log()
console.log(companies)
// Print the number of companies in the array
console.log("Number os companies "+companies.length)
// Print the first company, middle and last company
console.log(companies[0])//first company
console.log(companies[Math.floor(companies.length/2)])//middle element//ibm

// Print out each company
for(let i=0;i<companies.length;i++){
    console.log(companies[i])

}
// Change each company name to uppercase one by one and print them out
for(let i=0;i<companies.length;i++){
    console.log(companies[i].toUpperCase())

}
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let com =["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
let lastcom=com.pop()
console.log(lastcom)
console.log(com.join(" "))
console.log(com.join(", ")+ " and "+lastcom+" are big IT companies." )

// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'
let comm="Facebook"
if(com.includes(comm)){
    console.log(`${comm} company exist`)
}
else{
    console.log("company does no exist")
}


// Filter out companies which have more than one 'o' without using the filter method//not get solution
for(let i=0;i<com.length;i++){
    let comm_=com[i].toLowerCase()
    console.log("lowering all the companies "+comm_)
    let c=0
    for(let j=0;j<comm_.length;i++){
       if(comm_[i]==='o') 
        c++

    }

    if(c>=2){
console.log(com[i])
    }

}

// Sort the array using sort() method
console.log(com.sort())
// Reverse the array using reverse() method
console.log(com.reverse())
// Slice out the first 3 companies from the array
console.log(com.slice(0,3))
// Slice out the last 3 companies from the array
console.log(com.slice(-3))
// Slice out the middle IT company or companies from the array
console.log(com)
console.log(`"middle name of company" ${com[Math.floor(com.length/2)]}`)//apple
// Remove the first IT company from the array
console.log(com.shift())//oracle
//console.log(com)
// Remove the middle IT company or companies from the array



// Remove the last IT company from the array
console.log(com.pop())

// Remove all IT companies
com=[]
console.log(com)
// Exercise: Level 2

//not getting the solution
// First remove all the punctuations and change the string to an array and count the number of words in the array:
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// // console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// remove punctuation
let cleanText = text.replace(/[.,]/g, "");

// convert to array
let words = cleanText.split(" ");

console.log(words);
console.log(words.length);

// In the following shopping cart add, remove, edit items:
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
let addShoppingCart=shoppingCart.push('bread')//adding element at the end
console.log(shoppingCart)
shoppingCart.pop()//remove the last element

console.log(shoppingCart)

shoppingCart[0]='raw milk'
console.log(shoppingCart)//editing the element


// add 'Meat' in the beginning of your shopping cart if it has not been already added
let addbegining=shoppingCart.unshift('Meat')
console.log(shoppingCart)

// add Sugar at the end of your shopping cart if it has not been already added
let addend=shoppingCart.push('Sugar')
console.log(shoppingCart)


// remove 'Honey' if you are allergic to honey
let removehoney=shoppingCart.splice(4,1)//removing honey
console.log(shoppingCart)


// modify 'Tea' to 'Green Tea'
shoppingCart[3]='Green Tea'
console.log(shoppingCart)

// In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries.includes('Ethiopia')){
    console.log("countries list include ethiopia "+'ETHIOPIA')

}
else{
   countries.push('ETHIOPIA') 
   console.log(countries)
}

// In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.
if(webTechs.includes('Sass')){
    console.log('Sass is a CSS preprocess')

}
else{
   webTechs.push('Sass') 
   console.log(webTechs)
}
// Concatenate the following two variables and store it in a fullStack variable:
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStack=frontEnd.concat(backEnd)
console.log(fullStack)


// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// Exercise: Level 3

// The following is an array of 10 students' ages:
let ages=[23,32,12,10,34,14,15,31,24,30]
console.log(Math.max(...ages))//max age
console.log(Math.min(...ages))
// Sort the array and find the min and max age
let sorted_array = ages.sort((a, b) => { return a - b })
console.log(sorted_array)
console.log(Math.max(...ages))
console.log(Math.min(...ages))


// Find the median age(one middle item or two middle items divided by two)
//mediian age means middle age we can easily get middle age if we have odd numbers,but for even numbers we need to take 2 middle values and need to divide them by 2
//fisrt we need to sort them
let median=Math.floor(sorted_array.length/2)
console.log(median)//median index
if(median%2===0){
    console.log(sorted_array[median-1]+sorted_array[median]/2)

}
else{
    console.log(sorted_array[median])
}
// Find the average age(all items divided by number of items)
let count=0
for(let i=0;i<sorted_array.length;i++){
count+=sorted_array[i]
}
console.log(count)
let averageAge =count/(sorted_array.length)
console.log(averageAge)

// Find the range of the ages (max minus min)
let range=Math.max(...ages)-Math.min(...ages)
console.log(range)
// Compare the value of (min - average) and (max - average), use abs() method
let max=Math.max(...ages)
let min=Math.min(...ages)
console.log("max-avearage "+ Math.abs(max-averageAge))
console.log("min-avearage "+ Math.abs(min-averageAge))

// Slice the first ten countries from the countries array
console.log(countries.slice(0,10))
// Find the middle country(ies) in the countries array
let med= Math.floor(countries.length /2)
console.log(med)
console.log(countries.length)
if(med%2===0){
    console.log(`${countries[med-1]}, ${countries[med]}`)
}
else{
    console.log(countries[med])
}

// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.

// The following is an array of 10 students' ages:
 const agess = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
let sortedarray=agess.sort((a, b) => { return a - b })
console.log(sortedarray)
let maxage=(Math.max(...sortedarray))
console.log(maxage)//26
let minage=(Math.min(...sortedarray))
console.log(minage)//19
// Find the median age(one middle item or two middle items divided by two)
console.log(sortedarray.length)//10
let medagidex=Math.floor(sortedarray.length/2)
console.log(medagidex)
if(medagidex%2===0){
    console.log(`${sortedarray[medagidex-1]} ,${sortedarray[medagidex]}`)
}
else{
    console.log(sortedarray[medagidex])
}
// Find the average age(all items divided by number of items)
let count1=0
for(let i=0;i<sorted_array.length;i++){
count1+=sorted_array[i]
}
console.log(count1)
let averageAge1 =count1/(sorted_array.length)
console.log(averageAge1)
// Find the range of the ages (max minus min)
let range1=Math.max(...sorted_array)-Math.min(...sorted_array)
console.log(range1)
// Compare the value of (min - average) and (max - average), use abs() method
let max1=Math.max(...sorted_array)
let min1=Math.min(...sorted_array)
console.log("max-avearage "+ Math.abs(max1-averageAge1))
console.log("min-avearage "+ Math.abs(min1-averageAge1))
