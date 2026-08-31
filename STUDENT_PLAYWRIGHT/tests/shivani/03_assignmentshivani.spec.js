const { test, expect } = require("@playwright/test")

test("verify the selection of checkbox", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    await expect(page).toHaveTitle("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)")

    await expect(page.locator("h1")).toHaveText("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")

    await page.locator('input[value="option-1"]').check()
    await expect(page.locator('input[value="option-1"]')).toBeChecked()


    await page.locator('input[value="option-2"]').check()
    await expect(page.locator('input[value="option-2"]')).toBeChecked()

    await page.locator('input[value="option-3"]').check()
    await expect(page.locator('input[value="option-3"]')).toBeChecked()

    await page.locator('input[value="option-4"]').check()
    await expect(page.locator('input[value="option-4"]')).toBeChecked()


    
    await page.locator('input[value="option-1"]').uncheck()
    await expect(page.locator('input[value="option-1"]')).not.toBeChecked()

    await page.locator('input[value="option-2"]').uncheck()
    await expect(page.locator('input[value="option-2"]')).not.toBeChecked()

    await page.locator('input[value="option-3"]').uncheck()
    await expect(page.locator('input[value="option-3"]')).not.toBeChecked()

    await page.locator('input[value="option-4"]').uncheck()
    await expect(page.locator('input[value="option-4"]')).not.toBeChecked()

})



test("verify the iphone brand and storage capacity", async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

  await page.goto("https://www.amazon.in/s?k=iphone+17+pro&crid=3T1PKXSFJV4GU&sprefix=iphone%2Caps%2C378&ref=nb_sb_ss_mvt-t11-ranker_1_6")
await expect(page).toHaveTitle("Amazon.in : iphone 17 pro")
await expect(page.locator('[id="nav-logo"]')).toHaveText("Apple")


})  