import { mathName } from '@org/shop-util-math-name';
import { validateNumber } from '@org/shop-util-validate-number';
import { storageText } from '@org/shop-util-storage-text';
import type { CoreBadgeProps } from './core-badge.types';
import { resolveCoreBadgeStyle } from './core-badge-variants';

export function CoreBadge({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-core-badge',
  onSelect,
  children,
}: CoreBadgeProps) {
  const formatted = value === undefined ? '' : mathName(value);
  const style = resolveCoreBadgeStyle(tone, size);
  const ariaLabel = storageText(validateNumber(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-core-badge ui-element"
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

export default CoreBadge;
