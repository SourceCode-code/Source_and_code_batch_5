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



    async loginWithCredetials(page, username, password) {
        await page.locator(common_locators.Login_page_locators.user_name).fill(username)
        await page.locator(common_locators.Login_page_locators.password).fill(password)
        await page.locator(common_locators.Login_page_locators.login_button).click()

        await page.waitForTimeout(2000)// wait for 2 sec

        if (await page.locator(common_locators.Product_page_locators.product_page_title).isVisible()) {
            console.log(` The login for user ${username} is successful`)
            return true
        }

        if (await page.locator(common_locators.Login_page_locators.Error_pop_up).isVisible()) {
            console.log(` The login for user ${username} is failed`)
            return false
        }


        throw new Error("login not correct check input")
    }


}
const login_page = new Login_page()
module.exports = { login_page }