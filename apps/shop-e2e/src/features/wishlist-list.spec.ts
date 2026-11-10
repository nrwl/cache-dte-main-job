import { expect, test } from '@playwright/test';
import {
  WISHLIST_LIST_FEATURE,
  WISHLIST_LIST_ITEM_COUNT,
} from '@org/shop-feature-wishlist-list';
import { padTo } from '../support/pacing';

test.describe('Wishlist List', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(WISHLIST_LIST_FEATURE.route);
    await expect(page.getByTestId(WISHLIST_LIST_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${WISHLIST_LIST_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(WISHLIST_LIST_FEATURE.title);
    const rows = page.getByTestId(`${WISHLIST_LIST_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(WISHLIST_LIST_ITEM_COUNT);
    await padTo(startedAt);
  });
});
