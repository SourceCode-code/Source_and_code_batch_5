const {test , expect} = require ('@playwright/test');

test ('verify the page title', async ({page}) => {
    await page.goto("https://www.youtube.com/");
    await expect(page).toHaveTitle(/YouTube/i);
});



test ('verify the page title and url of the page', async ({page}) => {
    await page.goto("https://www.youtube.com/");
    await expect(page).toHaveTitle(/YouTube/i);
    await expect(page).toHaveURL("https://www.youtube.com/");
});



test ("verify the page title1", async ({browser}) => {
   const context = await browser.newContext();
   const page = await context.newPage();

   await page.goto("https://www.samsung.com/");
   await expect (page).toHaveTitle("Samsung");
});