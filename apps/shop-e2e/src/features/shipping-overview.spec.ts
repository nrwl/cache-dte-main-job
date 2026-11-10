import { expect, test } from '@playwright/test';
import {
  SHIPPING_OVERVIEW_FEATURE,
  SHIPPING_OVERVIEW_ITEM_COUNT,
} from '@org/shop-feature-shipping-overview';
import { padTo } from '../support/pacing';

test.describe('Shipping Overview', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(SHIPPING_OVERVIEW_FEATURE.route);
    await expect(
      page.getByTestId(SHIPPING_OVERVIEW_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${SHIPPING_OVERVIEW_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(SHIPPING_OVERVIEW_FEATURE.title);
    const rows = page.getByTestId(`${SHIPPING_OVERVIEW_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(SHIPPING_OVERVIEW_ITEM_COUNT);
    await padTo(startedAt);
  });
});
