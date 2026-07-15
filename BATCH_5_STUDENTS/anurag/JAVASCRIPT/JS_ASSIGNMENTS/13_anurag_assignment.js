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

// 1. Find the person with the most skills.
console.log("1. The person with the most skills")
let maxSkills = 0
let personWithMaxSkills = ""

for (let user in users) {
  if (users[user].skills.length > maxSkills) {
    maxSkills = users[user].skills.length
    personWithMaxSkills = user
  } 
}
console.log(`The person with the most skills is ${personWithMaxSkills} with ${maxSkills} skills.`)


// 2. Count the number of users who are logged in.
console.log("2. Users logged in ")
let count = 0 
for (let key in users ){
  if (users[key].isLoggedIn === true){
    count++;
  }
}
console.log("the users who logged in are " + count)

// 3. Count the number of users with points greater than or equal to 50.
console.log("3. Users with points greater than or equal to 50 ")
let countPoints = 0 
for (let key in users) {
  if (users[key].points >= 50 ){
    countPoints++;
  }
}
console.log("the users with points greater than or equal to 50 are " + countPoints)
// 4. Identify the MERN stack developers in the users object.
console.log("4. MERN stack developers are ")
for (let key in users ){
  if (users[key].skills.length >= 7 && 
    users[key].skills.includes("MongoDB") && 
    users[key].skills.includes("Express") &&
    users[key].skills.includes("React") &&
    users[key].skills.includes("Node")){
      console.log(key)
    }
}
//'MongoDB', 'Express', 'React', 'Node'
// 5. Add your own details to the users object without modifying the original object.
console.log("adding my details to the users object ")
let newUser = {
  email: "anuragdeshpande.work@gmail.com",
  skills: ["HTML", "JavaScript", "Python", "Node" ],
  age: 30,
  isLoggedIn: true,
  points: 60,
}
users["Anurag"] = newUser
console.log(users)

// 6. Retrieve all keys (properties) in the users object.
console.log("Keys in the users object:")
console.log(Object.keys(users))

// 7. Retrieve all values in the users object.
console.log("Values in the users object:")
console.log(Object.values(users))