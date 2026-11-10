import { expect, test } from '@playwright/test';
import {
  PREORDERS_DETAILS_FEATURE,
  PREORDERS_DETAILS_ITEM_COUNT,
} from '@org/shop-feature-preorders-details';
import { padTo } from '../support/pacing';

test.describe('Preorders Details', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(PREORDERS_DETAILS_FEATURE.route);
    await expect(
      page.getByTestId(PREORDERS_DETAILS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${PREORDERS_DETAILS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(PREORDERS_DETAILS_FEATURE.title);
    const rows = page.getByTestId(`${PREORDERS_DETAILS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(PREORDERS_DETAILS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
