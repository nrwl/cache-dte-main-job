import { formatCurrency } from '@org/shop-util-format-currency';
import { i18nName } from '@org/shop-util-i18n-name';
import { collectionText } from '@org/shop-util-collection-text';
import { CorePanel } from '@org/shop-ui-core-panel';
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
  const formatted = value === undefined ? '' : formatCurrency(value);
  const style = resolveChartsBannerStyle(tone, size);
  const ariaLabel = collectionText(i18nName(label));

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
      <CorePanel label="Core Panel" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default ChartsBanner;
