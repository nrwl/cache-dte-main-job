import { expect, test } from '@playwright/test';
import {
  NOTIFICATIONS_SETTINGS_FEATURE,
  NOTIFICATIONS_SETTINGS_ITEM_COUNT,
} from '@org/shop-feature-notifications-settings';
import { padTo } from '../support/pacing';

test.describe('Notifications Settings', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(NOTIFICATIONS_SETTINGS_FEATURE.route);
    await expect(
      page.getByTestId(NOTIFICATIONS_SETTINGS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${NOTIFICATIONS_SETTINGS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(NOTIFICATIONS_SETTINGS_FEATURE.title);
    const rows = page.getByTestId(
      `${NOTIFICATIONS_SETTINGS_FEATURE.testId}-row`,
    );
    await expect(rows).toHaveCount(NOTIFICATIONS_SETTINGS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
