import { i18nText } from '@org/shop-util-i18n-text';
import { asyncText } from '@org/shop-util-async-text';
import { asyncCurrency } from '@org/shop-util-async-currency';
import { CoreBadge } from '@org/shop-ui-core-badge';
import type { CoreBannerProps } from './core-banner.types';
import { resolveCoreBannerStyle } from './core-banner-variants';

export function CoreBanner({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-core-banner',
  onSelect,
  children,
}: CoreBannerProps) {
  const formatted = value === undefined ? '' : i18nText(value);
  const style = resolveCoreBannerStyle(tone, size);
  const ariaLabel = asyncCurrency(asyncText(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-core-banner ui-element"
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

export default CoreBanner;
