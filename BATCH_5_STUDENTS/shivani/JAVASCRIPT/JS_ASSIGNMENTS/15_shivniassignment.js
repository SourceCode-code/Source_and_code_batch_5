// Exercises1
//-------------------
// ASSIGNMENT DATA 
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
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
let skills_json = JSON.stringify(student, ["skills"])

console.log(skills_json) //{"skills":["HTML","CSS","JS","React","Node","Python"]}

//====================================================================================

//2 Stringify the age variable
let student_json = JSON.stringify(student, ["age"])

console.log(student_json) //{"age":250}

//====================================================================================

//3 Stringify the isMarried variable
let isMarried_json = JSON.stringify(student, ["isMarried"])
console.log(isMarried_json) //{"isMarried":true}

//====================================================================================


//4 Stringify the student object

let studentobj_json = JSON.stringify(student, ["firstName", "lastName", "age", "isMarried", "skills"])
console.log(studentobj_json) //{"firstName":"Asabeneh","lastName":"Yetayehe","age":250,"isMarried":true,"skills":["HTML","CSS","JS","React","Node","Python"]}

//====================================================================================

//1 Exercises Level 2
//-------------------

//2 Stringify the students object with only firstName, lastName and skills properties
let filter = {}
for (let key in student) {
    filter[key] = {
        firstName: student[key].firstName,
        lastName: student[key].lastName,
        skills: student[key].skills
    }
}

console.log(filter)

let data_2 = JSON.stringify(filter)

console.log(data_2)
/*{
 firstName: { firstName: undefined, lastName: undefined, skills: undefined },
 lastName: { firstName: undefined, lastName: undefined, skills: undefined },
 age: { firstName: undefined, lastName: undefined, skills: undefined },
 isMarried: { firstName: undefined, lastName: undefined, skills: undefined },
 skills: { firstName: undefined, lastName: undefined, skills: undefined }
}
 */
//OR ==>

let studentobj1_json = JSON.stringify(student, ["firstName", "lastName", "skills"])
console.log(studentobj1_json) //{"firstName":"Asabeneh","lastName":"Yetayehe","skills":["HTML","CSS","JS","React","Node","Python"]}

//====================================================================================


// Exercises Level 3
//-------------------

//1 Parse the txt JSON to object.
let object = JSON.parse(txt)
console.log(object)
//output===>
/*   
{
 Alex: {
   email: 'alex@alex.com',
   skills: [ 'HTML', 'CSS', 'JavaScript' ],
   age: 20,
   isLoggedIn: false,
   points: 30
 },
 Asab: {
   email: 'asab@asab.com',
   skills: [
     'HTML',
     'CSS',
     'JavaScript',
     'Redux',
     'MongoDB',
     'Express',
     'React',
     'Node'
   ],
   age: 25,
   isLoggedIn: false,
   points: 50
 },
 Brook: {
   email: 'daniel@daniel.com',
   skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux' ],
   age: 30,
   isLoggedIn: true,
   points: 50
 },
 Daniel: {
   email: 'daniel@alex.com',
   skills: [ 'HTML', 'CSS', 'JavaScript', 'Python' ],
   age: 20,
   isLoggedIn: false,
   points: 40
 },
 John: {
   email: 'john@john.com',
   skills: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js' ],
   age: 20,
   isLoggedIn: true,
   points: 50
 },
 Thomas: {
   email: 'thomas@thomas.com',
   skills: [ 'HTML', 'CSS', 'JavaScript', 'React' ],
   age: 20,
   isLoggedIn: false,
   points: 40
 },
 Paul: {
   email: 'paul@paul.com',
   skills: [
     'HTML',
     'CSS',
     'JavaScript',
     'MongoDB',
     'Express',
     'React',
     'Node'
   ],
   age: 20,
   isLoggedIn: false,
   points: 40
 }
}
*/

//====================================================================================

//2 Find the user who has many skills from the variable stored in txt.

let object1 = JSON.parse(txt)
console.log(object)


let filter_1 = {}
for (let key in object1) {
    filter_1[key] = {
        skills: object1[key].skills.length

    }
}

console.log(filter_1)

let data_3= JSON.stringify(filter)

console.log(data_3)

/*{
  Alex: { skills: 3 },
  Asab: { skills: 8 },
  Brook: { skills: 5 },
  Daniel: { skills: 4 },
  John: { skills: 6 },
  Thomas: { skills: 4 },
  Paul: { skills: 7 }
}
  */







/*

let data_3= JSON.stringify(filter)

console.log(data_3)
//{"firstName":{},"lastName":{},"age":{},"isMarried":{},"skills":{}}
*/