// JSON --> JAVASCRIPT OBJECT NOTATAION

// WHY WAS JSON MADE OR WHAT ARE THE USE CASES
//JSON MAKES THE DATA MORE MANAGEABLE IT MAKES DATA MORE UNDERSTANDABLE

//WHAT ARE MAIN USECASES OF 
// JSON IS USED TO STORE TESTDATA FOR AUTOMATION
// JSON IS USED TO SEND THE DATA FORM CLIENT SIDE TO SERVER SIDE AND VICE VERSA (  REST-API DATA/RESPONSE IS GIVEN IN JSON )

// JSON IS NEW GEN ALERNAITVE TO XML 

//XML -->
//xml example
/***
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book category="fiction">
    <title lang="en">The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <year>1925</year>
    <price currency="USD">15.00</price>
  </book>
  <book category="non-fiction">
    <title lang="en">Sapiens</title>
    <author>Yuval Noah Harari</author>
    <year>2011</year>
    <price currency="USD">22.50</price>
  </book>
</bookstore>
 *
 */


// JSON EXAMPLE 
/**

 * {
  "bookstore": {
    "book": [
      {
        "category": "fiction",
        "title": {
          "lang": "en",
          "text": "The Great Gatsby"
        },
        "author": "F. Scott Fitzgerald",
        "year": 1925,
        "price": {
          "currency": "USD",
          "text": 15.00
        }
      },
      {
        "category": "non-fiction",
        "title": {
          "lang": "en",
          "text": "Sapiens"
        },
        "author": "Yuval Noah Harari",
        "year": 2011,
        "price": {
          "currency": "USD",
          "text": 22.50
        }
      }
    ]
  }
}

 */


// COMPARE EXAMPLE OF OBJECT AND JSON


/**
 * JSON
 * 
 * {
  "Brand":"BMW",
  "MODEL_NAME":"M5",
  "COLOR":["GREEN","RED","WHITE","BLACK"],
  "ENGINE_WARRNTY":"3 years"
} 


OBJECTS ---

{
  Brand:"BMW",
  MODEL_NAME:"M5",
  COLOR:["GREEN","RED","WHITE","BLACK"],
  ENGINE_WARRNTY:"3 years"
} 

 * 
 * 
 */



let data = {
    "Brand": "BMW",
    "MODEL_NAME": "M5",
    "COLOR": ["GREEN", "RED", "WHITE", "BLACK"],
    "ENGINE_WARRNTY": "3 years"
}


//-----------------------------------------------------------------------------------------------------------------------------

//  CONVERSION OF JSON IN OBJECT AND VICE VERSA

// PARSE() --> THIS METHOD IS USED TO CONVERT YOUR JSON DATA INTO JS OBJECTS 

let car = `{
  "Brand":"BMW",
  "MODEL_NAME":"M5",
  "COLOR":["GREEN","RED","WHITE","BLACK"],
  "ENGINE_WARRNTY":"3 years"
} `

let object_1 = JSON.parse(car)
console.log(object_1)


// STRINGIFY()--> THIS METHOD IS USED TO CONVERT OBJECT TO JSON 


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


let JSON_EXAMPLE = JSON.stringify(users)
// console.log(JSON_EXAMPLE)



//EXAMPLE  CONVERT THE USER DATA TO JSON BUT ONLY KEEP THE FOLLOWING FEILDS 



let Selective_data = JSON.stringify(users["Alex"])
let Selective_data_1 = JSON.stringify(users["John"])
console.log(Selective_data)
console.log(Selective_data_1)




//EXAMPLE  CONVERT THE USER DATA TO JSON BUT ONLY KEEP THE FOLLOWING FEILDS 
// EMAIL , AGE ,IS LOGIN


// first get the data and convert it into a single object




let filter = {}

for (let key in users) {
    filter[key] = {
        email: users[key].email,
        age: users[key].age
    }
}


console.log(filter)

let data_2 = JSON.stringify(filter)

console.log(data_2)



// --------------------------------------

// example 3 


let Paul = {
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
}


let paul_json = JSON.stringify(Paul, ["email", "isLoggedIn"])

console.log(paul_json)
/**
 * {"email":"paul@paul.com","isLoggedIn":false}
 */