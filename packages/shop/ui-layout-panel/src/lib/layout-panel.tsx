import { i18nNumber } from '@org/shop-util-i18n-number';
import { collectionPhone } from '@org/shop-util-collection-phone';
import { i18nText } from '@org/shop-util-i18n-text';
import { CoreToolbar } from '@org/shop-ui-core-toolbar';
import type { LayoutPanelProps } from './layout-panel.types';
import { resolveLayoutPanelStyle } from './layout-panel-variants';

export function LayoutPanel({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-layout-panel',
  onSelect,
  children,
}: LayoutPanelProps) {
  const formatted = value === undefined ? '' : i18nNumber(value);
  const style = resolveLayoutPanelStyle(tone, size);
  const ariaLabel = i18nText(collectionPhone(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-layout-panel ui-element"
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

export default LayoutPanel;
