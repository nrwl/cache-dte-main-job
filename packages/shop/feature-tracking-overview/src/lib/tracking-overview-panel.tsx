import { CoreToolbarGroup } from '@org/shop-ui-core-toolbar';
import { CommerceToolbar } from '@org/shop-ui-commerce-toolbar';
import { LayoutStat } from '@org/shop-ui-layout-stat';
import type { TrackingOverviewItem } from './tracking-overview.model';
import { TRACKING_OVERVIEW_FEATURE } from './tracking-overview.routes';
import { describeTrackingOverviewItem } from './tracking-overview.utils';

export interface TrackingOverviewPanelProps {
  selected: TrackingOverviewItem | null;
  onClear: () => void;
}

export function TrackingOverviewPanel({
  selected,
  onClear,
}: TrackingOverviewPanelProps) {
  if (!selected) {
    return (
      <aside
        className="feature-panel"
        data-testid={`${TRACKING_OVERVIEW_FEATURE.testId}-panel`}
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
      data-testid={`${TRACKING_OVERVIEW_FEATURE.testId}-panel`}
    >
      <h2
        className="feature-panel-title"
        data-testid={`${TRACKING_OVERVIEW_FEATURE.testId}-panel-name`}
      >
        {selected.name}
      </h2>
      <p className="feature-panel-description">
        {describeTrackingOverviewItem(selected)}
      </p>
      <CoreToolbarGroup
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
        <CommerceToolbar
          label="Commerce Toolbar"
          value={selected.product.rating}
          size="sm"
        />
        <LayoutStat
          label="Layout Stat"
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
        data-testid={`${TRACKING_OVERVIEW_FEATURE.testId}-clear`}
      >
        Clear selection
      </button>
    </aside>
  );
}
