const {test,expect} = require("@playwright/test")

test("to verify successfull filling of book gayatri travels Redbus", async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://tickets.paytm.com/bus/gayatri-travels-redbus")
    await expect(page).toHaveTitle("Book Gayatri Travels Redbus Bus Tickets Online, Check Time, Routes | Paytm")
})
  