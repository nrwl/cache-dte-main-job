import { MediaToolbar } from '@org/shop-ui-media-toolbar';
import { PREORDERS_LIST_FEATURE } from './preorders-list.routes';

export interface PreordersListHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function PreordersListHeader({
  count,
  total,
  loading,
  onRefresh,
}: PreordersListHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${PREORDERS_LIST_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{PREORDERS_LIST_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {PREORDERS_LIST_FEATURE.domain} · {PREORDERS_LIST_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <MediaToolbar label="Items" value={count} tone="info" />
        <MediaToolbar label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${PREORDERS_LIST_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
