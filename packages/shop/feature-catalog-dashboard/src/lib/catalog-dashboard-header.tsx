import { MediaToolbar } from '@org/shop-ui-media-toolbar';
import { CATALOG_DASHBOARD_FEATURE } from './catalog-dashboard.routes';

export interface CatalogDashboardHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function CatalogDashboardHeader({
  count,
  total,
  loading,
  onRefresh,
}: CatalogDashboardHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${CATALOG_DASHBOARD_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{CATALOG_DASHBOARD_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {CATALOG_DASHBOARD_FEATURE.domain} · {CATALOG_DASHBOARD_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <MediaToolbar label="Items" value={count} tone="info" />
        <MediaToolbar label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${CATALOG_DASHBOARD_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
