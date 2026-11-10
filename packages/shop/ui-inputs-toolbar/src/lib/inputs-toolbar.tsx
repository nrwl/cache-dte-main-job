import { asyncPhone } from '@org/shop-util-async-phone';
import { formatNumber } from '@org/shop-util-format-number';
import { CorePanel } from '@org/shop-ui-core-panel';
import type { InputsToolbarProps } from './inputs-toolbar.types';
import { resolveInputsToolbarStyle } from './inputs-toolbar-variants';

export function InputsToolbar({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-inputs-toolbar',
  onSelect,
  children,
}: InputsToolbarProps) {
  const formatted = value === undefined ? '' : asyncPhone(value);
  const style = resolveInputsToolbarStyle(tone, size);
  const ariaLabel = formatNumber(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-inputs-toolbar ui-element"
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

export default InputsToolbar;
