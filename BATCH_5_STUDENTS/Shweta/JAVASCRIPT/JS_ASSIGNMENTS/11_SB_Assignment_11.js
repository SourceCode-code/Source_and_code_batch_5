//


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

/* Declare an empty array

let emptyArray = [];

console.log(emptyArray); 




// Declare an array with more than 5 number of elements


let flowers = ["Lotus" , "Rose", "Chameli" , "Mogara" ," Sunflower"];

console.log(flowers) 


// Find the length of your array

let flowers = ["Lotus" , "Rose", "Chameli" , "Mogara" ," Sunflower"];

console.log(flowers.length)


o/p =5 


// Get the first item, the middle item and the last item of the array

let flowers = ["Lotus" , "Rose", "Chameli" , "Mogara" ," Sunflower"];

const first = flowers[0]

const middle = flowers[Math.floor(flowers.length/ 2)];
const last = flowers[flowers.length - 1];

console.log(first , middle , last)

o/p = Lotus Chameli  Sunflower 


// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mix_array = [6, 3, 9, ["sayali"], ["jaya"], "million", [true, false]]

console.log(mix_array.flat().length)

o/p = size of the array = 8 */






/* Declare an array variable name it Companies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

console.log(companies);






// Print the array using console.log()

console.log(companies.length) */


/* Print the number of companies in the array

console.log(companies.length) 

o/p = 7 */




/* Print the first company, middle and last company

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

const firstCompanies = companies[0]

const middleCompanies = companies[Math.floor(companies.length / 2)]

const lastCompanies =companies[companies.length - 1]

console.log(firstCompanies , middleCompanies , lastCompanies)

o/p = Facebook Apple Amazon 



// Print out each company

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

companies.forEach(company => {

    console.log(company
}) 


// Change each company name to uppercase one by one and print them out

const Company = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

Company.forEach(company =>
  
console.log(company.toUpperCase()))





// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.


const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(companies.join(" , ") + " are big IT copanies ")

o/p = Facebook , Google , Microsoft , Apple , IBM , Oracle , Amazon are big IT copanies 







// Check if a certain company exists in the itCompanies array. If it exists return the company else return 'Company is not found'

const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

let find = "Google"

if(companies.includes(find)) {
  console.log(find);
}else{console.log("companies not found");
}

o/p = Google */




/* Filter out companies which have more than one 'o' without using the filter method

const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];


const result = [];

for (let company of companies){

    let count = 

    company.toLowerCase().split('o').length -1 ;

 if (count > 1 ){

    result.push(company);
        }
      }

    console.log(result);



    o/p = [ 'Facebook', 'Google', 'Microsoft' ]  */




/* Sort the array using sort() method

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

console.log(companies.sort())




// Reverse the array using reverse() method

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];


console.log(companies.reverse())




// Slice out the first 3 companies from the array

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

console.log(companies.slice(0 , 3 ));




// Slice out the last 3 companies from the array

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

console.log(companies.slice(-3))




// Slice out the middle IT company or companies from the array

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

let mid = Math.floor(companies.length / 2);
console.log(companies[mid]) ;





// Remove the first IT company from the array

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

companies.shift()

console.log(companies)

*/


/* Remove the middle IT company or companies from the array

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

let midIndex = Math.floor(companies.length / 2);
companies.splice(midIndex , 1);

console.log(companies);


*/



/* Remove the last IT company from the array

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

companies.pop();

console.log(companies)




// Remove all IT companies

const companies = ["Facebook" , "Google" , "Microsoft" , "Apple" , "IBM" , "Oracle" , "Amazon"];

companies.length = 0

console.log(companies)





// Exercise: Level 2

// First remove all the punctuations and change the string to an array and count the number of words in the array:
// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length)
// ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
// 13



 let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

 let cleaned = text.replace(/[ . ,] /g , "");
 let words = cleaned.split(" ");

 console.log(words)

console.log(words.length)



*/




// In the following shopping cart add, remove, edit items:
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of your shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
/* modify 'Tea' to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.unshift("Meat")

console.log(shoppingCart)

//2

shoppingCart.push("sugar")

console.log(shoppingCart) 


//3

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']


let arrSplice =shoppingCart.splice(0, 3)


console.log(arrSplice) 


//4

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

 const teaIndex = shoppingCart.indexOf('Tea');
 if(teaIndex !== -1){
  shoppingCart[teaIndex] = 'Green Tea' ; 
 }

console.log(shoppingCart)


*/






/* In countries array check if 'Ethiopia' exists in the array, if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries = ["India", "USA", "Brazil", "China"];

if (country.includes("Ethiopia")) {

      console.log("ETHIOPIA");
} else{

 country.push("Ethiopia");

}
 console.log(countries);

*/







/* In the webTechs array check if 'Sass' exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist, add Sass to the array and print the array.

// Concatenate the following two variables and store it in a fullStack variable:
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// console.log(fullStack)
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]


 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

 const backEnd = ['Node', 'Express', 'MongoDB']

 const fullStack = frontEnd.concat(backEnd)

console.log(fullStack) */



/* Exercise: Level 3

// The following is an array of 10 students' ages:
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages (max minus min)
// Compare the value of (min - average) and (max - average), use abs() method
// Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array
// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.

//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const sortedAges = ages.sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];
console.log(sortedAges);
console.log("Max:", minAge);



if (sortedAges.length % 2 === 0) {
  const mid1 = sortedAges[sortedAges.length / 2 - 1];
  const mid2 = sortedAges[sortedAges.length / 2];
  median = (mid1 + mid2) / 2;
}else{
  median = sortedAges[Math.floor(sortedAges.length / 2)];

}
console.log("Median:", median);



const sum = ages.reduce((acc, val) => acc + val, 0);
const average = sum / ages.length;
console.log("Average:", average);

const range = maxAge - minAge;
console.log("Range:", range);


const minDiff = Math.abs(minAge - average);
const maxDiff = Math.abs(maxAge - average);
console.log("Min - Avg (abs):", minDiff);
console.log("Max - Avg (abs):", maxDiff); 



const firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);


let middle;

if (countries.length % 2 === 0) {
  middle = [
    countries[countries.length / 2 - 1],
    countries[countries.length / 2]
  ];
} else {
  middle = countries[Math.floor(countries.length / 2)]

console.log("Middle country(s):", middle);

}

const midIndex = Math.ceil(countries.length / 2);

const firstHalf = countries.slice(0, midIndex);
const secondHalf = countries.slice(midIndex);

console.log("First half:", firstHalf);
console.log("Second half:", secondHalf) */





// The following is an array of 10 students' ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages (max minus min)
/* Compare the value of (min - average) and (max - average), use abs() method


 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

 const sortedAges = ages.sort((a ,b) => a - b)
console.log("Sorted",ages)


let min = ages[0]
let max = ages[ages.length-1]
console.log("Min" , min)
console.log("Max" , max) 

 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
 const sortedAges = ages.sort((a ,b) => a - b)

const median = (sortedAges[4] + sortedAges[5]) / 2;

console.log("Median",median)


const sum = ages.reduce((a, b) => a + b, 0);
const average = sum / ages.length;
console.log("Average",average)

 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let min = ages[0]
let max = ages[ages.length-1]

const range = max - min;
console.log("Range",range)

const minDiff = Math.abs(min - average);
const maxDiff = Math.abs(max - average);
console.log("Min - Avg", minDiff)
console.log("Min - Avg", minDiff)
console.log("Min - Avg", maxDiff) */



/* Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array
// Divide the countries array into two equal arrays. If the countries array is not even, add one more country to the first half.


const countries_10= countries.slice(0, 10);
console.log(countries_10);


let middle1;

if (countries.length % 2 === 0) {
  middle1 = [
    countries[countries.length / 2 - 1],
    countries[countries.length / 2]
  ];
} else {
  middle1 = countries[Math.floor(countries.length / 2)];
}

console.log("Middle1 country(ies):", middle1);


const midIndex1 = Math.ceil(countries.length / 2);

const firstHalf1 = countries.slice(0, midIndex1);
const secondHalf1 = countries.slice(midIndex1);

console.log("First half1:", firstHalf1);
console.log("Second half1:", secondHalf1); */