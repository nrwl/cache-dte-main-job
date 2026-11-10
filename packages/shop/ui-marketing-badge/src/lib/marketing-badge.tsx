import { i18nNumber } from '@org/shop-util-i18n-number';
import { storageName } from '@org/shop-util-storage-name';
import { validateText } from '@org/shop-util-validate-text';
import { MediaStat } from '@org/shop-ui-media-stat';
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
  const ariaLabel = validateText(storageName(label));

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
      <MediaStat label="Media Stat" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default MarketingBadge;
