const { test, expect } = require('@playwright/test');


test("verify the account creation on upgrad", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto("https://www.upgrad.com/");
    await page.locator('[class="min-w-71 h-full"]').click();
    await page.locator('[class="w-full text-left flex items-start relative"]').click();
    await page.locator('[placeholder="Phone Number"]').fill("8793929919");
    //await expect(page.locator('[placeholder="Phone Number"]')).toHaveValue("8793929919");
    //await page.locator('[data-testid="custom-button-continue"]').click();
    //await expect(page.locator('[class="spacing6 text-greyscale-main font-circular text-title1 font-medium text-left md:mb-spacing4 xs:mb-spacing6"]')).toHaveText("We've sent an OTP on");



    
});