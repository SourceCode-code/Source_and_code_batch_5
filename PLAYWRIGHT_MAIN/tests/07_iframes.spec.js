const { test, expect } = require("@playwright/test")

// IFRAME -> A WEBPAGE ADDED IN A WEBPAGE WITH THE TAG IFRAME IS EXAMPLE OF IFRAME
test("verify handling iframe ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto('https://letcode.in/frame')

    // await page.locator('[name="fname"]').fill("1234sdfg")
// to handle iframe in playwright we need to use method called framelocator()

let frame = await page.frameLocator('[id="firstFr"]')

await frame.locator('[name="fname"]').fill("1234sdfg")


})


test("iframe example 2 ",async({page})=>{
    await page.goto('https://webdriveruniversity.com/IFrame/index.html')
    
    let farme = await page.frameLocator('[id="frame"]')
await farme.locator('[href="../Contact-Us/contactus.html"]').click()
    await farme.locator('[name="first_name"]').fill("stfhjvwha")
})
