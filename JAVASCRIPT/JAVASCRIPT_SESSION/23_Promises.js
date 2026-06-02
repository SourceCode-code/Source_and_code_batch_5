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
