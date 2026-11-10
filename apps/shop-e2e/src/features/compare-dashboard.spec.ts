import { expect, test } from '@playwright/test';
import {
  COMPARE_DASHBOARD_FEATURE,
  COMPARE_DASHBOARD_ITEM_COUNT,
} from '@org/shop-feature-compare-dashboard';
import { padTo } from '../support/pacing';

test.describe('Compare Dashboard', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(COMPARE_DASHBOARD_FEATURE.route);
    await expect(
      page.getByTestId(COMPARE_DASHBOARD_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${COMPARE_DASHBOARD_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(COMPARE_DASHBOARD_FEATURE.title);
    const rows = page.getByTestId(`${COMPARE_DASHBOARD_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(COMPARE_DASHBOARD_ITEM_COUNT);
    await padTo(startedAt);
  });
});
