import { expect, test } from '@playwright/test';
import {
  ADDRESSES_DASHBOARD_FEATURE,
  ADDRESSES_DASHBOARD_ITEM_COUNT,
} from '@org/shop-feature-addresses-dashboard';
import { padTo } from '../support/pacing';

test.describe('Addresses Dashboard', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(ADDRESSES_DASHBOARD_FEATURE.route);
    await expect(
      page.getByTestId(ADDRESSES_DASHBOARD_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${ADDRESSES_DASHBOARD_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(ADDRESSES_DASHBOARD_FEATURE.title);
    const rows = page.getByTestId(`${ADDRESSES_DASHBOARD_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(ADDRESSES_DASHBOARD_ITEM_COUNT);
    await padTo(startedAt);
  });
});
