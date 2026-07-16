const { test, expect } = require("@playwright/test")

test("verify selection of checkboxes", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    //visit the webapge 
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    //verify webapge 
    await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
    // verify text 
    await expect(page.locator('h1')).toHaveText("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")
    await expect(page.locator('h1')).toContainText("Dropdown Menu(s)")
    //check() --> used to check/ select the checkboxes
    // to check option 2 
    await page.locator('[value="option-2"]').check()
    // .toBeChecked() --> to verify check boxes are cheked 
    await expect(page.locator('[value="option-2"]')).toBeChecked()
    // to check option 4
    await page.locator('//input[@value="option-4"]').check()
    await expect(page.locator('//input[@value="option-4"]')).toBeChecked()
    //uncheck() --> used to uncheck/ deselect the checkboxes
    await page.locator('//input[@value="option-3"]').uncheck()
    //.not --> makes the asseration to test negative 
    await expect(page.locator('//input[@value="option-3"]')).not.toBeChecked()
})


test("verify radio buttons to be selected ", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    //visit the webapge 
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    //verify webapge 
    await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
    // verify text 
    await expect(page.locator('h1')).toHaveText("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")
    await expect(page.locator('h1')).toContainText("Dropdown Menu(s)")

    await page.locator('[value="yellow"]').check()
    await expect(page.locator('[value="yellow"]')).toBeChecked()

    await page.locator('[value="green"]').check()
    await expect(page.locator('[value="yellow"]')).not.toBeChecked()
    await expect(page.locator('[value="green"]')).toBeChecked()
    await expect(page.locator('[value="pumpkin"]')).toBeChecked()
})

test("verify static  dropdown buttons to be selected", async ({ browser }) => {
    const Context = await browser.newContext()
    const page = await Context.newPage()

    //visit the webapge 
    await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
    //verify webapge 
    await expect(page).toHaveTitle('WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)')
    // verify text 
    await expect(page.locator('h1')).toHaveText("Dropdown Menu(s), Checkboxe(s) & Radio Button(s)")
    await expect(page.locator('h1')).toContainText("Dropdown Menu(s)")
    //.selectOption() --> used to select the given value/text of required option in static dropdown
    await page.locator('//select[@id="dropdowm-menu-1"]').selectOption("Python")
    //
    await expect(page.locator('//select[@id="dropdowm-menu-1"]')).toHaveValue("python")
    await page.locator('//select[@id="dropdowm-menu-2"]').selectOption("testng")
    await expect(page.locator('//select[@id="dropdowm-menu-2"]')).toHaveValue("testng")

})



test("verify dynmaic dropdown", async ({ browser }) => {

    const Context = await browser.newContext()
    const page = await Context.newPage()


    // visit the webpage  
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    
    //fill text in locator 
    await page.locator('[id="autocomplete"]').fill("No")
    //wait till list appear 
    await page.waitForSelector('[id="ui-id-1"]') // impilict wait
    // if you want to get the number of option avaialbe ( end point or count) .count()
    let optioncount = await page.locator('[class="ui-menu-item"] div').count()
    console.log(optioncount) //
    // how get text from any element in the dom --> .textContent()--> this will return the hardcoded text 
    // we have to select a single locator form siblings just like :nth-child(child number)   -> .nth(index of element) -> select a single fomr sibling 
    // based upon index  
    for (let i = 0; i < optioncount; i++) {
        let text = await page.locator('[class="ui-menu-item"] div').nth(i).textContent()
        console.log(text)
        if (text === "Norway") {
            await page.locator('[class="ui-menu-item"] div').nth(i).click()
            break
        }
    }
    // expectcity wait
    await page.waitForTimeout(3000) // this will wait for 3 sec
    // await page.waitForLoadState("networkidle") // this will wait untill there is no api call on page 
    // asseration 
    await expect(page.locator('[id="autocomplete"]')).toHaveValue("Norway")
})