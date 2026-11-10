import { expect, test } from '@playwright/test';
import {
  PROFILE_DASHBOARD_FEATURE,
  PROFILE_DASHBOARD_ITEM_COUNT,
} from '@org/shop-feature-profile-dashboard';
import { padTo } from '../support/pacing';

test.describe('Profile Dashboard', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(PROFILE_DASHBOARD_FEATURE.route);
    await expect(
      page.getByTestId(PROFILE_DASHBOARD_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${PROFILE_DASHBOARD_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(PROFILE_DASHBOARD_FEATURE.title);
    const rows = page.getByTestId(`${PROFILE_DASHBOARD_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(PROFILE_DASHBOARD_ITEM_COUNT);
    await padTo(startedAt);
  });
});
