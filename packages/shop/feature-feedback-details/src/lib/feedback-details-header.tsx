import { MediaStat } from '@org/shop-ui-media-stat';
import { FEEDBACK_DETAILS_FEATURE } from './feedback-details.routes';

export interface FeedbackDetailsHeaderProps {
  count: number;
  total: number;
  loading: boolean;
  onRefresh: () => void;
}

export function FeedbackDetailsHeader({
  count,
  total,
  loading,
  onRefresh,
}: FeedbackDetailsHeaderProps) {
  return (
    <header
      className="feature-header"
      data-testid={`${FEEDBACK_DETAILS_FEATURE.testId}-header`}
    >
      <div>
        <h1 className="feature-title">{FEEDBACK_DETAILS_FEATURE.title}</h1>
        <p className="feature-subtitle">
          {FEEDBACK_DETAILS_FEATURE.domain} · {FEEDBACK_DETAILS_FEATURE.kind}
        </p>
      </div>
      <div className="feature-header-actions">
        <MediaStat label="Items" value={count} tone="info" />
        <MediaStat label="Total" value={total} tone="success" />
        <button
          type="button"
          className="feature-button"
          onClick={onRefresh}
          disabled={loading}
          data-testid={`${FEEDBACK_DETAILS_FEATURE.testId}-refresh`}
        >
          {loading ? 'Refreshing…' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
