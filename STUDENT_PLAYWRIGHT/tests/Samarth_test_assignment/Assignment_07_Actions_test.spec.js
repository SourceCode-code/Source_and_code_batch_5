const { test, expect } = require("@playwright/test")

test("verify the double click", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://demoqa.com/buttons")

    await page.locator('[id="doubleClickBtn"]').dblclick()

    await expect(page.locator('[id="doubleClickMessage"]')).toHaveText("You have done a double click")
    await expect(page.locator('[id="doubleClickMessage"]')).toContainText("done a double")



});


test("verify the right click", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://demoqa.com/buttons")

    await page.locator('[id="rightClickBtn"]').click({ button: 'right' })

    await expect(page.locator('[id="rightClickMessage"]')).toHaveText("You have done a right click")
    await expect(page.locator('[id="rightClickMessage"]')).toContainText("a right click")

});


test("verify the hover", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    await page.locator('[id="mousehover"]').hover()
    await expect(page.locator('[id="mousehover"]')).toHaveText("Mouse Hover")

});





test("verify drag and drop way 1", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.webdriveruniversity.com/Actions/index.html")
    await page.locator('[id="draggable"]').hover()
    // to hold click 
    await page.mouse.down()

    //hover on dropable 
    await page.locator('[id="droppable"]').hover()

    // lift up the click
    await page.mouse.up()
    await expect(page.locator('[id="droppable"] p')).toHaveText('Dropped!')
})



test("verify drag aand drop way 1", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()


    await page.goto("https://www.globalsqa.com/demo-site/draganddrop/")

    await page.locator('[src = "images/high_tatras2_min.jpg"]').hover()
    await page.mouse.down()

    await page.locator('[id = "trash"]').hover()
    await page.mouse.up()

    await expect(page.locator('[id = "trash"]')).toHavetext("Trash")


});