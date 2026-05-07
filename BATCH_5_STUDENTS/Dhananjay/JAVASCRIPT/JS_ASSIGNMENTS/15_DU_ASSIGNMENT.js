// Exercises
// ASSIGNMENT DATA 
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`


// Exercises Level 1
//1 Change skills array to JSON using JSON.stringify()
//console.log(JSON.stringify(skills))

//2 Stringify the age variable
//console.log(JSON.stringify(age))

//3 Stringify the isMarried variable
//console.log(JSON.stringify(isMarried))


//4 Stringify the student object
//console.log(JSON.stringify(student))

//1 Exercises Level 2
//2 Stringify the students object with only firstName, lastName and skills properties
//Solution 1 
//console.log(JSON.stringify(student, ['firstName', 'lastName', 'skills']))
// Output '{"firstName":"Asabeneh","lastName":"Yetayehe","skills":["HTML","CSS","JS","React","Node","Python"]}'

//Solution 2

let filter_1 = {}

for (let key in student) {
    if (key === 'firstName' || key === 'lastName' || key === 'skills') {
        filter_1[key] = student[key]  // ✅ directly assign the value
    }
}

//console.log(filter_1)
// { firstName: 'Asabeneh', lastName: 'Yetayehe', skills: ['HTML','CSS','JS','React','Node','Python'] }

let finalOutput = JSON.stringify(filter_1, null, 2)
//console.log(finalOutput)
// {
//   "firstName": "Asabeneh",
//   "lastName": "Yetayehe",
//   "skills": ["HTML","CSS","JS","React","Node","Python"]
// }

// Exercises Level 3
//1 Parse the txt JSON to object.
console.log(JSON.parse(txt))

//2 Find the user who has many skills from the variable stored in txt.
let txt_Obj = JSON.parse(txt)
let min_skills = 0
let Many_skills = ''

for (let key in txt_Obj) {
    if (txt_Obj[key].skills.length > min_skills) {
        min_skills = txt_Obj[key].skills.length
        Many_skills = key
    }
}

console.log(`Many_skills: ${Many_skills} with ${min_skills} skills`)
// Many_skills: Asab with 8 skills