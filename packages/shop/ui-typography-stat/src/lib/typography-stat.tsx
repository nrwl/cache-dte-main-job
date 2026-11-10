import { formatCurrency } from '@org/shop-util-format-currency';
import { mathText } from '@org/shop-util-math-text';
import { validateName } from '@org/shop-util-validate-name';
import { OverlayBanner } from '@org/shop-ui-overlay-banner';
import type { TypographyStatProps } from './typography-stat.types';
import { resolveTypographyStatStyle } from './typography-stat-variants';

export function TypographyStat({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-typography-stat',
  onSelect,
  children,
}: TypographyStatProps) {
  const formatted = value === undefined ? '' : formatCurrency(value);
  const style = resolveTypographyStatStyle(tone, size);
  const ariaLabel = validateName(mathText(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-typography-stat ui-element"
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
      <OverlayBanner
        label="Overlay Banner"
        value={value}
        tone={tone}
        size="sm"
      />
    </div>
  );
}

export default TypographyStat;
