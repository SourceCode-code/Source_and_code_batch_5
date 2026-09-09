// hybird testcases -> the mixture of api + ui is called hybrid 

// every time i will have to write the login code again again 

//solution -> 
//beforeALL -> hookes ->
// the ui flow can be broken due any ui issues. 

// we will skip the login using api 


// when you login --> userid and password -> server will  verify  your details --> it will send token --> this token is consumed by browser and 
// local storage -- this will log you in 

// basic auth 
// auth 2.0
// google 2.0 

const { test, expect, request } = require("@playwright/test")
let token  // undefined

test.beforeAll(async () => {
    let api = await request.newContext() // fresh browser
    let req_login = await api.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: { userEmail: "john2k19wick@gmail.com", userPassword: "vaibhavS@95" } })

    expect(req_login.ok()).toBeTruthy() // check if successfull
    const login_response = await req_login.json() // response will be converted into json

     token = login_response.token // token value is updatwe
})


test("verify dashboard text", async ({ page }) => {

    page.addInitScript(value => {
        // on window to local storgage and set a item
        window.localStorage.setItem("token", value)
    }, token) 

    await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash')
    await page.waitForTimeout(5000)
    await expect(page.locator('[class="left mt-1"] p')).toContainText("Automation Practice")

})