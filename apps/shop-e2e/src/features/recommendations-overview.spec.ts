import { expect, test } from '@playwright/test';
import {
  RECOMMENDATIONS_OVERVIEW_FEATURE,
  RECOMMENDATIONS_OVERVIEW_ITEM_COUNT,
} from '@org/shop-feature-recommendations-overview';
import { padTo } from '../support/pacing';

test.describe('Recommendations Overview', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(RECOMMENDATIONS_OVERVIEW_FEATURE.route);
    await expect(
      page.getByTestId(RECOMMENDATIONS_OVERVIEW_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${RECOMMENDATIONS_OVERVIEW_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(RECOMMENDATIONS_OVERVIEW_FEATURE.title);
    const rows = page.getByTestId(
      `${RECOMMENDATIONS_OVERVIEW_FEATURE.testId}-row`,
    );
    await expect(rows).toHaveCount(RECOMMENDATIONS_OVERVIEW_ITEM_COUNT);
    await padTo(startedAt);
  });
});
