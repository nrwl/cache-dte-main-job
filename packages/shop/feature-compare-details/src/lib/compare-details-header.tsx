import { CommerceBadge } from '@org/shop-ui-commerce-badge';
import { COMPARE_DETAILS_FEATURE } from './compare-details.routes';

export interface CompareDetailsHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function CompareDetailsHeader({
  count,
  total,
  loading,
  onRefresh,
}: CompareDetailsHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${COMPARE_DETAILS_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{COMPARE_DETAILS_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {COMPARE_DETAILS_FEATURE.domain} · {COMPARE_DETAILS_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <CommerceBadge label="Items" value={count} tone="info" />
        <CommerceBadge label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${COMPARE_DETAILS_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
