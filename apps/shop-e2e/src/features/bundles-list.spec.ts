import { expect, test } from '@playwright/test';
import {
  BUNDLES_LIST_FEATURE,
  BUNDLES_LIST_ITEM_COUNT,
} from '@org/shop-feature-bundles-list';
import { padTo } from '../support/pacing';

test.describe('Bundles List', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(BUNDLES_LIST_FEATURE.route);
    await expect(page.getByTestId(BUNDLES_LIST_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${BUNDLES_LIST_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(BUNDLES_LIST_FEATURE.title);
    const rows = page.getByTestId(`${BUNDLES_LIST_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(BUNDLES_LIST_ITEM_COUNT);
    await padTo(startedAt);
  });
});
