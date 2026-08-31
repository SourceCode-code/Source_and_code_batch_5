const { test, expect } = require('@playwright/test');

test("verify the account creation on flipkart", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.flipkart.com/", {
        timeout: 100000
    });

    await page.getByPlaceholder('Enter Email/Mobile number').click();
    await page.getByPlaceholder('Enter Email/Mobile number').fill("8793929919");

    await expect(page.getByPlaceholder('Enter Email/Mobile number')).toHaveValue("8793929919");





});


