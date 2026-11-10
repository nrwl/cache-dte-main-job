import { expect, test } from '@playwright/test';
import {
  AUTH_OVERVIEW_FEATURE,
  AUTH_OVERVIEW_ITEM_COUNT,
} from '@org/shop-feature-auth-overview';
import { padTo } from '../support/pacing';

test.describe('Auth Overview', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(AUTH_OVERVIEW_FEATURE.route);
    await expect(page.getByTestId(AUTH_OVERVIEW_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${AUTH_OVERVIEW_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(AUTH_OVERVIEW_FEATURE.title);
    const rows = page.getByTestId(`${AUTH_OVERVIEW_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(AUTH_OVERVIEW_ITEM_COUNT);
    await padTo(startedAt);
  });
});
