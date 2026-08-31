const { test, expect } = require('@playwright/test');

test('verify handling of tables', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')

    let name = await page.locator('[id="t01"] tbody tr td:nth-child(1)').count()
    console.log(name)

    let firstname = await page.locator('[id="t01"] tbody tr td:nth-child(1)')
    let lastname = await page.locator('[id="t01"] tbody tr td:nth-child(2)')
    let age = await page.locator('[id="t01"] tbody tr td:nth-child(3)')


    for (let i = 0; i < name; i++) {
        let fn = await firstname.nth(i).textContent()
        let ln = await lastname.nth(i).textContent()
        let ag = await age.nth(i).textContent()
        console.log(`hey my name is ${fn} ${ln} and i am age ${ag} years old`)
    }
})

//============================================================================================

test('example 2 verify handling of tbles', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')

    let name1 = await page.locator('[id="t02"] tbody tr:nth-child(2) td:nth-child(1)').count()

    let firstname1 = await page.locator('[id="t02"] tbody tr:nth-child(2) td:nth-child(1)').textContent()
    let lastname1 = await page.locator('[id="t02"] tbody tr:nth-child(2) td:nth-child(2)').textContent()
    let age1 = await page.locator('[id="t02"] tbody tr:nth-child(2) td:nth-child(3)').textContent()


    console.log(`My name is ${firstname1} ${lastname1} and i am age ${age1} years old`)

})


//=============================================================================================
test('example 3 verify handling of tbles', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')

    let name1 = await page.locator('[id="t02"] tbody tr:nth-child(2) td:nth-child(1)').count()

    let firstname2 = await page.locator('[id="t02"] tbody tr:nth-child(2) td:nth-child(1)').textContent()
    let lastname2 = await page.locator('[id="t02"] tbody tr:nth-child(2) td:nth-child(2)').textContent()
    let age2 = await page.locator('[id="t02"] tbody tr:nth-child(2) td:nth-child(3)').textContent()
   
    console.log(`My name is ${firstname2} ${lastname2} and i am age ${age2} years old`)

})

//=============================================================================================
test('example 4verify handling of tbles', async ({ page }) => {
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')

    let name1 = await page.locator('[id="t02"] tbody tr td:nth-child(1)').count()

    let firstname4 = await page.locator('[id="t02"] tbody tr td:nth-child(1)')
    let lastname4 = await page.locator('[id="t02"] tbody tr td:nth-child(2)')
    let age4 = await page.locator('[id="t02"] tbody tr td:nth-child(3)')

    for (let i = 0; i < name1; i++) {
        let fn4 = await firstname4.nth(i).textContent()
        let ln4 = await lastname4.nth(i).textContent()
        let ag4 = await age4.nth(i).textContent()
        console.log(`My name is ${fn4} ${ln4} and i am age ${ag4} years old`)
    }
})


//===============================================================================================
test('example5 veryfy handling of tables of IPL 2026 Orange Cap, Most runs in Indian Premier League 2026', async ({ page }) => {
    await page.goto('https://www.cricinfo.com/records/tournament/batting-most-runs-career/indian-premier-league-2026-17740')



let playername = await page.locator('[class *="ds-table-xs"] tbody tr:nth-child(4) td:nth-child(1) [class ^="ds-text-tight-s"]')
let runs = await page.locator('[class *="ds-table-xs"] tbody tr:nth-child(4) td:nth-child(2) [class ^="ds-text-tight-s"]')
let matches = await page.locator('[class *="ds-table-xs"] tbody tr:nth-child(4) td:nth-child(3) [class ^="ds-text-tight-s"]')

console.log(`Player name is ${playername} and runs scored is ${ runs} and matches played is ${ matches}`)

})

//=======================================================================================================






/*

test('example 6 verify handling of tbles', async ({ page }) => {
    await page.goto('https://www.nseindia.com/market-data/live-equity-market')

    let stock = await page.locator('[class="marketTable"] tbody tr:nth-child(2) td:nth-child(1)').count()

    let stockname= await page.locator('[class="marketTable"] tbody tr td:nth-child(1)')
    let stockopeningvalue = await page.locator('[class="marketTable"] tbody tr td:nth-child(2)]')
    let stockvolume = await page.locator('[class="marketTable"] tbody tr td:nth-child(10)')

    for (let i = 0; i < stock; i++) {
        let sN = await stockname.nth(i).textContent()
        let OValue = await stockopeningvalue.nth(i).textContent()
        let volume = await stockvolume.nth(i).textContent()
        console.log(`Stock name is ${sN}, opening value is ${OValue}, and volume is ${volume}`)
    }
})
*/