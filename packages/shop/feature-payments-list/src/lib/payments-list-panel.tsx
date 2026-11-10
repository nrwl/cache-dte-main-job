import { TypographyStatGroup } from '@org/shop-ui-typography-stat';
import { DataPanel } from '@org/shop-ui-data-panel';
import { CommerceStat } from '@org/shop-ui-commerce-stat';
import type { PaymentsListItem } from './payments-list.model';
import { PAYMENTS_LIST_FEATURE } from './payments-list.routes';
import { describePaymentsListItem } from './payments-list.utils';

export interface PaymentsListPanelProps {
  selected: PaymentsListItem | null;
  onClear: () => void;
}

export function PaymentsListPanel({
  selected,
  onClear,
}: PaymentsListPanelProps) {
  if (!selected) {
    return (
      <aside
        className="feature-panel"
        data-testid={`${PAYMENTS_LIST_FEATURE.testId}-panel`}
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
      data-testid={`${PAYMENTS_LIST_FEATURE.testId}-panel`}
    >
      <h2
        className="feature-panel-title"
        data-testid={`${PAYMENTS_LIST_FEATURE.testId}-panel-name`}
      >
        {selected.name}
      </h2>
      <p className="feature-panel-description">
        {describePaymentsListItem(selected)}
      </p>
      <TypographyStatGroup
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
        <DataPanel
          label="Data Panel"
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
        data-testid={`${PAYMENTS_LIST_FEATURE.testId}-clear`}
      >
        Clear selection
      </button>
    </aside>
  );
}
