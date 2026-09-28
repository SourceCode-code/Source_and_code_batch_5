const { common_locators } = require("../Locators/Common_locators")
const { test, expect } = require("@playwright/test")

class Product_page {

   async verify_product_page_title(page, title) {
      await expect(page.locator(common_locators.Product_page_locators.product_page_title)).toContainText(title)
   }

   async verifyAddedItemToCart(page, Product_Name) {
  
      await page.waitForSelector(common_locators.Product_page_locators.Inventory_Item)
      const products = await page.locator(common_locators.Product_page_locators.Inventory_Item)
      const count = await products.count()
      console.log(` Total count on the product page ${count}`)

      for (let i = 0; i < count; i++) {
         let ProductName = await page.locator(common_locators.Product_page_locators.Product_Name).nth(i).textContent()
         console.log(` The Product Names are :${ProductName}`)

         if(ProductName ===Product_Name.trim()){
            await page.locator(common_locators.Product_page_locators.ADD_TO_CART_BUTTON).nth(i).click()


         }



      }
   }



}
const product_page = new Product_page()
module.exports = { product_page }