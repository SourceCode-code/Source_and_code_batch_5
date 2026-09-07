const { test, expect } = require('@playwright/test')
const data = require('../shivani/testData/file.json')



for (let i = 0; i < data.length; i++) {
  test(`verify contactus form with data ${i}`, async ({ browser }) => {
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://webdriveruniversity.com/')

    const [contactus_page] = await Promise.all([
      context.waitForEvent('page'),
      page.locator('[id="contact-us"]').click()
    ])
  })
}
//......................
//the end 

/*
test('verify contact us form with json data', async ({ browser }) => {
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')



  await expect(page).toHaveTitle(data.Page_title)

  await page.locator('[name="contactme"]').fill(data.section_header)
  await expect(page.locator('[name="contactme"]')).toHaveValue(data.section_header)

  await page.locator('[name="first_name"]').fill(data.firstName)
  await expect(page.locator('[name="first_name"]')).toHaveValue(data.firstName)

  await page.locator('[name="last_name"]').fill(data.lastName)
  await expect(page.locator('[name="last_name"]')).toHaveValue(data.lastName)

  await page.locator('[name="email"]').fill(data.email)
  await expect(page.locator('[name="email"]')).toHaveValue(data.email)

  await page.locator('[name="message"]').fill(data.comment)
  await expect(page.locator('[name="message"]')).toHaveValue(data.comment)

  await expect(page.locator('input[type="submit"]')).toBeEnabled()

  await page.locator('input[type="submit"]').click()

  await expect(page.locator('[id="contact_reply"]')).toHaveText(data.success_message)
})
*/
