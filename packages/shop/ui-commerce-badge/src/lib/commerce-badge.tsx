import { validateText } from '@org/shop-util-validate-text';
import { formatCurrency } from '@org/shop-util-format-currency';
import { FeedbackBanner } from '@org/shop-ui-feedback-banner';
import type { CommerceBadgeProps } from './commerce-badge.types';
import { resolveCommerceBadgeStyle } from './commerce-badge-variants';

export function CommerceBadge({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-commerce-badge',
  onSelect,
  children,
}: CommerceBadgeProps) {
  const formatted = value === undefined ? '' : validateText(value);
  const style = resolveCommerceBadgeStyle(tone, size);
  const ariaLabel = formatCurrency(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-commerce-badge ui-element"
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

export default CommerceBadge;
