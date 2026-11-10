import { validateNumber } from '@org/shop-util-validate-number';
import { storageName } from '@org/shop-util-storage-name';
import { collectionName } from '@org/shop-util-collection-name';
import type { FeedbackStatProps } from './feedback-stat.types';
import { resolveFeedbackStatStyle } from './feedback-stat-variants';

export function FeedbackStat({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-feedback-stat',
  onSelect,
  children,
}: FeedbackStatProps) {
  const formatted = value === undefined ? '' : validateNumber(value);
  const style = resolveFeedbackStatStyle(tone, size);
  const ariaLabel = collectionName(storageName(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-feedback-stat ui-element"
      data-testid={testId}
      data-tone={tone}
      data-size={size}
      style={style}
      aria-label={ariaLabel}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={onSelect ? handleClick : undefined}
    >
      <span className="ui-label">{label}</span>
      {formatted ? <span className="ui-value">{formatted}</span> : null}
      {children ? <div className="ui-content">{children}</div> : null}
    </div>
  );
}

export default FeedbackStat;
