import { expect, test } from '@playwright/test';
import {
  CART_DETAILS_FEATURE,
  CART_DETAILS_ITEM_COUNT,
} from '@org/shop-feature-cart-details';
import { padTo } from '../support/pacing';

test.describe('Cart Details', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(CART_DETAILS_FEATURE.route);
    await expect(page.getByTestId(CART_DETAILS_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${CART_DETAILS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(CART_DETAILS_FEATURE.title);
    const rows = page.getByTestId(`${CART_DETAILS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(CART_DETAILS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
