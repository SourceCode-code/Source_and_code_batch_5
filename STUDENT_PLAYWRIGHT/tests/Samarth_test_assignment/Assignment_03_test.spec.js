const {test, expect} = require ('@playwright/test');




test("verify the page title", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.samsung.com/");
    await expect(page).toHaveTitle(/Samsung/i);
});


test("verify the the page title and url of the page", async ({browser})=> {
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.apple.com/in/");
    await expect(page).toHaveTitle(/Apple/i);
    await expect(page).toHaveURL("https://www.apple.com/in/");
});

