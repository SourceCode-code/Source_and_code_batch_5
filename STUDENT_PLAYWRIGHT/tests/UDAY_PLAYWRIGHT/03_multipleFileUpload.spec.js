const {test , expect} = require ('@playwright/test')

test("Verify Multiple file upload", async({page})=> {

   await page.goto("https://webdriveruniversity.com/File-Upload/index.html") 

   await page.locator('[id="myFile"]').setInputFiles(["./TestData/readme.txt","./TestData/readme.txt"])

   page.on("verify alert", async (alert) => {
        await expect(alert.message()).toContain('Your file has now been uploaded!')
        await alert.accept()
    })

    await page.locator('[id="submit-button"]').click()
    await expect(page.url()).toContain("readme.txt")
});