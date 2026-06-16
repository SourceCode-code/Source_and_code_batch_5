// PROMISES --> PROMISES ARE USED TO CONVERT YOUR ASYNC CODE INTO SYNC
// IT IS DERRIVED FORM HUMAN PROMISE -->()

// STATE OF PROMISES 

//FULFILLED --> SUCCESSFULLY COMPLETED (reslove)
//REJECTED  --> FAILED
//PENDING   --> WAITING 


// WHY TO LEARN PROMISES ?
// ITS A OPTIMSE TO WAY CONVERT ASYNC CODE IN TO SYNC 
// THE TOOL CALLED AS CYPRESS IS BULID ON PROMISES 

// SHOW ME AN EXAMPLE OF PROMISE

let pro = new Promise((reslove, reject) => {
    let successfull = true

    if (successfull === true) {
        reslove("the promise has been completed")
    }
    else {
        reject("the promsie has rejected")
    }
}).then((message) => {
    console.log(message)
}).catch((error) => {
    console.log(error)
})

//NOTE : -> for consumpition of promise we need 2 blocks 
// they are for success you will use .then()
// for rejected you will use .catch()

//NOTE :- .then() command is major used in cypress for consumption of promised 



// LETS SEE CONVERSION FOR ASYNC TO SYNC USING PROMISES --> 

//-----------------------------------------------

// function AccountCreation(user, ) {
//     setTimeout(() => {
//         console.log(`The ${user} has been created`)

//     }, 3000)

// }

// function Verify_details(user, callback) {
//     setTimeout(() => {
//         console.log(`The ${user} detials have been verifed`)
//         callback()
//     }, 5000)

// }

// function Get_data(user, callback) {
//     setTimeout(() => {
//         console.log(`The ${user} here is the data `)
//         callback()
//     }, 500)
// }

// function Start_user_acitivy(user, callback) {
//     setTimeout(() => {
//         console.log(`The ${user}  has posted content`)
//         callback()
//     }, 6000)
// }


function AccountCreation(user) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(`The ${user} has been created`)
            reslove(user)
        }, 3000)
    })
}


function Verify_details(user) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(`The ${user} detials have been verifed`)
            reslove(user)
        }, 5000)
    })

}

function Get_data(user, callback) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(`The ${user} here is the data `)
            reslove(user)
        }, 500)
    })
}


function Start_user_acitivy(user) {
    return new Promise((reslove) => {
        setTimeout(() => {
            console.log(`The ${user}  has posted content`)
            reslove(user)
        }, 6000)
    })
}


// EXAMPLE OF CALL BACK HELL EXCUETION

//     AccountCreation("sid", () => {
//     Verify_details("sid", () => {
//         Get_data("sid", () => {
//             Start_user_acitivy("sid", () => {
//                 console.log("successfull")
//             })
//         })
//     })
// })


// EXAMPLE OF PROMISE EXCEUTION

AccountCreation("SIDDHANT").then(Verify_details).then(Get_data).then(Start_user_acitivy).then((message) => {
    console.log("the promises example is successfull")
})


//ASYNC AND AWAIT ---> this is a modern way to convert async into sync
