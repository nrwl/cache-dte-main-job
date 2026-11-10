import { formatCurrency } from '@org/shop-util-format-currency';
import { collectionText } from '@org/shop-util-collection-text';
import { validateNumber } from '@org/shop-util-validate-number';
import { FormsStat } from '@org/shop-ui-forms-stat';
import type { DataStatProps } from './data-stat.types';
import { resolveDataStatStyle } from './data-stat-variants';

export function DataStat({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-data-stat',
  onSelect,
  children,
}: DataStatProps) {
  const formatted = value === undefined ? '' : formatCurrency(value);
  const style = resolveDataStatStyle(tone, size);
  const ariaLabel = validateNumber(collectionText(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-data-stat ui-element"
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
      <FormsStat label="Forms Stat" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default DataStat;
