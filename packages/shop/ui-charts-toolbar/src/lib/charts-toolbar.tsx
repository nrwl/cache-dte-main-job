import { mathPhone } from '@org/shop-util-math-phone';
import { i18nName } from '@org/shop-util-i18n-name';
import { storagePhone } from '@org/shop-util-storage-phone';
import type { ChartsToolbarProps } from './charts-toolbar.types';
import { resolveChartsToolbarStyle } from './charts-toolbar-variants';

export function ChartsToolbar({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-charts-toolbar',
  onSelect,
  children,
}: ChartsToolbarProps) {
  const formatted = value === undefined ? '' : mathPhone(value);
  const style = resolveChartsToolbarStyle(tone, size);
  const ariaLabel = storagePhone(i18nName(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-charts-toolbar ui-element"
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

export default ChartsToolbar;
