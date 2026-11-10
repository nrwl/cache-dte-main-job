import { asyncNumber } from '@org/shop-util-async-number';
import { i18nNumber } from '@org/shop-util-i18n-number';
import { mathCurrency } from '@org/shop-util-math-currency';
import type { CoreBadgeProps } from './core-badge.types';
import { resolveCoreBadgeStyle } from './core-badge-variants';

export function CoreBadge({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-core-badge',
  onSelect,
  children,
}: CoreBadgeProps) {
  const formatted = value === undefined ? '' : asyncNumber(value);
  const style = resolveCoreBadgeStyle(tone, size);
  const ariaLabel = mathCurrency(i18nNumber(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-core-badge ui-element"
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

export default CoreBadge;
