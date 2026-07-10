const { test, expect } = require("@playwright/test")

test("verify modal pop up ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto('https://webdriveruniversity.com/Popup-Alerts/index.html')
    await page.locator('[data-target="#myModal"]').click()
    await expect(page.locator('[class="modal-title"]')).toContainText("It’s that Easy!!")
    await page.locator('//button[@class="btn btn-default"]').click()
})


test("verify JS -Alert pop up ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto('https://webdriveruniversity.com/Popup-Alerts/index.html')
    await page.locator('[id="button1"]').click()

    page.on("dialog", async (simplealert) => {
        await simplealert.message()

        await expect(simplealert.message()).toContain("I am an alert box!")
        await simplealert.accept()
        // await.simplealert.reject()
        console.log(simplealert.message())
    }) // this method will act as a listner  so i havent used it as await

})


