// Destructuring 

// Excarating the values from array or object and storing them into varaibles easily 


let arr = [10, 20]

// Traditional way 
let a = arr[0]
let b = arr[1]
console.log(a, b)


// NEW WAY 

let [x, y] = arr

// x= 10  y =20

console.log(x, y)


// BVASIC SYNTAX FOR ARRAY DESTRUTURE

let arr1 = [1, 2, 3]
let [c, d, e] = arr1

console.log(c, d, e)


// STRING ARRAY 
let names_arr = ["sidddhant", "amol", "ruhsi", "shree", "vaibhav", "tejas"]

let [s1, s2, s3, s4, s5, s6] = names_arr

console.log(s3)
console.log(s5)


// SKIPPING VALUES 
let [n1, , , , , n2] = names_arr

console.log(n1, n2)

//NESTED ARRAY 
let fullstack = [["HTML", "CSS", "JS", "REACT"], ["NODE", "EXPRESS", "MONGOODB"]]
// let [frontEnd,BackEND]=fullstack
// console.log(frontEnd,BackEND)

let [[f1, f2, f3, f4], [b1, b2, b3]] = fullstack
console.log(f1, b3)
// s1 = html
// s2=css



//let names_arr = ["sidddhant", "amol", "ruhsi", "shree", "vaibhav", "tejas"]

let [name1, name2, ...rest] = names_arr

console.log(name1, name2, rest)
//sidddhant amol [ 'ruhsi', 'shree', 'vaibhav', 'tejas' ]


// Object Desturcturing 
// why is object Destructing needed 
/**
 * API RESPONSE
 * REACT PROPS
 * AUTOMATION FRAMEWORKS
 */


let employee = {
    firstname: "Siddhant",
    LastName: "gadakh",
    age: 26,
    experince: "5+"
}

let employee2 = {
    firstname: "Sid",
    LastName: "gadakh",
    age: 26,
    experince: "5+"
}


// TRADITIONAL WAY

console.log(employee["firstname"])
console.log(employee.LastName)


// MODERN WAY TO DESTRUCTURE

let { firstname, LastName, age, experince } = employee

console.log(firstname)
console.log(LastName)
console.log(age)

// NOTE :- VARAIBLE NAME MUST MATCH THE KEY NAME

// let {firstname,LastName,age,experince}=employee2
// console.log(firstname)

// RENAMING VARIABLES

let { firstname: fn, LastName: ln, age: ag, experince: ex } = employee2

console.log(fn, ln, ag, ex)


//NESTED OBJECT DESTRUCTURING 

let user = {
    name: "user1",
    skills: ["JS", "HTML", "CSS"]
}

let { name: nm, skills: [skills1, skill2, skill3] } = user

console.log(nm)
console.log(skills1)
console.log(skill2)
console.log(skill3)


// API RESPONSE ---> 

let reponse = {
    status: 200,
    data: {
        username: "sid",
        email: "sid@dummy.com"
    }
}

let { status, data: { username: userid, email: user_email } } = reponse

console.log(user_email)
console.log(userid)


//SPREAD IN OBJECT 

let user1 = { name: "user_1" }

let updated_user1 = {
    ...user1,
    city: "pune"
}

console.log(updated_user1)



//... --> this most confusing keyword in js 

// SPREAD --> used to expand/ copy values 
// REST   -->used to collect remaining values 


// important basic question
// merge two array with using concat 

let arr4 = [1, 2, 3, 4]
let arr5 = [5, 6, 7, 8]

console.log([...arr4, ...arr5])


// swap the varaible value 

let temp1 = 10

let temp2 = 0


// let temp3 = temp1  // 10
// temp1 =temp2 // hello
// temp2 = temp3

// console.log("temp1"+temp1,"    "+"temp2"+temp2)

// using modern destruing swap this value without decalring any 3 varaibles


//XOR EXAMPLE

temp1 = temp1 ^ temp2
temp2 = temp1 ^ temp2
temp1 = temp1 ^ temp2

console.log(temp2)
console.log(temp1)