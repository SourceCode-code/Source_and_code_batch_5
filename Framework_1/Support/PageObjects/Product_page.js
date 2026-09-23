const { common_locators } = require("../Locators/Common_locators")
const { test, expect } = require("@playwright/test")

class Product_page {

 


//  // enter username 
//     await page.locator('[id="user-name"]').fill("standard_user")
//     //enter password 
//     await page.locator('[id="password"]').fill("secret_sauce")
//     // click on signing button 
//     await page.locator('[id="login-button"]').click()
//     //verify product page title 
//     await expect(page.locator('[class="title"]')).toHaveText("Products")

async verify_product_page_title(page,title){
   await expect(page.locator(common_locators.Product_page_locators.product_page_title)).toContainText(title)
}




}
const product_page = new Product_page()
module.exports = { product_page }