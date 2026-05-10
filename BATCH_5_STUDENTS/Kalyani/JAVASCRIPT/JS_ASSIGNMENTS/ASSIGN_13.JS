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


// 1. Find the person with the most skills

 // 2. Count the number of users who are logged in.
let count = 0;

for (let user in users) {
  if (users[user].isLoggedIn === true) {
    count++;
  }
}

console.log(count)

 // 3. Count the number of users with points greater than or equal to 50.

    let countnumber = 0;

for (let user in users) {
  if (users[user].points >= 50) {
    countnumber++;
  }
}

console.log(countnumber)




let mernDevelopers = [];

for (let user in users) {
  let skills = users[user].skills;

  if (
    skills.includes('MongoDB') &&
    skills.includes('Express') &&
    skills.includes('React') &&
    skills.includes('Node')
  ) {
    mernDevelopers.push(user);
  }
}
console.log(mernDevelopers)


 // 5. Add your own details to the users object without modioriginalfying the 
 let newUsers = {
  ...users,

  Kalyani: {
    age: 22,
    skills: ['HTML', 'CSS', 'JavaScript', 'Node']
  }
};


console.log(users); 




// Retrieve all keys
let keys = Object.keys(users);

console.log(keys);




// 7. Retrieve all values in the users object.
let values = Object.values(users);

console.log(values);


Question 2: Working with a Countries Object
 // Using a countries object, write a program that prints:
 // - Country name
 // - Capital city
 // - Population count
 // - Languages spoken

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
    console.log("Country");
    console.log("capital");
    console.log("population");
    console.log("languages");


}console.log(countries)