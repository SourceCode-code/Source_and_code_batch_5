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

let stringify_skills = JSON.stringify(skills);
console.log(stringify_skills);

//2 Stringify the age variable
let stringify_age = JSON.stringify(age);
console.log(stringify_age);

//3 Stringify the isMarried variable
let stringify_isMarried = JSON.stringify(isMarried);
console.log(stringify_isMarried);

//4 Stringify the student object
let stringify_student = JSON.stringify(student);
console.log(stringify_student);




//1 Exercises Level 2
//2 Stringify the students object with only firstName, lastName and skills properties
let stringify_student2 = JSON.stringify(student, ["firstName","lastName","skills"]);
console.log(stringify_student2);

// Exercises Level 3
//1 Parse the txt JSON to object.
let parsed_obj = JSON.parse(txt);
console.log(parsed_obj);

//2 Find the user who has many skills from the variable stored in txt.
let maxSkilledStrudent = null;
let skillCount = 0;

for (let key in parsed_obj) {
    if(parsed_obj[key].skills.length > skillCount){
        maxSkilledStrudent = key;
        skillCount = parsed_obj[key].skills.length
    }
}

console.log(maxSkilledStrudent)
console.log(skillCount)