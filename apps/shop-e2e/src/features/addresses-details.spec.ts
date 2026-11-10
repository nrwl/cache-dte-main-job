import { expect, test } from '@playwright/test';
import {
  ADDRESSES_DETAILS_FEATURE,
  ADDRESSES_DETAILS_ITEM_COUNT,
} from '@org/shop-feature-addresses-details';
import { padTo } from '../support/pacing';

test.describe('Addresses Details', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(ADDRESSES_DETAILS_FEATURE.route);
    await expect(
      page.getByTestId(ADDRESSES_DETAILS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${ADDRESSES_DETAILS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(ADDRESSES_DETAILS_FEATURE.title);
    const rows = page.getByTestId(`${ADDRESSES_DETAILS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(ADDRESSES_DETAILS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
