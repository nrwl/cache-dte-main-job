import { expect, test } from '@playwright/test';
import {
  SUPPORT_LIST_FEATURE,
  SUPPORT_LIST_ITEM_COUNT,
} from '@org/shop-feature-support-list';
import { padTo } from '../support/pacing';

test.describe('Support List', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(SUPPORT_LIST_FEATURE.route);
    await expect(page.getByTestId(SUPPORT_LIST_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${SUPPORT_LIST_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(SUPPORT_LIST_FEATURE.title);
    const rows = page.getByTestId(`${SUPPORT_LIST_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(SUPPORT_LIST_ITEM_COUNT);
    await padTo(startedAt);
  });
});
