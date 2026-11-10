import { FormsPanel } from '@org/shop-ui-forms-panel';
import { REVIEWS_LIST_FEATURE } from './reviews-list.routes';

export interface ReviewsListHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function ReviewsListHeader({
  count,
  total,
  loading,
  onRefresh,
}: ReviewsListHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${REVIEWS_LIST_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{REVIEWS_LIST_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {REVIEWS_LIST_FEATURE.domain} · {REVIEWS_LIST_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <FormsPanel label="Items" value={count} tone="info" />
        <FormsPanel label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${REVIEWS_LIST_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
