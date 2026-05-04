/* global require */

const { test, expect } = require('@playwright/test')

test('ivysaur page shows correct ability', async ({ page }) => {
  await page.goto('http://localhost:8080')

  // Click the link to open Ivysaur page
  await page.getByText('ivysaur').click()

  // Check that the page shows the ability "chlorophyll"
  await expect(page.getByText('chlorophyll')).toBeVisible()
})
