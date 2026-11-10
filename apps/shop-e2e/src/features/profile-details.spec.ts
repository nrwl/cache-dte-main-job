import { expect, test } from '@playwright/test';
import {
  PROFILE_DETAILS_FEATURE,
  PROFILE_DETAILS_ITEM_COUNT,
} from '@org/shop-feature-profile-details';
import { padTo } from '../support/pacing';

test.describe('Profile Details', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(PROFILE_DETAILS_FEATURE.route);
    await expect(
      page.getByTestId(PROFILE_DETAILS_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${PROFILE_DETAILS_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(PROFILE_DETAILS_FEATURE.title);
    const rows = page.getByTestId(`${PROFILE_DETAILS_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(PROFILE_DETAILS_ITEM_COUNT);
    await padTo(startedAt);
  });
});
