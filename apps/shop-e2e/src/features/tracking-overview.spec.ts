import { expect, test } from '@playwright/test';
import {
  TRACKING_OVERVIEW_FEATURE,
  TRACKING_OVERVIEW_ITEM_COUNT,
} from '@org/shop-feature-tracking-overview';
import { padTo } from '../support/pacing';

test.describe('Tracking Overview', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(TRACKING_OVERVIEW_FEATURE.route);
    await expect(
      page.getByTestId(TRACKING_OVERVIEW_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${TRACKING_OVERVIEW_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(TRACKING_OVERVIEW_FEATURE.title);
    const rows = page.getByTestId(`${TRACKING_OVERVIEW_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(TRACKING_OVERVIEW_ITEM_COUNT);
    await padTo(startedAt);
  });
});
