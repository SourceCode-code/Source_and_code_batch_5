class common_locators {

    static Login_page_locators = {
        login_page_tite: '[class="login_logo"]',
        user_name: '[id="user-name"]',
        password: '[id="password"]',
        login_button: '[id="login-button"]',
        Error_pop_up: '[data-test="error"]'
    }
    static Product_page_locators = {
        product_page_title: '[class="title"]',
        Inventory_Item :'[class="inventory_item"]',
        Product_Name :'[class="inventory_item_name "]',
        ADD_TO_CART_BUTTON:'[class="btn btn_primary btn_small btn_inventory "]',
        REMOVE_BTN:'[data-test^="remove"]'
    }

    static Labels= {
        REMOVE:'Remove'
    }

}
module.exports = { common_locators }