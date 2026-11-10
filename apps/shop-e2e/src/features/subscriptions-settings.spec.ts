import { expect, test } from '@playwright/test';
import {
  SUBSCRIPTIONS_SETTINGS_FEATURE,
  SUBSCRIPTIONS_SETTINGS_ITEM_COUNT,
} from '@org/shop-feature-subscriptions-settings';
import { padTo } from '../support/pacing';

test.describe('Subscriptions Settings', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(SUBSCRIPTIONS_SETTINGS_FEATURE.route);
    await expect(
      page.getByTestId(SUBSCRIPTIONS_SETTINGS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${SUBSCRIPTIONS_SETTINGS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(SUBSCRIPTIONS_SETTINGS_FEATURE.title);
    const rows = page.getByTestId(
      `${SUBSCRIPTIONS_SETTINGS_FEATURE.testId}-row`,
    );
    await expect(rows).toHaveCount(SUBSCRIPTIONS_SETTINGS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
