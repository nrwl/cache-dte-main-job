import { i18nPhone } from '@org/shop-util-i18n-phone';
import { MarketingBanner } from '@org/shop-ui-marketing-banner';
import type { MarketingStatProps } from './marketing-stat.types';
import { resolveMarketingStatStyle } from './marketing-stat-variants';

export function MarketingStat({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-marketing-stat',
  onSelect,
  children,
}: MarketingStatProps) {
  const formatted = value === undefined ? '' : i18nPhone(value);
  const style = resolveMarketingStatStyle(tone, size);
  const ariaLabel = label;

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-marketing-stat ui-element"
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
      <MarketingBanner
        label="Marketing Banner"
        value={value}
        tone={tone}
        size="sm"
      />
    </div>
  );
}

export default MarketingStat;
