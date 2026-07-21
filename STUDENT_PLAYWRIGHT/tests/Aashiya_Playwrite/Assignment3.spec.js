const { test, expect } = require("@playwright/test")

test("selecting 3 checkboxes and deselecting the 3rd checkbox", async ({ browser }) => {

    const context = await browser.newContext()
    const page = await context.newPage()


    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")

    //verify page 

    await expect(page).toHaveTitle(
        "WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)"
    );
    await expect(page.locator('[value="option-3"]')).toBeChecked()//checking wether 3rd checkbox is by default selected

    await page.locator('[value="option-3"]').click()//unchecking the radio button
    await expect(page.locator('[value="option-3"]')).not.toBeChecked()//checking wethre the button is unchecked
    await page.locator('[value="option-1"]').check()
    await expect(page.locator('[value="option-1"]')).toBeChecked()

await page.locator('[value="option-2"]').click()
await expect(page.locator('[value="option-2"]')).toBeChecked()

await page.locator('[value="option-4"]').click()
await expect(page.locator('[value="option-4"]')).toBeChecked()








})