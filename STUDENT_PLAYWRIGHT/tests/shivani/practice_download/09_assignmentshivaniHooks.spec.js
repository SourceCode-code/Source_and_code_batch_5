const { test, expect } = require('@playwright/test');

// Runs ONCE before the entire test suite starts
test.beforeAll(async () => {
  console.log('--- Global Setup: Starting the test suite ---');
});

// Runs BEFORE EVERY individual test (Great for URL navigation)
test.beforeEach(async ({ page }) => {
  console.log('Setup: Navigating to the page');
  await page.goto('https://example.com');
});

// Test Case 1
test('Verify page title', async ({ page }) => {
  console.log('Running: Test 1');
  await expect(page).toHaveTitle(/Example Domain/);
});

// Test Case 2
test('Verify main header text', async ({ page }) => {
  console.log('Running: Test 2');
  const header = page.locator('h1');
  await expect(header).toHaveText('Example Domain');
});

// Runs AFTER EVERY individual test (Great for cleaning states)
test.afterEach(async () => {
  console.log('Teardown: Cleaning up after a test');
});

// Runs ONCE after all tests have completely finished
test.afterAll(async () => {
  console.log('--- Global Teardown: All tests completed ---');
});

//---------------------------------------------------