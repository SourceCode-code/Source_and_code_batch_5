const { common_locators } = require("../Locators/Common_locators")
const { test, expect } = require("@playwright/test")

class Login_page {

    // method to visit the website

    async visitBaseURL(page) {
        await page.goto('/')
    }


    async Verify_Login_Title(page, Title) {
        await expect(page.locator(common_locators.Login_page_locators.login_page_tite)).toContainText(Title)
    }


    //  // enter username 
    //     await page.locator('[id="user-name"]').fill("standard_user")
    //     //enter password 
    //     await page.locator('[id="password"]').fill("secret_sauce")
    //     // click on signing button 
    //     await page.locator('[id="login-button"]').click()
    //     //verify product page title 
    //     await expect(page.locator('[class="title"]')).toHaveText("Products")

    async Fill_username(page, username) {
        await page.locator(common_locators.Login_page_locators.user_name).fill(username)
    }

    async Fill_password(page, password) {
        await page.locator(common_locators.Login_page_locators.password).fill(password)
    }

    async click_on_login_button(page) {
        await page.locator(common_locators.Login_page_locators.login_button).click()
    }


}
const login_page = new Login_page()
module.exports = { login_page }