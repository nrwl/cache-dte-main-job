import { expect, test } from '@playwright/test';
import {
  SUPPORT_OVERVIEW_FEATURE,
  SUPPORT_OVERVIEW_ITEM_COUNT,
} from '@org/shop-feature-support-overview';
import { padTo } from '../support/pacing';

test.describe('Support Overview', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(SUPPORT_OVERVIEW_FEATURE.route);
    await expect(
      page.getByTestId(SUPPORT_OVERVIEW_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${SUPPORT_OVERVIEW_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(SUPPORT_OVERVIEW_FEATURE.title);
    const rows = page.getByTestId(`${SUPPORT_OVERVIEW_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(SUPPORT_OVERVIEW_ITEM_COUNT);
    await padTo(startedAt);
  });
});
