import { storageText } from '@org/shop-util-storage-text';
import { storageName } from '@org/shop-util-storage-name';
import type { FormsBannerProps } from './forms-banner.types';
import { resolveFormsBannerStyle } from './forms-banner-variants';

export function FormsBanner({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-forms-banner',
  onSelect,
  children,
}: FormsBannerProps) {
  const formatted = value === undefined ? '' : storageText(value);
  const style = resolveFormsBannerStyle(tone, size);
  const ariaLabel = storageName(label);

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-forms-banner ui-element"
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

export default FormsBanner;
