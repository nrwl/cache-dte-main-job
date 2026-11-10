import { expect, test } from '@playwright/test';
import {
  SIZING_DASHBOARD_FEATURE,
  SIZING_DASHBOARD_ITEM_COUNT,
} from '@org/shop-feature-sizing-dashboard';
import { padTo } from '../support/pacing';

test.describe('Sizing Dashboard', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(SIZING_DASHBOARD_FEATURE.route);
    await expect(
      page.getByTestId(SIZING_DASHBOARD_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${SIZING_DASHBOARD_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(SIZING_DASHBOARD_FEATURE.title);
    const rows = page.getByTestId(`${SIZING_DASHBOARD_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(SIZING_DASHBOARD_ITEM_COUNT);
    await padTo(startedAt);
  });
});
