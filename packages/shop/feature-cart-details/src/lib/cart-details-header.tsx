import { CoreBadge } from '@org/shop-ui-core-badge';
import { CART_DETAILS_FEATURE } from './cart-details.routes';

export interface CartDetailsHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function CartDetailsHeader({
  count,
  total,
  loading,
  onRefresh,
}: CartDetailsHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${CART_DETAILS_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{CART_DETAILS_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {CART_DETAILS_FEATURE.domain} · {CART_DETAILS_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <CoreBadge label="Items" value={count} tone="info" />
        <CoreBadge label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${CART_DETAILS_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
