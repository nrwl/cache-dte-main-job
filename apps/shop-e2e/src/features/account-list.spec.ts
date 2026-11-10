import { expect, test } from '@playwright/test';
import {
  ACCOUNT_LIST_FEATURE,
  ACCOUNT_LIST_ITEM_COUNT,
} from '@org/shop-feature-account-list';
import { padTo } from '../support/pacing';

test.describe('Account List', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(ACCOUNT_LIST_FEATURE.route);
    await expect(page.getByTestId(ACCOUNT_LIST_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${ACCOUNT_LIST_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(ACCOUNT_LIST_FEATURE.title);
    const rows = page.getByTestId(`${ACCOUNT_LIST_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(ACCOUNT_LIST_ITEM_COUNT);
    await padTo(startedAt);
  });
});
