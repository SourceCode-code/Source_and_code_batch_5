//

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
/*1 Change skills array to JSON using JSON.stringify()

let JSON_1 = JSON.stringify(skills)
console.log(JSON_1) */




/*2 Stringify the age variable

let JSON_2 = JSON.stringify(age)
console.log(JSON_2) */



/*3 Stringify the isMarried variable

let JSON_b = JSON.stringify(isMarried)
console.log(JSON_b) */


/*4 Stringify the student object

let JSON_3 = JSON.stringify(student)
console.log(JSON_3) */




//1 Exercises Level 2
/*2 Stringify the students object with only firstName, lastName and skills properties

let JSON_object = JSON.stringify(student,['firstName','lastName' ,'skills'] )
console.log(JSON_object) */



// Exercises Level 3
/*1 Parse the txt JSON to object.

let object_1 = JSON.parse(txt)
console.log(object_1)*/



/*2 Find the user who has many skills from the variable stored in txt.



const data = JSON.parse(txt);
let maxUser = '';
let maxSkills = 0;

for (const txt in data) {
  if (data[txt].skills.length > maxSkills) {
    maxSkills = data[txt].skills.length;
    maxUser = txt;
  }
}

console.log(maxUser)

*/