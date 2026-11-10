import { expect, test } from '@playwright/test';
import {
  SHIPPING_LIST_FEATURE,
  SHIPPING_LIST_ITEM_COUNT,
} from '@org/shop-feature-shipping-list';
import { padTo } from '../support/pacing';

test.describe('Shipping List', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(SHIPPING_LIST_FEATURE.route);
    await expect(page.getByTestId(SHIPPING_LIST_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${SHIPPING_LIST_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(SHIPPING_LIST_FEATURE.title);
    const rows = page.getByTestId(`${SHIPPING_LIST_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(SHIPPING_LIST_ITEM_COUNT);
    await padTo(startedAt);
  });
});
