const { test, expect } = require("@playwright/test")

test("verify the file upload for single file", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/File-Upload/index.html")

    await page.locator('[type="file"]').setInputFiles("./testdata.txt")

    page.on("dialog", async (alert) => {
        await expect(alert.message()).toContain('Your file has now been uploaded!')
        await alert.accept()
    })

    await page.locator('[id="submit-button"]').click()
    await expect(page.url()).toContain("testdata")

});




test("Verify the multiple files upload", async ({ page }) =>{
    const path = require('path');
    
    await page.goto("https://webdriveruniversity.com/File-Upload/index.html")
   
    await page.locator('[type="file"]').setInputFiles([
      path.join(__dirname, "testdata.txt"),
      path.join(__dirname, "Document.pdf")
    ]);

    page.on("dialog", async (alert) => {
        await expect(alert.message()).toContain('Your file has now been uploaded!')
        await alert.accept()
    })
 
    await page.locator('[id="submit-button"]').click()
    await expect(page.url()).toContain("testdata")
    await expect(page.url()).toContain("Document")

});
