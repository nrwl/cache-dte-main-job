import { CorePanel } from '@org/shop-ui-core-panel';
import { NOTIFICATIONS_OVERVIEW_FEATURE } from './notifications-overview.routes';

export interface NotificationsOverviewHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function NotificationsOverviewHeader({
  count,
  total,
  loading,
  onRefresh,
}: NotificationsOverviewHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${NOTIFICATIONS_OVERVIEW_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">
          {NOTIFICATIONS_OVERVIEW_FEATURE.title}
        </h1>
        <p className="feature-subtitle">
          {NOTIFICATIONS_OVERVIEW_FEATURE.domain} ·{' '}
          {NOTIFICATIONS_OVERVIEW_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <CorePanel label="Items" value={count} tone="info" />
        <CorePanel label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${NOTIFICATIONS_OVERVIEW_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
