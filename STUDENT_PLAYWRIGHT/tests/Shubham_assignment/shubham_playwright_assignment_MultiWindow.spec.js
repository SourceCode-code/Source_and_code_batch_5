const { test, expect } = require("@playwright/test");

test("Test MultiWindow ", async ({browser})=>{
const context = await browser.newContext();
const page= await context.newPage();

await page.goto("https://webdriveruniversity.com/")

const next_page_locator=page.locator('[href="https://www.udemy.com/course/playwright-test-automation-ai-claude-code-qa/?couponCode=31BC3FB70D4F476FA07D"]')

const [course1]=await Promise.all([
context.waitForEvent('page'),next_page_locator.click()])


await expect(course1.locator('[class="course-lede-module-scss-module__D37FTG__container"] h1')).toHaveText("Claude Code & AI: Playwright Test Automation for QA");

})