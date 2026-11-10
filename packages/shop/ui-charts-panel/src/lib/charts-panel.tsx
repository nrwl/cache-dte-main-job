import { i18nPhone } from '@org/shop-util-i18n-phone';
import { i18nName } from '@org/shop-util-i18n-name';
import { mathNumber } from '@org/shop-util-math-number';
import { OverlayBadge } from '@org/shop-ui-overlay-badge';
import type { ChartsPanelProps } from './charts-panel.types';
import { resolveChartsPanelStyle } from './charts-panel-variants';

export function ChartsPanel({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-charts-panel',
  onSelect,
  children,
}: ChartsPanelProps) {
  const formatted = value === undefined ? '' : i18nPhone(value);
  const style = resolveChartsPanelStyle(tone, size);
  const ariaLabel = mathNumber(i18nName(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-charts-panel ui-element"
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
      <OverlayBadge label="Overlay Badge" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default ChartsPanel;
