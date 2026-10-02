import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Form Authentication' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.locator('#flash')).toContainText('Your password is invalid! ×');
  await expect(page.getByText('Your password is invalid! ×')).toBeVisible();
});