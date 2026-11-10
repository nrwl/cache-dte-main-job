import { expect, test } from '@playwright/test';
import {
  SIZING_DETAILS_FEATURE,
  SIZING_DETAILS_ITEM_COUNT,
} from '@org/shop-feature-sizing-details';
import { padTo } from '../support/pacing';

test.describe('Sizing Details', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(SIZING_DETAILS_FEATURE.route);
    await expect(page.getByTestId(SIZING_DETAILS_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${SIZING_DETAILS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(SIZING_DETAILS_FEATURE.title);
    const rows = page.getByTestId(`${SIZING_DETAILS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(SIZING_DETAILS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
