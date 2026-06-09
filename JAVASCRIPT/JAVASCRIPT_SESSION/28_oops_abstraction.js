// ABSTRACTION IN JS 


// simple real life example 

//press the start button and drive 

// you don't need to know :--

// how car is turn on 
// how is fuel inject 
// what is lean fuel ratio 
// how does pistol 
// how does car do its oil priming 
// how alernate 

// ABSTARCTIONS IS OOPS CONECPTS THAT HIDES UNNECCESSARY IMPLEMENTATAION AND EXPOSES ONLY ESSENTAIL FEATURES TO THE USER

// in simple words --> the user knows what an appilaction does , but doesnt need to know how it works , how it does it 


// why do use it 

//1 reduces the complexity 
//2 makes code easier to use 
//3 imporves maintainability       
//4 improve security 


// js doesnt not have a abstarction keyword like java and c#

// in js we can achieve avstraction using 
/**
 * 1 private feild
 *2 closures 
 *3 modules
 * 
 */


// private method/ keywords -->  is its denoted by # , the private method cannot be called outside the class 


// example of abstarction 

class car {

    #verifykeyoruser() {
        console.log("rider verifed")
    }

    #startEngine() {
        console.log("engine stared ")
    }

    drive() {
        this.#verifykeyoruser()
        this.#startEngine()
        console.log("car is ready to drive ")
    }



}

const bmw = new car()


bmw.drive()



// ASSIGNEMENT CREATE A UPI EXAMPLE FOR ABSTRACTION  //access to balance 









