const { test, expect } = require("@playwright/test")
const { login_pg } = require("../Support/PageObjects/login_pg")
const { product_page } = require("../Support/PageObjects/Product_page")

test("TC_01_Verify successful login of the application for standard user", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    const Login_pg = new login_pg(page)

    await Login_pg.visitBaseURL()
    // verify title 
    await Login_pg.Verify_Login_Title( "Swag Labs")

    // enter username 
    // await page.locator('[id="user-name"]').fill("standard_user")
    await Login_pg.Fill_username( "standard_user")

})



