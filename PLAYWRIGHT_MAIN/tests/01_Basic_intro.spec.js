const { test, expect } = require("@playwright/test")
//This line is used to import all the smart suggestion for test steps and asseration 


// ACTION/COMMAND        -->THE ACTION PERFOMED BY THE USER
// ASSEARTION/VALIDATION -->TO VERIFY THE EXPECTED OUTPUT OF THE ACTION

// TESTCASE  --> SINGLE TEST (Step by step instruction to get intended result)
// TESTSUITE --> COMBINATION OF SIMILAR TESTCASE (Test suits are collection of test cases)

// verify successfull filling of the contact us form 

// browser              -->
// browser context      -->state of opening of browser( fresh context / already added context)
// page                 -->opening of a new tab 

test("verify successfull filling of the contact us form ", async ({ browser }) => {
    const Context = await browser.newContext() // this open a browser with fresh context 
    const page = await Context.newPage() // this will open a new page 


    //command to visit webite page.goto()
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    // asseration to verify title of the page 
    await expect(page).toHaveTitle("WebDriver | Contact Us")
    

})
