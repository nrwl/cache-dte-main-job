import { mathCurrency } from '@org/shop-util-math-currency';
import { asyncText } from '@org/shop-util-async-text';
import { asyncPhone } from '@org/shop-util-async-phone';
import { LayoutPanel } from '@org/shop-ui-layout-panel';
import type { OverlayBannerProps } from './overlay-banner.types';
import { resolveOverlayBannerStyle } from './overlay-banner-variants';

export function OverlayBanner({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-overlay-banner',
  onSelect,
  children,
}: OverlayBannerProps) {
  const formatted = value === undefined ? '' : mathCurrency(value);
  const style = resolveOverlayBannerStyle(tone, size);
  const ariaLabel = asyncPhone(asyncText(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-overlay-banner ui-element"
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
      <LayoutPanel label="Layout Panel" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default OverlayBanner;
