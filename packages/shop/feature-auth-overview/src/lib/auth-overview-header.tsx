import { OverlayStat } from '@org/shop-ui-overlay-stat';
import { AUTH_OVERVIEW_FEATURE } from './auth-overview.routes';

export interface AuthOverviewHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function AuthOverviewHeader({
  count,
  total,
  loading,
  onRefresh,
}: AuthOverviewHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${AUTH_OVERVIEW_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{AUTH_OVERVIEW_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {AUTH_OVERVIEW_FEATURE.domain} · {AUTH_OVERVIEW_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <OverlayStat label="Items" value={count} tone="info" />
        <OverlayStat label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${AUTH_OVERVIEW_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
