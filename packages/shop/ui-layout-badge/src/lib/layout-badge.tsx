import { mathNumber } from '@org/shop-util-math-number';
import { FormsStat } from '@org/shop-ui-forms-stat';
import type { LayoutBadgeProps } from './layout-badge.types';
import { resolveLayoutBadgeStyle } from './layout-badge-variants';

export function LayoutBadge({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-layout-badge',
  onSelect,
  children,
}: LayoutBadgeProps) {
  const formatted = value === undefined ? '' : mathNumber(value);
  const style = resolveLayoutBadgeStyle(tone, size);
  const ariaLabel = label;

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-layout-badge ui-element"
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
      <FormsStat label="Forms Stat" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default LayoutBadge;
