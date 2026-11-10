import { mathText } from '@org/shop-util-math-text';
import { asyncCurrency } from '@org/shop-util-async-currency';
import { CorePanel } from '@org/shop-ui-core-panel';
import type { LayoutStatProps } from './layout-stat.types';
import { resolveLayoutStatStyle } from './layout-stat-variants';

export function LayoutStat({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-layout-stat',
  onSelect,
  children,
}: LayoutStatProps) {
  const formatted = value === undefined ? '' : mathText(value);
  const style = resolveLayoutStatStyle(tone, size);
  const ariaLabel = asyncCurrency(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-layout-stat ui-element"
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
      <CorePanel label="Core Panel" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default LayoutStat;
