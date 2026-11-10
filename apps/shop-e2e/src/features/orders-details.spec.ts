import { expect, test } from '@playwright/test';
import {
  ORDERS_DETAILS_FEATURE,
  ORDERS_DETAILS_ITEM_COUNT,
} from '@org/shop-feature-orders-details';
import { padTo } from '../support/pacing';

test.describe('Orders Details', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(ORDERS_DETAILS_FEATURE.route);
    await expect(page.getByTestId(ORDERS_DETAILS_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${ORDERS_DETAILS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(ORDERS_DETAILS_FEATURE.title);
    const rows = page.getByTestId(`${ORDERS_DETAILS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(ORDERS_DETAILS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
