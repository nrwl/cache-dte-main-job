import { LayoutPanel } from '@org/shop-ui-layout-panel';
import { SIZING_SETTINGS_FEATURE } from './sizing-settings.routes';

export interface SizingSettingsHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function SizingSettingsHeader({
  count,
  total,
  loading,
  onRefresh,
}: SizingSettingsHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${SIZING_SETTINGS_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{SIZING_SETTINGS_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {SIZING_SETTINGS_FEATURE.domain} · {SIZING_SETTINGS_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <LayoutPanel label="Items" value={count} tone="info" />
        <LayoutPanel label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${SIZING_SETTINGS_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
