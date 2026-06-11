// polymorphism --> is the oops principle where the same method or interfaces bheaves differently depending on the object that calls 

//poly --> many 

//morph --> forms 

class Animal{
    speak(){
        console.log("animal makes a sound ")
    }

}

class Dog extends Animal{

speak(){
    console.log("dog Barks")
}
}

class cat extends Animal{

    speak (){
        console.log("cat meows")
    }
}



const ani = new Animal()
ani.speak()
const tom = new Dog()
tom.speak()
const jerry = new cat()
jerry.speak()



// runtime polymorphsim (method overriding )


// method overloading 


class calci {
    add(a,b,c){
        if(c!==undefined){
            return a+b+c
        }
        return a+b
    }
}

const add1 = new calci()

console.log(add1.add(1,2))
console.log(add1.add(1,2,3))



//------------------------------------------------------------------------------------//
/**

 concept             meaning
Inheritance         Reuse code form parent
abstarction         hide the implementaion
encaplusion         controlled acces by budling data 
polymorphism        same method , different  behavior

*/

// closure 
// recrusion 
//hosting 