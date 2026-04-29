

//Declare an empty array
let array_a =[]
console.log(array_a)


//Declare an array with more than 5 number of elements
let array_b =[25,35,45,55,65]
console.log(array_b)


//Find the length of your array
let array_ex = ["kalyani", "suraj", "sherkar",29]
console.log(array_ex.length)

//Get the first item, the middle item and the last item of the array

let array_c =[15,25,35,45,55]
let firstitem = [0]
let middleitem =[Math.floor(array_c.length/2)]
let lastitem =[array_c.length-1]
console.log(firstitem)
console.log(middleitem)
console.log(lastitem)

 //Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

 let mixedDataTypes =["kalyani",29,true,undefined,null,[1]]
 console.log(mixedDataTypes.length)

//Declare an array variable name it Companies and assign initial values , Google, Microsoft, Apple, IBM, Oracle and Amazon
let Companies =["facebook","google","microsoft","apple","ibm","oracle","amazon"]
console.log(Companies.length)

//Print the array using console.log()
let array_d =["kalyani"]
console.log(array_d)

// Print the number of companies in the array
let companies =["facebook","google","apple","ibm","oracle","amazon"]
console.log(companies)


//Print the first company, middle and last company
let array_e =["facebook","google","apple","ibm","oracle","amazon"]
console.log(array_e[0])
let middle_company =Math.floor(array_e.length/2)
console.log(array_e[middle_company])
let last_company
console.log(array_e[array_e.length-1])

//Print out each company
let Company =["facebook","google","microsoft","apple","ibm","oracle","amazon"]
for (let i = 0; i < Company.length; i++) {
  console.log(Company[i]);
}



//Change each company name to uppercase one by one and print them out
let system =["facebook","google","apple","ibm","oracle","amazon"]

for(let system of Company){
    console.log(Company.toUppercase())
}

// Sort the array using sort() method

let fruits_array = ["mango", "apple", "banana ", "watermelon", "chiku"]

console.log(fruits_array.sort())

// Reverse the array using reverse() method
let number_array =[45,76.37,25,67,100,65]
console.log(number_array.reverse())

// Slice out the first 3 companies from the array
let first_3 =companies.slice(0,3)
console.log(first_3)
let Companies =["facebook","google","microsoft","apple","ibm","oracle","amazon"]


// Remove the first IT company from the array
let Company =["facebook","google","microsoft","apple","ibm","oracle","amazon"]
console.log(Company.shift())
console.log(Company)


// Remove the last IT company from the array
let Company =["facebook","google","microsoft","apple","ibm","oracle","amazon"]
console.log(Company.pop())
console.log(Company)


// Remove all IT companies
let Company =["facebook","google","microsoft","apple","ibm","oracle","amazon"]
Company.splice(0,Company.length)
console.log(Company)