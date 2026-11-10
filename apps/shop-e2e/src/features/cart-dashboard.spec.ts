import { expect, test } from '@playwright/test';
import {
  CART_DASHBOARD_FEATURE,
  CART_DASHBOARD_ITEM_COUNT,
} from '@org/shop-feature-cart-dashboard';
import { padTo } from '../support/pacing';

test.describe('Cart Dashboard', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(CART_DASHBOARD_FEATURE.route);
    await expect(page.getByTestId(CART_DASHBOARD_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${CART_DASHBOARD_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(CART_DASHBOARD_FEATURE.title);
    const rows = page.getByTestId(`${CART_DASHBOARD_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(CART_DASHBOARD_ITEM_COUNT);
    await padTo(startedAt);
  });
});
