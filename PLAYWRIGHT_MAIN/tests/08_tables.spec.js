const {test , expect }= require("@playwright/test")


test("verify handling of tables ",async({page})=>{

    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')

    let Name = await page.locator('[id="t01"] tbody tr td:nth-child(1)').count()

    let firstname =   await page.locator('[id="t01"] tbody tr td:nth-child(1)')
    let lastname =   await page.locator('[id="t01"] tbody tr td:nth-child(2)')
    let age =   await page.locator('[id="t01"] tbody tr td:nth-child(3)')

for(let i=0;i<Name;i++){
    let fn = await firstname.nth(i).textContent()
    let ln=await lastname.nth(i).textContent()
    let ag = await age.nth(i).textContent()

    console.log(`hey my name is ${fn} ${ln} and i am age ${ag} years old`)
}

})

// hey my name is jhon smith and i am age years old 


test("example 2",async({page})=>{

     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
    let rowcount = await page.locator('[class="table table-light traversal-table"] tbody tr').count()


     let firstname =   await page.locator('[class="table table-light traversal-table"] tbody tr td:nth-child(2)')
    let lastname =   await page.locator('[class="table table-light traversal-table"] tbody tr td:nth-child(3)')
  

for(let i=0;i<rowcount;i++){
    let fn = await firstname.nth(i).textContent()
    let ln=await lastname.nth(i).textContent()

    console.log(`hey my name is ${fn} ${ln} `)
}
})