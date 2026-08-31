
const{test,expect}=require('@playwright/test')

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
