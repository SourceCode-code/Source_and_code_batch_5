const{test,expect}=require('@playwright/test')
test('veryfy contact us form',async({browser})=>{
    const context =await browser.newContext()
    const page = await context.newPage()
//'https://www.automationexercise.com/contact_us
await page.goto('https://webdriveruniversity.com/')

const[contactus_page]=await Promise.all([
    context.waitForEvent('page'),
    page.locator('[id="contact-us"]').click()
])

await contactus_page.locator('[name="first_name"]').fill('advait')
await expect(contactus_page.locator('[name="first_name"]')).toHaveValue('advait')

await contactus_page.locator('[name="last_name"]').fill('sarkale')
await expect(contactus_page.locator('[name="last_name"]')).toHaveValue('sarkale')

await contactus_page.locator('[name="email"]').fill('advait.sarkale@example.com')
await expect(contactus_page.locator('[name="email"]')).toHaveValue('advait.sarkale@example.com')

await contactus_page.locator('[name="message"]').fill('good morning')
await expect(contactus_page.locator('[name="message"]')).toHaveValue('good morning')

let text =await page.locator('[id="contact-us"] h1').textContent('CONTACT US')
await expect(text).toContain('CONTACT US')
await contactus_page.locator('[id="form_buttons"] [type="submit"]').click()
})


//=====================================================================================================


test('verify automation exercise contact us form',async({browser})=>{
    const context =await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.automationexercise.com/')

    const[contactus_page_1]=await Promise.all([
        context.waitForEvent('page'),
        page.locator('[href="/contact_us"] [class="fa fa-envelope"]').click()
    ])

await contactus_page_1.locator('[name="name"]').fill('shivani')
await expect(contactus_page_1.locator('[name="name"]')).toHaveValue('shivani')

await contactus_page_1.locator('[name="email"]').fill('shivani@example.com')
await expect(contactus_page_1.locator('[name="email"]')).toHaveValue('shivani@example.com')

await contactus_page_1.locator('[name="subject"]').fill('text one')
await expect(contactus_page_1.locator('[name="subject"]')).toHaveValue('text one')

await contactus_page_1.locator('[name="message"]').fill('trying to submit form')
await expect(contactus_page_1.locator('[name="message"]')).toHaveValue('trying to submit form')

await contactus_page_1.locator('[name="upload_file"]').setInputFiles('C:\\Users\\D A T A\\Desktop\\you tub\\python tutorial\\first').click()

await contactus_page_1.locator('[name="submit"]').click()

})
//......