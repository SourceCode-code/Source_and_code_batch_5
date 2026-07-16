const {test,expect} = require("@playwright/test")

test("verify successfully facebook login page", async ({ browser }) => {
const context = await browser.newcontext()
const page = await browser.newpage()

await page.goto("https://www.facebook.com/login/")
await expect(page).tohavetitle("<title>Facebook</title>")

})