import { MediaStat } from '@org/shop-ui-media-stat';
import { INVENTORY_OVERVIEW_FEATURE } from './inventory-overview.routes';

export interface InventoryOverviewHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function InventoryOverviewHeader({
  count,
  total,
  loading,
  onRefresh,
}: InventoryOverviewHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${INVENTORY_OVERVIEW_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{INVENTORY_OVERVIEW_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {INVENTORY_OVERVIEW_FEATURE.domain} ·{' '}
          {INVENTORY_OVERVIEW_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <MediaStat label="Items" value={count} tone="info" />
        <MediaStat label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${INVENTORY_OVERVIEW_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
