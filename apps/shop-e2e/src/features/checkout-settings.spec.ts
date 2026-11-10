import { expect, test } from '@playwright/test';
import {
  CHECKOUT_SETTINGS_FEATURE,
  CHECKOUT_SETTINGS_ITEM_COUNT,
} from '@org/shop-feature-checkout-settings';
import { padTo } from '../support/pacing';

test.describe('Checkout Settings', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(CHECKOUT_SETTINGS_FEATURE.route);
    await expect(
      page.getByTestId(CHECKOUT_SETTINGS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${CHECKOUT_SETTINGS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(CHECKOUT_SETTINGS_FEATURE.title);
    const rows = page.getByTestId(`${CHECKOUT_SETTINGS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(CHECKOUT_SETTINGS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
