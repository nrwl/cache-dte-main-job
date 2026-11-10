import { expect, test } from '@playwright/test';
import {
  INVENTORY_DASHBOARD_FEATURE,
  INVENTORY_DASHBOARD_ITEM_COUNT,
} from '@org/shop-feature-inventory-dashboard';
import { padTo } from '../support/pacing';

test.describe('Inventory Dashboard', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(INVENTORY_DASHBOARD_FEATURE.route);
    await expect(
      page.getByTestId(INVENTORY_DASHBOARD_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${INVENTORY_DASHBOARD_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(INVENTORY_DASHBOARD_FEATURE.title);
    const rows = page.getByTestId(`${INVENTORY_DASHBOARD_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(INVENTORY_DASHBOARD_ITEM_COUNT);
    await padTo(startedAt);
  });
});
