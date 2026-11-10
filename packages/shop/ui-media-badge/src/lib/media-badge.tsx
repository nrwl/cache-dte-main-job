import { collectionNumber } from '@org/shop-util-collection-number';
import { mathText } from '@org/shop-util-math-text';
import { CorePanel } from '@org/shop-ui-core-panel';
import type { MediaBadgeProps } from './media-badge.types';
import { resolveMediaBadgeStyle } from './media-badge-variants';

export function MediaBadge({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-media-badge',
  onSelect,
  children,
}: MediaBadgeProps) {
  const formatted = value === undefined ? '' : collectionNumber(value);
  const style = resolveMediaBadgeStyle(tone, size);
  const ariaLabel = mathText(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-media-badge ui-element"
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
      <CorePanel label="Core Panel" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default MediaBadge;
