import { InputsBadge } from '@org/shop-ui-inputs-badge';
import { RETURNS_DETAILS_FEATURE } from './returns-details.routes';

export interface ReturnsDetailsHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function ReturnsDetailsHeader({
  count,
  total,
  loading,
  onRefresh,
}: ReturnsDetailsHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${RETURNS_DETAILS_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{RETURNS_DETAILS_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {RETURNS_DETAILS_FEATURE.domain} · {RETURNS_DETAILS_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <InputsBadge label="Items" value={count} tone="info" />
        <InputsBadge label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${RETURNS_DETAILS_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
