//Q1-ANS
let strTen = '10';
let numTen = 10;

console.log(typeof strTen)
console.log(typeof numTen)

console.log(typeof Number(strTen))

// Q2-ANS

let par = 9.8

console.log(typeof par )
console.log(parseFloat(par))
console.log(typeof parseFloat(par))

console.log(Math.round(par))

// Q3-ANS
let word1 = 'python';
let word2 = 'jargon';

console.log(word1.includes("on"))
console.log(word2.includes("on"))


//Q4-ANS

let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon"))

//Q5-ANS
let longSentence = 'You cannot end a sentence with because because because is a conjunction.';

let startIndex = longSentence.indexOf('because because because');
let task = longSentence.substr(startIndex, 'because because because'.length);
console.log(task);

//Q6-ANS
let firstName ="kalyani"
let lastname ="sherkar"
let country ="india"
let city ="tuljapur"
let age =29
let year =2020
let ismarried =true


console.log(typeof firstName)
console.log(typeof lastname)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof year)
console.log(typeof ismarried)

//Q7-ANS
let str_1 ='10'
console.log(typeof str_1 )
console.log(parseInt(str_1))
console.log(typeof parseInt(str_1))

//Q8-ANS

console.log(Boolean(1));
console.log(Boolean("Hello"));   
console.log(Boolean([]));    

//Q9-ANS

  


// Q10-ANS

console.log(4 > 3);   // true  
console.log(4 >= 3);  // true  
console.log(4 < 3);   // false
console.log(4 <= 3);  // false 
console.log(4 == 4);  // true 
console.log(4 === 4); // true  
console.log(4 != 4);  // false 
console.log(4 !== 4); // false
console.log(4 != '4');  // false 
console.log(4 == '4');  // true  
console.log(4 === '4'); // false 

// Q11-ANS

let word = 'python';
let worde = 'jargon';

let len1 = word.length; 
let len2 = worde.length; 

console.log(len1 !== len2); 

//