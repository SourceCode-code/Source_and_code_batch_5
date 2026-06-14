// // Assignment Questions on JavaScript Objects

// // Question 1: Skills and Points Analysis
// // Given the following users object:

let users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// // Tasks:
// // 1. Find the person with the most skills.

let maxSkill=0;
let maxskillPerson="";
for(let user in users){
if (maxSkill<users[user].skills.length){
maxskillPerson=user
maxSkill=users[user].skills.length
//console.log(`Persone with more Skill ${maxSkill}`)

}
}
console.log(`Persone with more Skill ${maxskillPerson}`)
// // 2. Count the number of users who are logged in.

loggedInUserCount=0;
for(let user in users){
if(users[user].isLoggedIn){

  loggedInUserCount++;

}

}

console.log(`Users LoggedIn: ${loggedInUserCount}`);

// // 3. Count the number of users with points greater than or equal to 50.
let usersWith50Points =Object.values(users).filter(user =>user.points>=50).length

console.log(`Users usersWith50Points: ${usersWith50Points }`);



// // 4. Identify the MERN stack developers in the users object.
// //'MongoDB', 'Express', 'React', 'Node'
let mernSkills = ['MongoDB', 'Express', 'React', 'Node'];

let mernDeveloper=Object.entries(users).filter(([name,user])=>mernSkills.every(skill=>user.skills.includes(skill))).map(([name])=>name);
console.log(`Users MernSkill Developer: ${mernDeveloper }`);

// // 5. Add your own details to the users object without modifying the original object.

let updatedUser={...users,  Shubham: {
    email: "shubham@gmail.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node"],
    age: 25,
    isLoggedIn: false,
    points: 60
  }}
console.log("Users Updated user detail:", updatedUser);

// // 6. Retrieve all keys (properties) in the users object.
console.log("All Keys :"+Object.keys(users));
// // 7. Retrieve all values in the users object.
console.log("Users user detail:", Object.values(users));

// // Question 2: Working with a Countries Object
// // Using a countries object, write a program   that prints:
// // - Country name
// // - Capital city
// // - Population count
// // - Languages spoken

const countries = {
  Japan: {
    capital: "Tokyo",
    population: 125.7, // in millions
    languages: ["Japanese"],
  },
  Germany: {
    capital: "Berlin",
    population: 83.2,
    languages: ["German"],
  },
  India: {
    capital: "New Delhi",
    population: 1393, // in millions
    languages: ["Hindi", "English", "Various regional languages"],
  },
  Canada: {
    capital: "Ottawa",
    population: 38,
    languages: ["English", "French"],
  },
  Brazil: {
    capital: "Brasília",
    population: 213,
    languages: ["Portuguese"],
  },
};


for(let contry in countries){
console.log(`Contry Name : ${contry} Capital city ${countries[contry].capital} Population count ${countries[contry].population}Languages spoken :${countries[contry].languages}`)}

//5 form given data
let data = {
  Data: {
    Country: "India",
    States: [
      {
        Name: "Maharashtra",
        Population: "128256452",
      },
      {
        Name: "Gujarat",
        Population: "731000000",
      },
    ],
  },
};
// 1 check if maharastra is presnt
let isPresent = false;

for (let state of data.Data.States) {
  if (state.Name === "Maharashtra") {
    isPresent = true;
    break;
  }
}

console.log("maharastra is presnt :"+isPresent);

//2 get the the total population of both states
for (let state of data.Data.States) {
  console.log(`State name : ${state.Name } Population : ${state.Population}`);
}