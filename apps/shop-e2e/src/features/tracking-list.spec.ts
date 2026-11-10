import { expect, test } from '@playwright/test';
import {
  TRACKING_LIST_FEATURE,
  TRACKING_LIST_ITEM_COUNT,
} from '@org/shop-feature-tracking-list';
import { padTo } from '../support/pacing';

test.describe('Tracking List', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(TRACKING_LIST_FEATURE.route);
    await expect(page.getByTestId(TRACKING_LIST_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${TRACKING_LIST_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(TRACKING_LIST_FEATURE.title);
    const rows = page.getByTestId(`${TRACKING_LIST_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(TRACKING_LIST_ITEM_COUNT);
    await padTo(startedAt);
  });
});
