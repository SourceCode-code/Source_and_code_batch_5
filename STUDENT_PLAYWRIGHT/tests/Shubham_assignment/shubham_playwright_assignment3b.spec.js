
//Dynamic Dropdown 

const{test,expect}=require("@playwright/test")
test("Radio Button",async({browser})=>{

const context=await browser.newContext()
const page =await context.newPage()

await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

await expect(page).toHaveTitle(/Practice page/i)

await page.locator('//input[@value="radio2"]').check()

await expect(page.locator('//input[@value="radio2"]')).toBeChecked()


})
test("Dynamic Dropdown",async({browser})=>{

const context=await browser.newContext()
const page =await context.newPage()

await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

await expect(page).toHaveTitle(/Practice page/i)

await page.locator('//input[@id="autocomplete"]').fill("ind")
await page.waitForSelector('//ul[@id="ui-id-1"]')

let suggetion_count=await page.locator('//ul[@id="ui-id-1"]//div').count()

for(let i=0;i<suggetion_count;i++){

let text=await page.locator('//ul[@id="ui-id-1"]//div').nth(i).textContent()
if (text==="India"){

 await page.locator('//ul[@id="ui-id-1"]//div').nth(i).click();
break

}

}


})

test("select Dropdown",async({browser})=>{

const context=await browser.newContext()
const page =await context.newPage()

await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

await expect(page).toHaveTitle(/Practice page/i)

await page.locator('//select[@id="dropdown-class-example"]').selectOption('Option1')

await expect( page.locator('//select[@id="dropdown-class-example"]')).toHaveValue(/Option1/i)


})

test("checkbox",async({browser})=>{

const context=await browser.newContext()
const page =await context.newPage()

await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

await expect(page).toHaveTitle(/Practice page/i)

await page.locator('//input[@id="checkBoxOption1"]').check()

await expect( page.locator('//input[@id="checkBoxOption1"]')).toBeChecked()


})