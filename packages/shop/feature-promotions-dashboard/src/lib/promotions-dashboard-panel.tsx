import { OverlayStatGroup } from '@org/shop-ui-overlay-stat';
import { FeedbackBanner } from '@org/shop-ui-feedback-banner';
import { CoreToolbar } from '@org/shop-ui-core-toolbar';
import type { PromotionsDashboardItem } from './promotions-dashboard.model';
import { PROMOTIONS_DASHBOARD_FEATURE } from './promotions-dashboard.routes';
import { describePromotionsDashboardItem } from './promotions-dashboard.utils';

export interface PromotionsDashboardPanelProps {
  selected: PromotionsDashboardItem | null;
  onClear: () => void;
}

export function PromotionsDashboardPanel({
  selected,
  onClear,
}: PromotionsDashboardPanelProps) {
  if (!selected) {
    return (
      <aside
        className="feature-panel"
        data-testid={`${PROMOTIONS_DASHBOARD_FEATURE.testId}-panel`}
      >
        <p className="feature-panel-hint">
          Select an entry to see its details.
        </p>
      </aside>
    );
  }

  return (
    <aside
      className="feature-panel"
      data-testid={`${PROMOTIONS_DASHBOARD_FEATURE.testId}-panel`}
    >
      <h2
        className="feature-panel-title"
        data-testid={`${PROMOTIONS_DASHBOARD_FEATURE.testId}-panel-name`}
      >
        {selected.name}
      </h2>
      <p className="feature-panel-description">
        {describePromotionsDashboardItem(selected)}
      </p>
      <OverlayStatGroup
        title="Details"
        items={[
          { id: 'amount', label: 'Amount', value: selected.amount },
          { id: 'quantity', label: 'Quantity', value: selected.quantity },
          { id: 'status', label: 'Status', value: selected.status },
          { id: 'price', label: 'Unit price', value: selected.product.price },
          { id: 'rating', label: 'Rating', value: selected.product.rating },
        ]}
      />
      <div className="feature-panel-extra">
        <FeedbackBanner
          label="Feedback Banner"
          value={selected.product.rating}
          size="sm"
        />
        <CoreToolbar
          label="Core Toolbar"
          value={selected.product.rating}
          size="sm"
        />
      </div>
      <ul className="feature-tags">
        {selected.tags.map((tag) => (
          <li key={tag} className="feature-tag">
            {tag}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="feature-button secondary"
        onClick={onClear}
        data-testid={`${PROMOTIONS_DASHBOARD_FEATURE.testId}-clear`}
      >
        Clear selection
      </button>
    </aside>
  );
}
