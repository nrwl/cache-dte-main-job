import { expect, test } from '@playwright/test';
import {
  WISHLIST_OVERVIEW_FEATURE,
  WISHLIST_OVERVIEW_ITEM_COUNT,
} from '@org/shop-feature-wishlist-overview';
import { padTo } from '../support/pacing';

test.describe('Wishlist Overview', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(WISHLIST_OVERVIEW_FEATURE.route);
    await expect(
      page.getByTestId(WISHLIST_OVERVIEW_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${WISHLIST_OVERVIEW_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(WISHLIST_OVERVIEW_FEATURE.title);
    const rows = page.getByTestId(`${WISHLIST_OVERVIEW_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(WISHLIST_OVERVIEW_ITEM_COUNT);
    await padTo(startedAt);
  });
});
