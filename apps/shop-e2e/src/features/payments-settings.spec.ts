import { expect, test } from '@playwright/test';
import {
  PAYMENTS_SETTINGS_FEATURE,
  PAYMENTS_SETTINGS_ITEM_COUNT,
} from '@org/shop-feature-payments-settings';
import { padTo } from '../support/pacing';

test.describe('Payments Settings', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(PAYMENTS_SETTINGS_FEATURE.route);
    await expect(
      page.getByTestId(PAYMENTS_SETTINGS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${PAYMENTS_SETTINGS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(PAYMENTS_SETTINGS_FEATURE.title);
    const rows = page.getByTestId(`${PAYMENTS_SETTINGS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(PAYMENTS_SETTINGS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
