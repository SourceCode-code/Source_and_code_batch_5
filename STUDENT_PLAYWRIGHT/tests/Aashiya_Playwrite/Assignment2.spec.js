const { test, expect } = require("@playwright/test");

test("Submit the details",async ({browser})=> {
const context=await browser.newContext();
const page=await context.newPage();

await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
await expect(page.locator('[name="contactme"]')).toContainText('CONTACT US');

await page.locator('[name="first_name"]').fill('Aashiya');
await page.locator('[name="last_name"]').fill('Khan');
await page.locator('[name="email"]').fill('aashiya.d.khan@gmail.com');
await page.locator('[name="message"]').fill('commet for testing');
await page.locator('[value="SUBMIT"]').click();
await expect(page.locator('//*[@id="contact_reply"]/h1')).toContainText('Thank You for your Message!');


})