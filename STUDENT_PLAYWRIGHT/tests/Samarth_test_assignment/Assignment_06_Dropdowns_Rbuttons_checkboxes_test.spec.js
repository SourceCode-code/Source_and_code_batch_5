const { test, expect } = require('@playwright/test');

test('verify selections of checkboxes', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
    await expect(page).toHaveTitle("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)")

    await expect(page.locator('h1')).toHaveText("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")
    await expect(page.locator('h1')).toContainText("Dropdown Menu(s)")

    await page.locator('[value="option-3"]').check()
    await expect(page.locator('[value="option-3"]')).toBeChecked()

    await page.locator('[value="option-1"]').check()
    await expect(page.locator('[value="option-1"]')).toBeChecked()

    await page.locator('[value="option-1"]').uncheck()
    await expect(page.locator('[value="option-1"]')).not.toBeChecked()

});

test("verify radio buttons to be selected ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')

    await expect(page.locator('h1')).toHaveText("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")
    await expect(page.locator('h1')).toContainText("Dropdown Menu(s)")

    await page.locator('[value="green"]').check()
    await expect(page.locator('[value="green"]')).toBeChecked()


    await page.locator('[value="orange"]').check()
    await expect(page.locator('[value="orange"]')).toBeChecked()

});














//DYNAMIC DROWPDOWNS
test("verify dynmaic dropdown", async ({ browser }) => {

    const Context = await browser.newContext()
    const page = await Context.newPage()



    await page.goto("https://www.amazon.in/")


    await page.locator('[id="twotabsearchtextbox"]').fill("iphone")
    //wait till list appear 
    await page.waitForSelector('[class="left-pane-results-container"]')


    let optionscount = await page.locator('[class="left-pane-results-container"] div').count()
    console.log(optionscount)

    for (let i = 0; i < optionscount; i++) {
        let text = await page.locator('[class="left-pane-results-container"] div').nth(i).textContent()
        console.log(text)
        if (text === "iphone 16")
            await page.locator('[class="left-pane-results-container"] div').nth(i).click()
        break
    }


await page.waitForTimeout(3000)
await expect(page.locator('[aria-owns="sac-suggestion-row-6-cell-1"]')).toHaveValue("iphone 16 pro 256gb");

});










    