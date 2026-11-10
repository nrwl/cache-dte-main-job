import { expect, test } from '@playwright/test';
import {
  BUNDLES_OVERVIEW_FEATURE,
  BUNDLES_OVERVIEW_ITEM_COUNT,
} from '@org/shop-feature-bundles-overview';
import { padTo } from '../support/pacing';

test.describe('Bundles Overview', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(BUNDLES_OVERVIEW_FEATURE.route);
    await expect(
      page.getByTestId(BUNDLES_OVERVIEW_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${BUNDLES_OVERVIEW_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(BUNDLES_OVERVIEW_FEATURE.title);
    const rows = page.getByTestId(`${BUNDLES_OVERVIEW_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(BUNDLES_OVERVIEW_ITEM_COUNT);
    await padTo(startedAt);
  });
});
