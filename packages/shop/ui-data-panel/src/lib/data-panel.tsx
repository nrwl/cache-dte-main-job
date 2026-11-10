import { mathName } from '@org/shop-util-math-name';
import { validateText } from '@org/shop-util-validate-text';
import { asyncNumber } from '@org/shop-util-async-number';
import { NavigationPanel } from '@org/shop-ui-navigation-panel';
import type { DataPanelProps } from './data-panel.types';
import { resolveDataPanelStyle } from './data-panel-variants';

export function DataPanel({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-data-panel',
  onSelect,
  children,
}: DataPanelProps) {
  const formatted = value === undefined ? '' : mathName(value);
  const style = resolveDataPanelStyle(tone, size);
  const ariaLabel = asyncNumber(validateText(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-data-panel ui-element"
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
      <NavigationPanel
        label="Navigation Panel"
        value={value}
        tone={tone}
        size="sm"
      />
    </div>
  );
}

export default DataPanel;
