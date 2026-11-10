import { expect, test } from '@playwright/test';
import {
  REVIEWS_DETAILS_FEATURE,
  REVIEWS_DETAILS_ITEM_COUNT,
} from '@org/shop-feature-reviews-details';
import { padTo } from '../support/pacing';

test.describe('Reviews Details', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(REVIEWS_DETAILS_FEATURE.route);
    await expect(
      page.getByTestId(REVIEWS_DETAILS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${REVIEWS_DETAILS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(REVIEWS_DETAILS_FEATURE.title);
    const rows = page.getByTestId(`${REVIEWS_DETAILS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(REVIEWS_DETAILS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
