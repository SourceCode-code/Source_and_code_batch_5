
const { test, expect } = require("@playwright/test")
const { allowedNodeEnvironmentFlags } = require("node:process")


test("verify dynamic click", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://demoqa.com/buttons")

    await page.locator('[class="mt-4"] button').nth(1).click()

    await expect(page.locator('[id="dynamicClickMessage"]')).toHaveText("You have done a dynamic click")
    await expect(page.locator('[id="dynamicClickMessage"]')).toContainText("dynamic click")
})


test("verify double click",async({browser}) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://demoqa.com/buttons")
    await page.locator('[id="doubleClickBtn"]').dblclick()

    await expect(page.locator('[id="doubleClickMessage"]')).toHaveText("You have done a double click")
    await expect(page.locator('[id="doubleClickMessage"]')).toContainText("double click")

})

test("verify right click",async({browser})=>{
    const Context =await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://demoqa.com/buttons")
    await page.locator('[id="rightClickBtn"]').click({ button: 'right' })

    await expect(page.locator('[id="rightClickMessage"]')).toHaveText("You have done a right click")
    await expect(page.locator('[id="rightClickMessage"]')).toContainText("right click")
})
//ASSIGNMENT -->

//DRAG AND DROP --> https://demoqa.com/droppable
test("veryfy drage and drrop way=>1",async({browser})=>{
    const context =await browser.newContext()
    const page =await context.newPage()
    await page.goto("https://demoqa.com/droppable")
    await page.locator('[id="draggable"]').hover()
    await page.mouse.down() 
    await page.locator('[class="simple-drop-container"] [id="droppable"]').hover()
    await page.mouse.up()
    await expect(page.locator('[class="simple-drop-container"] [id="droppable"]')).toHaveText('Drop Here')
}
)

test("verify drage and drop way=>2",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://demoqa.com/droppable")
    let drageelement = await page.locator('[id="draggable"]')
    let dropableelement = await page.locator('[class="simple-drop-container"] [id="droppable"]')
    await drageelement.dragTo(dropableelement)
    await expect(page.locator('[class="simple-drop-container"] [id="droppable"]')).toHaveText('Drop Here')
})


//ALL --> https://www.webdriveruniversity.com/Actions/index.html

test("veryfy DRAGE and DROP way=>1",async({browser})=>{
    const context =await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.webdriveruniversity.com/Actions/index.html")
    await page.locator('[id="draggable"]').hover()
    await page.mouse.down()
    await page.locator('[id="droppable"]').hover()
    await page.mouse.up()
    await expect(page.locator('[id="droppable"] p')).toHaveText('Dropped!')
})

test("veryfy double click",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.webdriveruniversity.com/Actions/index.html")
    await page.locator('[ id="double-click"] h2').dblclick()
    await expect(page.locator('[ id="double-click"] h2')).toHaveText('Double Click Me!')

})


test("veryfy hover over me first",async({browser})=>{
    const context =await browser.newContext()
    const page =await context.newPage()
    await page.goto("https://www.webdriveruniversity.com/Actions/index.html")
    await page.locator('[ class="dropdown hover"] button').hover()
    await expect(page.locator('[ class="dropdown hover"] button')).toHaveText('Hover Over Me First!')
})

test("veryfy hover over me second",async({browser})=>{
    const context =await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.webdriveruniversity.com/Actions/index.html")
    await page.locator('[style="float:center;"] button').hover()
    await expect(page.locator('[style="float:center;"] button')).toHaveText('Hover Over Me Second!')
})


test("veryfy hover over me third",async({browser})=>{
    const context =await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.webdriveruniversity.com/Actions/index.html")
    await page.locator('[style="float:right;"] button').hover()
    await expect(page.locator('[style="float:right;"] button')).toHaveText('Hover Over Me Third!')
})


//===============================================================================


/**
 * DRAG AND DROP --> https://demoqa.com/droppable
 * ALL --> https://www.webdriveruniversity.com/Actions/index.html
 * clicks --> https://demoqa.com/buttons
 * 
 * 
 */