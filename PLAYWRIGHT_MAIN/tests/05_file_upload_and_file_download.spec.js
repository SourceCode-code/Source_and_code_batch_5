const { test, expect } = require("@playwright/test")

// a shortcut to open fresh browser with fresh page ( fresh ==> new (without cookies and cache))
test("Verify the file upload for a single file", async ({ page }) => {

    await page.goto("https://webdriveruniversity.com/File-Upload/index.html")

    // how to upload a file 
    // prerequiste
    // 1 you need to have a file that is to be uploaded 


    await page.locator('[id="myFile"]').setInputFiles("./TestData/readme.txt")

    page.on("verify alert", async (alert) => {
        await expect(alert.message()).toContain('Your file has now been uploaded!')
        await alert.accept()
    })

    await page.locator('[id="submit-button"]').click()
    await expect(page.url()).toContain("readme.txt")

})

// how to travel or get path
// note the path is always in a string
// to escape out of a file --> ./
// to escape out of a folder -->  ../
// to go in folder --> /


//D:\SourceandCode\Source_Code_batch_5\PLAYWRIGHT_MAIN\TestData\readme.txt
// this is forward travel form parent to file

//../TestData/readme.txt
// this is backward path form test to testdata


// sync
// console.log(1)
// console.log(12)
// console.log(123)


// // async

// console.log(321)
// console.log(32)
// console.log(3)


// whatever excuetes first it will print
// playwright is async in nature --> we need actions to sync -->

// so we use async and await
//if i dont use await at any step ?

// because we cant predict when the popup will come after file is upload
// 

/**
 * https://webdriveruniversity.com/File-Upload/index.html
 * https://davidwalsh.name/demo/multiple-file-upload.php
 * https://letcode.in/file 
 */


test("Verify file downlaods", async ({ page }) => {

    await page.goto("https://letcode.in/file ")
    const downloadPromise = page.waitForEvent("download")
    await page.locator('[id="pdf"]').click()
    const download = await downloadPromise
    await download.saveAs("./TestData/Downloaded_FILES/one_.pdf")

    await page.locator('[id="txt"]').click()
    await download.saveAs("./TestData/Downloaded_FILES/text.txt")


})