const { test, expect } = require("@playwright/test")

test("Verify file upload with multiple files", async ({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    await page.locator('[id="filesToUpload"]').setInputFiles("./TestData/readme.txt")
    
})


