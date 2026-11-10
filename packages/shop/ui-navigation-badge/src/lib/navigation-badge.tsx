import { formatNumber } from '@org/shop-util-format-number';
import { asyncName } from '@org/shop-util-async-name';
import { i18nNumber } from '@org/shop-util-i18n-number';
import { FeedbackBanner } from '@org/shop-ui-feedback-banner';
import type { NavigationBadgeProps } from './navigation-badge.types';
import { resolveNavigationBadgeStyle } from './navigation-badge-variants';

export function NavigationBadge({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-navigation-badge',
  onSelect,
  children,
}: NavigationBadgeProps) {
  const formatted = value === undefined ? '' : formatNumber(value);
  const style = resolveNavigationBadgeStyle(tone, size);
  const ariaLabel = i18nNumber(asyncName(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-navigation-badge ui-element"
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
      <FeedbackBanner
        label="Feedback Banner"
        value={value}
        tone={tone}
        size="sm"
      />
    </div>
  );
}

export default NavigationBadge;
