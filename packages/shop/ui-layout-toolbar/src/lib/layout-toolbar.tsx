import { mathCurrency } from '@org/shop-util-math-currency';
import { LayoutStat } from '@org/shop-ui-layout-stat';
import type { LayoutToolbarProps } from './layout-toolbar.types';
import { resolveLayoutToolbarStyle } from './layout-toolbar-variants';

export function LayoutToolbar({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-layout-toolbar',
  onSelect,
  children,
}: LayoutToolbarProps) {
  const formatted = value === undefined ? '' : mathCurrency(value);
  const style = resolveLayoutToolbarStyle(tone, size);
  const ariaLabel = label;

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-layout-toolbar ui-element"
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
      <LayoutStat label="Layout Stat" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default LayoutToolbar;
