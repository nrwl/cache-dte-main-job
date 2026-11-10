import { mathCurrency } from '@org/shop-util-math-currency';
import { CoreBadge } from '@org/shop-ui-core-badge';
import type { CoreToolbarProps } from './core-toolbar.types';
import { resolveCoreToolbarStyle } from './core-toolbar-variants';

export function CoreToolbar({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-core-toolbar',
  onSelect,
  children,
}: CoreToolbarProps) {
  const formatted = value === undefined ? '' : mathCurrency(value);
  const style = resolveCoreToolbarStyle(tone, size);
  const ariaLabel = label;

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-core-toolbar ui-element"
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
      <CoreBadge label="Core Badge" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default CoreToolbar;
