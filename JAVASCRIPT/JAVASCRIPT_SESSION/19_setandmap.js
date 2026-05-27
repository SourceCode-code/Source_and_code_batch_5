//SET AND  MAP in JS

// these are advance data structure introduced in es6 

// they are used to 
// store unique data 
// manage collections effienctly
// improve imporve


// SET -->

// ARRAY -->  it A COLLECTION MUILTPLE DATA TYPE WARPED []
// SET   --> is unique of values 
// it automatically remove duplicates 


// HOW TO CREATE SET -->

const set1 = new Set()
console.log(set1)             // Set(0) {}



//how to convert your array into set 

let arr = [1,1,2,3,4,5,6,7,8,9,1,1,1,1,1]

let set2 = new Set(arr)

console.log(set2) //  Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

// how to convert set back into array 

let arr2 = [...set2]
console.log(arr2)

let langarr = ["english","marathi","hindi","urdu","english","marathi","marathi"]

let set3 = new Set(langarr)

console.log(set3)

// NOTE :- SET DOES NOT SUPPORT INDEXING // console.log(set3[0])

// ------------------------------------------------------------------------------


//ADD ()

let company = new Set()

console.log(company)

company.add("google")
console.log(company)

//

company.add("google")
console.log(company)


// REMOVE --> 

company.delete("google")
console.log(company)


company.add("amazon")
console.log(company)


// HAS --> this is used to check value is present in the set or not 



console.log(company.has("Amazon"))

// SIZE --> this method retruns the size of set 

console.log(company.size)


// CLEAR() --> remove everything form size 

let set4 = company.clear()
console.log(set4)


// 2 IMPORANT METHOD ON SET 

//1 UNION OF SET

let arr5 = [1,2,3]
let arr6 = [3,4,5]

let union = new Set([...arr5,...arr6])
console.log(union)


//2 INTERSECTION OF SET --> 

//common point or common value between two or more type 

let sety= new Set(arr5)
let setx = new Set(arr6)

let inertsection = arr6.filter((el)=>sety.has(el))

console.log(new Set(inertsection))

// 3 Difference of set --> not common values 

let Difference = arr6.filter((el)=>sety.has(el))

console.log(new Set(Difference = arr6.filter((el)=>!sety.has(el))
))

// MAP --> a collection of uniquye values but value are in kay and value pair



