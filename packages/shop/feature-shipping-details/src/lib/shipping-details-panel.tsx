import { OverlayPanelGroup } from '@org/shop-ui-overlay-panel';
import { InputsToolbar } from '@org/shop-ui-inputs-toolbar';
import { MarketingBadge } from '@org/shop-ui-marketing-badge';
import type { ShippingDetailsItem } from './shipping-details.model';
import { SHIPPING_DETAILS_FEATURE } from './shipping-details.routes';
import { describeShippingDetailsItem } from './shipping-details.utils';

export interface ShippingDetailsPanelProps {
  selected: ShippingDetailsItem | null;
  onClear: () => void;
}

export function ShippingDetailsPanel({
  selected,
  onClear,
}: ShippingDetailsPanelProps) {
  if (!selected) {
    return (
      <aside
        className="feature-panel"
        data-testid={`${SHIPPING_DETAILS_FEATURE.testId}-panel`}
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
      data-testid={`${SHIPPING_DETAILS_FEATURE.testId}-panel`}
    >
      <h2
        className="feature-panel-title"
        data-testid={`${SHIPPING_DETAILS_FEATURE.testId}-panel-name`}
      >
        {selected.name}
      </h2>
      <p className="feature-panel-description">
        {describeShippingDetailsItem(selected)}
      </p>
      <OverlayPanelGroup
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
        <InputsToolbar
          label="Inputs Toolbar"
          value={selected.product.rating}
          size="sm"
        />
        <MarketingBadge
          label="Marketing Badge"
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
        data-testid={`${SHIPPING_DETAILS_FEATURE.testId}-clear`}
      >
        Clear selection
      </button>
    </aside>
  );
}
