// HOOKES IN PW --> special inbulit function  that run before or after test

/**
 * IN PW WE HAVE TOTAL OF 4 HOOKES 
 * 1 beforeAll()-> Runs before all testcases are starting _-> run onces before all testcases
 * (importing depency , to read the fixture data , to setup common pre conditions )
 * 
 * 2 afterAll() -->Runs after all testcases are ended _-> run onces after all testcases
 * ( used -> generation of report , cleaing the setup , to exceute post condition)
 * 
 * 3 beforeEach()-> Runs before every testcase are starting _-> run onces before every testcases
 * 
 * 4 afterEach()->Runs after every testcase are ended _-> run onces after every testcases
 */

const { test, expect } = require("@playwright/test")


test.beforeAll(async()=>{
    console.log(' i run only once to import require dependencies')
})

test.beforeEach(async()=>{
    console.log(' i run only berfore every testcase')
})

test("test 1 ", async ({ page }) => {
    console.log("test 1 is success")
})

test("test 2 ", async ({ page }) => {
    console.log("test 2 is success")
})

test("test 3 ", async ({ page }) => {
    console.log("test 3 is success")
})

test("test 4 ", async ({ page }) => {
    console.log("test 4 is success")
})

test("test 5 ", async ({ page }) => {
    console.log("test 5 is success")
})

test("test 6 ", async ({ page }) => {
    console.log("test 6 is success")
})

test.afterEach(async()=>{
    console.log(' i run only after every testcase')
})


test.afterAll(async()=>{
    console.log('all test completed i run affter all the test to generate the report')
})