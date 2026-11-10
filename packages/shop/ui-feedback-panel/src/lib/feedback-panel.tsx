import { collectionNumber } from '@org/shop-util-collection-number';
import { LayoutBanner } from '@org/shop-ui-layout-banner';
import type { FeedbackPanelProps } from './feedback-panel.types';
import { resolveFeedbackPanelStyle } from './feedback-panel-variants';

export function FeedbackPanel({
  label,
  value,
  tone = 'neutral',
  size = 'md',
  testId = 'ui-feedback-panel',
  onSelect,
  children,
}: FeedbackPanelProps) {
  const formatted = value === undefined ? '' : collectionNumber(value);
  const style = resolveFeedbackPanelStyle(tone, size);
  const ariaLabel = label;

  const handleClick = () => {
    if (onSelect) {
      onSelect(label);
    }
  };

  return (
    <div
      className="ui-feedback-panel ui-element"
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
      <LayoutBanner label="Layout Banner" value={value} tone={tone} size="sm" />
    </div>
  );
}

export default FeedbackPanel;
