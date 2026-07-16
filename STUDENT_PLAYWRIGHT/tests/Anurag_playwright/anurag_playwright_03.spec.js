const {test, expect} = require('@playwright/test');

//test to check the checkboxes and verify the checkboxes are checked
//[.check and .toBeChecked() are used to check the checkboxes and verify the checkboxes are checked]
test('checkboxes test and check', async ({browser}) => {
    //create new context and page
    const context = await browser.newContext();
    const page = await context.newPage();

    //visit the webpage
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')  //visit the webpage
    await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)') //check the title of the page 
    
    await page.locator('[value="option-1"]').check() //check the checkbox with 1st checkbox
    await expect(page.locator('[value="option-1"]')).toBeChecked() //verify the checkbox is checked

})

test('checkboxes test and uncheck', async ({browser}) => {
    //new page 
    const context = await browser.newContext();
    const page = await context.newPage();

    //visit the webpage
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')  //visit the webpage
    await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)') //check the title of the page

    await page.locator('[value="option-3"]').uncheck() //uncheck the checkbox 
    await expect(page.locator('[value="option-3"]')).not.toBeChecked() //verify the checkbox is unchecked
})

test('radio buttons test and check', async ({browser}) => { 
    const context = await browser.newContext();
    const page = await context.newPage();

    //visit the webpage
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')  //visit the webpage
    await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)') //check the title of the page

    await page.locator('[value="green"]').check() //check the radio button with value green 
    await expect(page.locator('[value="green"]')).toBeChecked() //verify the radio button is checked

    await page.locator('[value="yellow"]').check() //check the radio button with value yellow
    await expect(page.locator('[value="yellow"]')).toBeChecked() //verify the radio button is checked

    await page.locator('[id="radio-buttons"] [value="orange"]').check() //check the radio button with value oraange
    await expect(page.locator('[id="radio-buttons"] [value="orange"]')).toBeChecked() //verify the radio button is checked

    await page.locator('[value="purple"]').check() //check the radio button with the value purple
    await expect(page.locator('[value="purple"]')).toBeChecked() //verify the radio button is checked

})

//test to check the dropdown and verify the dropdown is selected 
//to selsect the dropdown we use .selectOption() and to verify the dropdown is selected we use .toHaveValue() 

test('dropdown selection test', async ({browser}) => { 
    const context = await browser.newContext();
    const page = await context.newPage();

    //visit the webpage
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')  //visit the webpage 
    await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)') //check the title of the page

    await page.locator('[id="dropdown-menu-1"]').selectOption("SQL")    //selecting the option SQL from the dropdown menu 
    await expect(page.locator('[id="dropdown-menu-1"]')).toHaveValue("SQL")
})