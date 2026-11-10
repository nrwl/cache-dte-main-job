import { NavigationBadgeGroup } from '@org/shop-ui-navigation-badge';
import { CoreBadge } from '@org/shop-ui-core-badge';
import { LayoutBanner } from '@org/shop-ui-layout-banner';
import type { FeedbackSettingsItem } from './feedback-settings.model';
import { FEEDBACK_SETTINGS_FEATURE } from './feedback-settings.routes';
import { describeFeedbackSettingsItem } from './feedback-settings.utils';

export interface FeedbackSettingsPanelProps {
  selected: FeedbackSettingsItem | null;
  onClear: () => void;
}

export function FeedbackSettingsPanel({
  selected,
  onClear,
}: FeedbackSettingsPanelProps) {
  if (!selected) {
    return (
      <aside
        className="feature-panel"
        data-testid={`${FEEDBACK_SETTINGS_FEATURE.testId}-panel`}
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
      data-testid={`${FEEDBACK_SETTINGS_FEATURE.testId}-panel`}
    >
      <h2
        className="feature-panel-title"
        data-testid={`${FEEDBACK_SETTINGS_FEATURE.testId}-panel-name`}
      >
        {selected.name}
      </h2>
      <p className="feature-panel-description">
        {describeFeedbackSettingsItem(selected)}
      </p>
      <NavigationBadgeGroup
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
        <CoreBadge
          label="Core Badge"
          value={selected.product.rating}
          size="sm"
        />
        <LayoutBanner
          label="Layout Banner"
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
        data-testid={`${FEEDBACK_SETTINGS_FEATURE.testId}-clear`}
      >
        Clear selection
      </button>
    </aside>
  );
}
