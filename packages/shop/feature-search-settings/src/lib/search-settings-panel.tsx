import { MediaStatGroup } from '@org/shop-ui-media-stat';
import { ChartsToolbar } from '@org/shop-ui-charts-toolbar';
import { NavigationBanner } from '@org/shop-ui-navigation-banner';
import type { SearchSettingsItem } from './search-settings.model';
import { SEARCH_SETTINGS_FEATURE } from './search-settings.routes';
import { describeSearchSettingsItem } from './search-settings.utils';

export interface SearchSettingsPanelProps {
  selected: SearchSettingsItem | null;
  onClear: () => void;
}

export function SearchSettingsPanel({
  selected,
  onClear,
}: SearchSettingsPanelProps) {
  if (!selected) {
    return (
      <aside
        className="feature-panel"
        data-testid={`${SEARCH_SETTINGS_FEATURE.testId}-panel`}
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
      data-testid={`${SEARCH_SETTINGS_FEATURE.testId}-panel`}
    >
      <h2
        className="feature-panel-title"
        data-testid={`${SEARCH_SETTINGS_FEATURE.testId}-panel-name`}
      >
        {selected.name}
      </h2>
      <p className="feature-panel-description">
        {describeSearchSettingsItem(selected)}
      </p>
      <MediaStatGroup
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
        <ChartsToolbar
          label="Charts Toolbar"
          value={selected.product.rating}
          size="sm"
        />
        <NavigationBanner
          label="Navigation Banner"
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
        data-testid={`${SEARCH_SETTINGS_FEATURE.testId}-clear`}
      >
        Clear selection
      </button>
    </aside>
  );
}
