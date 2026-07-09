
const { test, expect }=require("@playwright/test")

test("Selection of checkboxes",async({browser})=>{

const context=await browser.newContext()
const page=await context.newPage()


await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

//verify page 

 await expect(page).toHaveTitle(/WebDriver \| Dropdown Menu\(s\) \| Checkboxe\(s\) \| Radio Button\(s\)/i)

const checkbox1= page.locator('//input[@value="option-1"]')
await checkbox1.check()
await expect(checkbox1).toBeChecked()

const checkbox2= page.locator('//input[@value="option-2"]')
await checkbox2.check()
await expect(checkbox2).toBeChecked()

const checkbox3= page.locator('//input[@value="option-3"]')
await checkbox3.check()
await expect(checkbox3).toBeChecked()

const checkbox4= page.locator('//input[@value="option-4"]')
await checkbox4.check()
await expect(checkbox4).toBeChecked()

})

test("Select Dropdown ",async({browser})=>{

const context=await browser.newContext()

const page=await context.newPage()

await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

await expect(page).toHaveTitle(/Dropdown menu/i)









})