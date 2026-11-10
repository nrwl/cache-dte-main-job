import { expect, test } from '@playwright/test';
import {
  PROMOTIONS_SETTINGS_FEATURE,
  PROMOTIONS_SETTINGS_ITEM_COUNT,
} from '@org/shop-feature-promotions-settings';
import { padTo } from '../support/pacing';

test.describe('Promotions Settings', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(PROMOTIONS_SETTINGS_FEATURE.route);
    await expect(
      page.getByTestId(PROMOTIONS_SETTINGS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${PROMOTIONS_SETTINGS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(PROMOTIONS_SETTINGS_FEATURE.title);
    const rows = page.getByTestId(`${PROMOTIONS_SETTINGS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(PROMOTIONS_SETTINGS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
