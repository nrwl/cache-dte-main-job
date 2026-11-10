import { expect, test } from '@playwright/test';
import {
  LOYALTY_DASHBOARD_FEATURE,
  LOYALTY_DASHBOARD_ITEM_COUNT,
} from '@org/shop-feature-loyalty-dashboard';
import { padTo } from '../support/pacing';

test.describe('Loyalty Dashboard', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(LOYALTY_DASHBOARD_FEATURE.route);
    await expect(
      page.getByTestId(LOYALTY_DASHBOARD_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${LOYALTY_DASHBOARD_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(LOYALTY_DASHBOARD_FEATURE.title);
    const rows = page.getByTestId(`${LOYALTY_DASHBOARD_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(LOYALTY_DASHBOARD_ITEM_COUNT);
    await padTo(startedAt);
  });
});
