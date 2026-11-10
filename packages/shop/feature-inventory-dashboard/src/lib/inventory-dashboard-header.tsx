import { CommerceStat } from '@org/shop-ui-commerce-stat';
import { INVENTORY_DASHBOARD_FEATURE } from './inventory-dashboard.routes';

export interface InventoryDashboardHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function InventoryDashboardHeader({
  count,
  total,
  loading,
  onRefresh,
}: InventoryDashboardHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${INVENTORY_DASHBOARD_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{INVENTORY_DASHBOARD_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {INVENTORY_DASHBOARD_FEATURE.domain} ·{' '}
          {INVENTORY_DASHBOARD_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <CommerceStat label="Items" value={count} tone="info" />
        <CommerceStat label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${INVENTORY_DASHBOARD_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
