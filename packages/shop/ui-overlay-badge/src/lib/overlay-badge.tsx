import { i18nCurrency } from '@org/shop-util-i18n-currency';
import { asyncName } from '@org/shop-util-async-name';
import { CoreStat } from '@org/shop-ui-core-stat';
import type { OverlayBadgeProps } from './overlay-badge.types';
import { resolveOverlayBadgeStyle } from './overlay-badge-variants';

export function OverlayBadge({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-overlay-badge',
  onSelect,
  children,
}: OverlayBadgeProps) {
  const formatted = value === undefined ? '' : i18nCurrency(value);
  const style = resolveOverlayBadgeStyle(tone, size);
  const ariaLabel = asyncName(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-overlay-badge ui-element"
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
      <CoreStat label="Core Stat" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default OverlayBadge;
