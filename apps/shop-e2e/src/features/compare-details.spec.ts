import { expect, test } from '@playwright/test';
import {
  COMPARE_DETAILS_FEATURE,
  COMPARE_DETAILS_ITEM_COUNT,
} from '@org/shop-feature-compare-details';
import { padTo } from '../support/pacing';

test.describe('Compare Details', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(COMPARE_DETAILS_FEATURE.route);
    await expect(
      page.getByTestId(COMPARE_DETAILS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${COMPARE_DETAILS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(COMPARE_DETAILS_FEATURE.title);
    const rows = page.getByTestId(`${COMPARE_DETAILS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(COMPARE_DETAILS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
