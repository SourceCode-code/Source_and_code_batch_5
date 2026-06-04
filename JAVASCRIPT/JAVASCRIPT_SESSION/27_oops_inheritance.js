// oops --> IOBJECT ORIENTED PROGRAMING STRUCURE

/**
 * INHERTIANCE
 * ABSATRACTION
 * ENCAPLSUATION
 * PLOYORPHISM
 */


// AS AUTOMATION TESTOR WE WILL BE USING THIS CONCEPTS FOR DESGIN OF OUR FRAMEWORK

//--------------------------------------------------------------------------------------------


// INHERTIANCE  --> 

/**
 * Inhertitance is JS allows one class to inherit property and method of other class is called Inheritance
 * 
 * 
 * // it promtes code resuability it create a hierarchical relational
 */

// EXAMPLES 

class Animal {

    constructor(name){
        this.name = name 
    }

    stand(){
        console.log(`${this.name} is standing`)
    }
}

let cow = new Animal("cow")

console.log(cow)
cow.stand()

// what is used of super keyword --> when you access property of a parent in  child class at that point you will syuper keyword 
class Dog extends Animal {
    constructor(name,breed){
       super(name)
        this.breed = breed
    }

    eat(){
        console.log(`${this.name} is eating the food `)
    }
}



let tom = new Dog("tommy","lab")
console.log(tom) //Dog { name: 'tommy', breed: 'lab' }
tom.eat()
tom.stand()


// now inertance give arise to two problems 

// overriding --> when child class updates the inherated method of parent calss that is called as overriding

class Parent {
    show(){
        console.log("i am a parent ")
    }
}


class child extends Parent{

    show(){
        console.log("i am child")
    }
}


let childern = new child()

childern.show()


// overloading--> when you define mutilpe methods or function in class with same name  but different parameter is 
// is called  overloading 


class Calculator {

    add(a,b,c){
        if(c!==undefined){
            return a+b+c
        }
          if(b!==undefined){
            return a+b
        }
        return a
    }
}

const cal = new Calculator()

console.log(cal.add(1))
console.log(cal.add(1,2))
console.log(cal.add(1,2,3))

// JS DOES NOT SUPPORT TRUE OVERLOADING 

// example of true overlaoding 


/*
class hello(){

sayhello (){
connsole.log("hello")
}

sayhello(name){
console.log(`${name} hello)
}

}

let h = new hello()

h.hello() // hello
h.hello("rohan") // rohan hello


*/


// if in porgarming for for user i can hide implemetion 

//--> abstarction