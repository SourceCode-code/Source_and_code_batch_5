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
    // fill firstname
    //page.locator() method --> it is used to find element  
    //.fill() --> it is used to fill data in to inputbox
    await page.locator('[name="first_name"]').fill("ABCD")
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(page.locator('[name="first_name"]')).toHaveValue("ABCD")
    //
    await page.locator('//input[@name="last_name"]').fill("EFGH")
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(page.locator('//input[@name="last_name"]')).toHaveValue("EFGH")
    //
    await page.locator('[name="email"]').fill("EFGH@gmail.com")
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(page.locator('[name="email"]')).toHaveValue("EFGH@gmail.com")
   await page.locator('[name="message"]').fill("hello")
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(page.locator('[name="message"]')).toHaveValue("hello")

//check if button is enabled 
// .toBeEnabled() --> checks if the button is clickable
//.toBeDisabled() --> checks if button is not clickable
await expect(page.locator('input[type="submit"]')).toBeEnabled()

//.click --> used to click on elements 
await page.locator('input[type="submit"]').click()

// .toHaveText(same text ) --> check  same if hardcoded text is present
//.toContainText("half text") --> checks if text is present input is partical
// above both methods are case senstive 
await expect(page.locator("h1")).toHaveText("Thank You for your Message!")
await expect(page.locator("h1")).toContainText("Thank You")

})
