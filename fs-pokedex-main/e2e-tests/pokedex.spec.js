// e2e-tests/pokedex.spec.js
import { test, expect } from '@playwright/test';

test('should load Pokémon details page', async ({ page }) => {
  await page.goto('http://localhost:3000/pokemon/ivysaur');
  await expect(page.locator('h1')).toHaveText('IVYSAUR');
  await expect(page.locator('.pokemon-type-grass')).toBeVisible();
});
