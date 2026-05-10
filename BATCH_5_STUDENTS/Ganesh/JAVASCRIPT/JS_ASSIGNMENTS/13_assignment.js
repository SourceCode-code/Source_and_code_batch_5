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
console.log(`---------------------------------------------`);
// // Tasks:
// // 1. Find the person with the most skills.
let tempLength = 0;
let maxSkilledPerson;
for(obj in users){
    if(users[obj]["skills"].length >=tempLength){
        tempLength = users[obj]["skills"].length
        maxSkilledPerson = Object.assign({},users[obj])
        maxSkilledPerson.name = obj
    }
}
console.log(`Person with the most skills is ${maxSkilledPerson.name}`);
//console.log(maxSkilledPerson);

console.log(`---------------------------------------------`);

// // 2. Count the number of users who are logged in.
let count = 0;
for(obj in users){
    if (users[obj]["isLoggedIn"]){
        count++
    }
}
console.log(`Number of users who are logged in : ${count}`);

console.log(`---------------------------------------------`);
// // 3. Count the number of users with points greater than or equal to 50.
count = 0;
for(let obj in users){
    if(users[obj]["points"] >=50){
        count++
    }
}
console.log(`Number of users with points greater than or equal to 50 : ${count}`);

console.log(`---------------------------------------------`);
// // 4. Identify the MERN stack developers in the users object.
// //'MongoDB', 'Express', 'React', 'Node'
let mernStackDevelopers = [];
let skills = ["MongoDB", "Express", "React", "Node"];
//solution 1
for (let obj in users) {
  if (
    users[obj]["skills"].includes(skills[0]) &&
    users[obj]["skills"].includes(skills[1]) &&
    users[obj]["skills"].includes(skills[2]) &&
    users[obj]["skills"].includes(skills[3])
  ) {
    mernStackDevelopers.push(obj);
  }
}
console.log(`solution 1 |${mernStackDevelopers} are the MERN stack developers`);

//solution 2
mernStackDevelopers = [];
for (let obj in users) {
  if (skills.every((sk, ind, arr) => users[obj]["skills"].includes(sk))) {
    mernStackDevelopers.push(obj);
  }
}
console.log(`solution 2 |${mernStackDevelopers} are the MERN stack developers`);

console.log(`---------------------------------------------`);
// // 5. Add your own details to the users object without modifying the original object.
let modifiedUsers = Object.assign({},users);
modifiedUsers.Ganesh = {
    email: "ganesh@gmail.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",,
      "Node",
    "git"
    ],
    age: 29,
    isLoggedIn: true,
    points: 99,
  }

  console.log(modifiedUsers);
console.log(`---------------------------------------------`);

// // 6. Retrieve all keys (properties) in the users object.
console.log(`All keys : ${Object.keys(modifiedUsers)}`);
console.log(`---------------------------------------------`);

// // 7. Retrieve all values in the users object.
let values=[];
for(let ob in modifiedUsers){
    values.push(Object.values(modifiedUsers[ob]))
}
console.log(`All values are : ${values}`);
console.log(`--------------------------------------------------------------------------------------`);
// // Question 2: Working with a Countries Object

// // Using a countries object, write a program that prints:
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


for (let obj in countries) {
  console.log(
    `Country Name: ${obj} | capital: ${countries[obj]["capital"]} | population: ${countries[obj]["population"]} | languages: ${countries[obj]["languages"]}`,
  );
}
console.log(`---------------------------------------------`);


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
let isMaharastraPresent = data.Data.States.some((ob)=>ob["Name"]==="Maharashtra");
console.log(`Maharashtra is present in given object : ${isMaharastraPresent}`);
console.log(`---------------------------------------------`);

//2 get the the total population of both states
data.Data.States.forEach((el)=>console.log(`State : ${el.Name} | Population : ${el.Population}`));