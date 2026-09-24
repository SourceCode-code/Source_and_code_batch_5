const { test, expect } = require("@playwright/test")
const { login_page } = require("../Support/PageObjects/Login_page")
const { product_page } = require("../Support/PageObjects/Product_page")

test("TC_01_Verify successful login of the application for standard user", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await login_page.visitBaseURL(page)
    // verify title 
    await login_page.Verify_Login_Title(page, "Swag Labs")

    await login_page.loginWithCredetials(page, "standard_user", "secret_sauce")

    await product_page.verify_product_page_title(page, "Products")

})



