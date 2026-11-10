import { expect, test } from '@playwright/test';
import {
  LOYALTY_DETAILS_FEATURE,
  LOYALTY_DETAILS_ITEM_COUNT,
} from '@org/shop-feature-loyalty-details';
import { padTo } from '../support/pacing';

test.describe('Loyalty Details', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(LOYALTY_DETAILS_FEATURE.route);
    await expect(
      page.getByTestId(LOYALTY_DETAILS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${LOYALTY_DETAILS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(LOYALTY_DETAILS_FEATURE.title);
    const rows = page.getByTestId(`${LOYALTY_DETAILS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(LOYALTY_DETAILS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
