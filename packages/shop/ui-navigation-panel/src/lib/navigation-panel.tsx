import { i18nNumber } from '@org/shop-util-i18n-number';
import { CoreToolbar } from '@org/shop-ui-core-toolbar';
import type { NavigationPanelProps } from './navigation-panel.types';
import { resolveNavigationPanelStyle } from './navigation-panel-variants';

export function NavigationPanel({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-navigation-panel',
  onSelect,
  children,
}: NavigationPanelProps) {
  const formatted = value === undefined ? '' : i18nNumber(value);
  const style = resolveNavigationPanelStyle(tone, size);
  const ariaLabel = label;

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-navigation-panel ui-element"
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
      <CoreToolbar label="Core Toolbar" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default NavigationPanel;
