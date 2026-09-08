const { test, expect } = require('@playwright/test')


test.beforeAll(async () => {
  console.log('---  Starting the test suite ---')
})

test.beforeEach(async ({ page }) => {
  console.log(' Navigating to the page')
  await page.goto('https://www.flipkart.com/')
})

// Test Case 1
test('Verify page title', async ({ page }) => {
  console.log('Test 1')
  await expect(page).toHaveTitle("Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!")
})

// Test Case 2
test('Verify login button', async ({ page }) => {
  console.log(' Test 2')
  const header = page.locator('[aria-label="Login"]')
  await expect(header).toHaveText('Login')
})

test.afterEach(async () => {
  console.log('after every test case confirmation')
})

test.afterAll(async () => {
  console.log('--- All tests completed ---')
})

//---------------------------------------------------


test("example 2",async ({page})=>{
  console.log("here is the hooks example 2")
})

  test.beforeAll(async()=>{
    console.log("starting the test suite")
  })

  test.beforeEach(async({page})=>{
    console.log("before each test case")
  })

  test("test1",async({page})=>{
    console.log("test1 run successfully")
  })

  test("test2",async({page})=>{
    console.log("test2 run successfully")
  })

  test.afterEach(async()=>{
    console.log("after each test case")
  })
  
  test.afterAll(async()=>{
    console.log("all test completed")
  })


  //==================================================================


  test.beforeAll(async () => {
  console.log('---  Starting the test suite ---')
})

test.beforeEach(async ({ page }) => {
  console.log(' Navigating to the page')
  await page.goto('https://www.redbus.in/')
})

  // Test Case 1
test('Verify page title of redbus', async ({ page }) => {
  console.log('Test 1')
  await expect(page).toHaveTitle("Bus Booking Online and Train Tickets at Lowest Price - redBus")
})

// Test Case 2
test('Verify bookings button of redbus', async ({ page }) => {
  console.log(' Test 2')
  const header = page.locator('li[class="navOptionItem___8cee56"] [aria-label="Bookings"]')
  await expect(header).toHaveText('Bookings')
})

test.afterEach(async () => {
  console.log('after every test case confirmation')
})

test.afterAll(async () => {
  console.log('--- All tests completed ---')
})
