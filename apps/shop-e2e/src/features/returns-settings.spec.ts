import { expect, test } from '@playwright/test';
import {
  RETURNS_SETTINGS_FEATURE,
  RETURNS_SETTINGS_ITEM_COUNT,
} from '@org/shop-feature-returns-settings';
import { padTo } from '../support/pacing';

test.describe('Returns Settings', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(RETURNS_SETTINGS_FEATURE.route);
    await expect(
      page.getByTestId(RETURNS_SETTINGS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${RETURNS_SETTINGS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(RETURNS_SETTINGS_FEATURE.title);
    const rows = page.getByTestId(`${RETURNS_SETTINGS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(RETURNS_SETTINGS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
