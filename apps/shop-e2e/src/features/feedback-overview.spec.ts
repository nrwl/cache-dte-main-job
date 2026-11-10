import { expect, test } from '@playwright/test';
import {
  FEEDBACK_OVERVIEW_FEATURE,
  FEEDBACK_OVERVIEW_ITEM_COUNT,
} from '@org/shop-feature-feedback-overview';
import { padTo } from '../support/pacing';

test.describe('Feedback Overview', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(FEEDBACK_OVERVIEW_FEATURE.route);
    await expect(
      page.getByTestId(FEEDBACK_OVERVIEW_FEATURE.testId),
    ).toBeVisible();
    const heading = page
      .getByTestId(`${FEEDBACK_OVERVIEW_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(FEEDBACK_OVERVIEW_FEATURE.title);
    const rows = page.getByTestId(`${FEEDBACK_OVERVIEW_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(FEEDBACK_OVERVIEW_ITEM_COUNT);
    await padTo(startedAt);
  });
});
