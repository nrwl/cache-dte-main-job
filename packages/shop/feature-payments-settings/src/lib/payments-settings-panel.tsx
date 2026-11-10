import { LayoutStatGroup } from '@org/shop-ui-layout-stat';
import { FeedbackBanner } from '@org/shop-ui-feedback-banner';
import { CoreBadge } from '@org/shop-ui-core-badge';
import type { PaymentsSettingsItem } from './payments-settings.model';
import { PAYMENTS_SETTINGS_FEATURE } from './payments-settings.routes';
import { describePaymentsSettingsItem } from './payments-settings.utils';

export interface PaymentsSettingsPanelProps {
  selected: PaymentsSettingsItem | null;
  onClear: () => void;
}

export function PaymentsSettingsPanel({
  selected,
  onClear,
}: PaymentsSettingsPanelProps) {
  if (!selected) {
    return (
      <aside
        className="feature-panel"
        data-testid={`${PAYMENTS_SETTINGS_FEATURE.testId}-panel`}
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
      data-testid={`${PAYMENTS_SETTINGS_FEATURE.testId}-panel`}
    >
      <h2
        className="feature-panel-title"
        data-testid={`${PAYMENTS_SETTINGS_FEATURE.testId}-panel-name`}
      >
        {selected.name}
      </h2>
      <p className="feature-panel-description">
        {describePaymentsSettingsItem(selected)}
      </p>
      <LayoutStatGroup
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
        <CoreBadge
          label="Core Badge"
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
        data-testid={`${PAYMENTS_SETTINGS_FEATURE.testId}-clear`}
      >
        Clear selection
      </button>
    </aside>
  );
}
