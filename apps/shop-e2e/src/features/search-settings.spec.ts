import { expect, test } from '@playwright/test';
import {
  SEARCH_SETTINGS_FEATURE,
  SEARCH_SETTINGS_ITEM_COUNT,
} from '@org/shop-feature-search-settings';
import { padTo } from '../support/pacing';

test.describe('Search Settings', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(SEARCH_SETTINGS_FEATURE.route);
    await expect(
      page.getByTestId(SEARCH_SETTINGS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${SEARCH_SETTINGS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(SEARCH_SETTINGS_FEATURE.title);
    const rows = page.getByTestId(`${SEARCH_SETTINGS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(SEARCH_SETTINGS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
