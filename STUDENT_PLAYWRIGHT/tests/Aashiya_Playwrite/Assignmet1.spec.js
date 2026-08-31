const {test, expect} = require('@playwright/test');

test('verify the title of the page', async ({page}) => {
  await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
  await expect(page).toHaveTitle('WebDriver | Contact Us');
})

