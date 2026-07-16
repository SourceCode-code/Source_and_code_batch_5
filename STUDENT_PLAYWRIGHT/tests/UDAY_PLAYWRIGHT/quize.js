

const num = [1,2,3,4,5];

const cubeArr = num.map((num) => {
    return num * num * num;
});
//console.log(num);
//console.log(cubeArr);

// Print number from 1 to 10 using for loop
for(let i=1; i<=10;i++){
    //console.log(i*3);
}

//Print even numbers from 1 to 10 using for loop
for (let i=2; i<=10; i+=2) {
    //console.log(i);
}

// Print odd numbers from 1 to 10 using for loop
 for(let i=1; i<=10; i+=2  ){
    //console.log(i)
 }

 // print array elements

 let arr=[1,2,3,4,5,6,7,8,9,10]

 for(let i=0; i<=arr.length; i++){
    //console.log(arr[i])
 }

 // give the cube of an array elements in new array

 let numArr=[1,2,3,4,5,6,7,8,9,10];

 for(let i=0; i<numArr.length; i++){
    let cube= numArr[i] * numArr[i]* numArr[i];
    //console.log(cube)
 }
// shorter version using map()

let nArr= [1,2,3,4,5]
let cube1= nArr.map(num => num * num * num)
//console.log(cube1)

// Print Sum of array numbers

let sum = 0;
for(let i=0; i<=10; i++){
    sum = sum + i;  
}
//console.log(sum)

//factorial number

let fact=1;

for(let i = 1; i <= 5; i ++){
    fact = fact * i;
}
//console.log(fact)

// Reverse the table of 2

for( let i=20; i>=2; i-=2){
    //console.log(i)
}

// Multiplication table

let num2=4;

for(let i=1;i<=10;i++){
    //console.log(num2 +"*"+i+"="+num2*i)
}

// Sum Array

let sumArr= [1,2,3,4,5];
let sum1=0;
for(let i=0; i<sumArr.length; i++){
     sum1= sum1+sumArr[i];
    
}
//console.log(sum1)

let str_1 = "1234.56"

// console.log(typeof str_1 )
// console.log(parseInt(str_1))
// console.log(typeof parseInt(str_1))

//let num_2 = 123456789

// console.log(typeof num_2)
// console.log(String( num_2))
// console.log(typeof String( num_2) )
// let n= num_2.toString;
// console.log(n)
//console.log("5"+5)  

let names_arr = ["sidddhant", "amol", "ruhsi", "shree", "vaibhav", 0, "tejas",2,1]

let numAr =[];
let uppernames=[];
for (let i = 0; i < names_arr.length; i++) {
    if (typeof names_arr[i] === "string") {
        uppernames.push(names_arr[i].toUpperCase())
    }else if(names_arr != "string"){
        numAr.push(names_arr[i]);
    }
}
// console.log(numAr)
// console.log(uppernames)

// multply 5 to every element and give output in new array

// let Array_num_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let add5_arr = Array_num_1.map((el, index, arr) => {
//     return  *  * el

// })


//console.log(add5_arr)
// Print numbers / names
let arr3 = ["Uday",10,"Rahul",20,"Amit",30];

let names = arr3.filter(item => typeof item === "number");

//console.log(names);

// Filter method Filter objects
let employees = [
    {name:"Uday", salary:50000},
    {name:"Rahul", salary:70000},
    {name:"Amit", salary:40000}
];

let highSalary = employees.filter(emp => emp.salary < 60000);

//console.log(highSalary);

// Loops in object

let objCar = {
  Brand:"BMW",
  MODEL_NAME:"M5",
  COLOR:["GREEN","RED","WHITE","BLACK"],
  ENGINE_WARRNTY:"3 years"
} 

for(let ele in objCar){
//console.log(`${ele} --> ${objCar[ele]}`)
}
let BMW_M5 = Object.assign({},objCar)

// console.log(BMW_M5)

// BMW_M5.ENGINE_WARRNTY =1
// console.log(BMW_M5)

// console.log(objCar)

// 1 write function to count the number vowels in a given string 


function count_Vowels(string) {
    let lower_string = string.toLowerCase()
    let vowel_string = "aeiou"
    let count = 0
    for (let i = 0; i < lower_string.length; i++) {
        if (vowel_string.includes(lower_string[i])) {
            count++
        }
    }
    //console.log(count)
}

count_Vowels("string")
//-------------------------------
count_Vowels("siddhant")
//--------------------------------
count_Vowels("vaibhav")

// write a function get me the largest and smallest element of an array based upon the parameter given
// function GET_ELEMENT([],max/min)


function GET_ELEMENT(array, neededvalue) {
    let min = Math.min(...array)
    let max = Math.max(...array)
    if (neededvalue.toLowerCase() === "min") {
        console.log(min)
    } else if (neededvalue.toLowerCase() === "max") {
        console.log(max)
    }
    else {
        console.log("check the entered paramter")
    }
}

GET_ELEMENT([0, 1, 2, 3,5, 555555], "min")
GET_ELEMENT([0, 1, 2,1, 5, 6, 5, 555555], "max")
GET_ELEMENT([0, 16, 1, 5, 6, 5, 555555], "")
