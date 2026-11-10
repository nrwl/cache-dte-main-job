import { mathName } from '@org/shop-util-math-name';
import { formatNumber } from '@org/shop-util-format-number';
import { CoreToolbar } from '@org/shop-ui-core-toolbar';
import type { FormsPanelProps } from './forms-panel.types';
import { resolveFormsPanelStyle } from './forms-panel-variants';

export function FormsPanel({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-forms-panel',
  onSelect,
  children,
}: FormsPanelProps) {
  const formatted = value === undefined ? '' : mathName(value);
  const style = resolveFormsPanelStyle(tone, size);
  const ariaLabel = formatNumber(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-forms-panel ui-element"
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

export default FormsPanel;
