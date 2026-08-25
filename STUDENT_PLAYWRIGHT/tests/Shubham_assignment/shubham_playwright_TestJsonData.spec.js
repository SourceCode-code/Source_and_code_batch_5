const { test, expect } = require("@playwright/test");
const data = require("../Shubham_assignment/TestData/requestdata.json");


test("Login on Website", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://webdriveruniversity.com")
    console.log(data[0].first_name)



    for (const obj of data) {
        console.log(obj);
        console.log(obj.first_name);
        console.log(obj.last_name);
        console.log(obj.email);
        console.log(obj.msg);
        const contact_us_locator = await page.locator('[href="Contact-Us/contactus.html"]')
        const [contact_us_page] = await Promise.all([context.waitForEvent('page'), contact_us_locator.click()])
        await expect(contact_us_page.locator('[name="contactme"]')).toHaveText("CONTACT US");

        const first_name_locator = await contact_us_page.locator('[name="first_name"]')
        const last_name_locator = await contact_us_page.locator('[name="last_name"]')
        const email_locator = await contact_us_page.locator('[name="email"]')
        const message_locator = await contact_us_page.locator('[name="message"]')
        await first_name_locator.fill(obj.first_name)
        await last_name_locator.fill(obj.last_name)
        await email_locator.fill(obj.email)
        await message_locator.fill(obj.msg)

        await contact_us_page.locator('[value="SUBMIT"]').click()
        await contact_us_page.close();


    }



})
