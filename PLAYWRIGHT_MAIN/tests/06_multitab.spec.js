const { test, expect } = require("@playwright/test")

// While dealing with multitab or mutli window  always use default way 

test("verify handl;ing of mutlitab in playwright", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto('https://webdriveruniversity.com/')

    const [Contactus_page] = await Promise.all([
        Context.waitForEvent("page"),// wait till the page opens 
        page.locator('[href="Contact-Us/contactus.html"]').click()
    ])



    await Contactus_page.locator('[name="first_name"]').fill("ABCD")
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(Contactus_page.locator('[name="first_name"]')).toHaveValue("ABCD")
    //
    await Contactus_page.locator('//input[@name="last_name"]').fill("EFGH")
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(Contactus_page.locator('//input[@name="last_name"]')).toHaveValue("EFGH")
    //
    await Contactus_page.locator('[name="email"]').fill("EFGH@gmail.com")
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(Contactus_page.locator('[name="email"]')).toHaveValue("EFGH@gmail.com")
    await Contactus_page.locator('[name="message"]').fill("hello")
    //.toHaveValue() --> to verify the temp value filled in input value
    await expect(Contactus_page.locator('[name="message"]')).toHaveValue("hello")


    let text = await page.locator('[href="Contact-Us/contactus.html"] h1').textContent()
    await expect(text).toContain("CONTACT US")
await Contactus_page.locator('[value="SUBMIT"]').click()

})



test("verify handling multi window ",async({browser})=>{
     const Context = await browser.newContext()
    const page = await Context.newPage()

    await page.goto('https://vinothqaacademy.com/multiple-windows/')

    const [new_window] = await Promise.all([
        Context.waitForEvent("page"),// wait till the page opens 
        page.locator('[name="newbrowserwindow123"]').click()
    ])

    await new_window.locator('[placeholder="Name"]').fill("hello")
    await expect (new_window.locator('[placeholder="Name"]')).toHaveValue('hello')
})