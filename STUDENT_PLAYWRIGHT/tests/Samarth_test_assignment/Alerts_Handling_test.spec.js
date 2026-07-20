const { test, expect } = require("@playwright/test")

test("verify modal pop up", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto('https://webdriveruniversity.com/Popup-Alerts/index.html')
    await page.locator('[data-target="#myModal"]').click()

    await expect(page.locator('[class="modal-title"]')).toContainText("It’s  that Easy!! Well I think it is.....")
  
    await page.locator('[class="btn btn-default"]').click()
})