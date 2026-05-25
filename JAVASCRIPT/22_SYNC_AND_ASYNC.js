// SYNC 

// IN JS OUR CODE BY NATURE IS SYNCROUNUS IT WILL ALWAYS EXCUTE LINE BY LINE
console.log("hello")
console.log("world")
console.log("i am js program ")
console.log("by nature i am sync ")


// ASYNC --> CODE WHICH IS EASY TO COMPILE OR WHICH GETS COMPILE FIRST  IS SHOWN ON THE CONSOLE

// IN ASYNC ITS FIRST COME FIRST SERVCE --(ONE WHICH IS EASY COMPLIES FIRST)



/**
 * POSTING A IMAGE ON INSTAGRAM
 * 
 * //1 CREATION OF USER ACCOUNT 
 * //2 VERIFY DETAILS LIKE EMAIL OR OTP
 * //3 SUGGEST CONTNENT
 * //4 START USER ACITVITY 
 * 
 */

function AccountCreation(user,callback){
    setTimeout(()=>{
        console.log(`The ${user} has been created`)
    },3000)
}

function Verify_details(user,callback){
     setTimeout(()=>{
        console.log(`The ${user} detials have been verifed`)
    },5000)

}

function Get_data(user,callback){
     setTimeout(()=>{
        console.log(`The ${user} here is the data `)
    },500)
}

function Start_user_acitivy(user,callback){
     setTimeout(()=>{
        console.log(`The ${user}  has posted content`)
    },6000)
}

AccountCreation("sid")
Verify_details("sid")
Get_data("sid")
Start_user_acitivy("sid")


/**
The sid here is the data 
The sid has been created
The sid detials have been verifed
The sid  has posted content
 */


// AS A AUTOMATION ENGINEER/ DEVELOPER -- WHAT WOULD YOU PREFER ASYNC AND SYNC ?

//YOU PRIMARY OBJECTIVE MUST BE TO CONVERT YOUR ASYNC CODE IN SYNC 

// CONVERT TO ASYNC CODE TO SYNC 

// 1 CALLBACK HELL (OLD WAY)
// 2 PROMSIES ( CYPRESS IS BUILD ON PROMISES)
// 3 ASYNC AND AWAIT (PLAYWRIGHT BUILD ON ASYNC AND AWAIT)


// WHY DO WE NEED TO LEARN THIS SYNC AND ASYNC 

// BEACUSE TOOLS USE MODERN METHOD FOR ASYNC TO SYNC CONVERSION BUT 
// WHEN WRITE A COMPLEX FUNCTION OR A SCRIPT AT THAT TIME THE CONVERSION IS BROKEN 
// AT THAT PONIT YOU NEED TO HELP THE TOOL GET BACK TO SYNC 


// THIS TOPIC IS THE DIFFERECE BETWEEN A BEGINNER AND A MASTER



