const { test, expect } = require("@playwright/test");

test("Test Blank form Submit",async ({browser})=> {
const context=await browser.newContext();
const page=await context.newPage();

await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");

await expect(page.locator('.section_header')).toContainText('CONTACT US');

const submit=page.locator('[type="submit"]');
await expect(submit).toBeEnabled
await expect(submit).toContainText('SUBMIT')
await submit.click();
await expect (page.locator('//body')).toContainText('Error: all fields are required')

})

test("test reset functionality",async({browser})=> {

const context=await browser.newContext()
const page=await context.newPage()

await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
await expect(page.locator('.section_header')).toContainText('CONTACT US');

const first_name=page.locator('[name="first_name"]')
const last_name=page.locator('[name="last_name"]')
const email=page.locator('[name="email"]')
const message=page.locator('[name="message"]')

await expect(first_name).toBeVisible()
await first_name.fill("Shubham")
await expect(last_name).toBeVisible()
await last_name.fill("Chaudhari")
await expect(email).toBeVisible()
await email.fill("Shubham@gmail.com")
await expect(message).toBeVisible()
await message.fill("hello Shubham")
const reset=page.locator('[type="reset"]');
await expect(reset).toBeEnabled

await reset.click();

await expect (first_name).toBeEmpty()
await expect (last_name).toBeEmpty()
await expect (email).toBeEmpty()
await expect (message).toBeEmpty()

})

test("Verify error message when mandatory fields are missing",async({browser})=> {

const context=await browser.newContext()
const page=await context.newPage()

await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
await expect(page.locator('.section_header')).toContainText('CONTACT US');

const first_name=page.locator('[name="first_name"]')

const email=page.locator('[name="email"]')


await expect(first_name).toBeVisible()
await first_name.fill("Shubham")

await expect(email).toBeVisible()
await email.fill("Shubham@gmail.com")

const submit=page.locator('[type="submit"]');
await expect(submit).toBeEnabled

await submit.click();

await expect (page.locator('//body')).toContainText('Error: all fields are required')

})