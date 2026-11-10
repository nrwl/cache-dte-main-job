import { formatName } from '@org/shop-util-format-name';
import { validateText } from '@org/shop-util-validate-text';
import { CoreStat } from '@org/shop-ui-core-stat';
import type { OverlayPanelProps } from './overlay-panel.types';
import { resolveOverlayPanelStyle } from './overlay-panel-variants';

export function OverlayPanel({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-overlay-panel',
  onSelect,
  children,
}: OverlayPanelProps) {
  const formatted = value === undefined ? '' : formatName(value);
  const style = resolveOverlayPanelStyle(tone, size);
  const ariaLabel = validateText(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-overlay-panel ui-element"
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
      <CoreStat label="Core Stat" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default OverlayPanel;
