const { test, expect, request } = require("@playwright/test")

test("verify login flow ", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill("admin123")
    await page.locator('[type="submit"]').click()
    await expect(page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText("Dashboard")

    // to save session storgae or cache 
    await page.context().storageState({ path: "./TestData/Cookies/User1.json" })
})

test("verify cookies injection ", async ({ browser }) => {
    let Context = await browser.newContext({ storageState: './TestData/Cookies/User1.json' }) //fresh broswer
    let page = await Context.newPage()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    await expect(page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText("Dashboard")
})

