//1. Declare a string variable `greeting` with the value "Hello World" and log its data type.
let greeting = "Hello World";
console.log(typeof greeting);

//2. Declare a number variable `price` with a value of 199.99, then use Math.ceil() to round it up to the nearest whole number and log the result.
let price = 199.99;
let roundedPrice = Math.ceil(price);
console.log(roundedPrice);

//3. Create a string `name` with your full name and log the length of the string using the `.length` property.
let name = "anurag Deshpande";
console.log(name.length);

//4. Write a program that concatenates three string variables `firstName`, `middleName`, and `lastName` using both the `+` operator and template literals, then log the full name.
let firstName = "anurag";
let middleName = "arvind";
let lastName = "Deshpande";
// Using + operator
let fullName1 = firstName + " " + middleName + " " + lastName;
console.log(fullName1);

// Using template literals
let fullName2 = '${firstName} ${middleName} ${lastName}';
console.log(fullName2);

//5. Given a string `language = 'JavaScript'`, log the character at the 4th index in the string.
let language = 'JavaScript';
console.log(language[4]);

//7. Create a long literal string that spans multiple lines and log it.
let longString = `Hi, my name is Anurag Deshpande.
i am a QA engineer with around 2+ years of experience,
currently working across 4 different projects in the banking, insurance, and investment domain.`;

console.log(longString);


//8. Write a program that uses escape characters to display the following:
//    I am learning JavaScript.
//    It's "fun" to learn JavaScript!
let escapeString = "I am learning JavaScript.\nIt's \"fun\" to learn JavaScript!";
console.log(escapeString);

//9. Write a program that declares a variable `amount = 45.85`, then uses `Math.floor()`, `Math.ceil()`, and `Math.round()` on this value and logs each result.
let amount = 45.85;
console.log(Math.floor(amount));
console.log(Math.ceil(amount));
console.log(Math.round(amount));

//10. Create a string `quote = "Learning JavaScript is awesome!"`. Use the `.length` property to find the length of the string and the index of the character 'J'.
let quote = "Learning JavaScript is awesome!";
console.log(quote.length);
console.log(quote.indexOf('J'));    

//12. Create a string variable `str = 'Hello, World!'` and use an escape character to insert a tab between the words "Hello," and "World!" and log the result.
let str = 'Hello,\tWorld!';
console.log(str);   

//13. Given two variables, `str1 = 'abc'` and `str2 = 'def'`, write a program to concatenate these two strings using both the `+` operator and template literals. Log both results.
let str1 = 'abc';
let str2 = 'def';

// Using + operator
let concatenated1 = str1 + str2;
console.log(concatenated1);

// Using template literals
let concatenated2 = `${str1}${str2}`;
console.log(concatenated2);

//14. Write a program to pick a random element from string "qwertyuiopasdfghjklzxcvbnm" and log the selected element.
let characters = "qwertyuiopasdfghjklzxcvbnm";
let randomIndex = Math.floor(Math.random() * characters.length);
let randomCharacter = characters[randomIndex];
console.log(randomCharacter);
