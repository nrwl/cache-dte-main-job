import { CoreStatGroup } from '@org/shop-ui-core-stat';
import { LayoutBanner } from '@org/shop-ui-layout-banner';
import { CommerceStat } from '@org/shop-ui-commerce-stat';
import type { AccountDetailsItem } from './account-details.model';
import { ACCOUNT_DETAILS_FEATURE } from './account-details.routes';
import { describeAccountDetailsItem } from './account-details.utils';

export interface AccountDetailsPanelProps {
  selected: AccountDetailsItem | null;
  onClear: () => void;
}

export function AccountDetailsPanel({
  selected,
  onClear,
}: AccountDetailsPanelProps) {
  if (!selected) {
    return (
      <aside
        className="feature-panel"
        data-testid={`${ACCOUNT_DETAILS_FEATURE.testId}-panel`}
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
      data-testid={`${ACCOUNT_DETAILS_FEATURE.testId}-panel`}
    >
      <h2
        className="feature-panel-title"
        data-testid={`${ACCOUNT_DETAILS_FEATURE.testId}-panel-name`}
      >
        {selected.name}
      </h2>
      <p className="feature-panel-description">
        {describeAccountDetailsItem(selected)}
      </p>
      <CoreStatGroup
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
        <LayoutBanner
          label="Layout Banner"
          value={selected.product.rating}
          size="sm"
        />
        <CommerceStat
          label="Commerce Stat"
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
        data-testid={`${ACCOUNT_DETAILS_FEATURE.testId}-clear`}
      >
        Clear selection
      </button>
    </aside>
  );
}
