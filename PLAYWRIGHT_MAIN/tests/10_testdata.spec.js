const { test, expect } = require("@playwright/test")
const data = require("../TestData/TestData/form.json")
const data2 = require("../TestData/TestData/MultiTestdata.json")

/**
 * JSON 
 * OBJECT --> 
 * 
 * 
data = {
  "Page_title": "WebDriver | Contact Us",
  "section_header": "CONTACT US",
  "firstName": "user 100",
  "lastName": " data 1000",
  "email": "userdata123@gmail.com",
  "comment": "hello this is demo of testdata ",
  "success_message": "Thank You for your Message!"
}

data.Page.title

 
 */



test("verify successfull filling of the contact us form ", async ({ browser }) => {
  const Context = await browser.newContext() // this open a browser with fresh context 
  const page = await Context.newPage() // this will open a new page 

  //command to visit webite page.goto()
  await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
  // asseration to verify title of the page 
  await expect(page).toHaveTitle(data.Page_title)
  // fill firstname
  //page.locator() method --> it is used to find element  
  //.fill() --> it is used to fill data in to inputbox
  await page.locator('[name="first_name"]').fill(data.firstName)
  //.toHaveValue() --> to verify the temp value filled in input value
  await expect(page.locator('[name="first_name"]')).toHaveValue(data.firstName)
  await page.locator('//input[@name="last_name"]').fill(data.lastName)
  //.toHaveValue() --> to verify the temp value filled in input value
  await expect(page.locator('//input[@name="last_name"]')).toHaveValue(data.lastName)
  await page.locator('[name="email"]').fill(data.email)
  //.toHaveValue() --> to verify the temp value filled in input value
  await expect(page.locator('[name="email"]')).toHaveValue(data.email)
  await page.locator('[name="message"]').fill(data.comment)
  //.toHaveValue() --> to verify the temp value filled in input value
  await expect(page.locator('[name="message"]')).toHaveValue(data.comment)
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



data2.Testdata.forEach((el) => {

  test(`${el.index}`, async ({ browser }) => {
    const Context = await browser.newContext() // this open a browser with fresh context 
    const page = await Context.newPage() // this will open a new page 

    //command to visit webite page.goto()
    await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html")
    // asseration to verify title of the page 
    await expect(page).toHaveTitle(el.Page_title)
    // fill firstname
    //page.locator() method --> it is used to find element  
    //.fill() --> it is used to fill data in to inputbox
    await page.locator('[name="first_name"]').fill(el.firstName)
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(page.locator('[name="first_name"]')).toHaveValue(el.firstName)
    await page.locator('//input[@name="last_name"]').fill(el.lastName)
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(page.locator('//input[@name="last_name"]')).toHaveValue(el.lastName)
    await page.locator('[name="email"]').fill(el.email)
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(page.locator('[name="email"]')).toHaveValue(el.email)
    await page.locator('[name="message"]').fill(el.comment)
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(page.locator('[name="message"]')).toHaveValue(el.comment)
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



})