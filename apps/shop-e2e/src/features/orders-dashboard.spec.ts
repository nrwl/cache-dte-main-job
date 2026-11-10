import { expect, test } from '@playwright/test';
import {
  ORDERS_DASHBOARD_FEATURE,
  ORDERS_DASHBOARD_ITEM_COUNT,
} from '@org/shop-feature-orders-dashboard';
import { padTo } from '../support/pacing';

test.describe('Orders Dashboard', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(ORDERS_DASHBOARD_FEATURE.route);
    await expect(
      page.getByTestId(ORDERS_DASHBOARD_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${ORDERS_DASHBOARD_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(ORDERS_DASHBOARD_FEATURE.title);
    const rows = page.getByTestId(`${ORDERS_DASHBOARD_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(ORDERS_DASHBOARD_ITEM_COUNT);
    await padTo(startedAt);
  });
});
