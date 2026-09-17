const { common_locators } = require("../Locators/Common_locators")
const { test, expect } = require("@playwright/test")

class Login_page {

    // method to visit the website

    async visitBaseURL(page) {
        await page.goto('/')
    }


    async Verify_Login_Title(page,Title){
        await expect(page.locator(common_locators.Login_page_locators.login_page_tite)).toContainText(Title)
    }
}
export const login_page = new Login_page()