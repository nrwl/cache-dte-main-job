import { formatCurrency } from '@org/shop-util-format-currency';
import { collectionPhone } from '@org/shop-util-collection-phone';
import { formatText } from '@org/shop-util-format-text';
import type { OverlayToolbarProps } from './overlay-toolbar.types';
import { resolveOverlayToolbarStyle } from './overlay-toolbar-variants';

export function OverlayToolbar({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-overlay-toolbar',
  onSelect,
  children,
}: OverlayToolbarProps) {
  const formatted = value === undefined ? '' : formatCurrency(value);
  const style = resolveOverlayToolbarStyle(tone, size);
  const ariaLabel = formatText(collectionPhone(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-overlay-toolbar ui-element"
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

export default OverlayToolbar;
