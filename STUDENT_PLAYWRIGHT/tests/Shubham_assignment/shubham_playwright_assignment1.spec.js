const { test, expect } = require("@playwright/test");


test("Login on Website", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");
   await page.locator('[name="username"]').fill("shubham_8975");
    await page.locator('[name="password"]').fill("Shubham@8975");
    await page.locator('.login .button').click();
    await expect(page).toHaveURL('/overview/');

})
    