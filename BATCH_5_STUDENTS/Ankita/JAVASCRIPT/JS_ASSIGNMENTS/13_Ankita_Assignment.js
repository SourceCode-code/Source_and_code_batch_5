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
let personName = ""
let skillCount = 0
for (let key in users) {
  let count = users[key].skills.length
  if (count > skillCount)
    skillCount = count
  personName = key
}
console.log(personName, skillCount)



// // 2. Count the number of users who are logged in.
let count = 0
for (let key in users) {
  if (users[key].isLoggedIn) {
    count++
  }
} console.log(count)

// // 3. Count the number of users with points greater than or equal to 50.
let count1 = 0
for (let key in users) {
  if (users[key].points >= 50) {
    count1++
  }
} console.log(count1)

// // 4. Identify the MERN stack developers in the users object.
// //'MongoDB', 'Express', 'React', 'Node' 
let mernStalk = []
for (let key in users) {
  let skills = users[key].skills
  if (skills.includes("MongoDB") && skills.includes("Express") && skills.includes("React") && skills.includes("Node")) {
    mernStalk.push(key)
  }
} console.log(mernStalk)



// // 5. Add your own details to the users object without modifying the original object.
const updatedUsers = { 
  ...users,
  Ankita: {
    email: "ankitafartade.work@gmail.com",
    skills: ["Cypress", "Playwright", "Python", "JavaScript"],
    age: 22,
    isLoggedIn:true,
    points: 76,
  }
}
console.log(updatedUsers)

// // 6. Retrieve all keys (properties) in the users object.
let allKey= Object.keys(users)
console.log(allKey)

// // 7. Retrieve all values in the users object.
let allValues= Object.values(users)
console.log(allValues)

// // Question 2: Working with a Countries Object

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
//2 get the the total population of both states

// // Using a countries object, write a program that prints:
// // - Country name
// // - Capital city
// // - Population count
// // - Languages spoken
for(let country in countries){
console.log("Country:", country)
console.log("Capital:", countries[country].capital)
console.log("Population:", countries[country].population)
console.log("Language:", countries[country].languages)
console.log('------------------------------------------------')

}