// ASYNC AND AWAIT --> this are used to convert async code into sync 
// ASYNC AND AWAIT are TWO KEYWORDS WHICH ARE USED IN PAIRS 
// THIS IS BASE ON WHICH PLAYWRIGHT IS BULID 

//----------------------------------------------------------------------

// SYNTAX OF ASYNC AND AWAIT 

// async function hello(){
//     return "hello"
// }

// async function sayhello(){
//     let word = await hello()
//     console.log(word)
// }

// sayhello()


// ------------------------------------------------------------------------------------

// CONVERSION  of async into sync 



async function AccountCreation(user) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(`The ${user} has been created`)
            reslove(user)
        }, 3000)
    })
}


async function Verify_details(user) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(`The ${user} detials have been verifed`)
            reslove(user)
        }, 5000)
    })

}

async function Get_data(user, callback) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(`The ${user} here is the data `)
            reslove(user)
        }, 500)
    })
}


async function Start_user_acitivy(user) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(`The ${user}  has posted content`)
            reslove(user)
        }, 6000)
    })
}



// PROBLEM IN PROMISES 
// AccountCreation("SIDDHANT").then(Verify_details).then(Get_data).then(Start_user_acitivy).then((message) => {
//     console.log("the promises example is successfull")
// })


async function POST_A_STORY_WITH_NEW_ACCOUNT() {
    // console.log("the process is started")
    // await AccountCreation("sid")
    // await Verify_details("sid")
    // await Get_data("sid")
    // await Start_user_acitivy("sid")
    // console.log("the process has been completed ")
}


POST_A_STORY_WITH_NEW_ACCOUNT()



//--> ASYNC/AWAIT it is acutally build on top of promises 
// BOTH THE THING WILL USE UNDERLYING SAME MECHANISM 


// promise() --> this will excute a single 
// promise.all() --> this will excute mutliple promise at same exture  but the output will only be given when everything is successfully
// promise.race()--> it will excute muilptle promsies at same time but give the output of who ever finished first
//promise.allSettled()--> it will excute muilptle promsies at same time and it will tell me what happened at every step


/**
 * const p1 = fetch("/users");
 * const p2 = fetch("/post")
 * const p3 = fetch("/comments")
 * 
 * 
 * promise.all([p1,p2,p3]).then([user,post,comments])=>{
 * console.log(user,post,comment)}

 * const [user , post, commments] = await promise.all([
 * fetch("/users")
 * fetch("/post")
 * fetch("/comments")
 * ])
 */


// -------------------------------------------------------------------------------------------------------------
//HOW IS ASYNC AND AWAIT USED IN REAL TIME IN PLAYWRIGHT 

// step 1 --> visit the website 
// SETP 2 ENETER DETAILS 
// STEP 3 CLICK ON LOGIN 
// STEP 4 -> VALIDATE SUCCESSFUL LOGIN 


//  example 


/**
 * 
 * test("describintion ", async function({page})=>{
 * 
 * await  visit the website
 * await ENETER DETAILS 
 * await CLICK ON LOGIN
 * await VALIDATE SUCCESSFUL LOGIN 
 * 
 * })
 */