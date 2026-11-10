import { DataBadgeGroup } from '@org/shop-ui-data-badge';
import { OverlayBadge } from '@org/shop-ui-overlay-badge';
import { MarketingPanel } from '@org/shop-ui-marketing-panel';
import type { ShippingDashboardItem } from './shipping-dashboard.model';
import { SHIPPING_DASHBOARD_FEATURE } from './shipping-dashboard.routes';
import { describeShippingDashboardItem } from './shipping-dashboard.utils';

export interface ShippingDashboardPanelProps {
  selected: ShippingDashboardItem | null;
  onClear: () => void;
}

export function ShippingDashboardPanel({
  selected,
  onClear,
}: ShippingDashboardPanelProps) {
  if (!selected) {
    return (
      <aside
        className="feature-panel"
        data-testid={`${SHIPPING_DASHBOARD_FEATURE.testId}-panel`}
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
      data-testid={`${SHIPPING_DASHBOARD_FEATURE.testId}-panel`}
    >
      <h2
        className="feature-panel-title"
        data-testid={`${SHIPPING_DASHBOARD_FEATURE.testId}-panel-name`}
      >
        {selected.name}
      </h2>
      <p className="feature-panel-description">
        {describeShippingDashboardItem(selected)}
      </p>
      <DataBadgeGroup
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
        <OverlayBadge
          label="Overlay Badge"
          value={selected.product.rating}
          size="sm"
        />
        <MarketingPanel
          label="Marketing Panel"
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
        data-testid={`${SHIPPING_DASHBOARD_FEATURE.testId}-clear`}
      >
        Clear selection
      </button>
    </aside>
  );
}
