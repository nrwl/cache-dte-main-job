import { mathText } from '@org/shop-util-math-text';
import { asyncText } from '@org/shop-util-async-text';
import type { FormsBadgeProps } from './forms-badge.types';
import { resolveFormsBadgeStyle } from './forms-badge-variants';

export function FormsBadge({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-forms-badge',
  onSelect,
  children,
}: FormsBadgeProps) {
  const formatted = value === undefined ? '' : mathText(value);
  const style = resolveFormsBadgeStyle(tone, size);
  const ariaLabel = asyncText(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-forms-badge ui-element"
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

export default FormsBadge;
