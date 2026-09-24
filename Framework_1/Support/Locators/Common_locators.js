class common_locators {

    static Login_page_locators = {
        login_page_tite: '[class="login_logo"]',
        user_name: '[id="user-name"]',
        password: '[id="password"]',
        login_button: '[id="login-button"]',
        Error_pop_up: '[data-test="error"]'
    }
    static Product_page_locators = {
        product_page_title: '[class="title"]'
    }


}
module.exports = { common_locators }