import { expect, test } from '@playwright/test';
import {
  PREORDERS_DASHBOARD_FEATURE,
  PREORDERS_DASHBOARD_ITEM_COUNT,
} from '@org/shop-feature-preorders-dashboard';
import { padTo } from '../support/pacing';

test.describe('Preorders Dashboard', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(PREORDERS_DASHBOARD_FEATURE.route);
    await expect(
      page.getByTestId(PREORDERS_DASHBOARD_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${PREORDERS_DASHBOARD_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(PREORDERS_DASHBOARD_FEATURE.title);
    const rows = page.getByTestId(`${PREORDERS_DASHBOARD_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(PREORDERS_DASHBOARD_ITEM_COUNT);
    await padTo(startedAt);
  });
});
