import { asyncNumber } from '@org/shop-util-async-number';
import { mathText } from '@org/shop-util-math-text';
import { validatePhone } from '@org/shop-util-validate-phone';
import type { NavigationBannerProps } from './navigation-banner.types';
import { resolveNavigationBannerStyle } from './navigation-banner-variants';

export function NavigationBanner({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-navigation-banner',
  onSelect,
  children,
}: NavigationBannerProps) {
  const formatted = value === undefined ? '' : asyncNumber(value);
  const style = resolveNavigationBannerStyle(tone, size);
  const ariaLabel = validatePhone(mathText(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-navigation-banner ui-element"
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

export default NavigationBanner;
