import { validatePhone } from '@org/shop-util-validate-phone';
import type { CommerceStatProps } from './commerce-stat.types';
import { resolveCommerceStatStyle } from './commerce-stat-variants';

export function CommerceStat({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-commerce-stat',
  onSelect,
  children,
}: CommerceStatProps) {
  const formatted = value === undefined ? '' : validatePhone(value);
  const style = resolveCommerceStatStyle(tone, size);
  const ariaLabel = label;

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-commerce-stat ui-element"
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

export default CommerceStat;
