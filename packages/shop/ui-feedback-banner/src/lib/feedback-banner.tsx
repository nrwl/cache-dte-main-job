import { formatPhone } from '@org/shop-util-format-phone';
import type { FeedbackBannerProps } from './feedback-banner.types';
import { resolveFeedbackBannerStyle } from './feedback-banner-variants';

export function FeedbackBanner({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-feedback-banner',
  onSelect,
  children,
}: FeedbackBannerProps) {
  const formatted = value === undefined ? '' : formatPhone(value);
  const style = resolveFeedbackBannerStyle(tone, size);
  const ariaLabel = label;

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-feedback-banner ui-element"
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

export default FeedbackBanner;
