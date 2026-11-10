import { validatePhone } from '@org/shop-util-validate-phone';
import type { NavigationToolbarProps } from './navigation-toolbar.types';
import { resolveNavigationToolbarStyle } from './navigation-toolbar-variants';

export function NavigationToolbar({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-navigation-toolbar',
  onSelect,
  children,
}: NavigationToolbarProps) {
  const formatted = value === undefined ? '' : validatePhone(value);
  const style = resolveNavigationToolbarStyle(tone, size);
  const ariaLabel = label;

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-navigation-toolbar ui-element"
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

export default NavigationToolbar;
