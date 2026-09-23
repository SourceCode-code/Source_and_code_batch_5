const { common_locators } = require("../Locators/Common_locators")
const { test, expect } = require("@playwright/test")

class login_pg {

    constructor(page) {
        this.page = page;


        this.login_page_title = this.page.locator(common_locators.Login_page_locators.login_page_tite);
        this.user_name= this.page.locator(common_locators.Login_page_locators.user_name)
    }

    async visitBaseURL() {
        await this.page.goto('/')
    }

    async Verify_Login_Title(title) {
        await expect(this.login_page_title).toContainText(title)
    }


  async Fill_username( username) {
        await this.user_name.fill(username)
    }


}
module.exports = { login_pg }

/**
 *   async visitBaseURL(page) {
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
 */