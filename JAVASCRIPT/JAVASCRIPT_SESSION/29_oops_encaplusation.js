// ENCAPSULATION --> this is also a oops principle where data/properties are bundeled together inside a class and direct access
//to important data is restircetd 




// encapsulation = data +methods +controilled access 

// ATM BANK -->

// why encapsulation ?

// 1 controlled access 
// 2 protect the state of the class/object 
//3 better secuirty 
//4 imporve maintablity 


// example :- 

class Person{
#age;

constructor(name,age){
    this.name = name 
    this.#age = age
}

getDetails(){
    console.log(`${this.name} is ${this.#age}`)
}

#isAdult(){
    return this.#age>=18
}

canVote(){
    return this.#isAdult()?"he can vote":"he cannot vote"
}


}

let sid  = new Person("sid",26)

console.log(sid)

sid.name = "siddhant"

console.log(sid)

console.log(sid.canVote())

console.log(sid)


// EXAMPLE 2 --> 

class user{
#password
constructor(username,password){
    this.username = username,
    this.#password = password
}

validatelogin(inputpassword){
    return inputpassword ===this.#password ? "login is successfull ":"failed login enter correct password"
}

}


let user1 = new user("user1","user123")

console.log(user1)


console.log(user1.validatelogin("user123")) // success
console.log(user1.validatelogin("user_1")) // fail


// user1.#password = "hackedpassword"
// console.log(user1)




// ENCAPSULATION -> 
/**
 * 1 BUNDLES (GROUP) DATA AND METHOD TOGETHER
 * 2 FOCUSES ON PROTECTING DATA
 * 3 HOW CAN I PROTECT MY DATA
 * 
 */



//ABSTRACTION ->
/**
 * 1 HIDES IMPLEMENTION 
 * 2 HIDING COMPLEXITY 
 * 3 HOW CAN I HIDE UNECCASSRY DETAILS 
 * 
 */