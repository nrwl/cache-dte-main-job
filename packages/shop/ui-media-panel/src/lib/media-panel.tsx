import { mathCurrency } from '@org/shop-util-math-currency';
import { storageCurrency } from '@org/shop-util-storage-currency';
import { DataPanel } from '@org/shop-ui-data-panel';
import type { MediaPanelProps } from './media-panel.types';
import { resolveMediaPanelStyle } from './media-panel-variants';

export function MediaPanel({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-media-panel',
  onSelect,
  children,
}: MediaPanelProps) {
  const formatted = value === undefined ? '' : mathCurrency(value);
  const style = resolveMediaPanelStyle(tone, size);
  const ariaLabel = storageCurrency(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-media-panel ui-element"
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
      <DataPanel label="Data Panel" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default MediaPanel;
