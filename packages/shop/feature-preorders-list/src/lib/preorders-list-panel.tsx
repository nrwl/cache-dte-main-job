import { CorePanelGroup } from '@org/shop-ui-core-panel';
import { InputsStat } from '@org/shop-ui-inputs-stat';
import { FormsStat } from '@org/shop-ui-forms-stat';
import type { PreordersListItem } from './preorders-list.model';
import { PREORDERS_LIST_FEATURE } from './preorders-list.routes';
import { describePreordersListItem } from './preorders-list.utils';

export interface PreordersListPanelProps {
  selected: PreordersListItem | null;
  onClear: () => void;
}

export function PreordersListPanel({
  selected,
  onClear,
}: PreordersListPanelProps) {
  if (!selected) {
    return (
      <aside
        className="feature-panel"
        data-testid={`${PREORDERS_LIST_FEATURE.testId}-panel`}
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
      data-testid={`${PREORDERS_LIST_FEATURE.testId}-panel`}
    >
      <h2
        className="feature-panel-title"
        data-testid={`${PREORDERS_LIST_FEATURE.testId}-panel-name`}
      >
        {selected.name}
      </h2>
      <p className="feature-panel-description">
        {describePreordersListItem(selected)}
      </p>
      <CorePanelGroup
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
        <InputsStat
          label="Inputs Stat"
          value={selected.product.rating}
          size="sm"
        />
        <FormsStat
          label="Forms Stat"
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
        data-testid={`${PREORDERS_LIST_FEATURE.testId}-clear`}
      >
        Clear selection
      </button>
    </aside>
  );
}
