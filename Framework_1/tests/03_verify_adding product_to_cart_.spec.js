const { test, expect } = require("@playwright/test")
const { login_page } = require("../Support/PageObjects/Login_page")
const { product_page } = require("../Support/PageObjects/Product_page")
const data = require("../TestData/03_verify_adding product_to_cart_.json")

test("TC_01_Verify product adding to cart ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    let LOGIN_TITLE = data.TestData[0].login_title
    let USERNAME = data.TestData[0].username
    let PASSWORD = data.TestData[0].password
    let PRODUCT_PAGE_TITLE = data.TestData[0].productpage_title
    let BAGPACK = data.TestData[0].Sauce_Labs_Backpack


    await login_page.visitBaseURL(page)
    // verify title 
    await login_page.Verify_Login_Title(page, LOGIN_TITLE)
    await login_page.loginWithCredetials(page, USERNAME, PASSWORD)
    await product_page.verify_product_page_title(page, PRODUCT_PAGE_TITLE)
    await product_page.verifyAddedItemToCart(page, BAGPACK)
})



