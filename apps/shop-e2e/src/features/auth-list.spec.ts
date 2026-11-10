import { expect, test } from '@playwright/test';
import {
  AUTH_LIST_FEATURE,
  AUTH_LIST_ITEM_COUNT,
} from '@org/shop-feature-auth-list';
import { padTo } from '../support/pacing';

test.describe('Auth List', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(AUTH_LIST_FEATURE.route);
    await expect(page.getByTestId(AUTH_LIST_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${AUTH_LIST_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(AUTH_LIST_FEATURE.title);
    const rows = page.getByTestId(`${AUTH_LIST_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(AUTH_LIST_ITEM_COUNT);
    await padTo(startedAt);
  });
});
