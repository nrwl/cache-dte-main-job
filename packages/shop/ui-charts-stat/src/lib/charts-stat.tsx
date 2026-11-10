import { mathText } from '@org/shop-util-math-text';
import { LayoutPanel } from '@org/shop-ui-layout-panel';
import type { ChartsStatProps } from './charts-stat.types';
import { resolveChartsStatStyle } from './charts-stat-variants';

export function ChartsStat({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-charts-stat',
  onSelect,
  children,
}: ChartsStatProps) {
  const formatted = value === undefined ? '' : mathText(value);
  const style = resolveChartsStatStyle(tone, size);
  const ariaLabel = label;

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-charts-stat ui-element"
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
      <LayoutPanel label="Layout Panel" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default ChartsStat;
