import { test, expect } from '@playwright/test';

test('navigation', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.locator('text=Welcome!')).toBeVisible();
  await Promise.all([page.waitForNavigation(), page.locator('text=About').click()]);
  await expect(page).toHaveURL('http://localhost:3000/about');
  await expect(page.locator('text=About!')).toBeVisible();
  await page.locator('text=Home').click();
  await expect(page).toHaveURL('http://localhost:3000/');
  await expect(page.locator('text=Welcome!')).toBeVisible();
});
