//file download
const {test,expect} = require("@playwright/test")


test("verify the file download", async ({ page }) => {
    await page.goto("https://www.scribd.com/document/441031695/English-Moral-stories-pdf")
const downloadPromise = page.waitForEvent("download")
    await page.locator('[id="radix-4"]').click()
    const download = await downloadPromise
await download.saveAs("../shivani/practice_download/English Moral stories.pdf")
})


test("verify the excel download",async({page}) =>{
    await page.goto("https://letcode.in/file")
    const downloadPromise = page.waitForEvent("download")
    await page.locator('[id="xls"]').click()
    const download =await downloadPromise
    await download.saveAs("../shivani/practice_download/xcel.pdf")
})



test("verify the test download",async({page}) =>{
    await page.goto("https://letcode.in/file")
    const downloadPromise = page.waitForEvent("download")
    await page.locator('[id="txt"]').click()
    const download =await downloadPromise
    await download.saveAs("../shivani/practice_download/text.txt")
})

/////////////////////////////////