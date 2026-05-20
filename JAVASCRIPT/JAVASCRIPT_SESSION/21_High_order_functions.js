//HIGH ORDER FUNCTIONS --> High order functions are the functions which takes other function as a paremeter or retrun type 

// FUNCTIONS --> function is container which is used to store your code to make it dynamic and reusable 

// 1 callback function --> callback function are function which takes other function as input parameter


//Example 

// first function 

const callback = (n)=>{
    return n**2
}


console.log(callback(2))

// callback or second function 

function get_cube(callback,n){
    return callback(n)*n
}

console.log(get_cube(callback,2)) //8



// create a callback function for assignment

function completing_assignemnt(){
    console.log("i am completed my assignemnt")
}


function notdone(){
    console.log("............not done")
}


function rasing_pr(callback){
     
    console.log("rasied the pr for assginemnt");
   callback()
}


rasing_pr(completing_assignemnt)


rasing_pr(notdone)

// Returning Function -->  function which retrun another function are called returing function ()

//example 


const first=(n)=>{
    const second=(m)=>{
        const thrid =(l)=>{
            return n+m+l
        }
       return thrid 
    }
    return second
}


console.log(first(1)(2)(3))


// NOTE :- this two high order order function are a bit outdate

// 1 setInterval() --> to take the output of the function at a certain interval
// 2 setTimeout() --> to dealy the output of function by a certain time is called setTimeout 

//SYNC -- ASYNC 