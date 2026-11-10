import { i18nNumber } from '@org/shop-util-i18n-number';
import { collectionText } from '@org/shop-util-collection-text';
import { mathName } from '@org/shop-util-math-name';
import { CoreBadge } from '@org/shop-ui-core-badge';
import type { MarketingBadgeProps } from './marketing-badge.types';
import { resolveMarketingBadgeStyle } from './marketing-badge-variants';

export function MarketingBadge({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-marketing-badge',
  onSelect,
  children,
}: MarketingBadgeProps) {
  const formatted = value === undefined ? '' : i18nNumber(value);
  const style = resolveMarketingBadgeStyle(tone, size);
  const ariaLabel = mathName(collectionText(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-marketing-badge ui-element"
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
      <CoreBadge label="Core Badge" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default MarketingBadge;
