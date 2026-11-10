import { DataStat } from '@org/shop-ui-data-stat';
import { NOTIFICATIONS_SETTINGS_FEATURE } from './notifications-settings.routes';

export interface NotificationsSettingsHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function NotificationsSettingsHeader({
  count,
  total,
  loading,
  onRefresh,
}: NotificationsSettingsHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${NOTIFICATIONS_SETTINGS_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">
          {NOTIFICATIONS_SETTINGS_FEATURE.title}
        </h1>
        <p className="feature-subtitle">
          {NOTIFICATIONS_SETTINGS_FEATURE.domain} ·{' '}
          {NOTIFICATIONS_SETTINGS_FEATURE.kind}
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
          data-testid={`${NOTIFICATIONS_SETTINGS_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
