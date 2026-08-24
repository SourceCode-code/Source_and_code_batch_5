const{test,expect}=require('@playwright/test')

test('verify contactus form',async({browser})=>{
    const context= await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://webdriveruniversity.com/')

    const[contactus_page]= await Promise.all([
        context.waitForEvent('page'),
        page.locator('[id="contact-us"]').click()

    ])

await contactus_page.locator('[name="first_name"]').fill("shivani")
await expect(contactus_page.locator('[name="first_name"]')).toHaveValue("shivani")

await contactus_page.locator('[name="last_name"]').fill("anil")
await expect(contactus_page.locator('[name="last_name"]')).toHaveValue("anil")

await contactus_page.locator('[name="email"]').fill("shivani.anil@example.com")
await expect(contactus_page.locator('[name="email"]')).toHaveValue("shivani.anil@example.com")

await contactus_page.locator('[name="message"]').fill("Hello..!")
await expect(contactus_page.locator('[name="message"]')).toHaveValue("Hello..!")

let text =await page.locator('[href="Contact-Us/contactus.html"] h1').textContent('CONTACT US')
await expect(text).toContain('CONTACT US')
await contactus_page.locator('[id="form_buttons"] [type="submit"]').click()

})






























/*
await page.goto("https://webdriveruniversity.com/")
await page.locator('[id="contact-us"]').click()

let fill=  await page.locator('[id="contact-us"]')
await fill.locator('[name="first_name"]').fill("shivani")
await fill.locator('[name="last_name"]').fill("anil")
await fill.locator('[name="email"]').fill("shivani.anil@example.com")
await fill.locator('[name="message"]').fill("Hello..!")
await fill.locator('[id="form_buttons"] [type="submit"]').click()

*/
