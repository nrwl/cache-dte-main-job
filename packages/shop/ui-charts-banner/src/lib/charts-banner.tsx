import { formatPhone } from '@org/shop-util-format-phone';
import { asyncName } from '@org/shop-util-async-name';
import type { ChartsBannerProps } from './charts-banner.types';
import { resolveChartsBannerStyle } from './charts-banner-variants';

export function ChartsBanner({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-charts-banner',
  onSelect,
  children,
}: ChartsBannerProps) {
  const formatted = value === undefined ? '' : formatPhone(value);
  const style = resolveChartsBannerStyle(tone, size);
  const ariaLabel = asyncName(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-charts-banner ui-element"
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

export default ChartsBanner;
