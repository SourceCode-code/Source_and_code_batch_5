// Class --> Class is more than a object its a blueprint to get object and its method 

/**
 * synatx  of obejct  
 * 
 * let varaiable =  {
 * key : value
 * }
 * 
 * // class synatx 
 * 
 * class nameofclass {
 * 
 * 
 * 
 * }
 * 
 * 
 */

// how to create objects form class

class Details {
    constructor(fn, ln, ag) {
        this.fn = fn,
            this.ln = ln,
            this.ag = ag
    }
}

let user_1 = new Details("jhon", "doe", 34)

console.log(user_1)


// what if  a need a object where if i define parameter i get that object if i dont i get a fixed object 

class Employee {
    constructor(role = "user",
        access = "Read-Only",) {
        this.role = role,
            this.access = access
    }

}


let emp_01 = new Employee("ADMIN", "READ/WRITE")

console.log(emp_01)

let emp_02 = new Employee()// { role: 'ADMIN', access: 'READ/WRITE' }
console.log(emp_02) // { role: 'user', access: 'Read-Only' }


//every data type has propetry and method ion case object what is porperty --> key and value
// in case object you can create own method 
// that can be done with the help es6 class

// now any changes or upadtion in class template will affect its childern ( sub objects created from this class)
class personal_details {
    constructor(fn, mn, ln, age) {
        this.fn = fn,
            this.mn = mn,
            this.ln = ln,
            this.age = age
    }

    display_full_name() {
        let fullname = `${this.fn} ${this.mn} ${this.ln}`
        return fullname
    }

    Show_age() {
        console.log(this.age)
    }

}


let person_1 = new personal_details("siddhant", "arjun", "gadakh", 26)

console.log(person_1)
console.log(person_1.display_full_name())
person_1.Show_age()





// example 2 

class Student_details {

    constructor(fn, std, age, rank) {
        this.fn = fn
        this.std = std,
            this.age = age,
            this.rank = rank
    }

    get_Rank() {
        console.log(`${this.fn}   ${this.rank}`)
    }

}

let Student_1 = new Student_details("rohan", 8, 14, "B+")
console.log(Student_1)
Student_1.get_Rank()



// -------------------------------------------------------------

// setter and getter and static 

// set  --> if you set a property
// get  --> if you get a property


class details {
    constructor(fn, mn, ln, dob, age) {
        this.fn = fn,
            this.mn = mn,
            this.ln = ln,
            this.dob = dob,
            this.age = age
    }

get get_Age(){
    return this.age
}

set MODIFY_AGE(age){
    this.age=age
}

static show_date(){
    let date = new Date()
    let curDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  return curDate
}

}

let details_person1 = new details("sid","arjun","gadakh","1999",26)

console.log(details_person1)
console.log(details_person1.get_Age)
details_person1.MODIFY_AGE = 30
console.log(details_person1.get_Age)
// details_person1.show_date()


// array.length()
//Array.length


// Static --> when you create a method using static keyword it is applied directly to the class


console.log(details.show_date())


// array.push()  --> number , string , boolean , null , undefined 
 // object.method()
//details_person1.show_date()


// class.method()
//details.show_date()


// ----------------------------------------------------------------------------------------------

//oops --> oebject oriented programing structure (oops)


/**
 * interitance
 * abstraction
 * encapsulation
 * polymorphism
 */
