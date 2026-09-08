import { test, expect } from "@playwright/test";

test("check title", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://yonoretail.sbi.bank.in/registration/welcome?languagecode=en");
  await expect(page).toHaveTitle("YONO SBI");
});

test("check title on registration page", async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://yonoretail.sbi.bank.in/registration/welcome?languagecode=en");
    await page.locator('[class="col-5 custom-sm"] [class="solid-button"]').click();
    await expect(page.locator('[class="header-4 mb-4"]')).toHaveText("New User Registration");
})