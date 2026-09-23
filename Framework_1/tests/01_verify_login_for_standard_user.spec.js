const { test, expect } = require("@playwright/test")
const { login_page } = require("../Support/PageObjects/Login_page")
const { product_page } = require("../Support/PageObjects/Product_page")

test("TC_01_Verify successful login of the application for standard user", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    await login_page.visitBaseURL(page)
    // verify title 
    await login_page.Verify_Login_Title(page, "Swag Labs")

    // enter username 
    // await page.locator('[id="user-name"]').fill("standard_user")
    await login_page.Fill_username(page, "standard_user")
    //enter password 
    await login_page.Fill_password(page, "secret_sauce")
    // await page.locator('[id="password"]').fill("secret_sauce")
    // click on signing button 
    await login_page.click_on_login_button(page)
    // await page.locator('[id="login-button"]').click()
    //verify product page title 
    // await expect(page.locator('[class="title"]')).toHaveText("Products")
    await product_page.verify_product_page_title(page,"Products")

})



