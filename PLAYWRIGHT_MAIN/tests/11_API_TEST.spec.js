// API ->APPLICATION PROGARMING INTERFACE

//WEB APPLICATION -> 
//FRONT END  -> WEBSITE UI THAT YOU SEE
//BACKEND -> THE ACTION THAT YOU GET AFTER GIVENING REACTION OT WEBPAGE 
//SERVER -> PLACED WHERE DATA IS STORED 


// TECHINCAL ROLES 

/**
 * FRONT END DEVELPER
 * BACKEND DEVELOPER 
 * DATA BASE -> DATA BASE ADMINISTOR 
 * DEVOPS ENGINNER 
 * TESTOR -> MANUUAL 
 * //API TESTOR -> API TEST
 * //AUTOMATION -> UI AUTOMATION AS WELL API AUTOMATION
 * 
 */


// API -> API IS THE COMMUNICATION LINK BETWEEN FRONT END AND THE SERVER

// example is hotel kitchen

/** 
 * 
 * in hotel 
 * 
 * 
 * customer who order a dish                                            as user you perform action on ui 
 * 
 * 
 * WAITER --> one who connect the customer and chef                      api will send the message to server 
 * 
 * 
 * chef makes the dish                                                  gets the correct response and send it back to user with api 
 * 
 * 
 * 
 * 
 * 
 */

// there 2 types of apis 

// 1 SOAP ->( THIS IS OLDER SERVICE) -> XML 
// 2 REST APIS -> THIS IS NEW GEN SERVICE -> JSON(98%)
// 3 PROGEST GRES ->
// 4 GARFQL ->


//SOAP -> SOAP UI 
//REST -> POSTMAN , SWAGER 

// REST SERIVESCES -> 
/**
 * GET  -> IT GETS ALL THE DATA/ INFORMATION
 * POST -> CREATE IT NEW INFORMATION (CREATING A NEW ACCOUNT)
 * PUT  -> UPDATE THE CREATED DATA  
 * UPDATE -> UPDATE THE CREATED DATA  
 * PATCH -> UPDATE THE CREATED DATA  
 * DELETE --> DELETE ALL THE DATA 
 */


// SOME TERMS :- 

// IF HAVE A SINGLE API TEST --> API REQUEST 
// IF YOU HAVE A MULTIPLE API TO TEST --> COLLECTION


//  SAMPLE OF XML DATA 

// <?xml version="1.0" encoding="UTF-8"?>

// <student>
//     <id>101</id>
//     <name>Rahul Sharma</name>
//     <age>20</age>
//     <course>Computer Science</course>
//     <email>rahul@example.com</email>
// </student>

//JSON

// {
//   "student": {
//     "id": 101,
//     "name": "Rahul Sharma",
//     "age": 20,
//     "course": "Computer Science",
//     "email": "rahul@example.com"
//   }
// }











// WHEN YOU WHEN WEBISTE --> WWW.YOUTUBE.COM --> URL -> UNIQUE RESOUCRES LOCTOTR 


//when a url is create it sub parts 


//every url will have this parts 

//BASE URL --> part that stays constant is called base url 


//1 query paramter  is always a question or it is indicated by a question mark 
// base url                             query parameter 
// https://www.youtube.com/            results?search_query=song


//2 path parameter 

// base url                                   path paramter 
// https://webdriveruniversity.com/    Contact-Us/contactus.html

// https://www.youtube.com/results?search_query=song



const { test, expect, request } = require("@playwright/test")


test("verify GET API", async ({ request }) => {

    let Req = await request.get("https://jsonplaceholder.typicode.com/posts")
    let response = await Req.json() // this will convert the recived respone in json
    // Asseration 
    // sataus code 
    // data 

    console.log(Req.status())  // 
    console.log(response)
    expect(Req.status()).toBe(200)
    expect(response[0].title).toEqual("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
})


// POST 


test("verify post ", async ({ request }) => {

    let req = await request.post("https://jsonplaceholder.typicode.com/posts", {
        data: [{
            "ID": "101",
            "title": "demo POST QUERTY",
            "body": "THIS IS DEMO API TO CREATE A POST DATA ",
            "REESUT TYPE ": "POST"
        },
        {
            "ID": "102",
            "title": "demo POST QUERTY",
            "body": "THIS IS DEMO API TO CREATE A POST DATA ",
            "REESUT TYPE ": "POST"
        }]
    })
    /**
     * 
     * await request.post('https://example.com/api/createBook', {
      data: {
        title: 'Book Title',
        author: 'John Doe',
      }
    });
     */
    let respone_post = await req.json()
    console.log(req.status())  // 
    console.log(respone_post)
    expect(req.status()).toBe(201)
    // expect(respone_post.title).toEqual("demo POST QUERTY")

})



// put   -
test("verify put ", async ({ request }) => {

    let req = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
        data: {
            "ID": "101",
            "title": "demo POST QUERTY",
            "body": "THIS IS DEMO API TO CREATE A POST DATA ",
            "number":"1234567"
        }
    })
  
    let respone_post = await req.json()
    console.log(req.status())  // 
    console.log(respone_post)
    expect(req.status()).toBe(200)
    expect(req.ok()).toBeTruthy() //200 -205
    expect(respone_post.number).toEqual("1234567")

})



// patch -

test("verify patch ", async ({ request }) => {

    let req = await request.patch("https://jsonplaceholder.typicode.com/posts/1", {
        data: {
            "title": "THis is patch request",
            "number":"1234567-8945"
        }
    })
  
    let respone_post = await req.json()
    console.log(req.status())  // 
    console.log(respone_post)
    expect(req.status()).toBe(200)
    expect(req.ok()).toBeTruthy() //200 -205
    expect(respone_post.number).toEqual("1234567-8945")
})













