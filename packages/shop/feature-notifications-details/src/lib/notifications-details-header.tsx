import { MarketingBadge } from '@org/shop-ui-marketing-badge';
import { NOTIFICATIONS_DETAILS_FEATURE } from './notifications-details.routes';

export interface NotificationsDetailsHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function NotificationsDetailsHeader({
  count,
  total,
  loading,
  onRefresh,
}: NotificationsDetailsHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${NOTIFICATIONS_DETAILS_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{NOTIFICATIONS_DETAILS_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {NOTIFICATIONS_DETAILS_FEATURE.domain} ·{' '}
          {NOTIFICATIONS_DETAILS_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <MarketingBadge label="Items" value={count} tone="info" />
        <MarketingBadge label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${NOTIFICATIONS_DETAILS_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
