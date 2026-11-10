import { ChartsPanel } from '@org/shop-ui-charts-panel';
import { CHECKOUT_OVERVIEW_FEATURE } from './checkout-overview.routes';

export interface CheckoutOverviewHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function CheckoutOverviewHeader({
  count,
  total,
  loading,
  onRefresh,
}: CheckoutOverviewHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${CHECKOUT_OVERVIEW_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{CHECKOUT_OVERVIEW_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {CHECKOUT_OVERVIEW_FEATURE.domain} · {CHECKOUT_OVERVIEW_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <ChartsPanel label="Items" value={count} tone="info" />
        <ChartsPanel label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${CHECKOUT_OVERVIEW_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
