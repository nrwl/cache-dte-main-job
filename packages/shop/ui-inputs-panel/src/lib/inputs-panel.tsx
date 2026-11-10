import { formatNumber } from '@org/shop-util-format-number';
import { mathPhone } from '@org/shop-util-math-phone';
import { LayoutBadge } from '@org/shop-ui-layout-badge';
import type { InputsPanelProps } from './inputs-panel.types';
import { resolveInputsPanelStyle } from './inputs-panel-variants';

export function InputsPanel({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-inputs-panel',
  onSelect,
  children,
}: InputsPanelProps) {
  const formatted = value === undefined ? '' : formatNumber(value);
  const style = resolveInputsPanelStyle(tone, size);
  const ariaLabel = mathPhone(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-inputs-panel ui-element"
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
      <LayoutBadge label="Layout Badge" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default InputsPanel;
