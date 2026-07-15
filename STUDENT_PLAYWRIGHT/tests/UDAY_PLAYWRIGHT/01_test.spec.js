
const { test, expect } = require("@playwright/test")
test('To verify login functionality', async ({ browser }) => {

    const Context = await browser.newContext();
    const page = await Context.newPage();

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    
    await expect(page).toHaveTitle("Test Login | Practice Test Automation");

    await page.locator('[id="username"]').fill('student');
    await page.locator('[id="password"]').fill('Password123');
    await page.locator('[id="submit"]').click();

    await expect(page.locator('[class="post-title"]')).toHaveText('Logged In Successfully');
    
});
//D:\Source_and_code_batch_5\STUDENT_PLAYWRIGHT\tests\UDAY_PLAYWRIGHT\TestData\TestData\readme.txt