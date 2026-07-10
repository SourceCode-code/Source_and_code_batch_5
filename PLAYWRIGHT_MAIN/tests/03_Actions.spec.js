const { test, expect } = require("@playwright/test")


test("verify dynamic click", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://demoqa.com/buttons")

    await page.locator('[class="mt-4"] button').nth(1).click()

    await expect(page.locator('[id="dynamicClickMessage"]')).toHaveText("You have done a dynamic click")
    await expect(page.locator('[id="dynamicClickMessage"]')).toContainText("dynamic click")
})


test("verify double click", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://demoqa.com/buttons")

    await page.locator('[id="doubleClickBtn"]').dblclick()

    await expect(page.locator('[id="doubleClickMessage"]')).toHaveText("You have done a double click")
    await expect(page.locator('[id="doubleClickMessage"]')).toContainText("a double click")
})

test("verify right click", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://demoqa.com/buttons")

    await page.locator('[id="rightClickBtn"]').click({ button: "right" })

    await expect(page.locator('[id="rightClickMessage"]')).toHaveText("You have done a right click")
    await expect(page.locator('[id="rightClickMessage"]')).toContainText(" a right click")
})



test("verify hover ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://www.webdriveruniversity.com/Actions/index.html")

    await page.locator('[class="dropdown hover"]').hover()

    await expect(page.locator('[class="dropdown hover"] a')).toHaveText('Link 1')


})

test("verify click and hold ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://www.webdriveruniversity.com/Actions/index.html")
    await page.locator('[id="click-box"]').hover()
    // to hold click 
    await page.mouse.down()
    await expect(page.locator('[id="click-box"]')).toHaveText('Well done! keep holding that click now.....')
    await page.mouse.up()
    await expect(page.locator('[id="click-box"]')).toHaveText('Dont release me!!!')
})


test("verify Drag and drop way 1 ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

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



test("verify Drag and drop way 2 ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://www.webdriveruniversity.com/Actions/index.html")
    let dargelement = await page.locator('[id="draggable"]')
    let dropableelement = await page.locator('[id="droppable"]')

    await dargelement.dragTo(dropableelement)
    await expect(page.locator('[id="droppable"] p')).toHaveText('Dropped!')
})

test("verify keyboard actions ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://gotranscript.com/text-compare")
    await page.locator('[name="text1"]').fill("hello my name is siddhant")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    // await page.locator('[name="text2"]').click()
    await page.keyboard.press("Tab")
    await page.keyboard.press("Control+V")
    await expect(page.locator('[name="text2"]')).toHaveValue("hello my name is siddhant")
})


//ASSIGNMENT --> 

/**
 * DRAG AND DROP --> https://demoqa.com/droppable
 * ALL --> https://www.webdriveruniversity.com/Actions/index.html
 * clicks --> https://demoqa.com/buttons
 * 
 * 
 */