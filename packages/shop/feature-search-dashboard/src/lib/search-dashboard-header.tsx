import { DataStat } from '@org/shop-ui-data-stat';
import { SEARCH_DASHBOARD_FEATURE } from './search-dashboard.routes';

export interface SearchDashboardHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function SearchDashboardHeader({
  count,
  total,
  loading,
  onRefresh,
}: SearchDashboardHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${SEARCH_DASHBOARD_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{SEARCH_DASHBOARD_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {SEARCH_DASHBOARD_FEATURE.domain} · {SEARCH_DASHBOARD_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <DataStat label="Items" value={count} tone="info" />
        <DataStat label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${SEARCH_DASHBOARD_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
