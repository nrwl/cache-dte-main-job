import { expect, test } from '@playwright/test';
import {
  REVIEWS_DASHBOARD_FEATURE,
  REVIEWS_DASHBOARD_ITEM_COUNT,
} from '@org/shop-feature-reviews-dashboard';
import { padTo } from '../support/pacing';

test.describe('Reviews Dashboard', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(REVIEWS_DASHBOARD_FEATURE.route);
    await expect(
      page.getByTestId(REVIEWS_DASHBOARD_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${REVIEWS_DASHBOARD_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(REVIEWS_DASHBOARD_FEATURE.title);
    const rows = page.getByTestId(`${REVIEWS_DASHBOARD_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(REVIEWS_DASHBOARD_ITEM_COUNT);
    await padTo(startedAt);
  });
});
