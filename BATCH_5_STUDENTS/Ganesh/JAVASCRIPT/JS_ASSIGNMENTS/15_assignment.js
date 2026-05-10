// Exercises
// ASSIGNMENT DATA
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
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
`;

// Exercises Level 1
//1 Change skills array to JSON using JSON.stringify()
console.log(`1---------------------------------------------`);
console.log(JSON.stringify(skills));

//2 Stringify the age variable
console.log(`2---------------------------------------------`);
console.log(JSON.stringify(age));

//3 Stringify the isMarried variable
console.log(`3---------------------------------------------`);
console.log(JSON.stringify(isMarried));

//4 Stringify the student object
console.log(`4---------------------------------------------`);
console.log(JSON.stringify(student, null, 2));

console.log(
  `-------------------------------------------------------------------`,
);
//1 Exercises Level 2
//2 Stringify the students object with only firstName, lastName and skills properties
console.log(`5---------------------------------------------`);
console.log(JSON.stringify(student, ["firstName", "lastName", "skills"]));

console.log(
  `-------------------------------------------------------------------`,
);
// Exercises Level 3
//1 Parse the txt JSON to object.
console.log(`6---------------------------------------------`);
const parsedData = JSON.parse(txt);
console.log(parsedData);

//2 Find the user who has many skills from the variable stored in txt.
let maxSkill = 0;
let maxSkilledPerson = "";

for (let obj in parsedData) {
  if (parsedData[obj].skills.length >= maxSkill) {
    maxSkill = parsedData[obj].skills.length;
    maxSkilledPerson = obj;
  }
}

console.log(maxSkilledPerson);
