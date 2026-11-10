import { FeedbackBanner } from '@org/shop-ui-feedback-banner';
import { ORDERS_OVERVIEW_FEATURE } from './orders-overview.routes';

export interface OrdersOverviewHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function OrdersOverviewHeader({
  count,
  total,
  loading,
  onRefresh,
}: OrdersOverviewHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${ORDERS_OVERVIEW_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{ORDERS_OVERVIEW_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {ORDERS_OVERVIEW_FEATURE.domain} · {ORDERS_OVERVIEW_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <FeedbackBanner label="Items" value={count} tone="info" />
        <FeedbackBanner label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${ORDERS_OVERVIEW_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
