import { i18nText } from '@org/shop-util-i18n-text';
import { storageCurrency } from '@org/shop-util-storage-currency';
import { validateText } from '@org/shop-util-validate-text';
import { LayoutToolbar } from '@org/shop-ui-layout-toolbar';
import type { FeedbackToolbarProps } from './feedback-toolbar.types';
import { resolveFeedbackToolbarStyle } from './feedback-toolbar-variants';

export function FeedbackToolbar({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-feedback-toolbar',
  onSelect,
  children,
}: FeedbackToolbarProps) {
  const formatted = value === undefined ? '' : i18nText(value);
  const style = resolveFeedbackToolbarStyle(tone, size);
  const ariaLabel = validateText(storageCurrency(label));

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-feedback-toolbar ui-element"
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
      <LayoutToolbar
        label="Layout Toolbar"
        value={value}
        tone={tone}
        size="sm"
      />
    </div>
  );
}

export default FeedbackToolbar;
