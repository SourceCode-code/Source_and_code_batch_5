

const { test, expect, request } = require("@playwright/test")

//GET API 
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

//post API
test("verify POst api", async ({ request }) => {
    let Req = await request.post("https://jsonplaceholder.typicode.com/posts", {
        data: {
            "name": "shivani",
            "education": "BE CIVIL",
            "location": "latur"
        }

    })
    let response_post = await Req.json()
    console.log(response_post)
    console.log(Req.status())

    expect(Req.status()).toBe(201)
    expect(response_post.name).toEqual("shivani")
    expect(response_post.education).toEqual("BE CIVIL")
    expect(response_post.location).toEqual("latur")
})




//put API 
test("verify PUT api 1 ", async ({ request }) => {
    let Req = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
        data: {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },

    })
    let response_put = await Req.json()
    console.log(response_put)
    console.log(Req.status())

    expect(Req.status()).toBe(200)

    expect(response_put.userId).toBe(1)
    expect(response_put.id).toBe(1)
    expect(response_put.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    expect(response_put.body).toBe("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
})


//patch api
test("verify PATCH api", async ({ request }) => {
    let Req = await request.patch("https://jsonplaceholder.typicode.com/posts/1", {
        data: {
            "userId": 11,
            "id": 11,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }

    })
    let response = await Req.json()
    console.log(response)
    console.log(Req.status())

    expect(Req.status()).toBe(200)
    expect(response.userId).toBe(11)
    expect(response.id).toBe(11)
    expect(response.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    expect(response.body).toBe("quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto")
})
