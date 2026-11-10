import { expect, test } from '@playwright/test';
import {
  FEEDBACK_LIST_FEATURE,
  FEEDBACK_LIST_ITEM_COUNT,
} from '@org/shop-feature-feedback-list';
import { padTo } from '../support/pacing';

test.describe('Feedback List', () => {
  test('renders the feature and lists every item', async ({ page }) => {
    const startedAt = Date.now();
    await page.goto(FEEDBACK_LIST_FEATURE.route);
    await expect(page.getByTestId(FEEDBACK_LIST_FEATURE.testId)).toBeVisible();
    const heading = page
      .getByTestId(`${FEEDBACK_LIST_FEATURE.testId}-header`)
      .getByRole('heading', { level: 1 });
    await expect(heading).toHaveText(FEEDBACK_LIST_FEATURE.title);
    const rows = page.getByTestId(`${FEEDBACK_LIST_FEATURE.testId}-row`);
    await expect(rows).toHaveCount(FEEDBACK_LIST_ITEM_COUNT);
    await padTo(startedAt);
  });
});
