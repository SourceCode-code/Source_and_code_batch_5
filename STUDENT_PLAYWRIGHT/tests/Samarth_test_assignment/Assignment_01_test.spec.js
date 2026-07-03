const {test, expect} = require('@playwright/test');

test('verify the title of the page', async ({page}) => {
  await page.goto('https://www.isro.gov.in/');
  await expect(page).toHaveTitle('Indian Space Research Organisation');
})

