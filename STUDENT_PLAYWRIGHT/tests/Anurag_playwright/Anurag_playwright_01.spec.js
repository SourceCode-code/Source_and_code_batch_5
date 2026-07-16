const { test, expect } = require("@playwright/test")

//this test is to verify the title of the page after opening the website
test("verify successful title of the page", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/")

    await expect(page).toHaveTitle("Swag Labs")
});


test("verify successful login", async ({ page }) => {
    await page.goto("https://wealthmapper.preprod.evry.com/wel-client-shb-s3/login")
    await expect(page).getByText("Handelsbanken")
});