import { asyncPhone } from '@org/shop-util-async-phone';
import { validateNumber } from '@org/shop-util-validate-number';
import { mathName } from '@org/shop-util-math-name';
import type { InputsBadgeProps } from './inputs-badge.types';
import { resolveInputsBadgeStyle } from './inputs-badge-variants';

export function InputsBadge({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-inputs-badge',
  onSelect,
  children,
}: InputsBadgeProps) {
  const formatted = value === undefined ? '' : asyncPhone(value);
  const style = resolveInputsBadgeStyle(tone, size);
  const ariaLabel = mathName(validateNumber(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-inputs-badge ui-element"
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

export default InputsBadge;
