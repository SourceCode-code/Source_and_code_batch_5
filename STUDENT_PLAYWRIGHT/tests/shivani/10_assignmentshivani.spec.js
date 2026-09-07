const { test, expect } = require('@playwright/test')

const data = require('../shivani/testData/file1.json')

data.testdata.forEach((el,index)=>{
    test(`verify ${el.index}`,async({browser})=>{
        const Context = await browser.newContext()
        const page =await context.newPage()

        await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')

    await expect(page).toHaveTitle(el.Page_title)

    await page.locator('[name="first_name"]').fill(el.firstName)
    await expect(page.locator('[name="first_name"]')).toHaveValue(el.firstName)

    await page.locator('[name="last_name"]').fill(el.lastName)
    await expect(page.locator('[name="last_name"]')).toHaveValue(el.lastName)

    await page.locator('[name="email"]').fill(el.email)
    await expect(page.locator('[name="email"]')).toHaveValue(el.email)

    await page.locator('[name="message"]').fill(el.comment)
    await expect(page.locator('[name="message"]')).toHaveValue(el.comment)

    await expect(page.locator('input[type="submit"]')).toBeEnabled()

    await page.locator('input[type="submit"]').click()

    await expect(page.locator('h1')).toHaveText('Thank You for your Message!')
    await expect(page.locator('h1')).toContainText('Thank You')
  })
})


