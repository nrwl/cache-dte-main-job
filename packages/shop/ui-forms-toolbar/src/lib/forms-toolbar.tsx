import { formatName } from '@org/shop-util-format-name';
import { validateName } from '@org/shop-util-validate-name';
import { FormsPanel } from '@org/shop-ui-forms-panel';
import type { FormsToolbarProps } from './forms-toolbar.types';
import { resolveFormsToolbarStyle } from './forms-toolbar-variants';

export function FormsToolbar({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-forms-toolbar',
  onSelect,
  children,
}: FormsToolbarProps) {
  const formatted = value === undefined ? '' : formatName(value);
  const style = resolveFormsToolbarStyle(tone, size);
  const ariaLabel = validateName(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-forms-toolbar ui-element"
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
      <FormsPanel label="Forms Panel" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default FormsToolbar;
