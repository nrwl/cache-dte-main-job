import { expect, test } from '@playwright/test';
import {
  CATALOG_SETTINGS_FEATURE,
  CATALOG_SETTINGS_ITEM_COUNT,
} from '@org/shop-feature-catalog-settings';
import { padTo } from '../support/pacing';

test.describe('Catalog Settings', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(CATALOG_SETTINGS_FEATURE.route);
    await expect(
      page.getByTestId(CATALOG_SETTINGS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${CATALOG_SETTINGS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(CATALOG_SETTINGS_FEATURE.title);
    const rows = page.getByTestId(`${CATALOG_SETTINGS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(CATALOG_SETTINGS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
