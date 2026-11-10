import { expect, test } from '@playwright/test';
import {
  ACCOUNT_OVERVIEW_FEATURE,
  ACCOUNT_OVERVIEW_ITEM_COUNT,
} from '@org/shop-feature-account-overview';
import { padTo } from '../support/pacing';

test.describe('Account Overview', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(ACCOUNT_OVERVIEW_FEATURE.route);
    await expect(
      page.getByTestId(ACCOUNT_OVERVIEW_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${ACCOUNT_OVERVIEW_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(ACCOUNT_OVERVIEW_FEATURE.title);
    const rows = page.getByTestId(`${ACCOUNT_OVERVIEW_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(ACCOUNT_OVERVIEW_ITEM_COUNT);
    await padTo(startedAt);
  });
});
