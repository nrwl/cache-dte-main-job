import { asyncText } from '@org/shop-util-async-text';
import { validateText } from '@org/shop-util-validate-text';
import type { MediaToolbarProps } from './media-toolbar.types';
import { resolveMediaToolbarStyle } from './media-toolbar-variants';

export function MediaToolbar({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-media-toolbar',
  onSelect,
  children,
}: MediaToolbarProps) {
  const formatted = value === undefined ? '' : asyncText(value);
  const style = resolveMediaToolbarStyle(tone, size);
  const ariaLabel = validateText(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-media-toolbar ui-element"
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

export default MediaToolbar;
