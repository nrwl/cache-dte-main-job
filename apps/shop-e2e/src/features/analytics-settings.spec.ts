import { expect, test } from '@playwright/test';
import {
  ANALYTICS_SETTINGS_FEATURE,
  ANALYTICS_SETTINGS_ITEM_COUNT,
} from '@org/shop-feature-analytics-settings';
import { padTo } from '../support/pacing';

test.describe('Analytics Settings', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(ANALYTICS_SETTINGS_FEATURE.route);
    await expect(
      page.getByTestId(ANALYTICS_SETTINGS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${ANALYTICS_SETTINGS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(ANALYTICS_SETTINGS_FEATURE.title);
    const rows = page.getByTestId(`${ANALYTICS_SETTINGS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(ANALYTICS_SETTINGS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
