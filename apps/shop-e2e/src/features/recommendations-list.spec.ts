import { expect, test } from '@playwright/test';
import {
  RECOMMENDATIONS_LIST_FEATURE,
  RECOMMENDATIONS_LIST_ITEM_COUNT,
} from '@org/shop-feature-recommendations-list';
import { padTo } from '../support/pacing';

test.describe('Recommendations List', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(RECOMMENDATIONS_LIST_FEATURE.route);
    await expect(
      page.getByTestId(RECOMMENDATIONS_LIST_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${RECOMMENDATIONS_LIST_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(RECOMMENDATIONS_LIST_FEATURE.title);
    const rows = page.getByTestId(`${RECOMMENDATIONS_LIST_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(RECOMMENDATIONS_LIST_ITEM_COUNT);
    await padTo(startedAt);
  });
});
