const { test, expect } = require("@playwright/test")
const { login_page } = require("../Support/PageObjects/Login_page")

test("TC_01_Verify successful login of the application for standard user", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()





})