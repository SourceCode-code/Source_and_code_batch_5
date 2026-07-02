const { test, expect } = require("@playwright/test");

test("Login on AwesomeQA Website", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to Login Page
    await page.goto("https://awesomeqa.com/ui/index.php?route=account/login");

    // Verify Page Title
    await expect(page).toHaveTitle("Account Login");

    // Enter Login Credentials
    await page.locator("#input-email").fill("test@example.com");
    await page.locator("#input-password").fill("Password@123");

    // Click Login Button
    await page.locator('input[value="Login"]').click();

    // Verify successful login
    await expect(page).toHaveURL(/account/);

});