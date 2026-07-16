
//Dynamic Dropdown 

const{test,expect}=require("@playwright/test")

test("verify checkbox",async({browser})=>{

const context=await browser.newContext()
const page =await context.newPage()

await page.goto("https://www.amazon.in/")

await expect(page).toHaveTitle(/Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in/i)

await page.locator('[class="nav-search-field "] [class="nav-input nav-progressive-attribute"]').fill("iphone 17 pro")
await page.locator('[id="nav-search-submit-button"]').click()

await (page.locator('//span[text()="Apple"]/preceding-sibling::div//i')).check()
//css selector :a[aria-label*='Apple'] >div i
await expect(page.locator('//span[text()="Apple"]/preceding-sibling::div//i')).toBeChecked()


})
