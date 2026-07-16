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
let maxskills=0
let person =""
for(let key in users){
let skillcount=users[key].skills.length
if(skillcount>maxskills){
maxskills=skillcount
person=key
}
}
console.log(person)
console.log(maxskills)

// // 2. Count the number of users who are logged in.
let count=0
for(let key in users){
    if(users[key].isLoggedIn===true){
        count++

    }
}
console.log(count)
// // 3. Count the number of users with points greater than or equal to 50.
let numberOfUsers=0
for(let key in users){
    if(users[key].points>=50){
        numberOfUsers++
       console.log(key)//printing name of users
    }
}
console.log(numberOfUsers)

// // 4. Identify the MERN stack developers in the users object.
// //'MongoDB', 'Express', 'React', 'Node'
for (let key in users) {

    let skills = users[key].skills;

    if (
        skills.includes("MongoDB") &&
        skills.includes("Express") &&
        skills.includes("React") &&
        skills.includes("Node")
    ) {
        console.log(key)
    }
}


// // 5. Add your own details to the users object without modifying the original object.
let user2 = Object.assign({},users) //crating copy of user in user2
console.log(user2)
user2.Aashiya=
{
    email: "aashiya@gmail.com",
    skills: ["Java", "Katalon", "Tosca"],
    age: 31,
    isLoggedIn: true,
    points: 60
}

console.log(user2)


// // 6. Retrieve all keys (properties) in the users object.
let allkeys=Object.keys(users)
console.log(allkeys)
// // 7. Retrieve all values in the users object.
let allValues=Object.values(users)
console.log(allValues)



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
// // Question 2: Working with a Countries Object
// // Using a countries object, write a program that prints:
// // - Country name
// // - Capital city
// // - Population count
// // - Languages spoken
for(let key in countries){
    console.log(`${key},${countries[key].capital} ,${countries[key].population},${countries[key].languages}`)
}



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
let isMaharashtraPresent = false;

for (let i = 0; i < data.Data.States.length; i++) {

    if (data.Data.States[i].Name === "Maharashtra") {

        isMaharashtraPresent = true;

        console.log("Maharashtra is Present");
    }
}
//2 get the the total population of both states
let initialPopulation =0
for(let i=0;i<data.Data.States.length;i++){
initialPopulation+=Number(data.Data.States[i].Population)
}
console.log("total populatio "+initialPopulation)