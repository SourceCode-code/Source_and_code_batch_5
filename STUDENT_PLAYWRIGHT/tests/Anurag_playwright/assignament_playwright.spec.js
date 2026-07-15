const {test, expect} = require("@playwright/test")

test("verify the valid login", async ({browser}) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto("https://www.saucedemo.com/")
    await expect(page).toHaveTitle("Swag Labs")

    await page.locator('[id="user-name"]').fill("standard_user")
    await page.locator('[id="password"]').fill("secret_sauce")
    await page.locator('[id="login-button"]').click()
    await expect(page).toHaveTitle("Swag Labs")
    await expect(page.locator('span[class="title"]')).toHaveText("Products")
})