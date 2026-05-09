// Exercises
// ASSIGNMENT DATA 


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
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']

//1 Change skills array to JSON using JSON.stringify()
let js=JSON.stringify(skills)
console.log(js)

//2 Stringify the age variable
let age = 250;
let jsage=JSON.stringify(age)
console.log(jsage)
//3 Stringify the isMarried variable
let isMarried = true
let jsmarried=JSON.stringify(isMarried)
console.log(jsmarried)
//4 Stringify the student object
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
let jsstudent =JSON.stringify(student)
console.log(jsstudent)
//1 Exercises Level 2
//2 Stringify the students object with only firstName, lastName and skills properties
let jsonStudent = JSON.stringify(student, ['firstName', 'lastName', 'skills']);

console.log(jsonStudent)

// Exercises Level 3
//1 Parse the txt JSON to object.
let txtpar=JSON.parse(txt)
console.log(txtpar)


//2 Find the user who has many skills from the variable stored in txt.
let objtxt=JSON.parse(txt)
let maxSkill=0
let person={}
for(let key in objtxt){
    let skillcount=objtxt[key].skills.length
    if(maxSkill<skillcount)
maxSkill=skillcount
    person=key
}
console.log(maxSkill)
console.log(person)