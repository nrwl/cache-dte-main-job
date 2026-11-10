import { DataStat } from '@org/shop-ui-data-stat';
import { PROFILE_OVERVIEW_FEATURE } from './profile-overview.routes';

export interface ProfileOverviewHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function ProfileOverviewHeader({
  count,
  total,
  loading,
  onRefresh,
}: ProfileOverviewHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${PROFILE_OVERVIEW_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{PROFILE_OVERVIEW_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {PROFILE_OVERVIEW_FEATURE.domain} · {PROFILE_OVERVIEW_FEATURE.kind}
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
          data-testid={`${PROFILE_OVERVIEW_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
