import { formatName } from '@org/shop-util-format-name';
import { storageText } from '@org/shop-util-storage-text';
import { InputsPanel } from '@org/shop-ui-inputs-panel';
import type { MarketingToolbarProps } from './marketing-toolbar.types';
import { resolveMarketingToolbarStyle } from './marketing-toolbar-variants';

export function MarketingToolbar({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-marketing-toolbar',
  onSelect,
  children,
}: MarketingToolbarProps) {
  const formatted = value === undefined ? '' : formatName(value);
  const style = resolveMarketingToolbarStyle(tone, size);
  const ariaLabel = storageText(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-marketing-toolbar ui-element"
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
      <InputsPanel label="Inputs Panel" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default MarketingToolbar;
