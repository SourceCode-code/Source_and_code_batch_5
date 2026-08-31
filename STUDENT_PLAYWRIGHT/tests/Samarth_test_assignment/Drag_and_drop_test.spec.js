

const {test, expect} = require("@playwright/test")



test("verify drag and drop way 1", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()


    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/")

    await page.locator('[class="ui-widget-content ui-corner-tr ui-draggable ui-draggable-handle"]:nth-child(4)').hover()
    await page.mouse.down()

    await page.locator('[id = "trash"]').hover()
    await page.mouse.up()

    await expect(page.locator('[id = "trash"]')).toHavetext("Trash")


});