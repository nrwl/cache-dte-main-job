import { expect, test } from '@playwright/test';
import {
  INVENTORY_DETAILS_FEATURE,
  INVENTORY_DETAILS_ITEM_COUNT,
} from '@org/shop-feature-inventory-details';
import { padTo } from '../support/pacing';

test.describe('Inventory Details', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(INVENTORY_DETAILS_FEATURE.route);
    await expect(
      page.getByTestId(INVENTORY_DETAILS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${INVENTORY_DETAILS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(INVENTORY_DETAILS_FEATURE.title);
    const rows = page.getByTestId(`${INVENTORY_DETAILS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(INVENTORY_DETAILS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
