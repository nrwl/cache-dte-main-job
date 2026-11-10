import { asyncNumber } from '@org/shop-util-async-number';
import { DataToolbar } from '@org/shop-ui-data-toolbar';
import type { CommercePanelProps } from './commerce-panel.types';
import { resolveCommercePanelStyle } from './commerce-panel-variants';

export function CommercePanel({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-commerce-panel',
  onSelect,
  children,
}: CommercePanelProps) {
  const formatted = value === undefined ? '' : asyncNumber(value);
  const style = resolveCommercePanelStyle(tone, size);
  const ariaLabel = label;

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-commerce-panel ui-element"
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
      <DataToolbar label="Data Toolbar" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default CommercePanel;
